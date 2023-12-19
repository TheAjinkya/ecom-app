import { Faq } from "./components/Faq";
import FeaturedProducts from "./components/FeaturedProducts";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

export function HomePage() {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
    </div>
  )
}

