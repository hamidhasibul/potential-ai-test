"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === "dark") {
    return (
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setTheme("light")}
      >
        <Moon />
      </Button>
    );
  } else {
    return (
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => setTheme("dark")}
      >
        <Sun />
      </Button>
    );
  }
}
