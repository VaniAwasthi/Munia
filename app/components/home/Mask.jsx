// Mask.jsx
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import Brightening from "../../assets/Home/sheetMask/Brightening.webp";
import Nourishing from "../../assets/Home/sheetMask/Nourishing.webp";
import Soothing from "../../assets/Home/sheetMask/soothing.webp";
import Moisturizing from "../../assets/Home/sheetMask/Moisturizing.webp";
import Brightening1 from "../../assets/Home/sheetMask/brightening/Pomegranate.webp";
import Brightening2 from "../../assets/Home/sheetMask/brightening/YuzuFacial.webp";
import Brightening3 from "../../assets/Home/sheetMask/brightening/RoseFacial.webp";
import Brightening4 from "../../assets/Home/sheetMask/brightening/WhitePearl.webp";
import Nourishing1 from "../../assets/Home/sheetMask/nourishing/Acaiberry.webp";
import Nourishing2 from "../../assets/Home/sheetMask/nourishing/Tumeric.webp";
import Nourishing3 from "../../assets/Home/sheetMask/nourishing/Carrot.webp";
import Nourishing4 from "../../assets/Home/sheetMask/nourishing/RoyalJelly.webp";
import Soothing1 from "../../assets/Home/sheetMask/soothing/Avocado.webp";
import Soothing2 from "../../assets/Home/sheetMask/soothing/Charcoal.webp";
import Soothing3 from "../../assets/Home/sheetMask/soothing/Oatmeal.webp";
import Soothing4 from "../../assets/Home/sheetMask/soothing/TeaTree.webp";
import Moisturizing1 from "../../assets/Home/sheetMask/moisturizing/Papaya.webp";
import Moisturizing2 from "../../assets/Home/sheetMask/moisturizing/Greentea.webp";
import Moisturizing3 from "../../assets/Home/sheetMask/moisturizing/Kombucha.webp";
import Moisturizing4 from "../../assets/Home/sheetMask/moisturizing/Tammato.webp";
import IconImg from "../../assets/Home/sheetMask/icon.webp";
import PrevArrwo from "../../assets/Home/sheetMask/pre.webp";
import NextArrwo from "../../assets/Home/sheetMask/nextArrow.webp";
import Link from "next/link";

const sheetMasks = [
  {
    category: "Brightening & Glow",
    name: "White Pearl Mask",
    image: Brightening,
    modalItems: [
      { name: "Pomegranate Mask", image: Brightening1 },
      { name: "White Pearl Mask", image: Brightening4 },
      { name: "Rose Mask ", image: Brightening3 },
      { name: "Yuzu Mask ", image: Brightening2 },
    ],
  },
  {
    category: "Nourishing",
    name: "Avocado Mask",
    image: Nourishing,
    modalItems: [
      { name: "Acai Berry Mask", image: Nourishing1 },
      { name: "Royal Jelly Mask", image: Nourishing4 },
      { name: "Carrot Mask", image: Nourishing3 },
      { name: "Turmeric Mask", image: Nourishing2 },
    ],
  },
  {
    category: "Moisturizing",
    name: "Blueberry Mask",
    image: Moisturizing,
    modalItems: [
      { name: "Tomato Mask", image: Moisturizing4 },
      { name: "Kombucha Mask", image: Moisturizing3 },
      { name: "Green Tea Mask", image: Moisturizing2 },
      { name: "Papaya Mask", image: Moisturizing1 },
    ],
  },
  {
    category: "Soothing",
    name: "Tea Tree Mask",
    image: Soothing,
    modalItems: [
      { name: "Tea Tree Mask", image: Soothing4 },
      { name: "Oatmeal Mask", image: Soothing3 },
      { name: "Avocado Mask ", image: Soothing1 },
      { name: "Charcoal Mask ", image: Soothing2 },
    ],
  },
];

export const Mask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItems, setActiveItems] = useState([]);

  const openModal = (items) => {
    setActiveItems(items);
    setIsOpen(true);
  };

  return (
    <div className="bg-[#FFE3DB] py-10 px-4 mt-10 font-lustria ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-6">
          <div className="flex-1">
            <h2 className="text-2xl md:text-[45px] font-regular text-[#76564D] text-left">
              Sheet Masks
            </h2>
            <p className="max-w-lg text-[#000000] my-4 text-left font-light text-[14px]">
              Infused with sodium hyaluronate, aloe vera, and hydrolyzed
              collagen to pull in and lock hydration deep into the skin,
              delivering a plump, dewy finish. Enriched with collagen, vitamin
              E, and botanical extracts (like green tea, chamomile, turmeric),
              which support skin repair and strength. The inclusion of vitamins
              A/B5/C and turmeric helps even out skin tone.
            </p>
          </div>

          {/* Aligned Arrows */}
          <div className="hidden md:flex gap-1 mt-4 md:mt-0 md:ml-4">
            <button
              className="custom-prev w-10 h-10 flex items-center justify-center"
              aria-label="Previous"
            >
              <Image src={PrevArrwo} width={12} alt="pre" />
            </button>
            <button
              className="custom-next w-10 h-10 flex items-center justify-center  "
              aria-label="Next"
            >
              <Image src={NextArrwo} width={12} alt="next" />
            </button>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Custom Arrows */}
          <button
            className="block md:hidden custom-prev absolute left-[-4px]  top-1/2 -translate-y-1/2 z-10 w-10 h-10   flex items-center justify-center"
            aria-label="Previous"
          >
            <Image src={PrevArrwo} width={12} alt="pre" />
          </button>

          <button
            className="block md:hidden custom-next absolute right-[-4px] md:right-[-15px] 2xl:right-[-30px] top-1/2 -translate-y-1/2 z-10 w-10 h-10   flex items-center justify-center"
            aria-label="Next"
          >
            <Image src={NextArrwo} width={12} alt="next" />
          </button>

          {/* Swiper */}
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
            {sheetMasks.map((mask, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 border border-white cursor-pointer hover:shadow-lg transition rounded">
                  <div
                    className="w-fit mx-auto shadow-[0_8px_30px_#F7DDDD] h-[450px]"
                    onClick={() => openModal(mask.modalItems)}
                  >
                    <Image
                      src={mask.image}
                      alt={mask.name}
                      width={300}
                      height={400}
                      className="mx-auto h-[450px] w-[300px] object-cover rounded-t"
                    />
                  </div>
                </div>
                <h4 className="font-lustria text-[#692F21] text-[20px] text-center md:text-left font-medium mt-4">
                  {mask.category}
                </h4>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="/Muina_Mockup_Broucher.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-lustria border px-6 py-2  bg-[#FFE3DB] hover:bg-white border-[#000000]"
          >
            Browse Our Brochure
          </a>
        </div>

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-gradient-to-b from-pink-100 to-white max-w-5xl w-full rounded p-6 overflow-y-auto max-h-[90vh]">
              <div className="grid md:grid-cols-2 gap-6">
                {activeItems.map((item, idx) => (
                  <div key={idx} className="p-4 rounded text-center">
                    {/* Sheet Mask Image */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="mx-auto w-[250px] h-[300px] "
                    />

                    {/* Icon just below the sheet mask */}
                    <Image src={IconImg} alt="Icon" className="mx-auto mt-2" />

                    {/* Name below the icon */}
                    <p className="font-lustria text-[#692F21] mt-2 text-md font-medium ">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
};
