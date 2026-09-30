import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import CourseCategories from "@/components/landing-page/CourseCategories";
import CoursesSection from "@/components/landing-page/CoursesSection";
import CreatorCTA from "@/components/landing-page/CreatorCTA";
import GrowthSection from "@/components/landing-page/GrowthSection";
import Hero from "@/components/landing-page/Hero";
import LearningPaths from "@/components/landing-page/LearningPaths";
import Testimonials from "@/components/landing-page/Testimonials";
import TrustedBy from "@/components/landing-page/TrustedBy";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <CourseCategories />
        <CoursesSection />
        <LearningPaths />
        <GrowthSection />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}