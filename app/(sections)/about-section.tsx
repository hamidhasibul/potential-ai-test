import Image from "next/image";
import React from "react";

import heroImg from "@/assets/images/hero-img-2.png";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto p-6 my-10">
      <div className="flex items-center justify-between">
        {/* image */}
        <div className="w-1/2 flex items-center relative">
          <Image src={heroImg} alt="hero image" className="w-[540px]" />
          <div className="bg-pumpkin-600/60 w-80 h-20 absolute top-16 left-24"></div>
        </div>

        {/* content */}
        <div className="w-1/2 space-y-4">
          <h4 className="font-semibold text-6xl">About Me</h4>
          <p className="text-wrap">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            rerum reiciendis maiores ipsum magnam ut illum, aliquid ratione,
            aperiam non voluptatibus! Sit dolorum nulla ullam sapiente nisi
            fugit quo soluta.
          </p>
          <div className="">
            <div className="mb-4 space-y-4">
              <Label htmlFor="ux" className="font-semibold text-lg">
                UX
              </Label>
              <Slider id="ux" defaultValue={[80]} max={100} step={1} />
            </div>
            <div className="mb-4 space-y-4">
              <Label htmlFor="web-des" className="font-semibold text-lg">
                Website Design
              </Label>
              <Slider id="web-des" defaultValue={[90]} max={100} step={1} />
            </div>
            <div className="mb-4 space-y-4">
              <Label htmlFor="app-des" className="font-semibold text-lg">
                App Design
              </Label>
              <Slider id="app-des" defaultValue={[70]} max={100} step={1} />
            </div>
            <div className="mb-4 space-y-4">
              <Label htmlFor="gfx-des" className="font-semibold text-lg">
                Graphic Design
              </Label>
              <Slider id="gfx-des" defaultValue={[80]} max={100} step={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
