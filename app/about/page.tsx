"use client";

import BrainSvg from "@/components/main/BrainSvg";
import DownloadButton from "@/components/sub/DowloadButton";
import { Socials } from "@/utils/constants";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const skillsShowing = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement>(null);
  const experienceShowing = useInView(experienceRef, { margin: "-100px" });

  const filePath = "/hrbResume.pdf";

  return (
    <div className=" h-full ">
      <div className="h-full overflow-scroll md:flex">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-10 justify-center">
            <Image
              src="/myphoto.jpg"
              alt="Profile Photo"
              width={250}
              height={250}
              className=" rounded-full object-cover"
            />
            <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600 ">
              Hrittik Bhattacharjee
            </h1>
            <h1 className="font-bold text-2xl mt-2">BIOGRAPHY</h1>
            <p className="text-lg">
              As a Frontend Junior Developer, I specialize in crafting dynamic
              and user-friendly web experiences. With proficiency in
              technologies such as Next.js, Tailwind CSS, React, TypeScript, and
              JavaScript, I adeptly create responsive and intuitive interfaces
              that engage users effectively. Leveraging libraries like Axios, I
              ensure seamless communication between the frontend and backend
              systems, enhancing overall performance. Beyond my current skill
              set, I am eagerly looking to expand my knowledge to include Go
              Lang for backend development. Also I have beginner level
              proficiency in ExpressJs My enthusiasm for learning and dedication
              to mastering new technologies drive me to continually evolve and
              contribute innovative solutions to development projects.
            </p>
            <div className="flex flex-row md:hidden space-x-5 ">
              {Socials.map((social) => (
                <Link href={social.link} key={social.name}>
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
            <DownloadButton filePath={filePath} />
          </div>

          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={skillsShowing ? { x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>

            <motion.div
              initial={{ x: "-1000px" }}
              animate={skillsShowing ? { x: 0 } : {}}
              transition={{ delay: 0.8, ease: "easeIn" }}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                HTML
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                CSS
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                React.js
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                Next.js
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                SCSS
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                ShadcnUi
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                DaisyUi
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                Three.js
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                WebGL
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                Webpack
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                Vite
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                ASP.net
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                Firebase
              </div>
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                Git
              </div>
              {/* <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                Figma
              </div> */}
              <div className="rounded  p-2 text-sm bg-purple-800/80 text-violet-200  ">
                {" "}
                ExpressJs
              </div>
            </motion.div>
          </div>

          <div
            ref={experienceRef}
            className="flex flex-col gap-12 justify-center pb-48"
          >
            <motion.h1
              initial={{ x: "-1000px" }}
              animate={experienceShowing ? { x: 0 } : {}}
              transition={{ delay: 0.8, ease: "easeIn" }}
              ref={experienceRef}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-1000px" }}
              animate={experienceShowing ? { x: 0 } : {}}
              transition={{ delay: 0.8, ease: "easeIn" }}
              ref={experienceRef}
            >
              <div className="flex justify-between h-48">
                <div className="w-full md:w-1/3">
                  <div className="bg-purple-600/80 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior Software Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    I build websites, offering expertise in JavaScript
                    framework.{" "}
                  </div>
                  <div className="p-3 text-sky-400 text-sm font-semibold">
                    May,2023 - May,2024
                  </div>
                  <div className="p-1 rounded bg-sky-800 text-sm font-semibold w-fit">
                    Cycaf Pvt Ltd
                  </div>
                </div>

                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-400 bg-inherit -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>
              <div className="flex justify-between h-48">
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div
          className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 overflow-y-scroll"
          ref={containerRef}
        >
          <BrainSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
