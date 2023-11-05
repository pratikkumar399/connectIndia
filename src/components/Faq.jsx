import React from 'react';
import FaqItem from '../utils/FaqItem'; // Import the FaqItem component

const Faq = () => {
    const faqItems = [
        {
            question: 'What is our problem statement?',
            answer:
                'When a traveler visits a city for the very first time, he/she is completely unknown about how to explore the beautiful and worthy places to explore',
        },
        {
            question: 'What is our solution ?',
            answer:
                'It is an all-in-one website which offers three major options collectively based on the city the user is searching for- Explore, Accommodation Booking and Guide Booking.',
        },
        {
            question: 'What is Explore section about?',
            answer:
                'In this section, the user gets to explore all the tourist attractions of the city he/she entered with ample of images of each site',
        },
        {
            question: 'What is Accommodations section about?',
            answer:
                'This section allows user to book an accommodation.',
        },
        {
            question: 'What is Guides section about?',
            answer:
                'This section allows user to book a local guide.',
        },
        {
            question: 'What is Rahi?',
            answer:
                'The user can ask questions to the virtual guide “Rahi" and can get the detailed responses',
        },
        // Add more FAQ items here
    ];

    return (
        <div>
            <section className="bg-white dark:bg-red-700 flex-grow">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
                        Frequently asked questions.
                    </h1>
                    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                        {faqItems.map((item, index) => (
                            <FaqItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
