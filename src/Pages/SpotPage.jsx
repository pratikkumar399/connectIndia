import SpotCarousel from "../utils/SpotCarousel";
import { CloseOutlined } from '@ant-design/icons';
import { Link, useParams } from "react-router-dom";
import { dummyExploreData } from "../dummyData/dummyExploreData"; // Import your dummy data

import { Button } from 'antd';

const SpotPage = () => {
    const { title } = useParams(); // Get the "title" parameter from the URL

    let formattedTitle = "Unknown"; // Default title if "title" is undefined
    let description = "No description available"; // Default description if not found

    if (title) {
        formattedTitle = title
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Search for the object with a matching title in the dummy data
        const matchingData = dummyExploreData.find(item => item.title === formattedTitle);
        if (matchingData) {
            description = matchingData.description;
        }
    }

    const handleClick = () => {
        window.history.back();
    }

    return (
        <div>
            <CloseOutlined className="float-right text-3xl mx-20 cursor-pointer" onClick={handleClick} />
            <SpotCarousel />
            <h2 className="text-center text-4xl">Welcome to {formattedTitle}</h2>
            <p className="text-center text-lg">{description}</p>
            <Button type="primary" className="flex my-4 mx-auto bg-black">
                <Link to={`/explore/${title}/chatbox`}>Chat with virtual app</Link>
            </Button>
            <Button type="primary" className="flex my-4 mx-auto bg-black">
                <Link to={`/explore/${title}/interested`}>Interested?</Link>
            </Button>
        </div>
    )
}

export default SpotPage;
