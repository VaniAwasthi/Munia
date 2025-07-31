"use client";
import React from "react";
import {
  CleansingRange,
  HandcareSec,
  SkincareSection,
  YourSkinStory,
} from "./components/home/Skin";
import { HeroSection, FacialMaskSec } from "./components/home/HeroSec";
import {
  EssenceAndBalmSection,
  EyeCare,
  PatchSection,
} from "./components/home/BamHydrasec";
import { Mask } from "./components/home/Mask";
import AmazonPromoSection from "./components/AmazonSec";

export const metadata = {
  title: "Muina – Nature-Driven Korean Skincare for You",
  description:
    "Muina redefines K-beauty with potent natural actives and eco-conscious innovation. Skincare by women, for women—tailored for your unique skin.",
};

export default function HomeClient() {
  return (
    <>
      <HeroSection />
      <YourSkinStory />
      <Mask />
      <FacialMaskSec />
      <SkincareSection />
      <CleansingRange />
      <HandcareSec />
      <EssenceAndBalmSection />
      <PatchSection />
      <EyeCare />
    </>
  );
}
