import React from 'react'
import SignupImageComponent from '../components/signup-page/SignupImageComponent'
import SignupFormComponent from '../components/signup-page/SignupFormComponent'

const SignupPage = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <SignupImageComponent />
        </div>
        <div className="flex-1">
          <SignupFormComponent />
        </div>
      </div>
    </div>
  )
}

export default SignupPage