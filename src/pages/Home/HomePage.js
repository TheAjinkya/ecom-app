import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";

export function HomePage() {
  return (
    <div>
      <Hero/>
      <Testimonials/>
      <Faq/>
    </div>
  )
}

