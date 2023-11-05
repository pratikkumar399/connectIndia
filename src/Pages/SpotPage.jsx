import SpotCarousel from "../utils/SpotCarousel"
import { CloseOutlined } from '@ant-design/icons';

const SpotPage = () => {
    const handleClick = () => {
        window.history.back();
    }


    return (
        <div>
            <CloseOutlined className="float-right text-3xl mx-20 cursor-pointer" onClick={handleClick} />
            <SpotCarousel />
            <h2 className="text-center text-4xl">Welcome to HawaMahal</h2>
        </div>
    )
}

export default SpotPage
