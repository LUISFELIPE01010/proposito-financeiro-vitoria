
import { Hero } from "@/components/Hero";
import { CountdownTimer } from "@/components/CountdownTimer";
import { VideoSection } from "@/components/VideoSection";
import { About } from "@/components/About";
import { CourseContent } from "@/components/CourseContent";
import { Quiz } from "@/components/Quiz";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FixedCTA } from "@/components/FixedCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="space-y-8">
        <Hero />
        <CountdownTimer />
        <VideoSection />
        <About />
        <CourseContent />
        <Quiz />
        <Testimonials />
        <Contact />
      </div>
      <FixedCTA />
    </div>
  );
};

export default Index;
