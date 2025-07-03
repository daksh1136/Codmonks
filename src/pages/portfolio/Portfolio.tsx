
const Portfolio = () => {

    return (
        <div className="min-h-screen bg-background">
            {/* <!-- Hero Section --> */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>

                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Our <span className="text-blue-200">Portfolio</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Discover our successful projects across web development, mobile apps,
                        content management, SEO optimization, and CRM solutions.
                    </p>
                </div>
            </section>

            {/* <!-- Portfolio Categories --> */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* <!-- Category Tabs --> */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button className="category-tab active px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-transparent" data-category="all">
                            All Projects
                        </button>
                        <button className="category-tab px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-gray-300 text-gray-700 hover:border-purple-500" data-category="web">
                            Web Development
                        </button>
                        <button className="category-tab px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-gray-300 text-gray-700 hover:border-purple-500" data-category="mobile">
                            Mobile Apps
                        </button>
                        <button className="category-tab px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-gray-300 text-gray-700 hover:border-purple-500" data-category="cms">
                            CMS Solutions
                        </button>
                        <button className="category-tab px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-gray-300 text-gray-700 hover:border-purple-500" data-category="seo">
                            SEO Projects
                        </button>
                        <button className="category-tab px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 border-gray-300 text-gray-700 hover:border-purple-500" data-category="crm">
                            CRM Systems
                        </button>
                    </div>

                    {/* <!-- Portfolio Grid --> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
                        {/* <!-- Web Development Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="web">
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <i data-lucide="globe" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Web Development</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce Platform</h3>
                                <p className="text-gray-600 mb-4">Modern e-commerce solution with React.js, Node.js, and PostgreSQL for seamless online shopping experience.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">React.js</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Node.js</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">PostgreSQL</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="web">
                            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                                <i data-lucide="code" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Web Development</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Website</h3>
                                <p className="text-gray-600 mb-4">Professional corporate website with responsive design, CMS integration, and advanced SEO optimization.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Vue.js</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Laravel</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">MySQL</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        {/* <!-- Mobile Development Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="mobile">
                            <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                                <i data-lucide="smartphone" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">Mobile App</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Food Delivery App</h3>
                                <p className="text-gray-600 mb-4">Cross-platform mobile application for food delivery with real-time tracking and payment integration.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">React Native</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Firebase</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Stripe</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="mobile">
                            <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <i data-lucide="tablet" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">Mobile App</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Fitness Tracker</h3>
                                <p className="text-gray-600 mb-4">Health and fitness mobile app with workout tracking, nutrition planning, and social features.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Flutter</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">MongoDB</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">AWS</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        {/* <!-- CMS Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="cms">
                            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                                <i data-lucide="edit" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">CMS Solution</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">News Portal CMS</h3>
                                <p className="text-gray-600 mb-4">Custom content management system for news portal with multi-author support and editorial workflow.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">WordPress</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">PHP</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">MySQL</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="cms">
                            <div className="h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                <i data-lucide="layers" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">CMS Solution</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Learning Platform</h3>
                                <p className="text-gray-600 mb-4">Comprehensive learning management system with course creation, student tracking, and assessment tools.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Drupal</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">React</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">PostgreSQL</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        {/* <!-- SEO Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="seo">
                            <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                                <i data-lucide="search" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">SEO Project</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Business SEO</h3>
                                <p className="text-gray-600 mb-4">Complete SEO overhaul for local business resulting in 300% increase in organic traffic and leads.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Technical SEO</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Local SEO</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Analytics</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="seo">
                            <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                <i data-lucide="trending-up" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">SEO Project</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce SEO</h3>
                                <p className="text-gray-600 mb-4">SEO optimization for large e-commerce site with 10,000+ products, improving rankings and conversions.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Product SEO</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Schema Markup</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Performance</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        {/* <!-- CRM Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="crm">
                            <div className="h-48 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                                <i data-lucide="users" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">CRM System</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Sales CRM Platform</h3>
                                <p className="text-gray-600 mb-4">Custom CRM solution with lead management, pipeline tracking, and automated follow-up features.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Salesforce</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Integration</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Automation</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="crm">
                            <div className="h-48 bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                                <i data-lucide="building" className="w-16 h-16 text-white"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">CRM System</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Real Estate CRM</h3>
                                <p className="text-gray-600 mb-4">Specialized CRM for real estate agents with property management, client tracking, and deal pipeline.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">HubSpot</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Custom Fields</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Reporting</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;

