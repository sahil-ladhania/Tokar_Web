import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../utils/DataValidation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authFail, authStart, authSuccess, setToken } from '../../redux/slices/userSlice';
import { FormInput } from '../common/FormInputComponent.jsx';
import { login } from '../../services/authServices';

const LoginFormComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {register , handleSubmit , formState: {errors} , reset} = useForm({resolver: zodResolver(loginSchema)});

  const onSubmit = async(formData) => {
    try {
      dispatch(authStart());
      const response = await login({formData});
      dispatch(authSuccess(response));
      dispatch(setToken(response.token));
      setTimeout(() => {
        navigate('/');
      }, 1000);
      reset();
    }
    catch (error) {
      console.log("Error Logging In : " , error.message);
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
      {/* 📧 Email */}
      <FormInput label="Email" id="email" type="email" register={register} error={errors.email} />

      {/* 🔒 Password */}
      <FormInput label="Password" id="password" type="password" register={register} error={errors.password} />

      {/* Submit */}
      <Button type="submit" className="w-full">
        Log In
      </Button>

      {/* Extra Auth Links */}
      <div className="pt-4 border-t border-slate-600 text-center space-y-2">
        <p className="text-sm text-slate-300">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-emerald-400 hover:underline">
            Sign Up
          </a>
        </p>
        <p className="text-sm text-slate-300">
          <a href="/forgot-password" className="text-emerald-400 hover:underline">
            Forgot Password?
          </a>
        </p>
        <p className="text-sm text-slate-300">
          <a href="/change-password" className="text-emerald-400 hover:underline">
            Change Password
          </a>
        </p>
      </div>
    </motion.form>
  );
};

export default LoginFormComponent;