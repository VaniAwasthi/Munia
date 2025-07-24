"use client";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.svg";
import Link from "next/link";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="primary font-[--font-lustria]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center md:hidden block">
            <Image src={Logo} alt="logo" width={40} height={40} />
          </div>

          {/* Center Nav */}
          <div className="hidden md:flex items-center justify-left flex-1 ">
            <div className="flex space-x-8 text-md tracking-wide">
              <Link href="/" className="hover:underline">
                HOME
              </Link>
              <Link href="about-us" className="hover:underline">
                ABOUT US
              </Link>
              <Link href="/contact" className="hover:underline">
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center border-b border-gray-300 text-sm">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white placeholder-white focus:outline-none px-2 py-1"
              />
              <FiSearch className="text-white ml-2 " />
            </div>
            <Image
              src={Logo}
              alt="logo"
              width={40}
              height={40}
              className="hidden md:block"
            />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#5e3d35] px-4 py-4 space-y-2 text-sm">
          <a href="#" className="block">
            HOME
          </a>
          <a href="#" className="block">
            ABOUT US
          </a>
          <a href="#" className="block">
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
};
