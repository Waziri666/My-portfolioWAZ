import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The attention to detail and excelent features have completely transformed my workflow. You exactly what we've been looking for.",
      name: "Trader",
      designation: "Hanifa Adams, a trader",
      src: "assets/Hanifa.jpg",
    },
    {
      quote:
        "Your Work ethics is outstanding, Keep it Up. mr.gate666@gmail.com",
      name: "Wadud",
      designation: "Head Coach at Ghana NFL teens",
      src: "assets/Wadud.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export default Testimonials;
