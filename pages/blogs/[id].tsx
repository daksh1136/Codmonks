// pages/blogs/[id].tsx
import React from 'react';
import Head from 'next/head';
// No need for useRouter if using getStaticProps for data, unless for client-side routing logic
// import { useRouter } from 'next/router'; // Remove this line
import { blogList } from '../../data/BlogData'; // Adjust path based on your project structure
import { remark } from 'remark';
import html from 'remark-html';

// ---
// Define a type for your blog item (good for TypeScript!)
interface BlogItem {
    id: string;
    title: string;
    description: string;
    author: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
    content: string; // The raw markdown content
    htmlContent: string; // Will hold the converted HTML
}

// ---
// 1. getStaticProps: Fetches data for each individual blog post at build time
export async function getStaticProps(context: { params: { id: string } }) {
    const blogId = context.params.id;

    // Find the blog post in your local array
    const blog = blogList.find((item) => item.id === blogId);

    if (!blog) {
        return {
            notFound: true, // If blog ID doesn't exist, show a 404 page
        };
    }

    // Convert Markdown content to HTML
    const processedContent = await remark().use(html).process(blog.content);
    const contentHtml = processedContent.toString();

    // Pass the blog data (with converted HTML) as props to the component
    return {
        props: {
            blog: {
                ...blog, // Spread existing blog properties
                htmlContent: contentHtml, // Add the HTML content
            },
        },
        // Optional: Re-generate the page every N seconds if data changes (Incremental Static Regeneration)
        // revalidate: 60, // Example: revalidate every 60 seconds
    };
}

// ---
// 2. getStaticPaths: Defines which dynamic paths should be pre-rendered at build time
export async function getStaticPaths() {
    // Map your blogList to the format Next.js expects for paths
    const paths = blogList.map((blog) => ({
        params: { id: blog.id }, // The 'id' here must match the [id] in the filename
    }));

    return {
        paths, // An array of all blog IDs to pre-render
        fallback: false, // If a path is not in 'paths', it will show a 404.
                         // Set to 'blocking' or 'true' if you want to generate pages on demand.
    };
}

// ---
// 3. Your BlogDetail React Component
// It now receives 'blog' directly as a prop, pre-fetched and processed.
interface BlogDetailProps {
    blog: BlogItem;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
    // No need for useRouter or finding the blog here, as it's passed via props
    // if (!blog) return <div className="p-4">Blog not found</div>; // This check is mostly handled by getStaticProps's notFound

    return (
        <>
            <Head>
                <title>{blog.title} | My Blog</title>
                <meta name="description" content={blog.description} />
            </Head>

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Title and meta */}
                {/* Consider dynamically assigning category based on actual data if available */}
                <p className="text-sm text-blue-600 mb-2">{blog.tags[0] || 'General'}</p> 
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{blog.title}</h1>
                <p className="text-gray-600 mb-4">{blog.date} · {blog.readTime}</p>
                <p className="text-lg text-gray-700 mb-8">{blog.description}</p>
                
                {/* Banner image - Consider using next/image for optimization */}
                <img src={blog.image} alt={blog.title} className="rounded-xl w-full mb-6" />

                {/* Author info */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        {blog.author.charAt(0)}
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{blog.author}</p>
                        <p className="text-xs text-gray-500">Senior Web Developer</p> {/* Or fetch this detail */}
                    </div>
                </div>

                {/* Blog content - using dangerouslySetInnerHTML for the converted HTML */}
                <div className="max-w-none prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: blog.htmlContent }} />
                {/* Make sure you have @tailwindcss/typography plugin installed and configured if you want 'prose' styles */}

                {/* Tags */}
                <div className="mt-10">
                    <h4 className="font-semibold mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                            <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetail;