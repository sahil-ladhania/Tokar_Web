import React from 'react'
import ForgotPasswordImageComponent from '../components/forgot-password-page/ForgotPasswordImageComponent'
import ForgotPasswordFormComponent from '../components/forgot-password-page/ForgotPasswordFormComponent'

const ForgotPasswordPage = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <div className="flex-1">
          <ForgotPasswordImageComponent />
        </div>

        {/* Right: Form */}
        <div className="flex-1 max-w-md w-full">
          <ForgotPasswordFormComponent />
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage