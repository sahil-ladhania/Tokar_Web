import React from 'react'
import { useSearchParams } from "react-router-dom";
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema } from '../../utils/DataValidation'
import { resetPassword } from '../../services/authServices';
import { authFail, authStart } from '../../redux/slices/userSlice';
import { FormInput } from '../common/FormInputComponent';
import {toast} from 'sonner';

const ResetPasswordFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const {register , handleSubmit , formState: {errors} , reset} = useForm({resolver: zodResolver(resetPasswordSchema)});

  const onSubmit = async(formData) => {
    try {
      dispatch(authStart());

      const response = await resetPassword({token , formData});
      toast.success("Successfully Reset Your Password !!!");
      console.log(response);

      setTimeout(() => {
        navigate('/login');
      }, 1000);
      reset();
    }
    catch (error) {
      console.log("Signup Failed : " , error.message);
      toast.error(error.message);
      dispatch(authFail(error.message));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-800 p-8 rounded-lg shadow-xl space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* New Password */}
      <FormInput label="New Password" id="newPassword" type="password" register={register} error={errors.newPassword} />
      
      {/* Confirm Password */}
      <FormInput label="Confirm Password" id="confirmPassword" type="password" register={register} error={errors.confirmPassword} />

      {/* Submit */}
      <Button type="submit" className="w-full">
        Reset Password
      </Button>
    </motion.form>
  )
}

export default ResetPasswordFormComponent