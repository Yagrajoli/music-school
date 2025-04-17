import FeaturedCourses from '@/components/FeaturedCourses'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructor'
import TestimonialCards from '@/components/TestimonialCards'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      
      <HeroSection /> 
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  )
}
