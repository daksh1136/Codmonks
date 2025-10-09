
import { Code, Database, Cloud, Globe, Server } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

const Technologies = () => {
    const techCategories = [
        {
            title: "Frontend Technologies",
            icon: <Globe className="h-8 w-8" />,
            description: "Modern web interfaces that deliver exceptional user experiences",
            technologies: [
                { name: "HTML", category: "Core" },
                { name: "CSS", category: "Core" },
                { name: "JavaScript", category: "Core" },
                { name: "React.js", category: "Framework" },
                { name: "Vue.js", category: "Framework" },
                { name: "Angular", category: "Framework" },
                { name: "Next.js", category: "Framework" },
                { name: "Tailwind CSS", category: "Styling" },
                { name: "Bootstrap", category: "Styling" },
                { name: "Sass/SCSS", category: "Styling" }
            ]
        },
        {
            title: "Backend Technologies",
            icon: <Server className="h-8 w-8" />,
            description: "Robust server-side solutions powering scalable applications",
            technologies: [
                { name: "Node.js", category: "Runtime" },
                { name: "TypeScript", category: "Language" },
                { name: "Python", category: "Language" },
                { name: "PHP", category: "Language" },
                { name: "Ruby", category: "Language" },
                { name: "Java (Spring Boot)", category: "Framework" },
                { name: "Go", category: "Language" },
                { name: "Express.js", category: "Framework" },
                { name: "Strapi", category: "CMS" }
            ]
        },
        {
            title: "Database Solutions",
            icon: <Database className="h-8 w-8" />,
            description: "Reliable data storage and management systems",
            technologies: [
                { name: "PostgreSQL", category: "SQL" },
                { name: "MySQL / MariaDB", category: "SQL" },
                { name: "Microsoft SQL Server", category: "SQL" },
                { name: "MongoDB", category: "NoSQL" },
                { name: "Firebase", category: "Cloud" }
            ]
        },
        {
            title: "DevOps & Cloud",
            icon: <Cloud className="h-8 w-8" />,
            description: "Streamlined deployment and infrastructure management",
            technologies: [
                { name: "AWS", category: "Cloud" },
                { name: "Google Cloud", category: "Cloud" },
                { name: "Azure", category: "Cloud" },
                { name: "DigitalOcean", category: "Cloud" },
                { name: "Vercel / Netlify", category: "Hosting" },
                { name: "GitHub Actions", category: "CI/CD" },
                { name: "GitLab CI/CD", category: "CI/CD" },
                { name: "CircleCI", category: "CI/CD" },
                { name: "Docker", category: "Container" },
                { name: "Kubernetes", category: "Orchestration" },
                { name: "Sentry", category: "Monitoring" },
                { name: "Datadog", category: "Monitoring" },
                { name: "LogRocket", category: "Monitoring" }
            ]
        },
        {
            title: "Content Management",
            icon: <Code className="h-8 w-8" />,
            description: "Flexible content management and e-commerce platforms",
            technologies: [
                { name: "WordPress", category: "CMS" },
                { name: "Drupal", category: "CMS" },
                { name: "Magento", category: "E-commerce" },
                { name: "Laravel", category: "Framework" },
                { name: "WooCommerce", category: "E-commerce" },
                { name: "Shopify", category: "E-commerce" },
                { name: "BigCommerce", category: "E-commerce" }
            ]
        }
    ];

    const stats = [
        { number: "50+", label: "Technologies Mastered" },
        { number: "250+", label: "Projects Delivered" },
        { number: "5+", label: "Years Experience" },
        { number: "24/7", label: "Support Available" }
    ];

    return (
        <>
            <Head>
                <title>Technologies | CodMonks</title>
                <meta name="description" content="Welcome to the home page" />
                <link rel="canonical" href="https://codmonks.com/technologies" />
            </Head>
            {/* Hero Section */}
            <section className="relative py-40 px-4 overflow-hidden tech-hero">
                <Image
                    src="/assets/images/banner-7.jpeg"
                    alt="Hero background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover -z-10 image"
                />
                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Cutting-Edge Technologies
                        <br />
                        Powering Innovation
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
                        We leverage the latest technologies and frameworks to build scalable,
                        secure, and high-performance digital solutions that drive business growth.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-4xl md:text-5xl font-bold">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Our Technology Arsenal
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From frontend frameworks to cloud infrastructure, we master the tools
                            that shape the digital landscape.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {techCategories.map((category, index) => (
                            <div key={index} className="rounded-xl group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg flex flex-col space-y-1.5 p-6 pb-4">
                                <div className="pb-4">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                            {category.icon}
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold text-gray-900">
                                                {category.title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray-600 leading-relaxed">
                                        {category.description}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-default rounded-full px-2 py-1 text-xs"
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-white"></div>
                <div className="absolute inset-0 bg-black/10"></div>

                <div className="relative max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-xl mb-8 text-white leading-relaxed">
                        Let’s discuss how our technology expertise can transform your ideas into reality.
                        Our team is ready to tackle your next big project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                            Start Your Project
                        </Link>
                        <Link href="/portfolio" className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Technologies;

