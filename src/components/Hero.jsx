import backgroundImage from "../assets/backgroundImg.jpg"

import { Input, Select, Space } from 'antd';


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
    return (
        <>
            <header className="bg-white dark:bg-gray-900" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center center' }}>
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                                    Namaste <span className="text-red-700">Yatri</span>
                                </h1>
                                <p className="mt-3 text-gray-900 dark:text-sky-800">
                                    be the first to knows when our{" "}
                                    <span className="font-medium text-sky-900">Brand</span> is live
                                </p>
                                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                    <Space.Compact className="px-4 py-2 focus:ring focus:ring-opacity-40 focus:ring-blue-300">
                                        <Select defaultValue="Explore" options={options} />
                                        <Input defaultValue="Enter City Name" />
                                    </Space.Compact>

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



