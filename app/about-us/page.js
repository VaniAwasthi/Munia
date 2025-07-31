import React from "react";
import { AboutBanner, AboutSec, Minimal } from "../components/about/Herosec";
import {
  KindtoSkinSec,
  Philosophy,
  SkinCareSteps,
} from "../components/about/philosphySec";
import { AboutExplorer, Broucher } from "../components/about/AboutExplorer";
import AmazonPromoSection from "../components/AmazonSec";

const Page = () => {
  return (
    <>
      <AboutBanner />
      <AboutSec />
      <Minimal />
      <Philosophy />
      <SkinCareSteps />
      <AboutExplorer />
      <KindtoSkinSec />
      <Broucher />
      <AmazonPromoSection />
    </>
  );
};

export default Page;
