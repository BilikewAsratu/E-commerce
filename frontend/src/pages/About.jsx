import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quidem accusamus, officia maiores voluptas neque labore dicta cumque voluptatem tempora nam facere blanditiis consequuntur, deleniti sed ad rerum assumenda id.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis qui sint iusto optio, minima ducimus iste quisquam repellat quod ab ex dicta nam, iure quas. Voluptate omnis ipsam dolorem vitae?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, deleniti? Quaerat accusantium est odio corporis, commodi tempore explicabo facere obcaecati ratione possimus quod officia debitis voluptas quia hic sed ipsa?</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae impedit, voluptas sapiente placeat tenetur odit accusamus deleniti tempora ducimus rem nobis doloremque neque illo a quo eum recusandae ratione cumque.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae impedit, voluptas sapiente placeat tenetur odit accusamus deleniti tempora ducimus rem nobis doloremque neque illo a quo eum recusandae ratione cumque.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae impedit, voluptas sapiente placeat tenetur odit accusamus deleniti tempora ducimus rem nobis doloremque neque illo a quo eum recusandae ratione cumque.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About