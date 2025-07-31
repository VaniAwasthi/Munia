import React from "react";
import Image from "next/image";
import promoBg from "../assets/Amzon.png"; // replace with your actual image path
import Link from "next/link";

const AmazonPromoSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[400px] lg:h-[400px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={promoBg}
          alt="Amazon Promo"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.85]" // slightly dim the image
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 h-full flex  flex-col justify-center items-start px-6 md:px-16 text-left">
          <h2 className="text-3xl leading-[4rem]  md:text-[40px] lg:text-[60px] font-serif font-regular mb-4 mt-[4rem]">
            AVAILABLE ON <br /> AMAZON
          </h2>
          <Link
            href="https://www.amazon.in/s?k=muina&crid=2CXXH9HDBNAA4&sprefix=muina%2Caps%2C263&ref=nb_sb_noss_1"
            className="border border-black  px-6 py-2 text-sm hover:bg-[#3d2b2b] hover:text-white transition mt-[2rem]"
          >
            Shop Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AmazonPromoSection;
