import { useParams } from 'react-router-dom';

import explore from '../assets/explore/place.jpg';
import DataCards from '../utils/DataCards';
import colors from '../constants/styles';
const ExplorePage = () => {
    // Get the city parameter from the URL
    const { city } = useParams();
    const dummyData = [
        {
            title: "Amber Fort",
            timing: "8:00 am – 5:00 pm",
            link: "",
            src: explore,
            alias: "Hilltop opulence",
        },
        {
            title: "Hawa Mahal",
            timing: "9:00 am – 4:30 pm",
            link: "",
            src:explore,
            alias: "Palace of winds",
        },
        {
            title: "City Palace",
            timing: "9:30 am – 5:00 pm",
            link: "",
            src: explore,
            alias: "Royal heritage hub",
        },
        {
            title: "Jantar Mantar",
            timing: "9:00 am – 4:30 pm",
            link: "",
            src: explore,
            alias: "Astronomer’s delight",
        },
        {
            title: "Jaigarh Fort",
            timing: "9:30 am – 4:30 pm",
            link: "",
            src: explore,
            alias: "Majestic stronghold",
        },
        {
            title: "Nahargarh Fort",
            timing: "10:00 am – 5:30 pm",
            link: "",
            src: explore,
            alias: "Hillside panorama",
        },
        // Add more project objects here...
    ];
    return (
        <div className="p-8">
            <h1 style={{ color: colors.primary }} className="text-3xl text-center font-bold mb-6">
                Places to visit in {city}
            </h1>

            <div className="xl:w-2/3 flex flex-wrap justify-center items-center gap-y-5 gap-x-5 mb-4 mx-auto">
                {dummyData.map((data, index) => (
                    <DataCards
                        key={index}

                        title={data.title}
                        src={data.src} // You might want to use a specific image for each project
                        desc={data.timing}
                        link={data.link}
                        skills={data.alias}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExplorePage;
