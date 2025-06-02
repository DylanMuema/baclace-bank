import { useEffect, useState } from "react";

export default function Navbar() {
  const HIDE_DELAY_SECONDS = 3; // Change this to the number of seconds you want
  const [visible, setVisible] = useState(true);
  const [hideTimeout, setHideTimeout] = useState(null);

  useEffect(() => {
    // Function to hide navbar after X seconds
    const startHideTimer = () => {
      if (hideTimeout) clearTimeout(hideTimeout);
      const timeout = setTimeout(() => setVisible(false), HIDE_DELAY_SECONDS * 1000);
      setHideTimeout(timeout);
    };

    // Show navbar if mouse is near the top, then auto-hide after X seconds
    const handleMouseMove = (e) => {
      if (e.clientY < 60) {
        setVisible(true);
        startHideTimer();
      }
    };

    // Initial hide after X seconds
    startHideTimer();
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-lg border-b border-blue-200 backdrop-blur-md transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left (Home, About, Testimonials, Partners) */}
          <div className="w-1/3 flex justify-start gap-x-6">
            <a href="#home" className="transition-colors duration-200 text-gray-950 hover:text-blue-700 px-4 py-2 rounded-md text-xl font-bold hover:bg-blue-100">Home</a>
            <a href="#about" className="transition-colors duration-200 text-gray-950 hover:text-blue-700 px-4 py-2 rounded-md text-xl font-bold hover:bg-blue-100">About</a>
            <a href="#testimonials" className="transition-colors duration-200 text-gray-950 hover:text-blue-700 px-4 py-2 rounded-md text-xl font-bold hover:bg-blue-100">Testimonials</a>
            <a href="#partners" className="transition-colors duration-200 text-gray-950 hover:text-blue-700 px-4 py-2 rounded-md text-xl font-bold hover:bg-blue-100">Partners</a>
          </div>
          {/* Center (BB icon) */}
          <div className="w-1/3 flex justify-center">
            <a href="#home" className="flex items-center justify-center">
              <span className="relative inline-block w-16 h-16">
                {/* Colored Circle Behind Icon */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-700 to-blue-400 opacity-20"></span>
                {/* Briefcase Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-16 h-16 text-blue-900 relative z-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M3 9a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
                {/* BB Text Centered on Icon */}
                <span className="absolute inset-0 flex items-center justify-center text-xl font-extrabold text-blue-900 select-none z-20">
                  BB
                </span>
              </span>
            </a>
          </div>
          {/* Right (Services, Contact, Sign In, Login) */}
          <div className="w-1/3 flex justify-end gap-x-6 items-center">
            <a href="#services" className="transition-colors duration-200 text-gray-950 hover:text-blue-700 px-4 py-2 rounded-md text-xl font-bold hover:bg-blue-100">Services</a>
            <a href="#contact" className="transition-colors duration-200 text-gray-950 hover:text-blue-700 px-4 py-2 rounded-md text-xl font-bold hover:bg-blue-100">Contact</a>
            {/* Sign In in its own box */}
            <div className="bg-stone-600 rounded-lg shadow px-2 py-1 flex items-center">
              <a
                href="#signin"
                className="px-4 py-2 text-white rounded-md text-lg font-bold hover:bg-stone-800 transition-colors duration-200"
              >
                Sign In
              </a>
            </div>
            <a
              href="#login"
              className="ml-2 px-5 py-2 bg-blue-700 text-white rounded-md text-lg font-bold shadow hover:bg-blue-900 transition-colors duration-200"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}