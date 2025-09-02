// src/components/Header.tsx
import Link from 'next/link';
import ActiveLink from './ActiveLink';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

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

    const [isMobileNav, setIsMobileNav] = useState(false);

    const toggleNav = () => {
        setIsMobileNav(!isMobileNav);
    }

    return (
        <>

            {/* <!-- Header --> */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <picture>
                            <img src="./../assets/images/logo-1-tp.png" className='max-w-[194px]' />
                        </picture>
                    </Link>

                    <div className={isMobileNav ? 'active lg:flex items-center space-x-8 top-nav' : 'lg:flex items-center space-x-8 top-nav'}>
                        <nav className="flex gap-6">
                            {navItems.map(({ path, label }) => (
                                <ActiveLink
                                    key={path} // Keep key if this is part of a mapped list
                                    href={path}
                                    className="transition-colors text-gray-700 hover:text-golden" // Base/inactive classes
                                    activeClassName="text-blue-600 font-semibold active" // Classes applied when active
                                >
                                    {label}
                                </ActiveLink>
                            ))}
                        </nav>
                        <button className="lg:hidden nav-close" onClick={toggleNav}>
                            <FontAwesomeIcon color="currentColor" icon={faClose} />
                        </button>
                    </div>

                    <Link href="/contact" className="hidden lg:flex button-pri px-8 py-3 rounded-lg transition-colors font-medium">
                        Get Quote
                    </Link>

                    {/* <!-- Mobile menu button --> */}
                    <button className="lg:hidden" onClick={toggleNav}>
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