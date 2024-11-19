import AnimationProvider from "@/components/sub/AnimationProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hrittik's Portfolio",
  description: "I am Hrittik Bhattacharjee And This is my Portfolio App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014]  text-white overflow-x-hidden overflow-y-scroll`}
      >
        <div className="bg-sky-900 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] " />
        <div className="bg-indigo-900 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] " />

        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
