"use client";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.webp"; // Replace with your correct logo path
import Link from "next/link";
import Amazon from "../assets/amazon-white.svg";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#7B615A] text-white font-lustria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between h-16 w-full text-sm tracking-wide">
          {/* Left Menu */}
          <div className="flex space-x-8">
            <Link href="/" className="hover:underline">
              HOME
            </Link>
            <Link href="/about-us" className="hover:underline">
              ABOUT US
            </Link>
            <Link href="/contact" className="hover:underline">
              CONTACT US
            </Link>
          </div>

          {/* Center Logo */}
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
            <Image src={Logo} alt="logo" width={40} height={40} />
          </div>

          {/* Right CTA */}
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm">SHOP NOW ON</span>
            <a
              href="https://amzn.in/d/6Tmorut"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Amazon}
                alt="Amazon"
                width={60}
                height={30}
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex items-center justify-between h-16 md:hidden">
          {/* Mobile Logo */}
          <div className="flex items-center">
            <Image src={Logo} alt="logo" width={40} height={40} />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-[#7B615A] px-4 py-4 space-y-2 text-sm">
          <Link href="/" className="block">
            HOME
          </Link>
          <Link href="/about-us" className="block">
            ABOUT US
          </Link>
          <Link href="/contact" className="block">
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};
