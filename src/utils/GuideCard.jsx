import React, { useState } from 'react';
import guide from '../assets/guides/guide.jpg';
import StripeCheckout from "react-stripe-checkout";

const GuideCard = () => {
    const [totalPrice, setTotalPrice] = useState(10);

    const handleToken = (token) => {
        // Handle the payment logic here
        console.log(token);

        // Show an alert message
        alert("Guide booked successfully!");

        // Return to the previous page
        window.history.back();
    };

    return (
        <div>
            <div className="h-full w-full flex justify-center items-center">
                <div className="container flex justify-center">
                    <div className="max-w-sm py-32">
                        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                            <img
                                className="rounded-t-lg"
                                src={guide}
                                alt=""
                            />
                            <div className="py-6 px-8 rounded-lg bg-white">
                                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                                    I'm super dog for you.
                                </h1>
                                <p className="text-gray-700 tracking-wide">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.
                                </p>
                                <StripeCheckout
                                    stripeKey="pk_test_51NOQr6SDTAaBjofmX1mGe1bJQPlCuX8GObCKd4uEaYOlnSRraiyKyLD22wDHz3VDxVofEHIvuBSztjHDiaSAyxIp003LfD2VZY"
                                    name="Guide Price"
                                    amount={totalPrice * 100}
                                    label="Pay to Guide"
                                    description={`Your total is $${totalPrice}`}
                                    token={handleToken}
                                />
                            </div>
                            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                                <span className="text-md"> ${totalPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuideCard;
