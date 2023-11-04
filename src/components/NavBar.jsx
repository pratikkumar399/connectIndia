import { Link } from "react-router-dom";
import color from '../constants/styles'
import { useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleMenuItemClick = () => {
        closeMenu();
        // history.push(path);
    };


    return (

        <>
            <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
                <Link style={{
                    color: color.primary,
                    textShadow: `1 1 1rem ${color.buttonback}`

                }} className="text-3xl font-bold leading-none headings" to="/">
                    ConnectIndia
                </Link>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu} >
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <ul
                    className="font-mono hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                </ul>

                <Link
                    style={{
                        // color: color.primary
                        backgroundColor: color.buttonback,
                        color: color.text
                    }}
                    className="hidden lg:inline-block py-2 px-5  justify-center items-center gap-2 rounded-md border border-transparent font-semibold  text-black  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    to="#"
                    download
                >
                    RESUME
                </Link>
            </nav>
            <div className={`navbar-menu relative z-50 ${menuOpen ? 'block' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link className="mr-auto text-3xl font-bold leading-none" to="/">
                            PRATIK
                        </Link>
                        <button className="navbar-close" onClick={closeMenu}>
                            <svg
                                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link
                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                    to="/"
                                    onClick={() => handleMenuItemClick()}
                                >
                                    Intro
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <Link
                                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                                to="#"
                            >
                                Resume
                            </Link>

                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Made with ❤️ by ConnectIndia</span>
                        </p>
                    </div>
                </nav >
            </div >
        </>

    );

}


export default NavBar;
