import { useParams } from 'react-router-dom';

const Guides = () => {
    // Get the city parameter from the URL
    const { city } = useParams();

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-black p-10">
                Guides for {city}
            </h1>
            {/* You can add more content related to the "Explore" page here */}
        </div>
    );
};

export default Guides;
