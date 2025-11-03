import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, href}) => {
  return (
    <a href={href} className='bg-purple-600 px-4 sm:px-6 py-2 mb-6 rounded-full'>{text}</a>
  )
}

export default Button
