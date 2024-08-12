import React from "react";

const ServiceSection = () => {
  return (
    <section
      id="services"
      className=" relative container mx-auto max-w-[88rem] bg-white bg-opacity-5 backdrop-blur-[25px] rounded-3xl  flex flex-col items-start justify-start flex-wrap py-6 px-6 md:py-[33.6px] md:px-[33.6px] xl:py-12 xl:px-12  "
    >
      <div className="w-[300px] h-[300px] rounded-full bg-[#2EA043] blur-[300px] absolute bottom-0 right-0 -z-10 " />

      <div className="max-w-3xl px-[10px] py-[10px]  ">
        <p className="font-bold w-full  py-12 px-9   rounded-xl text-[32px]  leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[48px] lg:leading-[48px] xl:text-[56px] xl:leading-[58px]">
          Services{" "}
          <span className="font-medium text-[#797979]">
            that we provide to grow your Business.
          </span>
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 lg:px-9 ">
        <div className="w-full col-span-1 px-[10px] py-[10px]  ">
          <div className="border border-solid border-white border-opacity-5 w-full h-full rounded-xl py-12 px-9 flex flex-col items-start bg-white bg-opacity-5 backdrop-blur-[25px] gap-5 ">
            <p className="text-[28px] leading-[32px] font-semibold">
              Web Development
            </p>
            <p className="text-[16px] text-[#c5c5c5] leading-[22px]">
              {`Crafting bespoke websites tailored to your brand's identity, ensuring seamless functionality and user experience.`}{" "}
            </p>
          </div>
        </div>
        <div className="w-full col-span-1 px-[10px] py-[10px]  ">
          <div className="border border-solid border-white border-opacity-5 w-full h-full rounded-xl py-12 px-9 flex flex-col items-start bg-white bg-opacity-5 backdrop-blur-[25px] gap-5 ">
            <p className="text-[28px] leading-[32px] font-semibold">
              {" "}
              Video Editing{" "}
            </p>
            <p className="text-[16px] text-[#c5c5c5] leading-[22px]">
              Transforming raw footage into captivating visual stories that
              engage and inspire your audience.
            </p>
          </div>
        </div>

        <div className="w-full col-span-1 px-[10px] py-[10px]  ">
          <div className="border border-solid border-white border-opacity-5 w-full h-full rounded-xl py-12 px-9 flex flex-col items-start bg-white bg-opacity-5 backdrop-blur-[25px] gap-5 ">
            <p className="text-[28px] leading-[32px] font-semibold">
             UI/UX 
            </p>
            <p className="text-[16px] text-[#c5c5c5] leading-[22px]">
              {`Crafting bespoke websites tailored to your brand's identity, ensuring seamless functionality and user experience.`}{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
