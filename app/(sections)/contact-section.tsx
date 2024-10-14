import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto p-6 my-10">
      <SectionHeader title="Let's Design Together">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </SectionHeader>
      <div className="w-1/2 mx-auto flex items-center justify-center gap-6">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-zinc-100"
        />
        <Button variant={"pumpkin"} className="dark:text-white">
          Contact Me
        </Button>
      </div>
    </section>
  );
}
