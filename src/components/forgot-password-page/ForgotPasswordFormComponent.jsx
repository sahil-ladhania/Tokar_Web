import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema } from '../../utils/DataValidation';
import { FormInput } from '../common/FormInputComponent';
import { authFail, authStart, authSuccess } from '../../redux/slices/userSlice';
import { forgotPassword } from '../../services/authServices';
import {toast} from 'sonner';

const ForgotPasswordFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {register , handleSubmit , formState: {errors} , reset} = useForm({resolver: zodResolver(forgotPasswordSchema)});

  const onSubmit = async(formData) => {
    try {
      dispatch(authStart());
      const response = await forgotPassword({formData});
      toast.success("Successfully Sent the Reset Link to your Registered Email !!!");
      reset();
    }
    catch (error) {
      console.log("Error Sending Email To User : " , error.message);
      toast.error(error.message);
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
      {/* Email Input */}
      <FormInput label="Registered Email" id="email" type="email" register={register} error={errors.email} />

      {/* Submit Button */}
      <Button type="submit" className="w-full">
        Send Reset Link
      </Button>
    </motion.form>
  )
}

export default ForgotPasswordFormComponent