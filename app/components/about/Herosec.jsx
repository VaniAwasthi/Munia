"use client";
import Image from "next/image";
import AboutSecImg from "../../assets/About/AboutImg.svg";
import MinimalImg from "../../assets/About/MinimalBg.svg";
import { motion } from "framer-motion";

export const AboutBanner = () => {
  return (
    <section className="relative bg-cover text-white text-center  overflow-x-hidden">
      <div className="w-full h-full">
        <video className="w-full" muted autoPlay loop playsInline>
          <source src="/videos/Muina-About-Us-Banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
export const AboutSec = () => {
  return (
    <section className="px-6 md:px-10 py-10 max-w-7xl mx-auto  overflow-x-hidden">
      <div className="w-full">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="font-[--font-lustria] text-xl font-regular md:text-[45px] mb-4  text-left md:text-left"
        >
          Rooted in Ritual. Elevated by Nature.
          <br /> Powered by Science.
        </motion.h2>
      </div>

      {/* Column Content */}
      <div className="flex flex-col-reverse sm:flex-row gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-[60%] my-1 md:my-5">
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-[--font-raleway] text-gray-700 text-[10px] md:text-[12px] lg:text-[16px] leading-relaxed"
          >
            At Muina, skincare is more than surface deep—it's a quiet revolution
            in how we treat our skin and ourselves. Born from the belief that
            less is more, Muina stands at the intersection of minimalism and
            efficacy. Our formulations blend time-tested botanical ingredients
            with modern, skin-safe actives—offering solutions that are gentle,
            effective, and consciously created.
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-[--font-raleway] text-gray-700 text-[10px] md:text-[12px] lg:text-[16px] leading-relaxed"
          >
            We don’t believe in 10-step routines or overcomplicated regimes.
            Instead, we craft multi-functional products that honour your time,
            your skin, and your journey. Every product is dermatologically
            tested, cruelty-free, and formulated without harsh chemicals, making
            Muina a safe space for all skin types. Whether it’s a calming aloe
            gel, a nourishing ampoule, or a perfumed hand cream—each Muina
            product is designed to feel like a pause, a breath, a soft return to
            self.
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-[40%] flex"
        >
          <Image
            src={AboutSecImg}
            width={300}
            alt="Products"
            className="object-center sm:object-cover w-full "
          />
        </motion.div>
      </div>
    </section>
  );
};
export const Minimal = () => {
  return (
    <section className=" text-center overflow-x-hidden">
      <Image
        src={MinimalImg}
        alt="Minimal"
        className="w-full"
        width={400}
        height={400}
      />

      <div className="w-full">
        <video
          className="w-full"
          // controls
          muted
          autoPlay
          loop
        >
          <source src="/videos/MinimalGIF.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
