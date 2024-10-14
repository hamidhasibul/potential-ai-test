import SectionHeader from "@/components/section-header";
import React from "react";

import uiIcon from "@/assets/images/ui-icon.svg";
import webIcon from "@/assets/images/web-icon.svg";
import appIcon from "@/assets/images/mobile-icon.svg";
import gfxIcon from "@/assets/images/gfx-icon.svg";
import ServiceCard from "@/components/service-card";

const services = [
  {
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: uiIcon,
  },
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: webIcon,
  },
  {
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: appIcon,
  },
  {
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    icon: gfxIcon,
  },
];

export default function ServicesSection() {
  const renderServices = services.map((service, index) => (
    <ServiceCard
      key={index}
      title={service.title}
      description={service.description}
      icon={service.icon}
    />
  ));
  return (
    <section id="services" className="container mx-auto p-6 my-10">
      <SectionHeader title="Services">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </SectionHeader>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {renderServices}
      </div>
    </section>
  );
}
