import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'


export default function Page() {
  return (
    <>
      <Hero />
     <Features />
      <Pricing/>
      <Testimonials/>
      {/* <CTA/>  */}
    </>
  );
}
