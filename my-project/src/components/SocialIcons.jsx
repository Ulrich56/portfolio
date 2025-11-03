import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const icons = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/Ulrich56'

  },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/ulrich-adeniyi-pineiro-10670a373'
  }
];
const SocialIcons = () => {
  return (
    <div className='flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6'>
      {icons.map((social, index) => (
        <Link
          key={index}
          to={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full mx-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black  transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default SocialIcons
