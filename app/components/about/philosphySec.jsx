"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import PhilosophyImg from "../../assets/About/philoshphy.svg";
import KindToSkinImg from "../../assets/About/KindToSkin.svg";
export const Philosophy = () => {
  return (
    <section className="bg-[#EFD3CA] overflow-x-hidden mt-5 md:mt-10 gap-10">
      <div className="flex flex-col md:flex-row justify-between ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 px-10 md:px-20 py-2 md:py-10 text-center md:text-left mt-10 md:mt-2 ">
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-[--font-lustria] text-[#3D2F2B]  text-[38px] md:text-[48px] "
          >
            Our Philosophy
          </motion.h2>
          <motion.h4
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-[--font-raleway] text-[#3D2F2B]  text-xl md:text-[24px] py-4 mb-3"
          >
            Intentional Skincare for Real Life.
          </motion.h4>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden md:block font-[--font-raleway] text-[#000000]  text-base md:text-xl leading-relaxed md:max-w-lg mx-auto md:mx-0"
          >
            Muina is designed for the modern skin—exposed to change, stress, and
            time. Our approach is about balance, not excess. We create
            high-performance skincare that works around your day, not the other
            way around.
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/2  "
        >
          <Image
            src={PhilosophyImg}
            alt="Products"
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="block md:hidden font-[--font-raleway] text-gray-700 text-base md:text-lg leading-relaxed md:max-w-lg py-4 px-8"
          >
            Muina is designed for the modern skin—exposed to change, stress, and
            time. Our approach is about balance, not excess. We create
            high-performance skincare that works around your day, not the other
            way around.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
export const SkinCareSteps = () => {
  return (
    <video
      className="w-full h-full object-cover object-center"
      // controls
      muted
      autoPlay
      loop
    >
      <source src="/videos/Steps.mp4" type="video/mp4" />
    </video>
  );
};
export const KindtoSkinSec = () => {
  return (
    <>
      <section className=" w-full mt-8 overflow-hidden">
        {/* Background Image */}
        <Image
          src={KindToSkinImg}
          alt="Skin Banner"
          className="  w-full h-full object-cover"
        />
      </section>
    </>
  );
};
