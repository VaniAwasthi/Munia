"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.webp";
import Amazon from "../assets/amazon-pay.svg";
import Instagram from "../assets/instagram.webp";
import Facebook from "../assets/facebook.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#A6857C] text-white font-raleway  text-sm">
      <div className="max-w-7xl mx-auto grid  md:grid-cols-3 gap-10 items-start py-10">
        {/* 1. Logo + Newsletter */}
        <div className="px-3">
          <div className="text-center md:text-left">
            <Image
              src={Logo}
              alt="Muina Logo"
              className="w-10 h-10 rounded-full mx-auto md:mx-0"
            />
          </div>
          <h3 className="uppercase font-light tracking-wider mb-2 text-[18px] my-3 pb-4">
            Sign up for email and/or texts for the latest updates & more
          </h3>
          <p className="text-gray-200 text-xs mb-6 max-w-md leading-relaxed">
            By entering your email address and clicking Join Us you agree to
            receive marketing email messages from Muina. Unsubscribe at any
            time.
          </p>
          <form className="flex border-b border-white max-w-sm">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent placeholder-white text-white outline-none flex-1 py-1 text-sm"
            />
            <button
              type="submit"
              className="text-white font-semibold uppercase text-xs"
            >
              Join Us
            </button>
          </form>
        </div>

        {/* 2. Amazon CTA */}
        <div className="grid grid-cols-2 gap-4 mt-5 lg:mt-12">
          <div className="flex flex-col items-center justify-center ccursor-pointor">
            <p className="uppercase tracking-wide mb-2 text-md font-semibold">
              Available On
            </p>
            <a
              href="https://www.amazon.in/s?k=muina&crid=2CXXH9HDBNAA4&sprefix=muina%2Caps%2C263&ref=nb_sb_noss_1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Amazon} alt="Amazon Logo" className="w-24 mb-4" />
            </a>
            <a
              href="https://www.amazon.in/s?k=muina&crid=2CXXH9HDBNAA4&sprefix=muina%2Caps%2C263&ref=nb_sb_noss_1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#A6857C] px-4 py-2 text-xs uppercase font-bold rounded hover:bg-opacity-90 transition"
            >
              Shop Now
            </a>
          </div>
          <div className="flex md:hidden flex-col space-y-2 text-center md:text-left ">
            <Link
              href="/"
              className="uppercase font-semibold tracking-wide text-sm"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="uppercase font-semibold tracking-wide text-sm"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="uppercase font-semibold tracking-wide text-sm"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* 3. Navigation & Social */}
        <div className="flex flex-col md:flex-row justify-center md:justify-end gap-10 mt-5 lg:mt-12">
          <div className="hidden md:flex flex-col space-y-2 text-center md:text-left">
            <Link
              href="/"
              className="uppercase font-semibold tracking-wide text-sm"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="uppercase font-semibold tracking-wide text-sm"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="uppercase font-semibold tracking-wide text-sm"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-row md:flex-col justify-center px-4 md:justify-start items-center md:items-start space-y-2">
            <p className="uppercase font-semibold tracking-wide text-sm">
              Follow Us
            </p>
            <div className="flex space-x-4 px-4">
              <a
                href="https://www.instagram.com/muinacosmetics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image src={Instagram} alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Muina-Cosmetics/61571584588767/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image src={Facebook} alt="Facebook" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t  pt-4 text-center text-xs text-white font-bold flex flex-col md:flex-row justify-center items-center gap-2 py-3">
        <p>
          © 2025 Muina. All rights reserved.
          <a href="#" className="underline px-1">
            Terms & Conditions
          </a>
          <a href="#" className="underline px-1">
            Privacy Policy
          </a>
        </p>
        <p className="text-xs tracking-wide">
          Designed by{" "}
          <a href="https://www.cruxcreativesolutions.com/ " target="_blank">
            {" "}
            Crux
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
