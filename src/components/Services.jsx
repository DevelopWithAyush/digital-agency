import React from "react";

const Services = () => {
  return (
      <section className=" relative container mx-auto max-w-[88rem]   bg-white bg-opacity-5 backdrop-blur-[25px] grid grid-cols-12 gap-5 py-6 px-6 md:py-[33.6px] md:px-[33.6px]  xl:py-12 xl:px-12 rounded-3xl  ">
      <p className="font-bold col-span-12 md:col-span-6 xl:col-span-6 py-12 px-9   rounded-xl text-[32px] max-w-3xl leading-[32px] md:text-[48px] md:leading-[48px] lg:text-[48px] lg:leading-[48px] xl:text-[56px] xl:leading-[56px]">
        Services{" "}
        <span className="font-medium text-[#797979]">
          that we provide to grow your Business.
        </span>
      </p>
      <div className=" z-10 col-span-12 md:col-span-6 xl:col-span-3 py-12 px-9  border border-opacity-10 border-solid border-white rounded-xl flex flex-col items-start gap-5 bg-white bg-opacity-5 backdrop-blur-[25px] ">
        <p className="text-[28px] leading-[32px] font-semibold">Web Development</p>
        <p className="text-[16px] text-[#797979] leading-[22px]">
                  {`  Crafting bespoke websites tailored to your brand's identity, ensuring
          seamless functionality and user experience.`}
        </p>
      </div>
      <div className=" z-10 col-span-12 md:col-span-6 xl:col-span-3 py-12 px-9  border border-opacity-10 border-solid border-white rounded-xl flex flex-col items-start gap-5 bg-white bg-opacity-5 backdrop-blur-[25px] ">
        <p className="text-[28px] leading-[32px] font-semibold">Video Editing</p>
        <p className="text-[16px] text-[#797979] leading-[22px]">
          Transforming raw footage into captivating visual stories that engage
          and inspire your audience.
        </p>
      </div>
      <div className=" z-10 col-span-12 md:col-span-6 xl:col-span-4 py-12 px-9  border border-opacity-10 border-solid border-white rounded-xl flex flex-col items-start gap-5 bg-white bg-opacity-5 backdrop-blur-[25px] ">
        <p className="text-[28px] leading-[32px] font-semibold">Content Creation</p>
        <p className="text-[16px] text-[#797979] leading-[22px]">
          Generating compelling and relevant content across various platforms to
          enhance brand visibility and engagement.
        </p>
      </div>
      <div className=" z-10 col-span-12 md:col-span-6 xl:col-span-4 py-12 px-9  border border-opacity-10 border-solid border-white rounded-xl flex flex-col items-start gap-5 bg-white bg-opacity-5 backdrop-blur-[25px] ">
        <p className="text-[28px] leading-[32px] font-semibold">SEO</p>
        <p className="text-[16px] text-[#797979] leading-[22px]">
          Optimizing your online presence to rank higher in search engine
          results, driving organic traffic and boosting visibility.
        </p>
      </div>
      <div className=" z-10 col-span-12 md:col-span-6 xl:col-span-4 py-12 px-9  border border-opacity-10 border-solid border-white rounded-xl flex flex-col items-start gap-5 bg-white bg-opacity-5 backdrop-blur-[25px] ">
        <p className="text-[28px] leading-[32px] font-semibold">
          Digital Marketing
        </p>
        <p className="text-[16px] text-[#797979] leading-[22px]">
                  Implementing strategic campaigns across digital channels to increase brand awareness, drive conversions, and maximize ROI.
        </p>
      </div>
    </section>
  );
};

export default Services;
