'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:hieunm.pt@gmail.com?subject=${formData.subject}
    &body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`
  }
  

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-2xl text-gray-500 font-semibold text-center uppercase tracking-[5px]'>
          reach out to <span className='decoration-[#5c9ead] underline text-[#5c9ead] cursor-pointer'>me</span> if you want.
        </h4>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2 w-fit'>
            <input {...register('name')} type="text" placeholder='name' className='contactInput font-semibold' />
            <input {...register('email')} type="email" placeholder='email' className='contactInput font-semibold' />
          </div>
          <input {...register('subject')} type="text" placeholder='subject' className='contactInput font-semibold' />

          <textarea placeholder='message' {...register('message')}
            className='contactInput font-semibold resize-none focus:resize-y overflow-hidden'>

          </textarea>

          <button className='bg-[#5c9ead] py-5 px-10 rounded-md text-black uppercase tracking-[5px] font-bold text-lg'>
            submit
          </button>
        </form>
      </div>
    </div>
  )
}
