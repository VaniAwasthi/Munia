// Mask.jsx
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import Brightening from "../../assets/Home/sheetMask/Brightening.svg";
import Nourishing from "../../assets/Home/sheetMask/Nourishing.svg";
import Soothing from "../../assets/Home/sheetMask/soothing.svg";
import Moisturizing from "../../assets/Home/sheetMask/Moisturizing.svg";
import Brightening1 from "../../assets/Home/sheetMask/brightening/Pomegranate.svg";
import Brightening2 from "../../assets/Home/sheetMask/brightening/YuzuFacial.svg";
import Brightening3 from "../../assets/Home/sheetMask/brightening/RoseFacial.svg";
import Brightening4 from "../../assets/Home/sheetMask/brightening/WhitePearl.svg";
import Nourishing1 from "../../assets/Home/sheetMask/nourishing/Acaiberry.svg";
import Nourishing2 from "../../assets/Home/sheetMask/nourishing/Tumeric.svg";
import Nourishing3 from "../../assets/Home/sheetMask/nourishing/Carrot.svg";
import Nourishing4 from "../../assets/Home/sheetMask/nourishing/RoyalJelly.svg";
import Soothing1 from "../../assets/Home/sheetMask/soothing/Avocado.svg";
import Soothing2 from "../../assets/Home/sheetMask/soothing/Charcoal.svg";
import Soothing3 from "../../assets/Home/sheetMask/soothing/Oatmeal.svg";
import Soothing4 from "../../assets/Home/sheetMask/soothing/TeaTree.svg";
import Moisturizing1 from "../../assets/Home/sheetMask/Moisturizing/Papaya.svg";
import Moisturizing2 from "../../assets/Home/sheetMask/Moisturizing/Greentea.svg";
import Moisturizing3 from "../../assets/Home/sheetMask/Moisturizing/Kombucha.svg";
import Moisturizing4 from "../../assets/Home/sheetMask/Moisturizing/Tammato.svg";
import IconImg from "../../assets/Home/sheetMask/icon.svg";
import PrevArrwo from "../../assets/Home/sheetMask/pre.svg";
import NextArrwo from "../../assets/Home/sheetMask/nextArrow.svg";

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
      { name: "Aloe Vera Mask", image: "/masks/aloe-vera.png" },
      { name: "Tomato Mask", image: "/masks/tomato.png" },
      { name: "Kombucha Mask", image: "/masks/kombucha.png" },
      { name: "Green Tea Mask", image: "/masks/green-tea.png" },
      { name: "Papaya Mask", image: "/masks/papaya.png" },
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
    <div className="bg-[#E5B6A7] py-10 px-4 mt-10 font-[--font-lustria] ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-[40px] font-semibold text-center md:text-left mb-4 text-[#76564D]">
          Sheet Masks
        </h2>
        <p className="text-center md:text-left max-w-xl  text-[#000000] mb-8">
          Infused with sodium hyaluronate, aloe vera, and hydrolyzed collagen to
          pull in and lock hydration deep into the skin, delivering a plump,
          dewy finish.
        </p>

        <div className="relative max-w-7xl mx-auto">
          {/* Custom Arrows */}
          <button
            className="custom-prev absolute left-[-4px] md:left-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10   flex items-center justify-center"
            aria-label="Previous"
          >
            <Image src={PrevArrwo} width={10} alt="pre" />
          </button>

          <button
            className="custom-next absolute right-[-4px]  md:right-[-50px] top-1/2 -translate-y-1/2 z-10 w-10 h-10   flex items-center justify-center"
            aria-label="Next"
          >
            <Image src={NextArrwo} width={10} alt="next" />
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
                  <div className="w-fit mx-auto shadow-[0_8px_30px_#F7DDDD]">
                    <Image
                      src={mask.image}
                      alt={mask.name}
                      width={300}
                      height={400}
                      className="mx-auto"
                    />
                  </div>
                </div>
                <h4 className="font-[--font-lustria] text-[#692F21] text-[22px] text-center md:text-left font-medium mt-4">
                  {mask.category}
                </h4>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-6">
          <button className="font-[--font-lustria] border px-6 py-2 rounded bg-[#E5B6A7] hover:bg-gray-100">
            Browse Our Brochure
          </button>
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
                      className="mx-auto w-[300px] h-[200px] "
                    />

                    {/* Icon just below the sheet mask */}
                    <Image src={IconImg} alt="Icon" className="mx-auto mt-2" />

                    {/* Name below the icon */}
                    <p className="font-[--font-lustria] text-[#692F21] mt-2 text-md font-medium ">
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
