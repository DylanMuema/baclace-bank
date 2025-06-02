export default function Explore() {
    const resources = [
        {
            title: "Understanding Interest Rates",
            description: "Learn how interest rates affect your savings and loans.",
            link: "#",
            buttonText: "Learn More"
        },
        {
            title: "Budgeting Basics",
            description: "Tips and tools to help you create a budget that works for you.",
            link: "#",
            buttonText: "Get Started"
        },
        {
            title: "Investing 101",
            description: "A beginner's guide to investing your money wisely.",
            link: "#",
            buttonText: "Explore Now"
        },
        {
            title: "Credit Scores Explained",
            description: "What is a credit score and why is it important?",
            link: "#",
            buttonText: "Find Out More"
        }
    ];
    return (
        <section className="bg-gray-100 py-16 flex flex-col items-center">
            <div className="max-w-7xl w-full space-y-12 px-4 sm:px-6 lg:px-8">
                {/* Title + Description */}
                <div className="text-center text-4xl font-extrabold text-stone-950 mb-4">Explore Our Resources</div>
                <h2 className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
                    Discover valuable resources to help you manage your finances effectively.
                </h2>
            </div>
            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl w-full mt-12 justify-center items-center">
                {resources.map((resource, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <a
                            href={resource.link}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-bold text-lg tracking-wide shadow hover:bg-blue-800 transition-colors duration-300"
                        >
                            {resource.buttonText}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}