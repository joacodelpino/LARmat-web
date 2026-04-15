import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Locations from './components/Locations';
import FrequentQuestions from './components/FrequentQuestions';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
        <WhyChooseUs />
        <AboutUs />
        <Locations />
        <FrequentQuestions />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
