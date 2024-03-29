'use client';

import Link from 'next/link';
import React from 'react';

import { motion } from 'framer-motion';

import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div className='flex items-center text-gray-400 space-x-5'
        initial={{ x: -500, opacity: 0, scale: 0.5 }} 
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <a target='_blank' href={'https://www.facebook.com/f.hieunm'} className='hover:text-[#5c9ead]'>
          <FaFacebook size={30} />
        </a>

        <a target='_blank' href={'https://github.com/hieunmh'} className='hover:text-[#5c9ead]'>
          <FaGithub size={30} />
        </a>

        <a target='_blank' href={'https://www.instagram.com/heheinclass/'} className='hover:text-[#5c9ead]'>
          <FaInstagram size={30} />
        </a>
      </motion.div>

      <motion.div className='flex items-center justify-center text-gray-400 hover:text-[#5c9ead] cursor-pointer'
        initial={{ x: 500, opacity: 0, scale: 0.5 }} 
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <MdOutlineMail size={30} />
        <p className='uppercase hidden md:inline-flex text-sm font-semibold ml-3'>Get In Touch</p>
      </motion.div>
    </header>
  )
}