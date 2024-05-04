import React, { useContext, useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { BorderBeam } from "./ui/BorderBeam";
import { MouseContext } from "./context/MouseContext";


const CallToAction = () => {
const [arrow,setarrow] = useState({width:"0px"})
const mousecontext = useContext(MouseContext)
  const { setCursor } = mousecontext;
  return (
    <section
      onMouseEnter={()=>{setCursor({opacity:1,backgroundColor:"#db28ff"})}}
      onMouseLeave={()=>{setCursor({opacity:0,backgroundColor:"#db28ff"})}}
      id="testimonial"
      className=" container mx-auto w-[88rem] overflow-hidden  relative flex flex-col items-center justify-center  bg-white bg-opacity-5 backdrop-blur-[25px] rounded-3xl  py-[100px] md:py-[140px] gap-[75px] md:gap-[105px] xl:gap-[150px]"
    >
      
      <div className=" flex flex-col items-center justify-center gap-[35px]">
        <div className="p-6 border border-opacity-10 border-white overflow-hidden rounded-3xl relative  ">
<div className="bg-purple-500 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-0 left-0 blur-[90px]"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-auto size-12 text-black dark:text-white lg:size-24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-[48px] font-bold" >
            {`"Ready to elevate your online presence?"`}</p>
          <button onMouseLeave={() => {
            return(setarrow({width:"0px"}))
          }} onMouseEnter={() => {
            return(setarrow({width:"20px"}))
          }}  className="relative py-2 px-6 rounded-xl border-opacity-10 flex items-center gap-5  text-[24px] bg-black bg-opacity-5 backdrop-blur-[25px]  border border-white">
            <span>Schedule your meeting </span>
            <div className="flex items-center relative  " >
              <div className="w-5 h-[2px] bg-white duration-200" style={arrow} />
              <span className="absolute right-0 translate-x-1/2" ><LiaAngleRightSolid /></span>
        </div>
            <BorderBeam size={70} duration={6} delay={9} />          
          </button>
        </div>
     </div>

    

    </section>
  );
};

export default CallToAction;


