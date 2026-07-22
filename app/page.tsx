import { Hero } from "@/components/sections/hero/hero";
import { Stats } from "@/components/sections/stats/stats";
import { TechStack } from "@/components/sections/stack/tech-stack";

export default function Home() {
  return (
    <main>
      <Hero />

      <Stats />

      <TechStack />
    </main>
  );
}
