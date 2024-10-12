import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="bg-[#f8f8f8] w-1/4 rounded-lg px-4 py-10 space-y-6 dark:text-black">
      <Image src={icon} alt={title} />
      <h4 className="font-semibold text-3xl dark:text-black">{title}</h4>
      <p className="text-lg">{description}</p>
    </div>
  );
}
