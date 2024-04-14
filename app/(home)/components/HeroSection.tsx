import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "./ui/MovingBorderBtn";

const HeroSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse py-12 lg:py-0 lg:flex-row lg:gap-0 justify-between items-center gap-14">
      <div>
        <div className="space-y-10">
          <h1 className="text-4xl lg:text-7xl">
            Nice to meet you! 👋 <br />
            {/* underline-offset=8 means distance of an underline text decoration line  from its original position by 8px */}
            <span className="underline underline-offset-8 decoration-green-500 font-bold">
              {"I'm Tapas."}
            </span>
          </h1>
          <p className="md:w-96 text-lg text-gray-300">
            From concept to code, I craft exceptional web experiences.
            Full-Stack Developer based in India
          </p>
        </div>
        <Link href={"mailto:tapasdash017@gmail.com"}>
          <div className="group">
            <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
              {/* Without transition-all:

Imagine a button with black text (text-black).
You add a hover effect to change the text color to green (hover:text-green-500).
When you hover over the button, the text color will instantly jump from black to green. This can feel abrupt and less visually appealing.
With transition-all:

By adding transition-all, you tell the browser to animate the change in text color.
The browser will gradually transition the color from black to green over a short period (usually milliseconds).
This creates a smoother and more polished user experience. */}
              {/* hover:text-green-50 means whenever you you hover on this it will turn green */}
              Contact Me 📬
              {/* Got Group-hover from tailwindcss and used it effortlessly.
Put group in the parent element and group-hover: in all those child elements link:https://dev.to/aasthapandey/group-hover-using-tailwind-css-4a2l */}
            </h1>
            <div className="w-2/6 h-2 rounded-full bg-green-500"></div>
            <div className=" w-2/6 h-2 rounded-full bg-indigo-500 translate-x-2"></div>
            {/* translate-x-2 helps in moving by 2 px along the x axis */}
          </div>
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-8 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-8 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="glow"></div>
        <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
          🚀 Available For Work
        </MovingBorderBtn>
      </div>
    </div>
  );
};

export default HeroSection;
