import { useParams } from 'react-router-dom';
import accomodations from '../assets/accomodations/hotel.jpeg';
import DataCards from '../utils/DataCards';
import colors from '../constants/styles';
const Accomodation = () => {
    // Get the city parameter from the URL
    const { city } = useParams();
    const dummyData = [
        {
            title: "ABC Hotel",
            location: "0.5 km from Amber Fort",
            link: "",
            src: accomodations,
            rating: "4.5",
        },
        {
            title: "HM Hotel",
            location: "1 km from Hawa Mahal",
            link: "",
            src: accomodations,
            rating: "4.8",
        },
        {
            title: "CP Hotel",
            location: "1.2 km from City Palace",
            link: "",
            src: accomodations,
            rating: "4.0",
        },
        {
            title: "JM Hotel",
            location: "1 km from Jantar Mantar",
            link: "",
            src: accomodations,
            rating: "4.2",
        },
        {
            title: "JF Hotel",
            location: "2 km from Jaigarh Fort",
            link: "",
            src: accomodations,
            rating: "4.4",
        },
        {
            title: "NF Hotel",
            location: "1.3 km from Nangarh Fort",
            link: "",
            src: accomodations,
            rating: "4.7",
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
                        desc={data.location}
                        link={data.link}
                        skills={data.rating}
                    />
                ))}
            </div>
        </div>
    )
};

export default Accomodation;
