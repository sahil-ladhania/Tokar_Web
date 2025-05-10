import React from 'react'
import LoginImageComponent from '../components/login-page/LoginImageComponent'
import LoginFormComponent from '../components/login-page/LoginFormComponent'

const LoginPage = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Illustration */}
        <div className="flex-1">
          <LoginImageComponent />
        </div>

        {/* Right: Form */}
        <div className="flex-1 max-w-md w-full">
          <LoginFormComponent />
        </div>
      </div>
    </div>
  )
}

export default LoginPage