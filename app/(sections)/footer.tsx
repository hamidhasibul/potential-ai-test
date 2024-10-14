import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.svg";
import { links } from "@/components/navbar";
import fbIcon from "@/assets/images/fb-icon.svg";
import twitterIcon from "@/assets/images/twitter-icon.svg";
import instagramIcon from "@/assets/images/instagram-icon.svg";
import linkedinIcon from "@/assets/images/linkedin-icon.svg";
import Link from "next/link";

export default function Footer() {
  const renderLinks = links.map((link) => (
    <Link key={link.url} href={link.url}>
      {link.label}
    </Link>
  ));
  return (
    <footer className="bg-zinc-100 dark:bg-transparent">
      <div className="container mx-auto p-6 mt-10">
        <div className="flex items-center justify-center gap-4 my-16">
          <Image src={logo} alt="logo" />
          <h4 className="text-3xl">
            <span className="font-bold">M</span>
            <span className="text-black/70 dark:text-white">umair</span>
          </h4>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center font-medium gap-6">
          {renderLinks}
        </div>

        <div className="flex items-center justify-center gap-6 my-10">
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
      <div className="bg-[#545454] dark:bg-black p-4">
        <p className="text-center text-white">
          &#169; 2024 <span className="text-pumpkin-600">Mumair</span> All
          Rights Reserved, Inc.
        </p>
      </div>
    </footer>
  );
}
