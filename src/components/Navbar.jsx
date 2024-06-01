import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSideBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-blue-900 shadow-lg sticky top-0 z-10">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="text-white">
                            <span className='text-white text-xl font-semibold ml-2'>Vans Life</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <ul className="flex items-center">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white px-4 py-2">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white px-4 py-2">About</Link>
                            </li>
                            <li>
                                <Link to="/vans" className="text-gray-300 hover:text-white px-4 py-2">Vans</Link>
                            </li>
                            {/* Add more navigation links as needed */}
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none" onClick={handleSideBar}>
                            <IoMdMenu size={24} />
                        </button>
                     
                    </div>
                </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <ul className="flex flex-col items-center">
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-white px-4 py-2">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-300 hover:text-white px-4 py-2">About</Link>
                        </li>
                        <li>
                            <Link to="/vans" className="text-gray-300 hover:text-white px-4 py-2">Vans</Link>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </div>
            
        </nav>
    );
};

export default Navbar;
