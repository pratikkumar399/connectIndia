import { useParams } from 'react-router-dom';
import guides from '../assets/guides/guide.jpg';
import DataCards from '../utils/DataCards';
import colors from '../constants/styles';
const Guides = () => {
    // Get the city parameter from the URL
    const { city } = useParams();
    const dummyData = [
        {
            title: "Ravi",
            contact: "1234567890",
            link: "",
            src: guides,
            rating: "4.5",
        },
        {
            title: "Rakesh",
            contact: "1234567890",
            link: "",
            src: guides,
            rating: "4.5",
        },
        {
            title: "Puneet",
            contact: "1234567890",
            link: "",
            src: guides,
            rating: "4.0",
        },
        {
            title: "Sanjay",
            contact: "1234567890",
            link: "",
            src: guides,
            rating: "4.2",
        },
        {
            title: "Vikas",
            contact: "1234567890",
            link: "",
            src: guides,
            rating: "4.4",
        },
        {
            title: "Ram",
            contact: "1234567890",
            link: "",
            src: guides,
            rating: "4.7",
        },
        // Add more project objects here...
    ];
    return (
        <div className="p-8">
            <h1 style={{ color: colors.primary }} className="text-3xl text-center font-bold mb-6">
                Explore guides in {city}
            </h1>

            <div className="xl:w-2/3 flex flex-wrap justify-center items-center gap-y-5 gap-x-5 mb-4 mx-auto">
                {dummyData.map((data, index) => (
                    <DataCards
                        key={index}

                        title={data.title}
                        src={data.src} // You might want to use a specific image for each project
                        desc={data.contact}
                        link={data.link}
                        skills={data.rating}
                    />
                ))}
            </div>
        </div>
    )
};

export default Guides;
