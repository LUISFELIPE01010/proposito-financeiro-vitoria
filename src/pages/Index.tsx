
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VideoSection } from "@/components/VideoSection";
import { CourseContent } from "@/components/CourseContent";
import { Quiz } from "@/components/Quiz";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FixedCTA } from "@/components/FixedCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <VideoSection />
      <CourseContent />
      <Quiz />
      <Testimonials />
      <Contact />
      <FixedCTA />
    </div>
  );
};

export default Index;
