"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";

const Footer = () => {
  return (
    <footer className="font-[--font-raleway] bg-[#7c5b52] text-white px-6 md:px-16 py-14 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col-reverse sm:flex-row justify-between items-start gap-10">
        {/* Left: Newsletter Signup */}
        <div className="flex-1 max-w-2xl">
          <h3 className="uppercase font-light tracking-wider mb-2 text-sm">
            Sign up for email and/or texts for the latest updates & more
          </h3>
          <p className="text-gray-200 text-xs mb-6 max-w-md leading-relaxed">
            By entering your email address and clicking Join Us you agree to
            receive marketing email messages from Muina at the email address
            provided. Unsubscribe at any time.
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

        {/* Right: Links, Logo & Legal */}
        <div className="flex flex-row-reverse sm:flex-row gap-13 md:gap-10 w-full md:w-auto justify-center md:justify-between items-center md:items-start">
          {/* About + Contact + Social */}
          <div className="space-y-5 text-left">
            <div>
              <h4 className="uppercase font-semibold tracking-wide text-sm">
                About
              </h4>
              <p className="mt-1 text-sm">Our Story</p>
            </div>
            <div>
              <h4 className="uppercase font-semibold tracking-wide text-sm">
                Contact Us
              </h4>
              <div className="flex space-x-4 mt-2">
                <a href="#" aria-label="Instagram">
                  <Image src={Instagram} alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Facebook">
                  <Image src={Facebook} alt="Facebook" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Logo + Legal */}
          <div className="text-center md:text-left">
            <Image
              src={Logo}
              alt="Muina Logo"
              className="w-12 h-12 rounded-full mx-auto md:mx-0"
            />
            <p className="text-xs text-gray-200 mt-2 leading-relaxed">
              © 2025 Muina all rights reserved <br />
              <a href="#" className="underline">
                Terms & Conditions
              </a>{" "}
              |{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
