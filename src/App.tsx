import Companies from "./components/home/Companies";
import CTA from "./components/home/CTA";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";

export default function App() {
  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <Companies />
      <CTA />
    </div>
  );
}
