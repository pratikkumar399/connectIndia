import colors from '../constants/styles';
import { Link } from "react-router-dom";


const DataCards = ({ src, title, desc, skills, link, github }) => {
    return (
        <div className="max-w-sm bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">

            <div className="relative">
                <Link to={github}>
                    <img
                        className="w-full h-50 cover rounded-xl"
                        src={src}
                    />
                </Link>

            </div>
            <Link style={{
                target: '_blank',
            }} to={link}>
                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                    {title}
                </h1>
            </Link>
            <div className="my-4">
                <div className="flex space-x-1 items-center">
                    <span className="text-indigo-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mb-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                    <p>{desc}</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <span className="text-indigo-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mb-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </span>
                    <p>{skills}</p>
                </div>

                <button style={{
                    backgroundColor: colors.buttonback,
                }}
                    className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                    View Places
                </button>
            </div>
        </div>
    );
}

export default DataCards;
