import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import FeaturedProducts from './sections/FeaturedProducts';
import NewArrivals from './sections/NewArrivals';
import CollectionShowcase from './sections/CollectionShowcase';
import BrandStory from './sections/BrandStory';
import Services from './sections/Services';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <NewArrivals />
        <CollectionShowcase />
        <BrandStory />
        <Services />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
