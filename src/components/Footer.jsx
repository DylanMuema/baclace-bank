export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Logo and Summary */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <div className="w-44 h-44 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden mb-4">
              <img src="/assets/logo.png" alt="Baclace Bank Logo" className="object-contain w-full h-full" />
            </div>
            <h5 className="text-3xl font-bold text-blue-900 dark:text-white mb-2">Baclace Bank</h5>
            <p className="text-gray-700 dark:text-gray-300 mb-2 max-w-xs">
              Your trusted banking partner. Explore our services, connect with our community, and experience seamless financial solutions tailored for you.
            </p>
          </div>
          {/* Navigation and Socials */}
          <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-6">
              <a href="/" className="text-base text-blue-700 dark:text-blue-300 hover:underline">Home</a>
              <a href="#about" className="text-base text-blue-700 dark:text-blue-300 hover:underline">About</a>
              <a href="#services" className="text-base text-blue-700 dark:text-blue-300 hover:underline">Services</a>
              <a href="#support" className="text-base text-blue-700 dark:text-blue-300 hover:underline">Support</a>
              <a href="#contact" className="text-base text-blue-700 dark:text-blue-300 hover:underline">Contact</a>
              <a href="#privacy" className="text-base text-blue-700 dark:text-blue-300 hover:underline">Privacy Policy</a>
              <a href="#terms" className="text-base text-blue-700 dark:text-blue-300 hover:underline">Terms of Service</a>
            </div>
            {/* Social Media Section */}
            <div>
              <span className="block text-base text-gray-600 dark:text-gray-400 mb-2">
                Find us on social media:
              </span>
              <div className="flex justify-center md:justify-end gap-5">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg className="w-7 h-7 text-blue-700 hover:text-blue-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/>
                  </svg>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg className="w-7 h-7 text-blue-400 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0016.11 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.026C7.728 9.37 4.1 7.6 1.671 4.905c-.386.663-.607 1.434-.607 2.26 0 1.56.794 2.936 2.004 3.744a4.48 4.48 0 01-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.102-.775.157-1.185.157-.29 0-.57-.028-.845-.08.57 1.78 2.223 3.075 4.183 3.11A8.98 8.98 0 012 19.54a12.68 12.68 0 006.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.94 8.94 0 01-2.54.698z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg className="w-7 h-7 text-pink-600 hover:text-pink-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="w-7 h-7 text-blue-800 hover:text-blue-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg className="w-7 h-7 text-red-600 hover:text-red-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112c-1.863-.504-9.386-.504-9.386-.504s-7.523 0-9.386.504a2.994 2.994 0 0 0-2.112 2.112c-.504 1.863-.504 5.754-.504 5.754s0 3.891.504 5.754a2.994 2.994 0 0 0 2.112 2.112c1.863.504 9.386.504 9.386.504s7.523 0 9.386-.504a2.994 2.994 0 0 0 2.112-2.112c.504-1.863.504-5.754.504-5.754s0-3.891-.504-5.754zm-13.498 9.314v-7l6 3.5-6 3.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 text-center">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Baclace Bank. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}