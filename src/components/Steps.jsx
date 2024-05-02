import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const points = [
  "Client Consultation: We start by understanding your goals and requirements through a thorough consultation process.",
  "Planning & Strategy: Based on your needs, we create a customized plan and strategy to achieve your objectives.",
  "Execution: Our team gets to work, whether it's building a website, creating content, or launching marketing campaigns.",
  "Feedback & Revisions: We value your input and provide opportunities for feedback and revisions to ensure we're on track.",
  "Final Delivery: Once everything meets your satisfaction, we deliver the final product or service to you.",
  "Ongoing Support: Our relationship doesn't end there. We offer ongoing support and maintenance to keep your digital presence running smoothly.",
];

const Steps = () => {
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section id="steps" className=" container   mx-auto max-w-[88rem] relative">
      <div className="absolute bottom-0 right-0 blur-[200px] rounded-full w-[300px] h-[300px] bg-[#7C72FF]" />

      <div className="grid grid-cols-12 ">
        <div className="col-span-1 h-full flex flex-col items-center gap-[10px] md:gap-[14px] xl:gap-5">
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
            className="text-[32px] max-w-3xl leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[48px] lg:leading-[48px] xl:text-[56px] xl:leading-[56px] pl-4  font-bold"
          >
            Steps{" "}
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
          <div className="   grid grid-cols-12  pl-4 lg:pl-9  w-full   ">
            <div className="col-span-12 lg:col-span-6 w-full    bg-red-40    pt-12 ">
              <div className="w-full grid  grid-cols-12   ">
                <motion.div
                  initial={{
                    scaleX: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.3,
                  }}
                  className=" origin-left col-span-12 lg:col-span-8 lg:bg-white lg:bg-opacity-5 backdrop-blur-[25px] border-none lg:border-[1px] lg:border-solid border-green-400 border-opacity-10 flex items-center justify-center text-[32px] rounded-[12px] py-[0px] md:py-[0px] lg:py-12 px-[18px] md:px-[25.2px] lg:px-9"
                >
                  <div className="w-full h-full ">
                    <p className="text-center font-semibold">          Workflow
                    </p>
                    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[30px] bg-purple-500 blur-[60px]"></div>
                  </div>
                  {/* <BorderBeam size={100} duration={13} colorFrom="green" colorTo="transparent"  delay={9} /> */}
                </motion.div>
                <div
                  className="h-[100px] md:h-[140px] lg:h-full w-full  col-span-12 flex items-start lg:items-center justify-center lg:justify-start lg:col-span-4   
              "
                >
                  <motion.div
                    initial={isMobile ? {height:"0%",width:"2px" } : {width:"0%",height:"4px" }}
                    whileInView={isMobile ? { height: "100%", width: "2px" } : {
                      width: "100%", height: "4px"
                    }}
                    transition={{
                      delay: 0.8,
                      transition: 0.2,
                    }}
                    className="h-full lg:h-1 w-[2px] lg:w-full "
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, #7C72FF 50%,transparent 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6  py-[24px] md:py-[33.6px] lg:py-12 px-[18px] md:px-[25.2px] lg:px-9 bg-white bg-opacity-5 backdrop-blur-[25px] border border-white border-opacity-10 rounded-[12px] flex flex-col gap-5 ">
              {points.map((point, index) => {
                return <Points key={index} point={point} index={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

const Points = ({ point, index }) => {
  return (
    <motion.div
      initial={{
        left: -30,
        opacity: 0,
      }}
      whileInView={{
        left: 0,
        opacity: 1,
      }}
      transition={{
        delay: index * 0.1 + 1,
        duration: 0.1,
      }}
      className=" relative grid grid-cols-12 items-start   w-full"
    >
      <div className="mt-[6px] col-span-1 flex items-center justify-center">
        <FaCircleCheck className="text-[16px] text-green-500  " />
      </div>
      <p className="col-span-11 text-[16px] font-normal ">{point}</p>
    </motion.div>
  );
};
