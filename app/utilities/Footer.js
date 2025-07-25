"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.webp";
import Instagram from "../assets/instagram.webp";
import Facebook from "../assets/facebook.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#A6857C] text-white font-raleway px-6 md:px-16 py-14 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* 1. Logo + Newsletter */}
        <div className="max-w-xl w-full md:w-auto">
          <div className="text-center md:text-left">
            <Image
              src={Logo}
              alt="Muina Logo"
              className="w-20 h-20 rounded-full mx-auto md:mx-0"
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

        {/* 2. Navigation & Contact */}
        <div className="flex flex-row w-full md:w-auto justify-between gap-10">
          {/* Links */}
          <div className="flex flex-col space-y-1 text-center sm:text-left">
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

          {/* Contact & Social */}
          <div className="flex flex-col items-center sm:items-start space-y-1">
            <Link
              href="/contact"
              className="uppercase font-semibold tracking-wide text-sm"
            >
              Contact Us
            </Link>
            <div className="flex space-x-4 mt-2">
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

      {/* 3. Bottom Copyright */}
      <div className="text-center mt-10">
        <p className="text-xs text-[#FFFFFF] leading-relaxed">
          © 2025 Muina all rights reserved
          <a href="#" className="underline px-1">
            Terms & Conditions
          </a>
          <a href="#" className="underline px-1">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
