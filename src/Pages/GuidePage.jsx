import SpotCarousel from "../utils/SpotCarousel";
import { CloseOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { dummyExploreData } from "../dummyData/dummyExploreData"; // Import your dummy data
import GuideCard from "../utils/GuideCard";

const GuidePage = () => {
    const { guide } = useParams(); // Get the "title" parameter from the URL

    let formattedTitle = "Unknown"; // Default title if "title" is undefined
    let description = "No description available"; // Default description if not found

    if (guide) {
        formattedTitle = guide
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
            <GuideCard />
        </div>
    )
}

export default GuidePage;
