import Header from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServiceOverview";
import ProcessSection from "@/components/ProcessSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
      <section id="hero"><Hero /></section>
      <section id="about"><AboutSection /></section>
      <section id="services"><ServicesOverview /></section>
      <section id="process"><ProcessSection /></section>
      <section id="blog"><BlogSection /></section>
      <section id="faq"><FaqSection /></section>
      <section id="contact"><ContactSection /></section>
      <Footer />
    </main>

    </>
  );
}
