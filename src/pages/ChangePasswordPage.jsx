import React from 'react'
import ChangePasswordImageComponent from '../components/change-password-page/ChangePasswordImageComponent'
import ChangePasswordFormComponent from '../components/change-password-page/ChangePasswordFormComponent'

const ChangePasswordPage = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <div className="flex-1">
          <ChangePasswordImageComponent />
        </div>

        {/* Right: Form */}
        <div className="flex-1 max-w-md w-full">
          <ChangePasswordFormComponent />
        </div>
      </div>
    </div>
  )
}

export default ChangePasswordPage