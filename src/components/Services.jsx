import { motion } from 'framer-motion'
import React from 'react'

const Services = () => {
  return (
    <section className='grid grid-cols-12 container mx-auto max-w-[88rem] bg-white bg-opacity-5 backdrop-blur-[25px] rounded-[20px] py-12 px-9 gap-5 '>
      <div className='col-span-12 md:col-span-6  py-12 px-9 rounded-[12px] ' >
        <motion.p
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          exit={{
            opacity: 0,
          }}
          className='text-[32px] leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[48px] lg:leading-[48px] xl:text-[56px] xl:leading-[56px]   font-bold'>
                     Services <span className='font-medium text-[#797979]'>that we provide to grow your Business.</span>
                 </motion.p>
        </div>
      <div className='col-span-12 md:col-span-6 xl:col-span-3 border border-white border-opacity-10 py-12 px-9 rounded-[12px] ' >Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nam possimus accusamus sed, expedita eius voluptas perferendis eveniet ex odio aut sit delectus repudiandae assumenda magnam, laudantium libero praesentium dignissimos eaque, sint rerum accusantium!, ipsum dolor.</div>
      <div className='col-span-12 md:col-span-6 xl:col-span-3 border border-white border-opacity-10 py-12 px-9 rounded-[12px] ' >Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nam possimus accusamus sed, expedita eius voluptas perferendis eveniet ex odio aut sit delectus repudiandae assumenda magnam, laudantium libero praesentium dignissimos eaque, sint rerum accusantium!, ipsum dolor.</div>
      <div className='col-span-12 md:col-span-6 xl:col-span-4 border border-white border-opacity-10 py-12 px-9 rounded-[12px] ' >Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nam possimus accusamus sed, expedita eius voluptas perferendis eveniet ex odio aut sit delectus repudiandae assumenda magnam, laudantium libero praesentium dignissimos eaque, sint rerum accusantium!, ipsum dolor.</div>
      <div className='col-span-12 md:col-span-6 xl:col-span-4 border border-white border-opacity-10 py-12 px-9 rounded-[12px] ' >Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nam possimus accusamus sed, expedita eius voluptas perferendis eveniet ex odio aut sit delectus repudiandae assumenda magnam, laudantium libero praesentium dignissimos eaque, sint rerum accusantium!, ipsum dolor.</div>
      <div className='col-span-12 md:col-span-6 xl:col-span-4 border border-white border-opacity-10 py-12 px-9 rounded-[12px] ' >Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nam possimus accusamus sed, expedita eius voluptas perferendis eveniet ex odio aut sit delectus repudiandae assumenda magnam, laudantium libero praesentium dignissimos eaque, sint rerum accusantium!, ipsum dolor.</div>
      
    </section>
  )
}

export default Services


  // < div style = "background: linear-gradient(transparent, #7C72FF 30%); height: 72%" class="home-campaign-git-line rounded mx-auto" ></ >