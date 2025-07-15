
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

                    <div className="py-12 text-gray-800">
                        <h1 className="text-3xl font-bold mb-4">Founder’s Story</h1>
                        <p className="mb-4 text-lg leading-relaxed">
                            I’m a passionate and experienced Full Stack Developer with over <strong>11+ years of professional experience</strong> in designing, developing, and delivering scalable web and mobile applications.
                            I hold a Master’s degree in Computer Applications from <strong>Sikkim Manipal University</strong> and have contributed to a wide range of successful software projects across industries including finance, healthcare, and e-commerce.
                        </p>

                        <p className="mb-4 text-lg leading-relaxed">
                            I specialize in <strong>modern JavaScript frameworks</strong> like React, Angular, and Node.js, and am equally comfortable building backend APIs, integrating third-party services, or working with cloud platforms.
                            I’m also experienced in tools like TypeScript, Express, MongoDB, PostgreSQL, and Firebase, and follow best practices for code quality, performance, and security.
                        </p>

                        <p className="mb-4 text-lg leading-relaxed">
                            Throughout my career, I have led and collaborated on multiple projects—from dynamic web portals to enterprise applications—focusing on clean architecture, responsive design, and seamless user experiences.
                        </p>

                        <p className="mb-4 text-lg leading-relaxed">
                            I’m always eager to take on new challenges and learn emerging technologies to create solutions that make a meaningful impact. Whether working independently or as part of a team, I bring dedication, adaptability, and a product-focused mindset.
                        </p>
                    </div>

                    {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                    </div> */}

                    {/* <p className="text-2xl leading-relaxed mb-4">
                        <strong>Projects completed as a developer</strong>
                    </p> */}

                    {/* <!-- Portfolio Grid --> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
                        {/* <!-- Web Development Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="web">
                            <div className="min-h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-1">
                                {/* <i data-lucide="globe" className="w-16 h-16 text-white"></i> */}
                                <img className="rounded-md" src="/assets/images/portfolio-1.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Web Development</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce Platform</h3> */}
                                <p className="text-gray-600 mb-4">TLT Sports specializes in using research based interventions to maximize the success of our athletes, and in the integration of ABA, physical fitness and team sports for all players.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">React.js</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Node.js</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">PostgreSQL</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="web">
                            <div className="min-h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center p-1">
                                <img className="rounded-md" src="/assets/images/portfolio-2.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Web Development</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Website</h3> */}
                                <p className="text-gray-600 mb-4">In 1973, husband and wife Stanley and Marilyn Edelstein founded ECHOtape with a blue Volkswagen and a single roll of packing tape. With Stanley’s background in engineering and experience in the tape industry, they moved to Montreal, Marilyn’s hometown, to start the company naming it Edelstein Diversified</p>
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
                            <div className="min-h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center p-1">
                                <img className="rounded-md" src="/assets/images/portfolio-3.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">Mobile App</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Food Delivery App</h3> */}
                                <p className="text-gray-600 mb-4">Having been a Florida vacation home investment owner and manager, Heather understands the intricacies of short-term rental niche market in the Disney area. Both her education & global experiences living abroad have enhanced her naturally detail-oriented personality and cultural awareness.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">React Native</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Firebase</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Stripe</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="mobile">
                            <div className="min-h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-1">
                                <img className="rounded-md" src="/assets/images/portfolio-4.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded">Mobile App</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Fitness Tracker</h3> */}
                                <p className="text-gray-600 mb-4">Brewing gadgets mission is to be your go-to destination for all your brewing needs, offering top-quality, genuine products and exceptional customer service to enhance your coffee journey.</p>
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
                            <div className="min-h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center p-1">
                                <img className="rounded-md" src="/assets/images/portfolio-5.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">CMS Solution</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">News Portal CMS</h3> */}
                                <p className="text-gray-600 mb-4">Founded in 2007 by Deepak Aggarwal, KAZO is a premier Indian western-wear brand that brings affordable international fashion to the modern, confident woman . With over 170+ stores across 70+ cities.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">WordPress</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">PHP</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">MySQL</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="cms">
                            <div className="min-h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center p-1">
                                <img className="rounded-md" src="/assets/images/portfolio-6.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">CMS Solution</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Learning Platform</h3> */}
                                <p className="text-gray-600 mb-4">Rooted in India’s heritage of mastery and draping, Tarun Tahiliani has created the vision of “India Modern” by merging centuries-old craftsmanship with refined global tailoring
                                    . Since founding his Design Studio in 1995—following the success of Ensemble, India’s first luxury multi-designer boutique in 1987—his couture </p>
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
                            <div className="min-h-48 bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center p-1">
                                <img src="assets/images/portfolio-7.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">SEO Project</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Business SEO</h3> */}
                                <p className="text-gray-600 mb-4">Founded in 2015, VAPO was established to deliver premium, high-quality e-cigarette products that differed from those available on the market at the time. Since launching our first brick-and-mortar store in Auckland in 2017, we've grown both our store footprint and reputation as a reliable and responsible vape shop.</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Technical SEO</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Local SEO</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Analytics</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="seo">
                            <div className="min-h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-1">
                                <img className="rounded-md" src="/assets/images/portfolio-8.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">SEO Project</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce SEO</h3> */}
                                <p className="text-gray-600 mb-4">Founded in 2016 by Simran Lal and Raul Rai, Nicobar is a mindful, design-led Indian lifestyle brand that blends heritage and sustainability with modern minimalism . With a thoughtfully curated range—spanning apparel, homeware, gifts, and travel essentials—the brand draws inspiration from Indian Ocean journeys and local craftsmanship
                                    .</p>
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
                            <div className="min-h-48 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center p-1">
                                <img className="rounded-md" src="/assets/images/portfolio-9.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">CRM System</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Sales CRM Platform</h3> */}
                                <p className="text-gray-600 mb-4">With over 30 years of legacy, Maharishi Ayurveda India stands as North India’s first NABH-accredited Ayurvedic institution, blending authentic Vedic practices—like Panchakarma, Vedic diet, and meditation—with modern research-backed wellness programs
                                    . Their Delhi hospital and Tapovan retreat in Rishikesh offer global guests a holistic path to health, rooted in the balance of mind, body, and spirit
                                    .</p>
                                {/* <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Salesforce</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Integration</span>
                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Automation</span>
                                </div>
                                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">View Project →</button> */}
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="crm">
                            <div className="min-h-48 bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center p-1">
                                <img src="assets/images/portfolio-10.jpg" />
                            </div>
                            <div className="p-6">
                                {/* <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">CRM System</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Real Estate CRM</h3> */}
                                <p className="text-gray-600 mb-4">In 2021, our founder, Natasha Jamal, embarked on a mission to offer a period solution that would disrupt the industry and we’ve spent the last two years engineering, designing and testing a product that’s utterly fantastic and completely revolutionary—Mahina.</p>
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

