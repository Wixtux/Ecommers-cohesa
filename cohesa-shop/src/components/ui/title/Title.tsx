import React from 'react'

interface Props {
  title: string
  subtitle?: string
  className?: string
}

export const Title = ({title,subtitle,className}:Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className="antialiased text-4xl font-semibold my-10">{title}</h1>
    </div>
  )
}