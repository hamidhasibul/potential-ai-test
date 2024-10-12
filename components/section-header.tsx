import React, { ReactNode } from "react";

type Props = { title: string; children?: ReactNode };

export default function SectionHeader({ title, children }: Props) {
  return (
    <div className="text-center space-y-10 mb-10">
      <h4 className="font-semibold text-6xl">{title}</h4>
      <p className="w-2/3 mx-auto">{children}</p>
    </div>
  );
}
