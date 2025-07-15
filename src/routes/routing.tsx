
import Home from '../pages/home/Home';
import AboutUs from '../pages/about-us/AboutUs';
import Services from '../pages/services/Services';
import Technologies from '../pages/technologies/Technologies';
import Portfolio from '../pages/portfolio/Portfolio';
import Blog from '../pages/blogs/Blog';
import BlogDetail from '../pages/blogs/BlogDetail';
import Contact from '../pages/contact-us/Contact';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import TermsAndConditions from '../pages/legal/TermsAndConditions';

const appRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/services', element: <Services /> },
    { path: '/technologies', element: <Technologies /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/blogs', element: <Blog /> },
    { path: '/blogs/:id', element: <BlogDetail /> },
    { path: '/contact', element: <Contact /> },
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
    { path: '/terms-and-conditions', element: <TermsAndConditions /> }
];

export default appRoutes;