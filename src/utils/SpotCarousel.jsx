import React, { useState } from 'react';

const SpotCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
        "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
        "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
    ];

    const prevSlide = () => {
        setActiveSlide((prevActiveSlide) => (prevActiveSlide - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % slides.length);
    };

    return (
        <div className="container mx-auto my-4 border rounded-full">
            <div
                id="carouselExampleControls"
                className="relative"
                data-te-carousel-init=""
                data-te-ride="carousel"
            >
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${index === activeSlide ? 'visible' : 'hidden'
                                }`}
                            data-te-carousel-item=""
                            data-te-carousel-active=""
                        >
                            <img src={slide} className="block w-full" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleControls"
                    data-te-slide="prev"
                    onClick={prevSlide}
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Previous
                    </span>
                </button>
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleControls"
                    data-te-slide="next"
                    onClick={nextSlide}
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Next
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SpotCarousel;
