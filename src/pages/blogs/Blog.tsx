
const Blog = () => {

    return (
        <div className="min-h-screen bg-background">
            {/* <!-- Hero Section --> */}
            <section className="relative bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                        Our Blog
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Stay updated with the latest trends, tutorials, and insights from the world of technology and development.
                    </p>

                    {/* <!-- Search Bar --> */}
                    <div className="max-w-md mx-auto relative">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full px-4 py-3 pl-12 rounded-lg border-0 focus:ring-2 focus:ring-white/20 focus:outline-none"
                        />
                        <i data-lucide="search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                    </div>
                </div>
            </section>

            {/* <!-- Blog Content --> */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-12">
                        {/* <!-- Main Content --> */}
                        <div className="lg:col-span-3">
                            {/* <!-- Featured Post --> */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
                                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <div className="aspect-video bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                                                Web Development
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                The Future of Web Development: Trends to Watch in 2024
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            Explore the cutting-edge technologies and frameworks that are shaping the future of web development. From AI integration to progressive web apps, discover what's next in the digital landscape.
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                                                    <span className="text-white font-semibold text-sm">CM</span>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">CodMonks Team</p>
                                                    <p className="text-sm text-gray-500">Dec 15, 2024</p>
                                                </div>
                                            </div>
                                            <a href="#" className="inline-flex items-center text-primary hover:text-secondary font-semibold">
                                                Read More
                                                <i data-lucide="arrow-right" className="ml-2 w-4 h-4"></i>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            {/* <!-- Recent Posts --> */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
                                <div className="grid gap-8">
                                    {/* <!-- Blog Post 1 --> */}
                                    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                        <div className="md:flex">
                                            <div className="md:w-1/3">
                                                <div className="h-48 md:h-full bg-gradient-to-br from-blue-400 to-purple-500 relative">
                                                    <div className="absolute inset-0 bg-black/10"></div>
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                                                            Tutorial
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-2/3 p-6">
                                                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                                                    <i data-lucide="calendar" className="w-4 h-4"></i>
                                                    <span>Dec 12, 2024</span>
                                                    <span>•</span>
                                                    <span>5 min read</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary cursor-pointer transition-colors">
                                                    Building Responsive Layouts with CSS Grid and Flexbox
                                                </h3>
                                                <p className="text-gray-600 mb-4">
                                                    Master the art of creating flexible, responsive layouts using modern CSS techniques. Learn when to use Grid vs Flexbox and best practices.
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">CSS</span>
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">HTML</span>
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Responsive</span>
                                                    </div>
                                                    <button className="text-primary hover:text-secondary font-semibold">
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    {/* <!-- Blog Post 2 --> */}
                                    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                        <div className="md:flex">
                                            <div className="md:w-1/3">
                                                <div className="h-48 md:h-full bg-gradient-to-br from-green-400 to-blue-500 relative">
                                                    <div className="absolute inset-0 bg-black/10"></div>
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                                                            Industry News
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-2/3 p-6">
                                                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                                                    <i data-lucide="calendar" className="w-4 h-4"></i>
                                                    <span>Dec 10, 2024</span>
                                                    <span>•</span>
                                                    <span>3 min read</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary cursor-pointer transition-colors">
                                                    Mobile App Development: Native vs Cross-Platform
                                                </h3>
                                                <p className="text-gray-600 mb-4">
                                                    Compare the pros and cons of native and cross-platform mobile development approaches to make the right choice for your project.
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Mobile</span>
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">React Native</span>
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Flutter</span>
                                                    </div>
                                                    <button className="text-primary hover:text-secondary font-semibold">
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    {/* <!-- Blog Post 3 --> */}
                                    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                        <div className="md:flex">
                                            <div className="md:w-1/3">
                                                <div className="h-48 md:h-full bg-gradient-to-br from-purple-400 to-pink-500 relative">
                                                    <div className="absolute inset-0 bg-black/10"></div>
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                                                            SEO Tips
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:w-2/3 p-6">
                                                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                                                    <i data-lucide="calendar" className="w-4 h-4"></i>
                                                    <span>Dec 8, 2024</span>
                                                    <span>•</span>
                                                    <span>7 min read</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary cursor-pointer transition-colors">
                                                    SEO Best Practices for Modern Websites
                                                </h3>
                                                <p className="text-gray-600 mb-4">
                                                    Boost your website's search engine rankings with these proven SEO strategies and techniques that work in 2024.
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">SEO</span>
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Marketing</span>
                                                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Analytics</span>
                                                    </div>
                                                    <button className="text-primary hover:text-secondary font-semibold">
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                {/* <!-- Pagination --> */}
                                <div className="mt-12 flex justify-center">
                                    <nav className="flex items-center space-x-2">
                                        <button className="px-3 py-2 text-gray-500 hover:text-primary">
                                            <i data-lucide="chevron-left" className="w-5 h-5"></i>
                                        </button>
                                        <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
                                        <button className="px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg">2</button>
                                        <button className="px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg">3</button>
                                        <span className="px-2 text-gray-400">...</span>
                                        <button className="px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg">10</button>
                                        <button className="px-3 py-2 text-gray-500 hover:text-primary">
                                            <i data-lucide="chevron-right" className="w-5 h-5"></i>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Sidebar --> */}
                        <div className="lg:col-span-1 mt-12 lg:mt-0">
                            {/* <!-- Categories --> */}
                            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                                            <span>Web Development</span>
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">12</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                                            <span>Mobile Apps</span>
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">8</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                                            <span>SEO & Marketing</span>
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">6</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                                            <span>CMS Solutions</span>
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors">
                                            <span>Industry News</span>
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">5</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Popular Posts --> */}
                            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
                                <div className="space-y-4">
                                    <article className="flex space-x-3">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex-shrink-0"></div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 hover:text-primary cursor-pointer line-clamp-2">
                                                Complete Guide to React Hooks
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">Dec 5, 2024</p>
                                        </div>
                                    </article>
                                    <article className="flex space-x-3">
                                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex-shrink-0"></div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 hover:text-primary cursor-pointer line-clamp-2">
                                                Database Optimization Tips
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">Dec 3, 2024</p>
                                        </div>
                                    </article>
                                    <article className="flex space-x-3">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex-shrink-0"></div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 hover:text-primary cursor-pointer line-clamp-2">
                                                API Security Best Practices
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">Dec 1, 2024</p>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            {/* <!-- Newsletter --> */}
                            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white">
                                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                                <p className="text-blue-100 text-sm mb-4">
                                    Get the latest articles and tutorials delivered to your inbox.
                                </p>
                                <form className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                                    />
                                    <button className="w-full bg-white text-primary font-semibold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;