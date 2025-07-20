import React from 'react';
import Header from './Header'; // Adjust import path if needed
import Footer from './Footer'; // Adjust import path if needed

interface LayoutProps {
  children: React.ReactNode; // 'children' can be any valid React element, string, array, etc.
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Tailwind for full height */}
      <Header />
      <main className="flex-grow"> {/* `flex-grow` makes content expand to fill space */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;