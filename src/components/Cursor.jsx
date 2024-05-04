"use client"
import React, { useContext } from 'react'
import { MouseContext } from './context/MouseContext';

const Cursor = () => {
const mousecontext = useContext(MouseContext)

    const { showcursor } = mousecontext;


    if (typeof window !== 'undefined') {
        window.addEventListener("mousemove", function (e) {
            const customcursor = document.getElementById("cursor")
            customcursor.style.left = `${e.clientX}px`;
            customcursor.style.top = `${e.clientY}px`;
        });
    }
    
 
  return (
      <div id='cursor' className='z-[1000] w-[100px] h-[100px] blur-[100px]    pointer-events-none rounded-full fixed -translate-x-1/2 -translate-y-1/2 top-0 left-0     '
          style={showcursor}
      
      ></div>      
  )
}

export default Cursor
