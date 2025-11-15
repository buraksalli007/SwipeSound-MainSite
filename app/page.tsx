import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialMetrics from "@/components/SocialMetrics";
import CommunityPreview from "@/components/CommunityPreview";
import SocialExplanation from "@/components/SocialExplanation";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhatsNew from "@/components/WhatsNew";
import MusicPreview from "@/components/MusicPreview";
import Testimonials from "@/components/Testimonials";
import Launch from "@/components/Launch";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialMetrics />
      <CommunityPreview />
      <SocialExplanation />
      <WhatsNew />
      <HowItWorks />
      <Features />
      <MusicPreview />
      <Testimonials />
      <Launch />
      <Pricing />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
