import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Or SiGithub, SiLinkedin from "react-icons/si"

import { Button } from "@/components/ui/button";
import { HeroBackground } from "./hero-background";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
      <HeroBackground />

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium text-blue-400">
            FullStack + AI Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            Building scalable software
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              systems with modern engineering
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Senior FullStack Engineer specialized in JavaScript, Go and
            Artificial Intelligence. I design and build reliable systems that
            scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          <div className="mt-10 flex gap-5 text-neutral-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-5 w-5 transition-colors hover:text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-5 w-5 transition-colors hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
