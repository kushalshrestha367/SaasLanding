import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


export default function Page() {
  return (
    <>
    <Navbar/>
      <Hero />
     <Features />
      <Pricing/>
      <Testimonials/>
      <CTA/> 
      <Footer />
    </>
  );
}
