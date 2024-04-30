import { Herosection } from '@/components/Herosection'
import Tabsection from '@/components/Tabsection'
import Tech from '@/components/Tech'
import React from 'react'

const Home = () => {
  return (
    <main className='px-[3%]'>
      <Herosection />
      <Tabsection />
      <Tech/>
      {/* <Tech/> */}
    </main>
  )
}

export default Home
