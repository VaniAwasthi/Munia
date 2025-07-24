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

export default function Home() {
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
