import { useParams } from 'react-router-dom';

const Accomodation = () => {
    // Get the city parameter from the URL
    const { city } = useParams();

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-black p-10">
                Accomodations for {city}
            </h1>s
            {/* You can add more content related to the "Explore" page here */}
        </div>
    );
};

export default Accomodation;
