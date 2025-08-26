import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:2/4 text-gray-600'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolores adipisci necessitatibus eaque iure similique. Fuga vitae sapiente facilis id nam est voluptatum qui, excepturi non architecto vero aperiam? Dolores.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil adipisci quas iste et quam consequatur, molestiae omnis fugiat quis nulla incidunt. </p>
          <div>
                        <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi at minima error ducimus cumque labore, minus necessitatibus ipsum cupiditate praesentium animi ea voluptas. Aperiam excepturi beatae nemo. Molestiae, dignissimos?</p>
          </div>
        </div>

      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui fugit eius aliquid ex modi dolor quas odio repudiandae quisquam! Asperiores enim minus quidem delectus voluptas rerum architecto, odit praesentium.</p>
        </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui fugit eius aliquid ex modi dolor quas odio repudiandae quisquam! Asperiores enim minus quidem delectus voluptas rerum architecto, odit praesentium.</p>
        </div>

         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui fugit eius aliquid ex modi dolor quas odio repudiandae quisquam! Asperiores enim minus quidem delectus voluptas rerum architecto, odit praesentium.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About