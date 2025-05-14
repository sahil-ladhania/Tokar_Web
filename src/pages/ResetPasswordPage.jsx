import React from 'react'
import ResetPasswordImageComponent from '../components/reset-password-page/ResetPasswordImageComponent'
import ResetPasswordFormComponent from '../components/reset-password-page/ResetPasswordFormComponent'

const ResetPasswordPage = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <div className="flex-1">
          <ResetPasswordImageComponent />
        </div>

        {/* Right: Form */}
        <div className="flex-1 max-w-md w-full">
          <ResetPasswordFormComponent />
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage