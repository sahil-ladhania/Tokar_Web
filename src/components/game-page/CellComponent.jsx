import React from 'react'

const cellStyles = {
  RH: 'bg-red-500',      // Red home area
  BH: 'bg-blue-500',     // Blue home area
  YH: 'bg-yellow-500',   // Yellow home area
  GH: 'bg-green-500',    // Green home area
  path: 'bg-gray-200',   // Path squares
  safe: 'bg-gray-300',   // Safe squares (colored border)
  center: 'bg-white',    // Center cross
  blank: 'bg-transparent',
}

const CellComponent = ({ type, row, col }) => {
  const cls = cellStyles[type] || cellStyles.blank
  return (
    <div
      className={`${cls} border border-gray-600`}
      style={{ gridRow: row, gridColumn: col }}
    />
  )
}

export default CellComponent