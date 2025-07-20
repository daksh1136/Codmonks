// pages/blogs/index.tsx
import Link from 'next/link';
import Head from 'next/head'; // Added Head for better SEO
import { blogList } from '../../data/BlogData'; 
import React from 'react'; // Added React import for TS

// ---
// Define types for blog items for clarity in this component
interface BlogListItem {
    id: string;
    title: string;
    description: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
}

interface BlogListProps {
  blogs: BlogListItem[];
}

// ---
// getStaticProps to fetch blog list at build time
export async function getStaticProps() {
    // We only need a subset of data for the list view (no 'content' Markdown)
    const blogsForList = blogList.map(({ content, ...rest }) => rest);

    return {
        props: {
            blogs: blogsForList,
        },
    };
}

// ---
// Your Blog (List) Component
const Blog = ({ blogs }: BlogListProps) => { // Accept 'blogs' as a prop
    const getTagCountMap = () => {
        return blogs.reduce((acc, blog) => { // Use 'blogs' from props
            blog.tags.forEach(tag => {
                acc[tag] = (acc[tag] || 0) + 1;
            });
            return acc;
        }, {} as Record<string, number>);
    };

    const featuredBlog = blogs[0]; // Use blogs from props
    const recentBlogs = blogs.slice(1); // Use blogs from props
    const popularPosts = blogs.slice(0, 3); // Use blogs from props

    if (!blogs || blogs.length === 0) {
      return (
        <div className="min-h-screen bg-background flex justify-center items-center">
          <p>No blog posts found.</p>
        </div>
      );
    }

    return (
        <div className="min-h-screen bg-background">
            <Head>
                <title>Blog - Latest Articles | CodMonks</title>
                <meta name="description" content="Stay updated with the latest trends, tutorials, and insights from the world of technology and development." />
            </Head>

            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Our Blog</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Stay updated with the latest trends, tutorials, and insights from the world of technology and development.
                    </p>
                </div>
            </section>            

            {/* Blog Content */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-4 lg:gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Featured Post */}
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
                                {featuredBlog && ( // Conditional render if featuredBlog exists
                                    <Link href={`/blogs/${featuredBlog.id}`}>
                                        <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                            <div className="aspect-video bg-gradient-to-r from-primary to-secondary relative overflow-hidden bg-[length:100%]"
                                                style={{ backgroundImage: `url(${featuredBlog.image})` }}>
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                                                        {featuredBlog.tags?.[0] || 'General'}
                                                    </span>
                                                    <h3 className="text-2xl font-bold text-white mb-2">
                                                        {featuredBlog.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="p-8">
                                                <p className="text-gray-600 mb-4 leading-relaxed">
                                                    {featuredBlog.description}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                                                            <span className="text-white font-semibold text-sm">CM</span>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-900">{featuredBlog.author || 'CodMonks Team'}</p>
                                                            <p className="text-sm text-gray-500">{featuredBlog.date}</p>
                                                        </div>
                                                    </div>
                                                    <div className="inline-flex items-center text-primary hover:text-secondary font-semibold">
                                                        Read More
                                                        <i data-lucide="arrow-right" className="ml-2 w-4 h-4"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                )}
                            </div>

                            {/* Recent Posts */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
                                <div className="grid gap-8">
                                    {recentBlogs.map((blog) => (
                                        <article
                                            key={blog.id}
                                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                                        >
                                            <div className="md:flex">
                                                <div className="md:w-1/3">
                                                    <div className="h-48 md:h-full bg-gradient-to-br from-blue-400 to-purple-500 relative bg-[length:100%]"
                                                        style={{ backgroundImage: `url(${blog.image})` }}>
                                                        <div className="absolute inset-0 bg-black/10"></div>
                                                        <div className="absolute top-4 left-4">
                                                            <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                                                                {blog.tags?.[0] || 'Blog'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:w-2/3 p-6">
                                                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                                                        <i data-lucide="calendar" className="w-4 h-4"></i>
                                                        <span>{blog.date}</span>
                                                        <span>•</span>
                                                        <span>{blog.readTime || '5 min read'}</span>
                                                    </div>
                                                    <Link href={`/blogs/${blog.id}`}>
                                                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary cursor-pointer transition-colors">
                                                            {blog.title}
                                                        </h3>
                                                    </Link>
                                                    <p className="text-gray-600 mb-4">
                                                        {blog.description}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex flex-wrap gap-2">
                                                            {blog.tags?.map((tag) => (
                                                                <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <Link href={`/blogs/${blog.id}`} className="text-primary hover:text-secondary font-semibold">
                                                            Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1 mt-12 lg:mt-0">
                            {/* Categories */}
                            <div className="bg-white rounded-xl shadow-md p-6 mb-8 hidden">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                                <ul className="space-y-3 pe-3 max-h-48 overflow-y-auto">
                                    {Object.entries(getTagCountMap()).map(([tag, count]) => (
                                        <li key={tag}>
                                            <a
                                                href="#"
                                                className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors"
                                            >
                                                <span>{tag}</span>
                                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                                    {count}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Popular Posts */}
                            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
                                <div className="space-y-4">
                                    {popularPosts.map((post) => (
                                        <article className="flex space-x-3" key={post.id}>
                                            <div
                                                className="w-16 h-16 rounded-lg flex-shrink-0 bg-[length:100%] bg-center"
                                                style={{ backgroundImage: `url(${post.image})` }}
                                            />
                                            <div>
                                                <Link
                                                    href={`/blogs/${post.id}`}
                                                    className="text-sm font-semibold text-gray-900 hover:text-primary cursor-pointer line-clamp-2"
                                                >
                                                    {post.title}
                                                </Link>
                                                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white hidden">
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