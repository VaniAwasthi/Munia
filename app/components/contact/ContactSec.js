"use client";
import React from "react";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Banner from "../../assets/contact/ContactBanner.webp";
import TextBg from "../../assets/contact/InfoSec.webp";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Banner */}
      <section className="w-full h-[300px] md:h-[600px] flex items-center justify-center text-white relative">
        <Image
          src={Banner}
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-lustria text-2xl md:text-[56px] font-semibold"
          >
            GET IN TOUCH!
          </motion.h1>
        </div>
      </section>

      {/* Message Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-12 text-center">
        <div className="relative w-full">
          <Image
            src={TextBg}
            alt="Background Content"
            width={1400}
            height={300}
            className="mx-auto w-full h-auto"
          />
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-lustria absolute inset-0 flex items-center justify-center text-[18px] md:text-[35px] px-4 md:px-0 max-w-4xl mx-auto text-[#3d2f2b] md:leading-[4rem]"
          >
            “WE’D LOVE TO HEAR FROM YOU. WHETHER IT’S FEEDBACK, A QUESTION, OR A
            PARTNERSHIP OPPORTUNITY — DROP US A MESSAGE.”
          </motion.p>
        </div>

        <div className="font-raleway mt-16 flex flex-row gap-12 items-stretch justify-center">
          {/* Form */}
          <form className="flex-1 max-w-md w-full space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="border w-full p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="border w-full p-3 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border w-full p-3 rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="border w-full p-3 rounded"
            />

            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-[#DC9B97] hover:bg-[#c98984] text-white px-6 py-3 rounded transition"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="block bg-[#3D2F2B] w-[1px] self-stretch"></div>

          {/* Info */}
          <div className="flex-1 max-w-md space-y-6 text-left">
            <div>
              <h3 className="font-bold text-lg">Address</h3>
              <p>
                Muina Skincare HQ
                <br />
                123 Wellness Avenue, New Delhi, India – 110001
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Support Info</h3>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-2">
                  <MdEmail className="text-xl" />
                  <a href="mailto:support@munia.in" className="text-[#000]">
                    support@munia.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MdPhone className="text-xl" />
                  <a href="tel:+919876543210" className="text-[#000]">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg">Social</h3>
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="text-[#000]">
                  <FaFacebook />
                </a>
                <a href="#" className="text-[#000]">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Inquiry Section */}
      <section className="bg-[#EFD3CA] px-5 md:px-8 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-lustria text-2xl md:text-4xl font-bold mb-6">
            CONTACT US FOR BUSINESS
          </h2>
          <p className="font-raleway mb-12 text-[16px] md:text-[22px] max-w-lg mx-auto">
            "For partnerships, distribution, influencer collaborations, or
            press—let’s connect."
          </p>

          <form className="space-y-6 max-w-xl mx-auto text-left font-raleway">
            <input
              type="text"
              placeholder="Company"
              className="border w-full p-3 rounded bg-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="border w-full p-3 rounded bg-white"
            />
            <input
              type="text"
              placeholder="Business Type"
              className="border w-full p-3 rounded bg-white"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="border w-full p-3 rounded bg-white"
            />
            <button className="bg-[#3D2F2B] text-white px-6 py-3 rounded hover:bg-[#2b221f] transition">
              Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
