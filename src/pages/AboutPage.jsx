import React from 'react'
import AboutImageComponent from '../components/about-page/AboutImageComponent'
import AboutContentComponent from '../components/about-page/AboutContentComponent'

const AboutPage = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <AboutImageComponent />
        </div>
        <div className="flex-1">
          <AboutContentComponent />
        </div>
      </div>
    </div>
  )
}

export default AboutPage