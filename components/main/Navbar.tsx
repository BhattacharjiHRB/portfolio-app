"use client";

import { Socials } from "@/utils/constants";
import {
  bottomVariants,
  centerVariants,
  mobileNav,
  navLinks,
  topVariants,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src={"/logo.png"}
            alt="Logo"
            height={40}
            width={40}
            className=" cursor-pointer hover:animate-spin"
          />
          <span className="text-transparent text-4xl font-extrabold ml-2 md:text-4xl bg-clip-text bg-gradient-to-r from-sky-500 to-violet-600">
            HRBNeo
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-center">
          <div
            className="flex items-center w-full h-auto 
            max-md:hidden justify-evenly border border-[#7042f861] bg-[#030014
            5e] mr-[15px] px-[20px] py-[10px] rounded-full space-x-5
             "
          >
            <a href="/about" className=" cursor-pointer">
              {" "}
              About{" "}
            </a>
            <a href="/projects" className=" cursor-pointer">
              {" "}
              Projects{" "}
            </a>
            <a href="/contact" className=" cursor-pointer">
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-8 max-md:hidden">
          {Socials.map((social) => (
            <Link href={social.link} key={social.name} rel="external">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                height={25}
                width={25}
                className="cursor-pointer"
              />
            </Link>
          ))}
        </div>
        <div className="block md:hidden ml-5">
          <button
            className="w-5 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-purple-500 rounded origin-left  "
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-purple-500 rounded  "
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-purple-500 rounded origin-left  "
            ></motion.div>
          </button>
          {open && (
            <motion.div
              variants={mobileNav}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-[#030014] text-violet-400 flex flex-col items-center justify-center space-y-6 text-2xl font-bold"
            >
              <motion.a
                variants={navLinks}
                href="/"
                className=" cursor-pointer"
              >
                {" "}
                Home{" "}
              </motion.a>
              <motion.a
                variants={navLinks}
                href="/about"
                className=" cursor-pointer"
              >
                {" "}
                About{" "}
              </motion.a>
              <motion.a
                variants={navLinks}
                href="/Projects"
                className=" cursor-pointer"
              >
                {" "}
                Projects{" "}
              </motion.a>
              <motion.a
                variants={navLinks}
                href="/contact"
                className=" cursor-pointer"
              >
                {" "}
                Contact{" "}
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
