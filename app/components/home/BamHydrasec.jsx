"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HydraImg from "../../assets/Home/HydraWater_Drop.webp";
import BalmImg from "../../assets/Home/StickBalmImg.webp";
import PatchImg from "../../assets/Home/PatchImg.webp";
import EyePatch1 from "../../assets/Home/EyeCare/EyePatchGold.webp";
import EyePatch2 from "../../assets/Home/EyeCare/EyePatchBlackPearl.webp";
import EyePatch3 from "../../assets/Home/EyeCare/VitaminC.webp";
const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
    viewport: { once: false, amount: 0.3 },
  }),
};

export const EssenceAndBalmSection = () => {
  return (
    <section className="max-w-7xl mx-auto  px-4 md:px-16 py-10">
      {/* Hydra Water Drop */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-10 mb-5"
        id="stickbalm"
      >
        {/* Left Text */}
        <motion.div
          className="w-full md:w-1/2"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="font-lustria text-[#76564D] text-[30px] md:text-[46px] font-regular mb-2">
            Hydra Water Drop
          </h2>
          <p className="font-lustria uppercase text-[20px] tracking-wide text-[#76564D] mb-4">
            Essence Cream
          </p>
          <p className="font-raleway text-[#000000] text-[18px] leading-relaxed mb-4">
            It is a Water Drop formulation that bursts into moist water droplets
            the moment it is applied. It absorbs gently and quickly into skin,
            delivers moisture without stickiness.
          </p>
          <p className="font-raleway text-[#000000] text-[18px] leading-relaxed">
            Enriched with hyaluronic acid, this cream deeply penetrates the skin
            barrier to lock in moisture and improve skin elasticity. Ideal for
            all skin types, especially dry or dehydrated skin, it revitalizes
            dull and tired complexions while helping to soothe irritation and
            balance oil-moisture levels.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <Image
            src={HydraImg}
            alt="Hydra Water Drop"
            className="max-w-[500px] w-full h-auto"
          />
        </motion.div>
      </div>
      {/* Stick Balm */}
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-10"
        id="stickbalm"
      >
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={BalmImg}
            alt="Stick Balm"
            className="max-w-[500px] w-full h-auto"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full md:w-1/2"
          variants={fadeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={0.4}
        >
          <h2 className="font-lustria text-[#4B2E2E] text-[28px] md:text-[42px] font-regular mb-2">
            Stick Balm
          </h2>
          <p className="font-raleway text-[#5E4A4A] text-[18px] leading-relaxed mb-4">
            Formulated with Vitamin tree fruit extract, this cream brightens and
            clears skin. Hydrolyzed collagen forms a protective layer to lock in
            moisture keeping skin hydrated and supple.
          </p>
          <p className="font-raleway text-[#4B2E2E]  font-semibold mb-1">
            Benefits:
          </p>
          <ul className="font-raleway list-disc list-inside text-[#5E4A4A] text-[15px] space-y-1">
            <li>Brightens and revitalizes skin</li>
            <li>Provides intensive moisturization</li>
            <li>Helps reduce the appearance of wrinkles</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
export const PatchSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4  py-16" id="acne">
      <Image
        src={PatchImg}
        alt="Patch"
        width={400}
        height={500}
        className="object-cover w-full"
      />
    </section>
  );
};

export const EyeCare = () => {
  const products = [
    {
      title: "Eye Patch Gold",
      image: EyePatch1,
    },
    {
      title: "Eye Patch Black Pearl",
      image: EyePatch2,
    },
    {
      title: "Eye Patch Vitamin C",
      image: EyePatch3,
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-10" id="cleansing">
      {/* Heading with full-width bottom border */}

      <h2 className="font-lustria text-[32px] md:text-[45px] font-regular text-[#76564D] leading-tight mt-4">
        Eye Care
      </h2>
      <p className="font-raleway mt-2 text-[14px] md:text-[16px] text-[#000000] max-w-xs">
        Cleanse without stripping—just pure, gentle formulations for daily
        rituals.
      </p>

      {/* Desktop Layout */}
      <div className="hidden lg:flex justify-between items-stretch text-center  relative h-full">
        {products.map((item, index) => (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            key={index}
            className=" flex  items-center relative "
          >
            <div className="flex flex-col  h-full py-5">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={300}
                className="w-full object-contain transition-transform duration-300 hover:scale-105"
              />
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="my-8 font-raleway text-[18px] text-left font-light"
              >
                {item.title}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="lg:hidden mt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          className="px-4 swiper-custom"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={200}
                  className="w-[250px] object-contain"
                />
                <p className="my-5 font-raleway text-base font-medium ">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
