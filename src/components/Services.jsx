export default function Services() {
  return (
    <section className="bg-gray-100 py-16 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Title + Description */}
        <div className="text-center text-4xl font-extrabold text-stone-950 mb-4">Our Services</div>
        <h2 className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
          At Baclace Bank, we offer a wide range of services to meet your financial needs...
        </h2>
        <p className="text-lg text-gray-600 text-center">
          Our services include personal banking, business banking, investment management, loans and mortgages, and financial planning...
        </p>
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mt-12 justify-center items-center">
        {/* Service Box 1 */}
        <div className="relative bg-cover bg-center rounded-xl shadow-md h-80"
          style={{ backgroundImage: "url('/services/loans.jpg')" }}>
          <div className="absolute inset-0 flex flex-col justify-center px-6 z-10 bg-black/40 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Loans and Savings</h3>
            <p className="text-lg text-white">
              At Baclace Bank, we offer a variety of loan options to help you achieve your financial goals...
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-full shadow hover:bg-blue-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Service Box 2 */}
        <div className="relative bg-cover bg-center rounded-xl shadow-md h-80"
          style={{ backgroundImage: "url('/services/investment.jpg')" }}>
          <div className="absolute inset-0 flex flex-col justify-center px-6 z-10 bg-black/40 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Investment and Financial Planning</h3>
            <p className="text-lg text-white">
              Our investment services are designed to help you grow your wealth and achieve your financial goals...
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-full shadow hover:bg-blue-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Service Box 3 */}
        <div className="relative bg-cover bg-center rounded-xl shadow-md h-80"
          style={{ backgroundImage: "url('/services/business.jpg')" }}>
          <div className="absolute inset-0 flex flex-col justify-center px-6 z-10 bg-black/40 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Business Banking</h3>
            <p className="text-lg text-white">
              Baclace Bank offers a range of business banking services to help you manage your finances effectively...
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-full shadow hover:bg-blue-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Service Box 4 */}
        <div className="relative bg-cover bg-center rounded-xl shadow-md h-80"
          style={{ backgroundImage: "url('/services/support.jpg')" }}>
          <div className="absolute inset-0 flex flex-col justify-center px-6 z-10 bg-black/40 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Customer Support</h3>
            <p className="text-lg text-white">
              Our dedicated customer support team is here to assist you with any questions or concerns you may have...
            </p>
            <a
              href="#"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-full shadow hover:bg-blue-800 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}