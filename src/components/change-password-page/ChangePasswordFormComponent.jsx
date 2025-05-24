import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FormInput } from '../common/FormInputComponent';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePasswordSchema } from '../../utils/DataValidation';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authFail, authStart } from '../../redux/slices/userSlice';
import { changePassword } from '../../services/authServices';
import {toast} from 'sonner';

const ChangePasswordFormComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register , handleSubmit , formState: {errors} , reset} = useForm({resolver: zodResolver(changePasswordSchema)});

  const onSubmit = async(formData) => {
    try {
      dispatch(authStart());

      const response = await changePassword({formData});
      toast.success("Successfully Changed Password !!!");
      console.log(response);

      setTimeout(() => {
        navigate('/login');
      }, 1000);
      reset();
    }
    catch (error) {
      console.log("Error Changing Password : " , error.message);
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
      {/* Current Password */}
      <FormInput label="Current Password" id="currentPassword" type="password" register={register} error={errors.currentPassword} />

      {/* New Password */}
      <FormInput label="New Password" id="newPassword" type="password" register={register} error={errors.newPassword} />

      {/* Confirm Password */}
      <FormInput label="Confirm Password" id="confirmPassword" type="password" register={register} error={errors.confirmPassword} />

      {/* Submit */}
      <Button type="submit" className="w-full">
        Change Password
      </Button>

      {/* Extra Auth Links */}
      <div className="pt-4 border-t border-slate-600 text-center space-y-2">
        <p className="text-sm text-slate-300">
          Remembered your password?{' '}
          <a href="/login" className="text-emerald-400 hover:underline">
            Log In
          </a>
        </p>
        <p className="text-sm text-slate-300">
          Need a new account?{' '}
          <a href="/signup" className="text-emerald-400 hover:underline">
            Sign Up
          </a>
        </p>
        <p className="text-sm text-slate-300">
          Forgot your password?{' '}
          <a href="/forgot-password" className="text-emerald-400 hover:underline">
            Reset Here
          </a>
        </p>
      </div>
    </motion.form>
  );
};

export default ChangePasswordFormComponent;