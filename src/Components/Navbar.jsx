import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between md:justify-evenly items-center bg-[#fef9e7] sticky top-0 z-10'>
      
        <a href="#home"><img src={logo} alt="" width="100px" height="100px"/></a>

        <ul className='hidden md:flex gap-10 font-semibold'>
            <li className='cursor-pointer hover:text-green-600' ><a href="#home">HOME</a></li>
            <li className='cursor-pointer hover:text-green-600'><a href="#about">ABOUT</a></li>
            <li className='cursor-pointer hover:text-green-600'><a href="#services">SERVICES</a></li>
            <li className='cursor-pointer hover:text-green-600'><a href="#packages">PACKAGES</a></li>
            <li className='cursor-pointer hover:text-green-600'><a href="#contact">CONTACT</a></li>
        </ul>
      
     <div>
     <a href="https://wa.me/919370616757?text=Hi%20Varsha,%20I’m%20interested%20in%20your%20dietitian%20services—can%20you%20help%20me%20with%20a%20personalized%20plan%20for%20my%20health%20goals?" target='_blank'>
     <button class="relative font-medium text-lg tracking-wide rounded-lg cursor-pointer border-none bg-gradient-to-r from-green-400 to-green-800 text-white overflow-hidden group">
  <span class="relative z-10 transition-colors duration-400 flex items-center px-5 py-3">
    <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
        fill="currentColor"
      ></path>
    </svg>
    Let's Talk
  </span>
  <div class="absolute inset-0 bg-orange-400 w-[120%] -left-[10%] transform skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full z-0"></div>
</button>
     </a>
     </div>
    </nav>
  )
}

export default Navbar
