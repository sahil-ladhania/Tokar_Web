import React from 'react'
import NotFoundImageComponent from '../components/not-found-page/NotFoundImageComponent'
import NotFoundContentComponent from '../components/not-found-page/NotFoundContentComponent'

const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
    <NotFoundImageComponent />
    <NotFoundContentComponent />
  </div>
)

export default NotFoundPage