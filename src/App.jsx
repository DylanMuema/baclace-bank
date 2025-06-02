import Navbar from "./components/navbar";
import Hero from "./components/hero"; 
import HowItWorks from "./components/Howitworks";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Partners from "./components/partners";
import Explore from "./components/Explore";
import Community from "./components/community";
import FrequentQuestions from "./components/Frequentquestion";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/footer";
// ...existing imports...

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about" className="pt-20">
        <HowItWorks />
      </div>
      <div id="services" className="pt-20">
        <Services />
      </div>
      <div id="testimonials" className="pt-20">
        <Testimonials />
      </div>
      <div id="partners" className="pt-20">
        <Partners />
      </div>
      <div id="explore" className="pt-20">
        <Explore />
      </div>
      <Community />
      <FrequentQuestions />
      <div id="contact" className="pt-20">
        <GetInTouch />
      </div>
      <Footer />
    </>
  );
}

export default App;
