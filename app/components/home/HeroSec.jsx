"use client";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative bg-cover text-white text-center overflow-x-hidden">
      <div className="w-full">
        <video className="w-full" muted autoPlay loop playsInline>
          <source src="/videos/HomeBanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export const FacialMaskSec = () => {
  return (
    <section className="w-full mx-auto py-10">
      <div className="w-full">
        <video className="w-full" muted autoPlay loop playsInline>
          <source src="/videos/Muina-Pomegranate.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
