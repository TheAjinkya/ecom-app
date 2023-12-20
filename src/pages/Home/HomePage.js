import { UseTitle } from "../../components";
import { Faq } from "./components/Faq";
import FeaturedProducts from "./components/FeaturedProducts";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

export function HomePage() {
  UseTitle("Welcome to CodeBook")
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
    </div>
  )
}

