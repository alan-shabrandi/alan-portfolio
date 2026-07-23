import { ArrowRight, Mail, Award, Layers, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-hero-bg text-foreground overflow-hidden flex items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Alan Shabrandi
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-hero-title">
              FullStack + AI Engineer
            </h2>
          </div>

          <p className="text-muted text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">
            Building scalable software systems with{" "}
            <span className="text-gray-200 font-medium">JavaScript</span>,{" "}
            <span className="text-gray-200 font-medium">Go</span> and{" "}
            <span className="text-gray-200 font-medium">
              Artificial Intelligence
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 gradient-btn-primary hover:opacity-90 text-white font-semibold px-6 py-3.5 rounded-custom shadow-lg glow-blue transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-surface-dark hover:bg-surface-hover border border-border text-gray-200 font-medium px-6 py-3.5 rounded-custom transition-all"
            >
              Contact Me
              <Mail className="w-4 h-4 text-muted" />
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-muted border-t border-border">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue shrink-0" />
              <span>8+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue shrink-0" />
              <span>Clean Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue shrink-0" />
              <span>Reliable Delivery</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-112-5 lg:max-w-none">
            <Image
              src="/hero.png"
              alt="Alan Shabrandi - Hero Image"
              width={650}
              height={650}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
