"use client";

import Link from "next/link";
import { useState } from "react";
import { Download, Menu } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Blog", href: "#blog", id: "blog" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function DownloadCvButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href="/cv.pdf"
      target="_blank"
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: "outline", size: "sm" }),
        "border-white/15 bg-white/5 text-neutral-300 transition-all",
        "hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white",
        "rounded-[7px] py-4!",
        className,
      )}
    >
      <Download className="mr-2 h-4 w-4" />
      Download CV
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070a]/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative text-sm transition-all duration-300",
                  "after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-cyan-400 after:transition-all after:duration-300",
                  isActive
                    ? "text-white after:w-full"
                    : "text-neutral-400 hover:text-white after:w-0 hover:after:w-full",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop CV Button */}
          <DownloadCvButton className="hidden md:flex" />

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-neutral-400 hover:bg-white/5 hover:text-white md:hidden"
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-white/10 bg-[#05070a] text-white"
            >
              <nav className="mt-10 flex flex-col gap-7">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-lg transition-colors",
                        isActive
                          ? "text-white"
                          : "text-neutral-400 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Mobile CV Button */}
                <DownloadCvButton
                  className="mt-5"
                  onClick={() => setOpen(false)}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
