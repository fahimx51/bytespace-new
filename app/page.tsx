import Navbar from "@/components/header/Navbar";
import CourseCategories from "@/components/landing-page/CourseCategories";
import CoursesSection from "@/components/landing-page/CoursesSection";
import GrowthSection from "@/components/landing-page/GrowthSection";
import Hero from "@/components/landing-page/Hero";
import LearningPaths from "@/components/landing-page/LearningPaths";
import TrustedBy from "@/components/landing-page/TrustedBy";
import Logo from "@/components/ui/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <CourseCategories />
      <CoursesSection />
      <LearningPaths />
      <GrowthSection />
    </div>
  );
}
