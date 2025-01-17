import Image from "next/image";

import heroImg from "@/assets/images/hero-img-1.png";
import { Button } from "@/components/ui/button";
import fbIcon from "@/assets/images/fb-icon.svg";
import twitterIcon from "@/assets/images/twitter-icon.svg";
import instagramIcon from "@/assets/images/instagram-icon.svg";
import linkedinIcon from "@/assets/images/linkedin-icon.svg";

export default function HeroSection() {
  return (
    <section id="hero" className="container mx-auto p-6 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/*Hero Text  */}
        <div className="flex items-center justify-start">
          <div className="md:space-y-4 space-y-2 text-center md:text-start">
            <p className="md:text-2xl">Hi I am</p>
            <p className="text-3xl font-semibold text-pumpkin-600">
              Muhammad Umair
            </p>
            <div className="">
              <h3 className="md:text-8xl text-5xl font-bold">UI & UX</h3>
              <h3 className="md:text-8xl text-5xl font-bold mb-8 md:ml-48">
                Designer
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              nulla porro autem, reiciendis beatae sapiente consectetur dicta
              perferendis, voluptas quos iste suscipit! Provident exercitationem
              nemo quo, quidem impedit officia ullam!
            </p>

            <Button
              variant={"pumpkin"}
              size={"lg"}
              className=" dark:text-white"
            >
              Hire Me
            </Button>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex flex-col items-center relative space-y-5">
          <Image src={heroImg} alt="hero image" className="w-[540px] mx-auto" />
          <div className="bg-pumpkin-600/60 w-60 md:w-80 h-16 md:h-20 absolute md:top-16 top-5"></div>
          {/* social icons */}
          <div className="flex items-center justify-between gap-6">
            <Image
              src={fbIcon}
              alt="facebook"
              className="text-black dark:invert "
            />
            <Image
              src={twitterIcon}
              alt="facebook"
              className="text-black dark:invert "
            />
            <Image
              src={instagramIcon}
              alt="facebook"
              className="text-black dark:invert "
            />
            <Image
              src={linkedinIcon}
              alt="facebook"
              className="text-black dark:invert "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
