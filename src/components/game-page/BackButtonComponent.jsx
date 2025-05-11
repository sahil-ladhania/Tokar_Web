import React from 'react'
import { ArrowLeftCircle } from 'lucide-react'

const BackButtonComponent = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-800 p-2 rounded-full shadow-lg"
  >
    <ArrowLeftCircle size={28} className="text-white" />
  </button>
)

export default BackButtonComponent;