"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import RiceDeep from "../../assets/About/Rice-Deep.webp";
import WaterMelon from "../../assets/About/Water-Melon.webp";
import WhitePearl from "../../assets/About/White-Pearl.webp";
import BackgroundImage from "../../assets/About/ExplorersBg.png";
import UserIcon from "../../assets/About/UsernameIcon.svg";
import UserNameIcon from "../../assets/About/Username.svg";
import PrevArrwo from "../../assets/Home/sheetMask/pre.svg";
import NextArrwo from "../../assets/Home/sheetMask/nextArrow.svg";
import BackgroundLast from "../../assets/About/Broucher-bg.svg";
import BgBehindHeading from "../../assets/About/text-bg.svg";
export const AboutExplorer = () => {
  const testimonials = [
    {
      img: RiceDeep,
      paragraph:
        "“Muina has completely transformed my skincare routine. The serums are light, hydrating, and leave my skin feeling like glass. I’ve tried countless K-beauty brands, but Muina is on another level!”",
    },
    {
      img: WaterMelon,
      paragraph:
        "“Muina has completely transformed my skincare routine. The serums are light, hydrating, and leave my skin feeling like glass. I’ve tried countless K-beauty brands, but Muina is on another level!”",
    },
    {
      img: WhitePearl,
      paragraph:
        "“Muina has completely transformed my skincare routine. The serums are light, hydrating, and leave my skin feeling like glass. I’ve tried countless K-beauty brands, but Muina is on another level!”",
    },
  ];

  return (
    <section className="relative w-full md:w-full h-auto my-10 overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="Explorer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10 py-10">
        <motion.h1
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="font-[--font-lustria] text-black text-3xl md:text-[48px] mb-8 "
        >
          Loved by Skincare <br className="hidden md:block" />
          Explorers Worldwide
        </motion.h1>

        {/* Desktop View: 3 Static Cards */}
        <div className="hidden lg:flex justify- gap-4 ">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="w-1/3 flex flex-col items-center"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src={item.img}
                alt="Product"
                className="w-[300px] h-[300px]"
              />
              <div className="bg-white w-[300px] h-[240px] mt-[-3rem]">
                <motion.button
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  type="button"
                  className="bg-[#EAEAEA] flex items-center px-2 py-1 gap-2 mb-2 m-2 ml-4 rounded-2xl"
                >
                  <Image
                    src={UserIcon}
                    alt="Username Icon"
                    className="font-[--font-raleway] "
                  />
                  Username
                </motion.button>
                <div className="flex">
                  <Image src={UserNameIcon} alt="User" className="m-4" />
                  <p className="font-[--font-raleway] mt-5">Username</p>
                </div>
                <motion.p
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="font-[--font-raleway] text-[12px] text-black m-4"
                >
                  {item.paragraph}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper View */}
        <div className="block xl:hidden relative">
          {/* Navigation Arrows */}
          {/* Custom Arrows */}
          <button
            className="custom-prev absolute left-[-4px] lg:left-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10   flex items-center justify-center"
            aria-label="Previous"
          >
            <Image
              src={PrevArrwo}
              width={30}
              alt="pre"
              className="w-[50px] h-[50px]"
            />
          </button>

          <button
            className="custom-next absolute right-[-4px]  lg:right-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10   flex items-center justify-center"
            aria-label="Next"
          >
            <Image
              src={NextArrwo}
              width={30}
              alt="pre"
              className="w-[50px] h-[50px]"
            />
          </button>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="SheetMaskSwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <Image
                    src={item.img}
                    alt="Product"
                    className="w-[300px] h-[300px]"
                  />
                  <div className="bg-white w-[300px] h-[240px] mt-[-3rem]">
                    <button
                      type="button"
                      className="bg-[#EAEAEA] flex items-center px-2 py-1 gap-2 mb-2 m-2 ml-4 rounded-2xl"
                    >
                      <Image
                        src={UserIcon}
                        alt="Username Icon"
                        className="font-[--font-raleway]"
                      />
                      Username
                    </button>
                    <div className="flex">
                      <Image src={UserNameIcon} alt="User" className="m-4" />
                      <p className="font-[--font-raleway] mt-5">Username</p>
                    </div>
                    <p className="font-[--font-raleway] text-[12px] text-black m-4">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export const Broucher = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-white">
      {/* Soft Shadows (leaf) Background */}
      <Image
        src={BackgroundLast}
        alt="Leaf Shadows"
        fill
        className="object-cover opacity-40"
      />

      {/* Background Text Layer (blurred for depth) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute z-0 text-[64px] md:text-[90px] text-[#000] font-[--font-lustria] uppercase text-center leading-[1.1] tracking-wide blur-sm"
        >
          READY TO MAKE SKINCARE SIMPLER?
        </motion.h2>
      </div>

      {/* Foreground Main Heading */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-20 text-center text-[28px] md:text-[70px] font-[--font-lustria] text-[#2F2320] px-4 leading-snug max-w-2xl"
        >
          READY TO MAKE <br className="md:hidden" /> SKINCARE SIMPLER?
        </motion.h2>
      </div>

      {/* Centered CTA Button */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-30">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#76564D1A] text-[#2F2320] font-semibold px-6 py-2 md:py-3 text-sm md:text-base shadow-md border border-[#cdbcb5]"
        >
          Browse Our Brochure
        </motion.button>
      </div>
    </section>
  );
};
