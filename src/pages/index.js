import { Herosection } from '@/components/Herosection'
import Tabsection from '@/components/Tabsection'
import Tech from '@/components/Tech'
import React from 'react'

const Home = () => {
  return (
    <>
      <Herosection />
      <Tabsection />
      <Tech/>
      {/* <Tech/> */}
    </>
  )
}

export default Home
