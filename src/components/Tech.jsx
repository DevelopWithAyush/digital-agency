import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Infinitemovingcr from './ui/Infinitemovingcr'
import Image from 'next/image';
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
const Tech = () => {
  const [animation,setAnimation] = useState(false)
  return (
    <section className=' container  mx-auto  flex flex-row  '>
      <div className='  flex flex-col items-center gap-2' >
        <div className='w-1 h-[100px] md:h-[140px] xl:h-[200px] rounded-full'>
          <motion.div
            initial={{ height: "0%" }}
            whileInView={() => {
              setAnimation(true)
            }}
            animate={animation ? { height: "100%" } : {}}
            transition={{
              delay: .5,
              duration: 1
            }}
            className='w-1 h-[100px] md:h-[140px] xl:h-[200px] rounded-full'
            style={{
              background: "linear-gradient(transparent, rgb(46, 160, 67), rgb(63, 185, 80))"
            }}></motion.div>
        </div>
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={animation ? { opacity: 1 } : {}}
          transition={{
            delay: 1.5,
            duration: .5
          }}
          className='text-[32px] leading-[32px] md:text-[48px] md:leading-[48px] xl:text-[56px] xl:leading-[56px] font-bold ' >
          🧑‍💻
        </motion.div>
        <div className='w-1 h-[400px] rounded-full'>
          <motion.div
            initial={{ height: "0px" }}
            animate={animation ? { height: "100%" } : {}}
            transition={{
              delay: 2,
              duration: .5
            }}
            className='w-1 h-[400px] rounded-full '
            style={{
              background: "linear-gradient( rgb(63, 185, 80), rgb(46, 160, 67),transparent)"
            }}
          ></motion.div>
     </div>

      </div>
      <div className='flex w-full  flex-col items-start py-[100px] md:py-[140px] xl:py-[200px] gap-[75px]'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration:1
          }}
          className='flex flex-col gap-0  '>
          <p className='text-[32px] md:text-[48px] lg:text-[56px] leading-[56px] font-bold'>Technology</p>
          <p className='text-[24px] font-medium text-gray-500'>That we use to grow you</p>
       </motion.div>
        
        <div className=' flex w-[95%]  relative overflow-x-hidden'>
            <Infinitemovingcr pauseOnHover className="[--duration:20s]">
              {reviews.map((review) => (
                <Card key={review.username} {...review} />
              ))}
            </Infinitemovingcr>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
        </div>
      
      </div>
      
    </section>
  )
}

export default Tech


const Card = () => {
  return (
    <div className='w-[200px] h-[200px] overflow-hidden  text-2xl flex items-center justify-center'>
      <img alt='aysh' src={"https://res.cloudinary.com/dpqsatnvt/image/upload/v1714508286/Group_68_givn81.png" }  />
    </div>
  )
}