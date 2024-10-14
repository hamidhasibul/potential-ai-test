import React, { ReactNode } from "react";

type Props = { title: string; children?: ReactNode };

export default function SectionHeader({ title, children }: Props) {
  return (
    <div className="text-center md:space-y-10 space-y-5 mb-10">
      <h4 className="font-semibold text-5xl md:text-6xl">{title}</h4>
      <p className="md:w-2/3 mx-auto">{children}</p>
    </div>
  );
}
