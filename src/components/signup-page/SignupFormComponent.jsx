import React from 'react';
import { signupSchema } from '../../utils/DataValidation.js';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authFail, authStart } from '../../redux/slices/userSlice.js';
import { signup } from '../../services/authServices.js';
import { FormInput } from '../common/FormInputComponent.jsx';
import { useNavigate } from 'react-router-dom';

const SignupFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {register , handleSubmit , formState: {errors} , reset} = useForm({resolver: zodResolver(signupSchema)});

  const onSubmit = async(formData) => {
    try {
      dispatch(authStart());
      const response = await signup({formData});
      setTimeout(() => {
        navigate('/login');
      }, 1000);
      reset();
    }
    catch (error) {
      console.log("Signup Failed : " , error.message);
      dispatch(authFail(error.message));
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-800 p-8 rounded-lg shadow-xl space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* 🔤 First & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput label="First Name" id="firstName" register={register} error={errors.firstName} />
        <FormInput label="Last Name" id="lastName" register={register} error={errors.lastName} />
      </div>

      {/* 📧 Email */}
      <FormInput label="Email" id="email" type="email" register={register} error={errors.email} />

      {/* 📞 Phone */}
      <FormInput label="Phone" id="phone" register={register} error={errors.phone} />

      {/* 🔒 Password */}
      <FormInput label="Password" id="password" type="password" register={register} error={errors.password} />

      {/* 🚀 Submit */}
      <Button type="submit" className="w-full">Sign Up</Button>

      {/* 🔗 Links */}
      <div className="pt-4 border-t border-slate-600 text-center space-y-2 text-sm text-slate-300">
        <p>Already have an account? <a href="/login" className="text-emerald-400 hover:underline">Login</a></p>
        <p><a href="/forgot-password" className="text-emerald-400 hover:underline">Forgot Password?</a></p>
        <p><a href="/change-password" className="text-emerald-400 hover:underline">Change Password</a></p>
      </div>
    </motion.form>
  );
};

export default SignupFormComponent;