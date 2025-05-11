import React from 'react'

const PlayerLabelComponent = ({ label, className }) => (
  <div className={`absolute ${className} px-2 py-1 bg-slate-900 rounded`}>
    <span className="text-white font-bold">{label}</span>
  </div>
)

export default PlayerLabelComponent;