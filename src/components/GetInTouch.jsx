export default function GetInTouch() {
  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
  We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. 
  Our team is always ready to assist you and will get back to you as soon as possible.
        </p>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
          {/* Contact Details */}
          <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-xl p-8 shadow-lg mb-8 md:mb-0 flex flex-col items-center">
            <h3 className="text-3xl font-extrabold text-blue-900 dark:text-white mb-4 text-center drop-shadow">Contact Details</h3>
            <p className="mb-3 text-lg text-blue-900 dark:text-blue-200 text-center font-semibold">
              <span className="font-bold">Email:</span> baclacebank
            </p>
            <p className="mb-3 text-lg text-blue-900 dark:text-blue-200 text-center font-semibold">
              <span className="font-bold">Phone:</span> +254 456 7890
            </p>
            <p className="mb-3 text-lg text-blue-900 dark:text-blue-200 text-center font-semibold">
              <span className="font-bold">Address:</span> 123 Main Street, City, Country
            </p>
            <p className="mb-3 text-lg text-blue-900 dark:text-blue-200 text-center font-semibold">
              <span className="font-bold">Working Hours:</span> Mon - Fri, 9:00am - 6:00pm
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-4 justify-center">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-8 h-8 text-blue-700 hover:text-blue-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/>
                </svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-8 h-8 text-blue-400 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 001.963-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0016.11 4c-2.485 0-4.5 2.015-4.5 4.5 0 .353.04.697.116 1.026C7.728 9.37 4.1 7.6 1.671 4.905c-.386.663-.607 1.434-.607 2.26 0 1.56.794 2.936 2.004 3.744a4.48 4.48 0 01-2.037-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.102-.775.157-1.185.157-.29 0-.57-.028-.845-.08.57 1.78 2.223 3.075 4.183 3.11A8.98 8.98 0 012 19.54a12.68 12.68 0 006.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.94 8.94 0 01-2.54.698z"/>
                </svg>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-8 h-8 text-pink-600 hover:text-pink-800 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">MESSAGE US</h3>
            <form className="space-y-6 w-full max-w-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Rahman Warif"
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. warif@example.com"
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Type your message here..."
                  className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}