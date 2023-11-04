import React from 'react';
import FaqItem from '../utils/FaqItem'; // Import the FaqItem component

const Faq = () => {
    const faqItems = [
        {
            question: 'What can I expect at my first consultation?',
            answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
        },
        {
            question: 'What can I expect at my first consultation?',
            answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
        },
        {
            question: 'What can I expect at my first consultation?',
            answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
        },
        {
            question: 'What can I expect at my first consultation?',
            answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
        },
        {
            question: 'What can I expect at my first consultation?',
            answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
        },
        {
            question: 'What can I expect at my first consultation?',
            answer:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.',
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
