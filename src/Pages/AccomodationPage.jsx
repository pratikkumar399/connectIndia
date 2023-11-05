import SpotCarousel from "../utils/SpotCarousel";
import { CloseOutlined } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import { dummyExploreData } from "../dummyData/dummyExploreData";
import { dummyAccomodationData } from "../dummyData/dummyAccomodationData";
import { Button } from 'antd';
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import Picker from "../utils/Picker";



const AccomodationPage = () => {
    const { hotel } = useParams();
    const [totalPrice, setTotalPrice] = useState(10);

    const handleToken = (token) => {
        // Handle the payment logic here
        console.log(token);

        // Show an alert message
        alert("Guide booked successfully!");

        // Return to the previous page
        window.history.back();
    };

    let formattedTitle = "Unknown";
    let description = "No description available";
    let price = "Price not available";
    let facilities = "Facilities not available";

    if (hotel) {
        formattedTitle = hotel
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');




        const accomodationData = dummyAccomodationData.find(item => item.title === formattedTitle);
        if (accomodationData) {
            price = accomodationData.price;
            facilities = accomodationData.facilities.join(', ');
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
            <p className="text-center text-lg">Price: {price}</p>

            <p className="text-center text-lg">Facilities: {facilities}</p>
            <div className="flex justify-center my-8">
                <Picker className="flex flex-col" />
            </div>
            <div className="flex justify-center my-2">
                <StripeCheckout

                    stripeKey="pk_test_51NOQr6SDTAaBjofmX1mGe1bJQPlCuX8GObCKd4uEaYOlnSRraiyKyLD22wDHz3VDxVofEHIvuBSztjHDiaSAyxIp003LfD2VZY"
                    name="Guide Price"
                    amount={totalPrice * 100}
                    label="Pay to book"
                    description={`Your total is $${totalPrice}`}
                    token={handleToken}
                />
            </div>

        </div>
    )
}

export default AccomodationPage;
