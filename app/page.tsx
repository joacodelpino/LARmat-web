import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import AboutUs from '@/components/AboutUs';
import Locations from '@/components/Locations';
import FrequentQuestions from '@/components/FrequentQuestions';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <AboutUs />
        <Locations />
        <FrequentQuestions />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
