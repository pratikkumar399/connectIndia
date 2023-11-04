import { useParams } from 'react-router-dom';
import subscription from '../assets/subscription.png';
import DataCards from '../utils/DataCards';
import colors from '../constants/styles';
const Accomodation = () => {
    // Get the city parameter from the URL
    const { city } = useParams();
    const dummyData = [
        {
            title: "BloggersZone",
            desc: "A blog Website",
            link: "https://bloggerszone.vercel.app/",
            src: subscription,
            solo: "solo",
            github: "https://github.com/pratikkumar399/bloggerszone",
            skills: "React, NodeJs, Express, MongoDB",
        },
        {
            title: "CollegeGram",
            desc: "A social media website for college students",
            link: "https://github.com/pratikkumar399/collegegram",
            solo: "solo",
            src: subscription,
            github: "https://github.com/pratikkumar399/collegegram",
            skills: "React, NodeJs, MongoDB",
        },
        {
            title: "Subscription Website",
            desc: "A website where users can subscribe to a plan and pay for it",
            link: "https://subscription-app-7yvq.vercel.app/",
            solo: "solo",
            src: subscription,
            github: "https://github.com/pratikkumar399/SubscriptionApp",
            skills: "React, Firebase, Stripe, NodeJs ",
        },
        {
            title: "Shiksha Miraz",
            desc: "A flutter based website for education purpose",
            link: "https://yourname.dev/",
            solo: "group",
            src: subscription,
            github: "https://github.com/yourusername/portfolio",
            skills: "HTML, CSS, JavaScript",
        },
        {
            title: "Portfolio Website",
            desc: "My personal portfolio showcasing my work",
            link: "https://yourname.dev/",
            src: subscription,
            github: "https://github.com/yourusername/portfolio",
            skills: "HTML, CSS, JavaScript",
        },
        {
            title: "Portfolio Website",
            desc: "My personal portfolio showcasing my work",
            link: "https://yourname.dev/",
            src: subscription,
            github: "https://github.com/yourusername/portfolio",
            skills: "HTML, CSS, JavaScript",
        },
        // Add more project objects here...
    ];
    return (
        <div className="p-8">
            <h1 style={{ color: colors.primary }} className="text-3xl text-center font-bold mb-6">
                Accomodations to book in {city}
            </h1>

            <div className="xl:w-2/3 flex flex-wrap justify-center items-center gap-y-5 gap-x-5 mb-4 mx-auto">
                {dummyData.map((data, index) => (
                    <DataCards
                        key={index}

                        title={data.title}
                        src={data.src} // You might want to use a specific image for each project
                        desc={data.desc}
                        link={data.link}
                        github={data.github}
                        skills={data.skills}
                    />
                ))}
            </div>
        </div>
    )
};

export default Accomodation;
