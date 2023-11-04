import backgroundImage from "../assets/backgroundImg.jpg"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Select, Space, Button } from 'antd';


const options = [
    {
        value: 'Explore',
        label: 'Explore',
    },
    {
        value: 'Accomodations',
        label: 'Accomodations',
    },
    {
        value: 'Guides',
        label: 'Guides',
    },
];

const Hero = () => {
    const navigateTo = useNavigate();
    const [selectedOption, setSelectedOption] = useState('Explore');
    const [cityName, setCityName] = useState('');

    const handleSearch = () => {
        // Redirect the user to the selected page based on their input
        navigateTo(`/${selectedOption.toLowerCase()}/${cityName}`);
    };
    return (
        <>
            <header className="bg-white dark:bg-gray-900" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center center' }}>
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-4xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                                    Namaste <span className="text-red-700">Yatri</span>
                                </h1>
                                <p className="mt-3 text-gray-900 dark:text-sky-800">

                                </p>
                                <div className="sm:flex:col lg:flex-row">
                                    <Space.Compact className="px-4 py-2 focus:ring focus:ring-opacity-40 focus:ring-blue-300">
                                        <Select
                                            value={selectedOption}
                                            options={options}
                                            onChange={(value) => setSelectedOption(value)}
                                        />
                                        <Input
                                            value={cityName}
                                            onChange={(e) => setCityName(e.target.value)}
                                            placeholder="Enter City Name"
                                        />
                                    </Space.Compact>
                                    <Button className="bg-black" type="primary" shape="square" onClick={handleSearch}>
                                        Search
                                    </Button>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img
                                className="w-full h-full max-w-md"
                                src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                                alt="email illustrat`ion vector art"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero



