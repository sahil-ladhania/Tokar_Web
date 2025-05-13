import z from 'zod';

const passwordRegex = {
    specialChar: /[^A-Za-z0-9]/g,
    uppercase: /[A-Z]/g,
    digit: /\d/g,
};

export const passwordSchema = z
    .string()
    .trim()
    .min(8 , "Password must be at least 8 characters !!!")
    .max(12 , "Password must be at most 12 characters !!!")
    .refine(val => (val.match(passwordRegex.specialChar) || []).length >= 1 , "At least 1 special character required !!!")
    .refine(val => (val.match(passwordRegex.specialChar) || []).length <= 3 , "Max 3 special characters allowed !!!")
    .refine(val => (val.match(passwordRegex.uppercase) || []).length >= 1 , "At least 1 uppercase letter required !!!")
    .refine(val => (val.match(passwordRegex.uppercase) || []).length <= 3 , "Max 3 uppercase letters allowed !!!")
    .refine(val => (val.match(passwordRegex.digit) || []).length >= 1 , "At least 1 number required !!!")
    .refine(val => (val.match(passwordRegex.digit) || []).length <= 3 , "Max 3 numbers allowed !!!");

export const signupSchema = z.object({
    firstName: z.string().trim().min(2 , "First Name should contain atleast 2 characters !!!").max(30 , "First Name can contain at most 30 characters !!!"),
    lastName: z.string().trim().min(2 , "Last Name should contain atleast 2 characters !!!").max(30 , "Last Name can contain at most 30 characters !!!"),
    email: z.string().trim().email("Email Format is Invalid !!!"),
    phone: z.string().trim().length(10, "Phone number must be exactly 10 digits !!!").regex(/^\d+$/, "Phone number must contain only digits !!!"),
    password: passwordSchema,
});

export const loginSchema = z.object({
    email: z.string().trim().email("Email Format is Invalid !!!"),
    password: passwordSchema,
});

export const forgotPasswordSchema = z.object({
    email: z.string().trim().email("Email Format is Invalid !!!"),
});

export const resetPasswordSchema = z.object({
    newPassword:     passwordSchema,
    confirmPassword: passwordSchema,
})
.refine(b => b.newPassword === b.confirmPassword, {
    message: "New Password and Confirm Password do not match!",
    path:    ["confirmPassword"],
});

export const changePasswordSchema = z.object({
    currentPassword: passwordSchema,
    newPassword:     passwordSchema,
    confirmPassword: passwordSchema,
})
.refine(b => b.newPassword === b.confirmPassword, {
    message: "New Password and Confirm Password do not match!",
    path:    ["confirmPassword"],
})
.refine(b => b.newPassword !== b.currentPassword, {
    message: "New Password must be different from Current Password!",
    path:    ["newPassword"],
});