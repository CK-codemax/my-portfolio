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
    reset,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:whoroochuko@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} From ${formData.email}`;
    reset();
  }

  return(
     
       <div className='flex flex-col px-3 my-5 py-10 space-y-3 items-center justify-center lg:flex-row lg:items-start lg:space-y-0 lg:space-x-5'>
      
      <div className='flex flex-col space-y-2 w-full sm:w-[550px] mx-auto items-start lg:pl-20 xl:pl-28 justify-start'>
      <h3 className="capitalize text-xl">{"lets's"} build you your dream</h3>

<h4 className='text-sm capitalize sm:text-sm'>
  contact me
</h4>

<div className='flex items-center justify-start space-x-3'>

 <PhoneIcon className='text-[#242424] dark:text-gray-100 h-7 animate-pulse' />
 {/* <p className='text-sm'>+234 703 071 6246</p> */}
 <a className='text-sm' href="tel:+2347030716246">+234 703 071 6246</a>

</div>

<div className='flex items-center justify-start space-x-3'>

<MapPinIcon className='text-[#242424] dark:text-gray-100 h-7 animate-pulse' />
<p className='text-sm'>UI, Ibadan</p>
</div>

<div className='flex items-center justify-start space-x-3'>

<EnvelopeIcon className='text-[#242424] dark:text-gray-100 h-7 animate-pulse' />
<a className='text-sm' href="mailto:whoroochuko@gmail.com">whoroochuko@gmail.com</a>

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

        <button type='submit' className='bg-[#242424] dark:bg-gray-100 py-5 px-10 rounded-md text-gray-50 dark:text-[#242424] font-bold text-lg'>Submit</button>


       </form>
      </div>

       </div> 
  )
}