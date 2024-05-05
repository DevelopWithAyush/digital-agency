"use client"
import Cursor from '@/components/Cursor'
import { Herosection } from '@/components/Herosection'
import Steps from '@/components/Steps'
import Tabsection from '@/components/Tabsection'
import Tech from '@/components/Tech'
import CallToAction from '@/components/CallToAction'
import React, { useEffect } from 'react'
import SmoothScrolling from '@/components/SmoothScrolling'
import Services from '@/components/Services'


const Home = () => {

  
  


  return (<>
    <SmoothScrolling>
      <Cursor />
      <Herosection />
      <main className='px-3'>
        <Tabsection />
        <Tech />
        <Services/>
        <Steps />
        <CallToAction />
      </main> 
    </SmoothScrolling>  
  </>
  )
}

export default Home
