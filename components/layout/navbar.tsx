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
        buttonVariants({
          variant: "outline",
          size: "sm",
        }),

        "border-border",
        "bg-white/5",
        "text-foreground/70",
        "transition-all",

        "hover:border-cyan/50",
        "hover:bg-cyan/10",
        "hover:text-foreground",

        "rounded-[7px]",
        "py-4!",

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
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-border
        bg-background/60
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            items-center
            gap-10
            md:flex
          "
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  `
                  relative
                  text-sm
                  transition-all
                  duration-300

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-px
                  after:bg-cyan
                  after:transition-all
                  after:duration-300
                  `,

                  isActive
                    ? `
                      text-foreground
                      after:w-full
                    `
                    : `
                      text-foreground/60
                      hover:text-foreground
                      after:w-0
                      hover:after:w-full
                    `,
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* Desktop CV Button */}
          <DownloadCvButton className="hidden md:flex" />

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="
                    text-foreground/60
                    hover:bg-white/5
                    hover:text-foreground
                    md:hidden
                  "
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                border-border
                bg-background
                text-foreground
                px-5
              "
            >
              <nav
                className="
                  mt-10
                  flex
                  flex-col
                  gap-7
                "
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        `
                        text-lg
                        transition-colors
                        `,

                        isActive
                          ? "text-foreground"
                          : `
                            text-foreground/60
                            hover:text-foreground
                          `,
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
