import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>

            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Our <span className="text-blue-200">Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        From innovative design and robust development to strategic digital marketing, we offer comprehensive solutions to transform your business and drive growth.
                    </p>
                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-custom-gradient text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                        <Link to="/portfolio">
                            <button className="bg-white rounded-lg text-purple-600 hover:bg-blue-50 px-8 py-3">
                                View Portfolio
                            </button>
                        </Link>
                    </div> */}
                </div>
            </section>

            {/* <!-- Service Categories Overview --> */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-medium mb-4">WHAT WE OFFER</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Comprehensive Digital Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We specialize in two core areas that drive digital success: cutting-edge design & development and strategic digital marketing.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* <!-- Design & Development --> */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl service-category-card">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Design & Development</h3>
                            <p className="text-blue-100 mb-6 text-lg">
                                Creating exceptional digital experiences through innovative design and robust development solutions.
                            </p>
                            <ul className="space-y-3 text-blue-100 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    12+ Specialized Services
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    End-to-End Solutions
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    Modern Technologies
                                </li>
                            </ul>
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                                Explore Development Services
                            </button>
                        </div>

                        {/* <!-- Digital Marketing --> */}
                        <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-2xl service-category-card">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Digital Marketing</h3>
                            <p className="text-purple-100 mb-6 text-lg">
                                Driving growth and engagement through strategic digital marketing campaigns and optimization.
                            </p>
                            <ul className="space-y-3 text-purple-100 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    7+ Marketing Channels
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    Data-Driven Strategies
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    ROI-Focused Results
                                </li>
                            </ul>
                            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                                Explore Marketing Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Design & Development Services --> */}
            <section className="py-20 bg-gray-50" id="design-development">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-medium mb-4">DESIGN & DEVELOPMENT</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Building Digital Excellence
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From concept to deployment, we create powerful digital solutions that drive business growth and user engagement.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- UI/UX Design --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
                            <p className="text-gray-600 mb-6">
                                Creating intuitive and engaging user interfaces that provide exceptional user experiences across all platforms.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• User Research & Analysis</li>
                                <li>• Wireframing & Prototyping</li>
                                <li>• Visual Design & Branding</li>
                                <li>• Usability Testing</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Front End Development --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                                <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Front End Development</h3>
                            <p className="text-gray-600 mb-6">
                                Building responsive and interactive user interfaces using modern frameworks and technologies.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• React, Vue.js, Angular</li>
                                <li>• Responsive Web Design</li>
                                <li>• Progressive Web Apps</li>
                                <li>• Performance Optimization</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- E-commerce Development --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                                <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Development</h3>
                            <p className="text-gray-600 mb-6">
                                Comprehensive e-commerce solutions that drive sales and provide seamless shopping experiences.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Shopify, WooCommerce, Magento</li>
                                <li>• Payment Gateway Integration</li>
                                <li>• Inventory Management</li>
                                <li>• Multi-vendor Platforms</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Mobile App Development --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                                <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
                            <p className="text-gray-600 mb-6">
                                Native and cross-platform mobile applications that deliver exceptional performance and user experience.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• iOS & Android Development</li>
                                <li>• React Native, Flutter</li>
                                <li>• App Store Optimization</li>
                                <li>• Push Notifications</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- CMS Development --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">CMS Development</h3>
                            <p className="text-gray-600 mb-6">
                                Custom content management systems that empower you to manage your digital content efficiently.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• WordPress, Drupal, Strapi</li>
                                <li>• Custom CMS Solutions</li>
                                <li>• Content Migration</li>
                                <li>• Multi-site Management</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Backend Development --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                                <svg className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
                            <p className="text-gray-600 mb-6">
                                Robust server-side solutions that power your applications with scalability and security.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Node.js, Python, PHP</li>
                                <li>• Database Design & Optimization</li>
                                <li>• API Development & Integration</li>
                                <li>• Cloud Infrastructure</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Custom Web Development --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                                <svg className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Web Development</h3>
                            <p className="text-gray-600 mb-6">
                                Tailored web solutions designed specifically for your unique business requirements and goals.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Custom Web Applications</li>
                                <li>• Business Process Automation</li>
                                <li>• Third-party Integrations</li>
                                <li>• Legacy System Modernization</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Fullstack Development --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors">
                                <svg className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Fullstack Development</h3>
                            <p className="text-gray-600 mb-6">
                                Complete end-to-end development services covering both frontend and backend technologies.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• MEAN/MERN Stack</li>
                                <li>• Full Application Architecture</li>
                                <li>• DevOps & Deployment</li>
                                <li>• Maintenance & Support</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- ERP Development --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                                <svg className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">ERP Development</h3>
                            <p className="text-gray-600 mb-6">
                                Enterprise Resource Planning solutions to streamline your business processes and operations.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Custom ERP Solutions</li>
                                <li>• Module Integration</li>
                                <li>• Workflow Automation</li>
                                <li>• Reporting & Analytics</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- CRM Development --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-colors">
                                <svg className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">CRM Development</h3>
                            <p className="text-gray-600 mb-6">
                                Customer Relationship Management systems to enhance customer interactions and drive sales.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Custom CRM Solutions</li>
                                <li>• Lead Management</li>
                                <li>• Sales Pipeline Tracking</li>
                                <li>• Customer Analytics</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- RPA --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-600 transition-colors">
                                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">RPA (Robotic Process Automation)</h3>
                            <p className="text-gray-600 mb-6">
                                Automate repetitive tasks and business processes to improve efficiency and reduce operational costs.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Process Automation</li>
                                <li>• Bot Development</li>
                                <li>• Workflow Optimization</li>
                                <li>• Integration Solutions</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Software Testing & QA --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group">
                            <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Software Testing & QA</h3>
                            <p className="text-gray-600 mb-6">
                                Comprehensive testing services to ensure your software meets the highest quality standards.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Manual & Automated Testing</li>
                                <li>• Performance Testing</li>
                                <li>• Security Testing</li>
                                <li>• User Acceptance Testing</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Digital Marketing Services --> */}
            <section className="py-20 bg-white" id="digital-marketing">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-purple-600 font-medium mb-4">DIGITAL MARKETING</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Driving Growth Through Strategic Marketing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive digital marketing solutions to increase your online presence, engage your audience, and drive measurable results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Search Engine Optimization --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group border border-gray-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Search Engine Optimization</h3>
                            <p className="text-gray-600 mb-6">
                                Improve your website's visibility and ranking on search engines to drive organic traffic and leads.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Keyword Research & Strategy</li>
                                <li>• On-page & Technical SEO</li>
                                <li>• Link Building & Content</li>
                                <li>• Local SEO Optimization</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Social Media Optimization --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group border border-gray-100">
                            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                                <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Optimization</h3>
                            <p className="text-gray-600 mb-6">
                                Optimize your social media profiles and content to increase visibility and engagement across platforms.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Profile Optimization</li>
                                <li>• Content Strategy</li>
                                <li>• Hashtag Research</li>
                                <li>• Cross-platform Integration</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Social Media Marketing --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group border border-gray-100">
                            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                                <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Marketing</h3>
                            <p className="text-gray-600 mb-6">
                                Comprehensive social media campaigns to build brand awareness and engage with your target audience.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Content Creation & Curation</li>
                                <li>• Community Management</li>
                                <li>• Social Media Advertising</li>
                                <li>• Analytics & Reporting</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Paid Media Marketing --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group border border-gray-100">
                            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                                <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Paid Media Marketing</h3>
                            <p className="text-gray-600 mb-6">
                                Strategic paid advertising campaigns across multiple platforms to maximize ROI and drive conversions.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Google Ads & PPC</li>
                                <li>• Facebook & Instagram Ads</li>
                                <li>• Display Advertising</li>
                                <li>• Retargeting Campaigns</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Influencer Marketing --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group border border-gray-100">
                            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Influencer Marketing</h3>
                            <p className="text-gray-600 mb-6">
                                Connect with relevant influencers to amplify your brand message and reach new audiences authentically.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Influencer Identification</li>
                                <li>• Campaign Strategy & Management</li>
                                <li>• Content Collaboration</li>
                                <li>• Performance Tracking</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Email Marketing --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group border border-gray-100">
                            <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                                <svg className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Email Marketing</h3>
                            <p className="text-gray-600 mb-6">
                                Targeted email campaigns that nurture leads, retain customers, and drive conversions effectively.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• Email Campaign Design</li>
                                <li>• List Segmentation</li>
                                <li>• Automation Workflows</li>
                                <li>• A/B Testing & Analytics</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>

                        {/* <!-- Mobile App Marketing --> */}
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all service-card group border border-gray-100">
                            <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                                <svg className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App Marketing</h3>
                            <p className="text-gray-600 mb-6">
                                Specialized marketing strategies to promote your mobile app and increase downloads and user engagement.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                <li>• App Store Optimization</li>
                                <li>• User Acquisition Campaigns</li>
                                <li>• In-app Marketing</li>
                                <li>• Retention Strategies</li>
                            </ul>
                            <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Process Section --> */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Our Service Process</h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            We follow a proven methodology to ensure successful project delivery and client satisfaction
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center process-step">
                            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Discovery & Planning</h3>
                            <p className="text-blue-100">
                                We analyze your requirements, goals, and target audience to create a comprehensive project strategy.
                            </p>
                        </div>

                        <div className="text-center process-step">
                            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Design & Development</h3>
                            <p className="text-blue-100">
                                Our expert team creates and develops your solution using the latest technologies and best practices.
                            </p>
                        </div>

                        <div className="text-center process-step">
                            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Testing & Optimization</h3>
                            <p className="text-blue-100">
                                Rigorous testing and optimization ensure your solution performs flawlessly across all platforms.
                            </p>
                        </div>

                        <div className="text-center process-step">
                            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold">4</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Launch & Support</h3>
                            <p className="text-blue-100">
                                We launch your project and provide ongoing support to ensure continued success and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;