import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      position: "CEO,",
      testimonial:
        "Baclace Bank has transformed our financial operations with its seamless services. Their platform is intuitive and their staff is always ready to help. I highly recommend Baclace Bank to any business looking for reliability and innovation.",
      image: "/john.jpg",
    },
    {
      name: "Jane Smith",
      position: "CTO",
      testimonial:
        "The security and ease of use of Baclace Bank are unmatched in the industry. Their technology gives us peace of mind and their customer care is top-notch. Switching to Baclace Bank was the best decision for our company.",
      image: "/jane.jpg",
    },
    {
      name: "Alice Johnson",
      position: "CFO",
      testimonial:
        "Baclace Bank's customer support is exceptional, always ready to assist. Their financial tools have helped us grow and manage our assets more efficiently. We feel valued as clients every step of the way.",
      image: "/alice.jpg",
    },
    {
      name: "Bob Brown",
      position: "managing director",
      testimonial:
        "As a long-time client, I can confidently say that Baclace Bank is a leader in the banking industry. Their commitment to innovation and customer satisfaction is evident in everything they do. Highly recommended!",
      image: "/bob.jpg",
    },
  ];

  // Array of strong Tailwind color classes for the dots (no white)
  const dotColors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-pink-600",
    // Add more colors if you add more testimonials
  ];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const testimonial = testimonials[index];

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">
          TESTIMONIALS
          <span className="block text-base font-normal text-right pr-2 text-gray-600 mt-2">
            Discover what our valued clients and staff have to say about their experience with Baclace Bank.
          </span>
        </h2>
        <div className="relative flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-8 mt-10">
          {/* Image on the left */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10 flex justify-center items-center w-full md:w-auto">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 shadow"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
          {/* Text on the right */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
            <p className="text-blue-700 font-medium">{testimonial.position}</p>
            <p className="mt-6 text-lg text-gray-800 italic">"{testimonial.testimonial}"</p>
          </div>
          {/* Arrows */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg border-2 border-white hover:bg-blue-800 transition z-10 w-12 h-12 flex items-center justify-center"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg border-2 border-white hover:bg-blue-800 transition z-10 w-12 h-12 flex items-center justify-center"
          >
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
        {/* Dots for navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${dotColors[i]} ${i === index ? "ring-2 ring-offset-2 ring-blue-400" : "opacity-60"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}