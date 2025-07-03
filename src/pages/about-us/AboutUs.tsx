const AboutUs = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        About <span className="text-blue-200">CodMonks</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        We are a passionate team of digital craftsmen, transforming innovative ideas into powerful software solutions that drive business growth and create exceptional user experiences.
                    </p>
                </div>
            </section>

            {/* <!-- Our Story Section --> */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-blue-600 font-medium mb-4">OUR STORY</p>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Founded on Innovation and Excellence
                            </h2>
                            <p className="text-gray-600 mb-6">
                                CodMonks was born from a simple yet powerful vision: to bridge the gap between complex technology and elegant solutions. Founded in 2018 by a group of passionate developers and designers, we started as a small team with big dreams.
                            </p>
                            <p className="text-gray-600 mb-6">
                                What began as late-night coding sessions and endless brainstorming has evolved into a thriving digital agency that has helped over 700+ clients worldwide transform their ideas into successful digital products.
                            </p>
                            <p className="text-gray-600 mb-8">
                                Today, we continue to push boundaries, embrace new technologies, and maintain our commitment to delivering exceptional results that exceed expectations.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">2019</div>
                                    <div className="text-gray-600">Founded</div>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">250+</div>
                                    <div className="text-gray-600">Projects Delivered</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img src="assets/images/about-us.jpg" alt="Our Story" className="rounded-lg shadow-lg" />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="text-2xl font-bold">5+</div>
                                    <div className="text-sm">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Mission & Vision Section --> */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Driving digital transformation through innovative solutions and exceptional craftsmanship
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 mb-6">
                                To empower businesses and entrepreneurs by transforming their digital dreams into reality through innovative software development, exceptional design, and strategic technology consulting.
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    Deliver cutting-edge digital solutions
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    Foster long-term partnerships
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    Drive business growth through technology
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-blue-100 mb-6">
                                To become the global leader in digital transformation, recognized for our innovation, quality, and the lasting impact we create for businesses worldwide.
                            </p>
                            <ul className="space-y-3 text-blue-100">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-white mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    Pioneer emerging technologies
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-white mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    Shape the future of digital experiences
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-white mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    Create meaningful global impact
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Core Values Section --> */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-medium mb-4">OUR VALUES</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Us Forward</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our core values shape every decision we make and every solution we deliver
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                            <p className="text-gray-600">
                                We constantly push boundaries and embrace cutting-edge technologies to deliver groundbreaking solutions.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors">
                                <svg className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
                            <p className="text-gray-600">
                                Excellence is not negotiable. We maintain the highest standards in every line of code and pixel of design.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors">
                                <svg className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
                            <p className="text-gray-600">
                                We believe in the power of teamwork, both within our team and with our clients, to achieve extraordinary results.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors">
                                <svg className="w-10 h-10 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Agility</h3>
                            <p className="text-gray-600">
                                We adapt quickly to changing requirements and market demands, ensuring our solutions remain relevant and effective.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Team Section --> */}
            {/* <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 font-medium mb-4">OUR TEAM</p>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Minds Behind CodMonks</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our diverse team of experts brings together years of experience, creativity, and passion for technology
                        </p>
                    </div> */}

            {/* <!-- Leadership Team --> */}
            {/* <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Leadership Team</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-lg text-center team-card">
                                <img src="/placeholder.svg?height=200&width=200" alt="CEO" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h4>
                                <p className="text-blue-600 mb-4">CEO & Co-Founder</p>
                                <p className="text-gray-600 mb-6">
                                    Visionary leader with 15+ years in tech industry. Former VP at Microsoft, passionate about digital transformation.
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <Link to="#" className="text-gray-400 hover:text-blue-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                                        </svg>
                                    </Link>
                                    <Link to="#" className="text-gray-400 hover:text-blue-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg text-center team-card">
                                <img src="/placeholder.svg?height=200&width=200" alt="CTO" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h4>
                                <p className="text-blue-600 mb-4">CTO & Co-Founder</p>
                                <p className="text-gray-600 mb-6">
                                    Technical architect with expertise in scalable systems. Former Lead Engineer at Google, AI and cloud computing specialist.
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <Link to="#" className="text-gray-400 hover:text-blue-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                                        </svg>
                                    </Link>
                                    <Link to="#" className="text-gray-400 hover:text-blue-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-lg text-center team-card">
                                <img src="/placeholder.svg?height=200&width=200" alt="Creative Director" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Emily Rodriguez</h4>
                                <p className="text-blue-600 mb-4">Creative Director</p>
                                <p className="text-gray-600 mb-6">
                                    Award-winning designer with a passion for user experience. Former Design Lead at Airbnb, specializing in digital product design.
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <Link to="#" className="text-gray-400 hover:text-blue-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
                                        </svg>
                                    </Link>
                                    <Link to="#" className="text-gray-400 hover:text-blue-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> */}

            {/* <!-- Development Team --> */}
            {/* <div>
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Development Team</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg text-center team-card">
                                <img src="/placeholder.svg?height=150&width=150" alt="Developer" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                                <h4 className="text-lg font-bold text-gray-900 mb-1">David Kim</h4>
                                <p className="text-blue-600 mb-2">Senior Full-Stack Developer</p>
                                <p className="text-sm text-gray-600">React, Node.js, Python</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg text-center team-card">
                                <img src="/placeholder.svg?height=150&width=150" alt="Developer" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Jessica Wang</h4>
                                <p className="text-blue-600 mb-2">UI/UX Designer</p>
                                <p className="text-sm text-gray-600">Figma, Adobe Creative Suite</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg text-center team-card">
                                <img src="/placeholder.svg?height=150&width=150" alt="Developer" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Alex Thompson</h4>
                                <p className="text-blue-600 mb-2">Mobile Developer</p>
                                <p className="text-sm text-gray-600">React Native, Flutter</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg text-center team-card">
                                <img src="/placeholder.svg?height=150&width=150" alt="Developer" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Maria Garcia</h4>
                                <p className="text-blue-600 mb-2">DevOps Engineer</p>
                                <p className="text-sm text-gray-600">AWS, Docker, Kubernetes</p>
                            </div>
                        </div>
                    </div> */}
            {/* </div>
            </section> */}

            {/* <!-- Company Stats Section --> */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
                        <p className="text-xl text-blue-100">
                            These numbers represent the trust our clients place in us and the results we deliver
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="text-center stats-card">
                            <div className="text-5xl font-bold mb-4">250+</div>
                            <div className="text-blue-200 text-lg">Projects Completed</div>
                        </div>
                        <div className="text-center stats-card">
                            <div className="text-5xl font-bold mb-4">250+</div>
                            <div className="text-blue-200 text-lg">Happy Clients</div>
                        </div>
                        <div className="text-center stats-card">
                            <div className="text-5xl font-bold mb-4">5,896</div>
                            <div className="text-blue-200 text-lg">Hours of Work</div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutUs;