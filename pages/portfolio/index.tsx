import Head from "next/head";
import Image from "next/image";
import { portfolioList } from '../../data/portfolios';
import { useRef, useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";

type selectOptionProps = {
    title: string,
    value: string
}

type PortfolioCategory = "mobile" | "web";
type PortfolioProps = {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  keyFeature?: string[];
  tools?: string[];
  icon: string;
  image: string;
  techStack?: string;
  link?: string;
  caseStudyLink?: string;
  catagory: PortfolioCategory;
};

type PortfolioCardProps = {
  portfolio: PortfolioProps;
};

const Portfolio = () => {

    const [ filteredList, setFilteredList ] = useState(portfolioList);
    const inputRef = useRef<HTMLSelectElement | null>(null);
    const portfolioOptions = [
        {title: 'All', value: 'all'},
        {title: 'Mobile', value: 'mobile'},
        {title: 'Web', value: 'web'},
        {title: 'Frontend', value: 'frontend'},
        {title: 'CRM', value: 'crm'},
        {title: 'Unity', value: 'unity'},
        {title: 'CMS', value: 'cms'},
        {title: 'Others', value: 'others'},
    ];

    const changeHandler = () => {
        if(inputRef?.current?.value !== 'all'){
            setFilteredList(portfolioList.filter((item) => item?.catagory === inputRef?.current?.value));
        }
        else {
            setFilteredList(portfolioList);
        }
    };

    return (
        <>
        <Head>
            <title>Portfolio | CodMonks</title>
            <meta name="description" content="Welcome to the home page" />
            <link rel="canonical" href="https://codmonks.com/portfolio" />
        </Head>
        <div className="min-h-screen bg-background">
            {/* <!-- Hero Section --> */}
            <section className="relative py-40 px-4 overflow-hidden portfolio-hero">
                <Image
                    src="/assets/images/banner-9.jpeg"
                    alt="Hero background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover -z-10 image"
                />
                <div className="relative max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Our Portfolio
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
                        <strong>Inside Codmonks Technologies: A portfolio shaped by vision and success.</strong>
                    </p>
                </div>
            </section>

            {/* <!-- Portfolio Categories --> */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="py-12 text-gray-800">
                        <h2 className="text-3xl font-bold mb-4 text-center">We design, create and develop innovative<br className='hidden md:block' /> solutions adapted to your needs.</h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            <strong>CodMonks Technologies</strong> is a full-stack development company specializing in creating scalable, high-performance web and mobile solutions. With over a decade of experience, we’ve delivered successful digital products across industries such as <strong>finance, healthcare, education, and e-commerce</strong>.
                        </p>

                        <p className="mb-4 text-lg leading-relaxed">
                            Our team excels in <strong>modern JavaScript frameworks like React, Angular, and Node.js</strong>, as well as eCommerce platforms including <strong>Shopify, WordPress, Webflow, and Adobe Experience Manager (AEM)</strong>. We’re experts in <strong>API integrations, cloud deployment, and performance optimization</strong>, ensuring every project is secure, fast, and reliable.
                        </p>

                        <p className="mb-4 text-lg leading-relaxed">
                            At CodMonks, we combine <strong>technical excellence with design thinking</strong> to craft seamless user experiences and business-driven results for startups and enterprises alike.
                        </p>
                    </div>
                    <div>
                        <span className="font-bold">Filter Projects:</span>&nbsp;&nbsp;
                        <select className="border-2 rounded-md p-2 min-w-[250px]" ref={inputRef} onChange={changeHandler}>
                            { portfolioOptions.map((item: selectOptionProps) => (<option key={item.value} value={item.value}>{item.title}</option>))}
                        </select>
                    </div>

                    {/* <!-- Portfolio Grid --> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
                        {
                            filteredList && filteredList.map(portfolio => (<PortfolioCard key={portfolio.id} portfolio={portfolio} showInfo={false} />)
                            ) 
                        }
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Portfolio;

