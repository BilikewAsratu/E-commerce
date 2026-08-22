import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-120' src={assets.contact_img} alt="" />
        <div className="gap-6 flex flex-col justify-center">
          <p className='font-semibold text-gray-600 text-xl'>Our Store</p>
          <p className='text-gray-500'>5436 90875 573 Addis Ababa <br /> Kolfe keraniyo Ayertena </p>
          <p className='text-gray-500'>Tel: 096 (840) 5650</p>
          <p className='text-xl font-semibold text-gray-600'>Careeers at Forever</p>
          <p className='text-gray-500'>Learn More About Our Teams and job opening</p>
          <button className='border px-8 py-4 cursor-pointer border-black bg-black text-sm hover:text-white transition-all duration-500 text-white'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact