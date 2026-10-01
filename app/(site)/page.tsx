import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import Discover from "@/components/home/Discover";
import LearningPaths from "@/components/home/LearningPaths";
import Growth from "@/components/home/Growth";
import CreatorCta from "@/components/home/CreatorCta";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Discover />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
