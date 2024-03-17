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

  return(
     
       <div className='flex flex-col px-3 my-5 py-10 space-y-3 items-center justify-center border-2 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-5'>
      
      <div className='flex flex-col space-y-2 w-full sm:w-[550px] mx-auto items-start lg:pl-20 xl:pl-28 justify-start'>
      <h3 className="capitalize text-gray-500 text-xl">{"lets's"} build you your dream</h3>

<h4 className='text-sm capitalize sm:text-sm'>
  contact me
</h4>

<div className='flex items-center justify-start space-x-3'>

 <PhoneIcon className='text-[#f7ab0a] h-7 animate-pulse' />
 <p className='text-sm'>+234 703 071 6246</p>
</div>

<div className='flex items-center justify-start space-x-3'>

<MapPinIcon className='text-[#f7ab0a] h-7 animate-pulse' />
<p className='text-sm'>UI, Ibadan</p>
</div>

<div className='flex items-center justify-start space-x-3'>

<EnvelopeIcon className='text-[#f7ab0a] h-7 animate-pulse' />
<p className='text-sm'>whoroochuko@gmail.com</p>
</div>

      </div>
      <div className='w-full flex-grow'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col sm:w-[550px] w-full space-y-2 mx-auto'>
        <div className='flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0'>
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