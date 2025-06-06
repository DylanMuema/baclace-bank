import { useEffect, useState } from "react";

const slides = [
  {
    image: "/hero.jpg",
    title: (
      <>
        BACLACE BANK <br /> best bank for your money
      </>
    ),
    text: "Baclace Bank, your choice is our perspective and your money is our priority.",
  },
  {
    image: "/hero2.jpg",
    title: (
      <>
        Secure &amp; Reliable <br /> Banking for Everyone
      </>
    ),
    text: "Experience top-tier security and innovative digital banking solutions designed to keep your finances safe and accessible anytime, anywhere.",
  },
  {
    image: "/hero3.jpg",
    title: (
      <>
        Join Our Community <br /> and Grow With Us
      </>
    ),
    text: "Connect with a vibrant community, enjoy personalized support, and unlock exclusive benefits as a Baclace Bank member.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Determine text color classes
  const isThird = current === 2;
  const titleClass = `text-6xl md:text-6xl font-extrabold leading-tight mb-8 ${
    isThird ? "text-stone-900 drop-shadow-lg" : "text-white drop-shadow-lg"
  }`;
  const textClass = `text-3xl md:text-4xl mb-10 ${
    isThird ? "text-stone-900 drop-shadow-lg" : "text-white drop-shadow-lg"
  }`;

  return (
    <div className="flex justify-center bg-gray-800 mt-8 mb-16">
      <section
        aria-label="Baclace Bank Hero Section"
        className="bg-cover bg-center bg-no-repeat rounded-xl shadow-2xl w-full max-w-5xl h-[500px] flex items-center justify-center transition-all duration-700"
        style={{ backgroundImage: `url('${slides[current].image}')` }}
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center rounded-xl p-6">
          <h1 className={titleClass}>
            {slides[current].title}
          </h1>
          <p className={textClass}>
            {slides[current].text}
          </p>
          <a
            href="#contact"
            className="inline-block bg-stone-800 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-blue-700 transition duration-300"
          >
            JOIN US TODAY
          </a>
        </div>
      </section>
    </div>
  );
}
