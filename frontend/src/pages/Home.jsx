import React from 'react'
import Hero from '../components/Hero'
import LatestCollectioon from '../components/LatestCollectioon'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'


const Home = () => {
  return (
    <div>
         <Hero/>
         <LatestCollectioon/>
         <BestSeller/>
         <OurPolicy/>
         <NewsletterBox/>
    </div>
  )
}

export default Home