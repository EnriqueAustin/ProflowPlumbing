import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChoose from "@/components/WhyChoose";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import CallNowButton from "@/components/CallNowButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <WhyChoose />
        <Packages />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
      <CallNowButton />
    </>
  );
}
