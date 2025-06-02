export default function HowItWorks() {
  return (
    <section
      aria-label="ABOUT"
      className="bg-stone-150 py-20 px-4 flex justify-center"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 p-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-950 mb-6">
            ABOUT
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            Baclace Bank makes banking simple and secure. Here’s how it works:
          </p>
          <ol className="list-decimal list-inside text-left md:text-center space-y-4 max-w-lg mx-auto">
            <li className="text-lg md:text-xl text-gray-800">
              <strong>Sign Up:</strong> Create an account in minutes with our easy registration process.
            </li>
            <li className="text-lg md:text-xl text-gray-800">
              <strong>Deposit Funds:</strong> Add money to your account using various payment methods.
            </li>
            <li className="text-lg md:text-xl text-gray-800">
              <strong>Manage Your Money:</strong> Use our intuitive dashboard to track your spending, set budgets, and save for goals.
            </li>
            <li className="text-lg md:text-xl text-gray-800">
              <strong>Secure Transactions:</strong> Enjoy peace of mind with our advanced security features protecting your funds.
            </li>
            <li className="text-lg md:text-xl text-gray-800">
              <strong>24/7 Support:</strong> Our customer support team is available around the clock to assist you with any questions or issues.
            </li>
          </ol>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/how-it-works.jpg"
            alt="banking process and security"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}