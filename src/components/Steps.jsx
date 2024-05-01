
import { motion } from "framer-motion";
import React from "react";

const Steps = () => {
  return (
    <section className=" container  mx-auto max-w-[88rem]">
      <div className="grid grid-cols-12 ">
        <div className="col-span-1 h-full flex flex-col items-center gap-5">
          <div className="z-[98]  w-[2px] md:w-[3px] xl:w-[4px] h-[100px] md:h-[140px] xl:h-[200px] rounded-full">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{
                delay: 0.5,
                duration: 0.2,
              }}
              exit={{ height: "0%" }}
              className=" w-[2px] md:w-[3px] xl:w-[4px] h-[100px] md:h-[140px] xl:h-[200px] rounded-full"
              style={{
                background: "linear-gradient(transparent, #7C72FF 30%)",
              }}
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.2,
            }}
            exit={{
              opacity: 0,
            }}
            className="relative text-[32px] leading-[32px] md:text-[48px] md:leading-[48px] xl:text-[56px] xl:leading-[56px] font-bold "
          >
            <div className=" bg-[#7C72FF] w-[50%] h-[50%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[20px]"></div>
            ✨
          </motion.div>
        </div>
        <div
          className="col-span-11   pt-[100px] md:pt-[140px] xl:pt-[200px]
              "
        >
          <motion.p
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.2,
            }}
            exit={{
              opacity: 0,
            }}
            className="text-[32px] max-w-3xl leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[48px] lg:leading-[48px] xl:text-[56px] xl:leading-[56px]   font-bold"
          >
            Tech{" "}
            <span className="font-medium text-[#797979]">
              that we used to grow your Business.
            </span>
          </motion.p>
        </div>
      </div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-1 h-full  flex items-center flex-col ">
          <div className=" w-[2px] md:w-[3px] xl:w-[4px] h-full rounded-full">
            <motion.div
              initial={{ height: "0px" }}
              whileInView={{ height: "100%" }}
              transition={{
                delay: 0.9,
                duration: 0.2,
              }}
              exit={{ height: "0%" }}
              className=" w-[2px] md:w-[3px] xl:w-[4px] h-[400px] rounded-full "
              style={{
                background: "linear-gradient( #7C72FF 30%,transparent )",
              }}
            ></motion.div>
          </div>
        </div>
              <div className="col-span-11  pt-[75px]   pb-[100px] md:pb-[140px] xl:pb-[200px]">
                  
                   <div className= '  gap-5 grid grid-cols-12 px-9 w-full  '>
                   <div className='col-span-6 py-12 px-9 ' >
                   </div>
                   <div className='col-span-6  py-12 px-9 bg-white bg-opacity-5 backdrop-blur-[25px] border border-white border-opacity-10 rounded-[12px]' >
             </div>

               </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
