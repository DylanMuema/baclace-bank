export default function Community() {
  return (
    <section id="community" className="bg-white py-16 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/community.jpg" // <-- Replace with your image path
            alt="Baclace Bank Community"
            className="rounded-xl shadow-lg w-full max-w-sm object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Bank Community</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Baclace Bank, we believe in building a strong, supportive community. We host financial literacy workshops, sponsor local events, and provide resources to help our members thrive. Join us in making a positive impact!
          </p>
          <ul className="space-y-4 text-left mx-auto max-w-xl">
            <li className="text-blue-700 font-semibold">
              • Free financial education seminars for all ages
            </li>
            <li className="text-blue-700 font-semibold">
              • Community outreach and volunteering programs
            </li>
            <li className="text-blue-700 font-semibold">
              • Support for local businesses and entrepreneurs
            </li>
            <li className="text-blue-700 font-semibold">
              • Member-exclusive events and networking opportunities
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}