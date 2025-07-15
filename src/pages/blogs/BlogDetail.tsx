import { useParams } from 'react-router-dom';
import { blogList } from './BlogData';
import ReactMarkdown from 'react-markdown';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogList.find((item) => item.id === id);

    if (!blog) return <div className="p-4">Blog not found</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            {/* Title and meta */}
            <p className="text-sm text-blue-600 mb-2">Web Development</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{blog.title}</h1>
            <p className="text-gray-600 mb-4">{blog.date} · {blog.readTime}</p>
            <p className="text-lg text-gray-700 mb-8">{blog.description}</p>
            {/* Banner image */}
            <img src={blog.image} alt={blog.title} className="rounded-xl w-full mb-6" />

            {/* Author info */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {blog.author.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-semibold">{blog.author}</p>
                    <p className="text-xs text-gray-500">Senior Web Developer</p>
                </div>
            </div>

            {/* Blog content */}
            <div className="max-w-none">
                <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>

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
    );
};

export default BlogDetail;