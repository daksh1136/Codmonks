// src/components/Header.tsx
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/technologies', label: 'Technologies' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blogs', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' },
];

const Header = () => {

    // const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    // isActive
    //   ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1'
    //   : 'text-gray-700 hover:text-indigo-600';

    return (
        <>

            {/* <!-- Header --> */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <picture>
                            <img src="assets/images/logo.webp" />
                        </picture>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex gap-6">
                            {navItems.map(({ path, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={({ isActive }) =>
                                        `transition-colors ${isActive
                                            ? 'text-blue-600 font-semibold'
                                            : 'text-gray-700 hover:text-blue-600'
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    <Link to="/contact" className="bg-custom-gradient text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Get Quote
                    </Link>

                    {/* <!-- Mobile menu button --> */}
                    <button className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Header;