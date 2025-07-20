// src/components/Header.tsx
import Link from 'next/link';
import ActiveLink from './ActiveLink';

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


    return (
        <>

            {/* <!-- Header --> */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <picture>
                            <img src="assets/images/logo.webp" />
                        </picture>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex gap-6">
                            {navItems.map(({ path, label }) => (
                                <ActiveLink
                                    key={path} // Keep key if this is part of a mapped list
                                    href={path}
                                    className="transition-colors text-gray-700 hover:text-blue-600" // Base/inactive classes
                                    activeClassName="text-blue-600 font-semibold" // Classes applied when active
                                >
                                    {label}
                                </ActiveLink>
                            ))}
                        </nav>
                    </div>

                    <Link href="/contact" className="bg-custom-gradient text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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