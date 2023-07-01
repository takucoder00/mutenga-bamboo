import React from 'react'

export default function CustomPageTitle({ title }: {title: string}) {
  return (
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
      {title}
    </h2>
  )
}
