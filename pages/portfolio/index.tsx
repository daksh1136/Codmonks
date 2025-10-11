import Head from "next/head";
import Image from "next/image";

const Portfolio = () => {

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

                    {/* <!-- Portfolio Grid --> */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
                        {/* <!-- Web Development Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="web">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="" className="rounded-md" src="/assets/images/portfolio-1.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">TLT Sports specializes in using research based interventions to maximize the success of our athletes, and in the integration of ABA, physical fitness and team sports for all players.</p>
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="web">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="Portfolio" className="rounded-md" src="/assets/images/portfolio-2.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">In 1973, husband and wife Stanley and Marilyn Edelstein founded ECHOtape with a blue Volkswagen and a single roll of packing tape. With Stanley’s background in engineering and experience in the tape industry, they moved to Montreal, Marilyn’s hometown, to start the company naming it Edelstein Diversified</p>
                            </div>
                        </div>

                        {/* <!-- Mobile Development Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="mobile">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="Portfolio" className="rounded-md" src="/assets/images/portfolio-3.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">Having been a Florida vacation home investment owner and manager, Heather understands the intricacies of short-term rental niche market in the Disney area. Both her education & global experiences living abroad have enhanced her naturally detail-oriented personality and cultural awareness.</p>
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="mobile">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="Portfolio" className="rounded-md" src="/assets/images/portfolio-4.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">Brewing gadgets mission is to be your go-to destination for all your brewing needs, offering top-quality, genuine products and exceptional customer service to enhance your coffee journey.</p>
                            </div>
                        </div>

                        {/* <!-- CMS Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="cms">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="Portfolio" className="rounded-md" src="/assets/images/portfolio-5.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">Founded in 2007 by Deepak Aggarwal, KAZO is a premier Indian western-wear brand that brings affordable international fashion to the modern, confident woman . With over 170+ stores across 70+ cities.</p>
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="cms">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="Portfolio" className="rounded-md" src="/assets/images/portfolio-6.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">Rooted in India’s heritage of mastery and draping, Tarun Tahiliani has created the vision of “India Modern” by merging centuries-old craftsmanship with refined global tailoring
                                    . Since founding his Design Studio in 1995—following the success of Ensemble, India’s first luxury multi-designer boutique in 1987—his couture </p>
                            </div>
                        </div>

                        {/* <!-- SEO Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="seo">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="Portfolio" src="/assets/images/portfolio-7.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">Founded in 2015, VAPO was established to deliver premium, high-quality e-cigarette products that differed from those available on the market at the time. Since launching our first brick-and-mortar store in Auckland in 2017, we’ve grown both our store footprint and reputation as a reliable and responsible vape shop.</p>
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="seo">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="Portfolio" className="rounded-md" src="/assets/images/portfolio-8.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">Founded in 2016 by Simran Lal and Raul Rai, Nicobar is a mindful, design-led Indian lifestyle brand that blends heritage and sustainability with modern minimalism . With a thoughtfully curated range—spanning apparel, homeware, gifts, and travel essentials—the brand draws inspiration from Indian Ocean journeys and local craftsmanship
                                    .</p>
                            </div>
                        </div>

                        {/* <!-- CRM Projects --> */}
                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="crm">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="Portfolio" className="rounded-md" src="/assets/images/portfolio-9.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">With over 30 years of legacy, Maharishi Ayurveda India stands as North India’s first NABH-accredited Ayurvedic institution, blending authentic Vedic practices—like Panchakarma, Vedic diet, and meditation—with modern research-backed wellness programs
                                    . Their Delhi hospital and Tapovan retreat in Rishikesh offer global guests a holistic path to health, rooted in the balance of mind, body, and spirit
                                    .</p>
                            </div>
                        </div>

                        <div className="portfolio-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="crm">
                            <div className="min-h-48 flex items-center justify-center p-1">
                                <Image height={240} width={432} alt="Portfolio" src="/assets/images/portfolio-10.jpg" />
                            </div>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">In 2021, our founder, Natasha Jamal, embarked on a mission to offer a period solution that would disrupt the industry and we’ve spent the last two years engineering, designing and testing a product that’s utterly fantastic and completely revolutionary—Mahina.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default Portfolio;

