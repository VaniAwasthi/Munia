"use client";
import Image from "next/image";
import Cleansing from "../../assets/Home/cleanising.svg";
import handcare from "../../assets/Home/handcare.svg";
import acne from "../../assets/Home/acne.svg";
import ampoule from "../../assets/Home/ampoule.svg";
import stickbalm from "../../assets/Home/stickbalm.svg";
import eyecare from "../../assets/Home/eyecare.svg";
import SkinStoryImg from "../../assets/Home/yourSkinStoryImg.svg";
import HandcareBanner from "../../assets/Home/HandcareBanner.svg";
import AmpouleBanner from "../../assets/Home/aphole.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import RiceDeep from "../../assets/Home/cleansing/RiceDeep.svg";
import AleoVera from "../../assets/Home/cleansing/FoamCleanser_AloeVera.svg";
import VitaminC from "../../assets/Home/cleansing/FoamCleanser_Vitamin.svg";
import BgCleanser from "../../assets/Home/cleansing/background.svg";
import { motion } from "framer-motion";

export const YourSkinStory = () => {
  return (
    <section className="relative w-full h-auto md:h-[520px] overflow-hidden bg-white">
      {/* Background Video - Only for md and above */}
      <video
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-0"
        muted
        autoPlay
        loop
        playsInline
      >
        <source src="/videos/Home-YourSkinStory.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div
          className="
        flex flex-col
        items-center justify-center
        md:items-end md:justify-end
        text-center md:text-left font-[--font-lustria]
        gap-6
        w-full md:w-1/3 ml-auto
      "
        >
          {/* Mobile Heading */}
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="block md:hidden text-3xl font-semibold text-[#4C2E2B] mb-2 font-[--font-lustria]"
          >
            Your Skin Story
          </motion.h2>

          {/* Image */}
          <Image
            src={SkinStoryImg}
            alt="Your Skin Story"
            width={300}
            height={300}
            className="w-full h-auto"
          />

          {/* Paragraph */}
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-sm text-[#4C2E2B] leading-relaxed font-[--font-raleway] max-w-md"
          >
            Rooted in the power of natural ingredients and the wisdom of
            skincare science, Muina offers a curated collection of skin
            solutions—from hydrating sheet masks to targeted serums. Every
            product is crafted to restore, protect, and elevate your skin’s
            natural rhythm.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export const SkincareSection = () => {
  const skincareItems = [
    { id: "cleansing", label: "Cleansing", image: Cleansing },
    { id: "handcare", label: "Handcare", image: handcare },
    { id: "acne", label: "Acne Pimple Patch", image: acne },
    { id: "ampoule", label: "Ampoule", image: ampoule },
    { id: "stickbalm", label: "Stick Balm", image: stickbalm },
    { id: "eyecare", label: "Eyecare", image: eyecare },
  ];
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="font-[--font-lustria] max-w-7xl mx-auto px-4 md:px-16 my-3 bg-white">
      {/* Header */}
      <div className="mb-10 text-left">
        <h2 className="text-3xl md:text-4xl  text-[#5f3d31]">Skincare</h2>
        <p className="text-sm text-gray-600 mt-1">
          Because Your Skin Deserves Signature Scent.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skincareItems.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer group"
            onClick={() => scrollToSection(item.id)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.label}
                width={300}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-2 text-center text-[#5f3d31] font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const CleansingRange = () => {
  const products = [
    {
      title: "Rice Deep Cleanser",
      image: RiceDeep,
    },
    {
      title: "Aloevera Deep Cleanser",
      image: AleoVera,
    },
    {
      title: "Vitamin C Deep Cleanser",
      image: VitaminC,
    },
  ];
  return (
    <section className="relative w-full h-auto overflow-hidden " id="cleansing">
      {/* Background Image */}
      <Image
        src={BgCleanser}
        alt="Cleansing Range Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div className="relative z-10 ">
        {/* Heading with full-width bottom border */}
        <div className="w-full border-b border-[#A26464] md:pb-6">
          <div className=" max-w-7xl mx-auto px-4 ">
            <h2 className="font-[--font-lustria] text-[32px] md:text-[45px] font-regular text-[#76564D] leading-tight mt-4">
              Cleansing Range
            </h2>
            <p className="font-[--font-raleway] mt-2 text-[14px] md:text-[16px] text-[#000000] max-w-sm">
              Cleanse without stripping—just pure, gentle formulations for daily
              rituals.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-stretch text-center  relative h-full">
          {products.map((item, index) => (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              key={index}
              className="w-1/3 flex flex-col items-center relative px-4"
            >
              <div className="flex flex-col items-center h-full py-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={250}
                  className="object-contain transition-transform duration-300 hover:scale-105 h-[300px]"
                />
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="my-8 font-[--font-raleway] text-[18px] font-light"
                >
                  {item.title}
                </motion.p>
              </div>

              {/* Full-height Vertical Divider */}
              {index !== products.length - 1 && (
                <div className="absolute top-0 right-0 h-full w-[1px] bg-[#A26464]" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden mt-10">
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
                    height={250}
                    className="object-contain"
                  />
                  <p className="my-5 font-[--font-raleway] text-base font-medium ">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export const HandcareSec = () => {
  return (
    <>
      <section id="ampoule" className="max-w-7xl mx-auto my-5">
        <Image
          src={AmpouleBanner}
          width={600}
          height={600}
          alt="handcare"
          className="w-full h-full object-center"
        />
      </section>
      <section id="handcare" className="w-full my-5">
        <Image
          src={HandcareBanner}
          width={600}
          height={600}
          alt="handcare"
          className="w-full h-full object-center"
        />
      </section>
    </>
  );
};
