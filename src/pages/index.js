"use client"
import Cursor from '@/components/Cursor'
import { Herosection } from '@/components/Herosection'
import Services from '@/components/Services'
import Steps from '@/components/Steps'
import Tabsection from '@/components/Tabsection'
import Tech from '@/components/Tech'
import CallToAction from '@/components/CallToAction'
import React, { useEffect } from 'react'


const Home = () => {

  
  


  return (<>
  <Cursor/>
      <Herosection />
    <main className='px-3'>
      <Tabsection />
      <Tech />
      <Services />
      <Steps />
      <CallToAction />
    </main>   
  </>
  )
}

export default Home
