import { Herosection } from '@/components/Herosection'
import Steps from '@/components/Steps'
import Tabsection from '@/components/Tabsection'
import Tech from '@/components/Tech'
import React, { useEffect } from 'react'

const Home = () => {

  return (<>
      <Herosection />
    <main className='px-[3%]'>
      <Tabsection />
      <Tech/>
      <Steps/>
    </main>
  </>
  )
}

export default Home
