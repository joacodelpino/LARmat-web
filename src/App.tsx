import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import Locations from './components/Locations';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Locations />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
