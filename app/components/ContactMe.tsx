'use client'
import { BeakerIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactMe({}: Props) {

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:whoroochuko@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} From ${formData.email}`
  }

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
       <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-lg sm:text-2xl">Contact me</h3>

       <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have what you need for your site. 
        </h4>
      

       <div className='space-y-10'>
        <div className='flex items-center justify-center space-x-5'>

         <PhoneIcon className='text-[#f7ab0a] h-7 animate-pulse' />
         <p className='text-2xl'>+234 703 071 6246</p>
        </div>

        <div className='flex items-center justify-center space-x-5'>

<MapPinIcon className='text-[#f7ab0a] h-7 animate-pulse' />
<p className='text-2xl'>UI, Ibadan</p>
</div>

<div className='flex items-center justify-center space-x-5'>

<EnvelopeIcon className='text-[#f7ab0a] h-7 animate-pulse' />
<p className='text-2xl'>whoroochuko@gmail.com</p>
</div>
       </div>

       <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='flex space-x-2'>
           <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
           <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
        </div>

        <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

        <textarea {...register('message')} placeholder='Message' className='contactInput'/>

        <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>


       </form>

       </div> 
    </div>
  )
}