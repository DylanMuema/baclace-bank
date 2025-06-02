import { useState } from "react";

const faqs = [
  {
    question: "How do I open a new account?",
    answer: "You can open a new account by visiting our website and clicking on the 'Sign Up' button. Follow the instructions to complete your registration."
  },
  {
    question: "How do I create an account?",
    answer: "Click on 'Sign Up' at the top right of the homepage and fill in your personal details to create your account."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept bank transfers, credit/debit cards, and mobile money payments."
  },
  {
    question: "How do I reset my password?",
    answer: "Click on 'Forgot Password' on the login page and follow the instructions to reset your password."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can contact our support team via the 'Contact' page or by emailing support@baclacebank.com."
  },
  {
    question: "What security measures are in place to protect my account?",
    answer: "We use advanced encryption, two-factor authentication, and regular security audits to keep your account safe."
  },
  {
    question: "How do I report a lost or stolen card?",
    answer: "Please contact customer support immediately or use the 'Report Lost Card' feature in your account dashboard."
  },
  {
    question: "Can I access my account from multiple devices?",
    answer: "Yes, you can securely access your account from any device using your login credentials."
  },
  {
    question: "How do I update my personal information?",
    answer: "Log in to your account, go to 'Profile Settings', and update your personal information as needed."
  }
];

export default function FrequentQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-6xl mx-auto my-16 p-8 bg-white rounded-xl shadow flex flex-col md:flex-row gap-12 items-center">
      {/* Image Section with Title and Statement ABOVE the image */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
        <h3 className="text-3xl font-extrabold text-blue-900 mb-3 text-center">Need Help?</h3>
        <p className="text-xl font-bold text-blue-700 mb-6 text-center px-6 leading-relaxed drop-shadow">
          Find answers to the most common questions about Baclace Bank below.
        </p>
        <img
          src="/faq-image.jpg" // <-- Replace with your image path
          alt="Frequently Asked Questions"
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
      {/* FAQ Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-8 text-blue-900 text-center md:text-left">Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq, idx) => (
            <li key={idx} className="mb-5 border-b pb-4">
              <button
                className="flex justify-between items-center w-full text-lg font-semibold text-left focus:outline-none"
                onClick={() => toggle(idx)}
              >
                <span>{faq.question}</span>
                <span className="ml-2 text-blue-700 text-2xl">
                  {openIndex === idx ? "▼" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="mt-3 text-gray-700 text-base">{faq.answer}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}