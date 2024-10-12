import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeSwitch from "./theme-switch";

const links = [
  { label: "Home", url: "/" },
  { label: "About Me", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Projects", url: "/projects" },
  { label: "Testimonials", url: "/testimonials" },
  { label: "Contacts", url: "/contacts" },
];

export default function Navbar() {
  const renderLinks = links.map((link) => (
    <Link key={link.url} href={link.url}>
      {link.label}
    </Link>
  ));
  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo/Text */}
        <div className="flex items-center gap-5">
          <Image src={logo} alt="logo" className="w-14" />
          <h4 className="text-3xl">
            <span className="font-bold">M</span>
            <span className="text-black/70 dark:text-white">umair</span>
          </h4>
        </div>
        <div className="flex items-center font-medium gap-6 ">
          {renderLinks}
          <ThemeSwitch />
          <Button variant={"pumpkin"} size={"lg"} className="dark:text-white">
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  );
}
