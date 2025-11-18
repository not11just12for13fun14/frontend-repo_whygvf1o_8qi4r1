import React from 'react'

export default function Grain({ opacity = 0.06 }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '3px 3px',
        mixBlendMode: 'overlay',
      }}
    />
  )
}
