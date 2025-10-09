
import React from 'react';
import Head from 'next/head';
import { blogList } from '../../data/BlogData';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';

interface BlogItem {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  content: string;
  htmlContent: string;
}

export async function getStaticProps(context: { params: { id: string } }) {
  const blogId = context.params.id;

  const blog = blogList.find((item) => item.id === blogId);

  if (!blog) {
    return {
      notFound: true,
    };
  }


  const processedContent = await remark().use(html).process(blog.content);
  const contentHtml = processedContent.toString();


  return {
    props: {
      blog: {
        ...blog,
        htmlContent: contentHtml,
      },
    },


  };
}



export async function getStaticPaths() {

  const paths = blogList.map((blog) => ({
    params: { id: blog.id },
  }));

  return {
    paths,
    fallback: false,

  };
}




interface BlogDetailProps {
  blog: BlogItem;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {



  return (
    <>
      <Head>
        <title>{blog.title} | My Blog</title>
        <meta name="description" content={blog.description} />
        <link rel="canonical" href={`https://codmonks.com/blogs/${blog.id}`} />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg font-bold mb-2 text-black">{blog.tags[0] || 'General'}</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-600 mb-4">{blog.date} · {blog.readTime}</p>
        <p className="text-lg text-gray-700 mb-8">{blog.description}</p>

        <Image height={576} width={864} src={blog.image} alt={blog.title} className="rounded-xl w-full mb-6" />

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
            {blog.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold">{blog.author}</p>
            <p className="text-xs text-gray-500">Senior Web Developer</p>
          </div>
        </div>

        <div className="max-w-none prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: blog.htmlContent }} />
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