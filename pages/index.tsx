import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCode, faImage, faMobile, faPalette, faPeopleArrows, faPhone, faRankingStar, faScrewdriverWrench, faThumbsUp, faTruck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const services = [
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud Solutions',
  'E-commerce Platforms',
  'Cybersecurity',
  'AI & Automation',
  'React Native Apps',
  'Flutter Apps',
  'Desktop Application Development',
  'Custom CRM Solutions',
  'ERP Development',
  'Digital Marketing',
  'Search Engine Optimization (SEO)',
  'Content Marketing',
  'Social Media Marketing',
  'Pay-Per-Click (PPC) Advertising',
  'PHP Development',
  'Laravel Development',
  'CodeIgniter Development',
  'WordPress Development',
  'Shopify Development',
  'Magento Development',
  'Progressive Web Apps (PWA)',
  'API Development & Integration',
  'SaaS Product Development',
  'DevOps & CI/CD',
  'Quality Assurance & Testing',
  'Maintenance & Support'
];


const Home = () => {
  return (
    <>
      <Head>
        <title>CodMonks Technologies | Web, Mobile, CRM & Digital Solutions</title>
        <meta 
          name="description" 
          content="CodMonks Technologies offers expert Web Development, Mobile Apps (React Native, Flutter), CRM, E-commerce, SEO, and Digital Marketing solutions to grow your business." 
        />
        <meta name="keywords" content="Web Development, Mobile App Development, React Native, Flutter, CRM Solutions, E-commerce Development, SEO, Digital Marketing, CodMonks" />
        <meta property="og:title" content="CodMonks Technologies | Digital Excellence" />
        <meta property="og:description" content="We craft powerful Web, Mobile, and E-commerce solutions with SEO and digital marketing expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/og-banner.png" />
        <meta property="og:url" content="https://www.codmonks.com" />
        <link rel="canonical" href="https://www.codmonks.com" />
        <link rel="preload" as="image" href="/assets/images/hero.jpg" />
      </Head>

      {/* <!-- Hero Section --> */}
      <section className="py-20 home-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-white font-medium text-2xl mb-4">Transforming your Vision into digital excellence</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Craft your Digital Dreams. Without the complexity.
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              We turn your ideas into outstanding digital experiences through innovative software development and premium UI/UX design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button-pri px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Start Project
              </Link>
            </div>
          </div>
        </div>
        
        <div className="services-marquee w-full overflow-hidden py-4 mt-20">
          <div className="marquee-track flex">
            {services.map((item, index) => (
              <span key={index} className="text-white text-xl pr-8 flex items-center">
                {item} <span className="pl-8">&#10084;</span>
              </span>
            ))}
            {services.map((item, index) => (
              <span key={index} className="text-white text-xl pr-8 flex items-center">
                {item} <span className="pl-8">&#10084;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Client Logos --> */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* <p className="text-center text-gray-500 mb-8">Our Platform Partners</p> */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Platform Partners</h2>
          </div>
          <div className="partner-wrap flex flex-wrap justify-center items-center gap-4">
            <div className="partner">
              <Image src="/assets/images/shopify.png" height={80} width={80} alt="Shopify Development Partner" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/mongodb.png" alt="MongoDB Integration Partner" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/wordpress.png" alt="WordPress Development Partner" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/microsoft-logo.png" alt="Microsoft" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/react.png" alt="React Development" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/angular.png" alt="Angular Development" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/hobspot.png" alt="Hubspot Integration Partner" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/Laravel-Logo.png" alt="Laravel Development" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/zoho-logo.png" alt="Zoho Integration Partner" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/PayPal-Logo.png" alt="Paypal Integration Partner" />
            </div>
            <div className="partner">
              <Image height={80} width={80} src="/assets/images/google.png" alt="Goggle Api Development" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Us Section --> */}
      <section className="py-20 text-white bg-blur">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold mb-4 font-bold">WHO WE ARE</p>
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              CodMonks is a top-tier team of passionate software engineers, designers, and strategists dedicated to transforming your ideas into powerful digital solutions that drive business growth and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="stats-card">
              <div className="text-3xl font-bold mb-2">250+</div>
              <div className="text-white">Projects Completed</div>
            </div>
            <div className="stats-card">
              <div className="text-3xl font-bold mb-2">250+</div>
              <div className="text-white">Happy Clients</div>
            </div>
            <div className="stats-card">
              <div className="text-3xl font-bold mb-2">5,896</div>
              <div className="text-white">Hours of Work</div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Services Section --> */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 mb-4">WHAT WE DO</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming Ideas into<br className='hidden md:block' />
              Intelligent Software.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <FontAwesomeIcon color="currentColor" icon={faCode} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Web Development</h3>
              <p className="text-gray-600 mb-6">We take your product from idea to execution — designing, developing, deploying, and improving at every stage.</p>
              <Link href="/services" className="text-blue-600 hover:underline">LEARN MORE →</Link>
            </div>

            <div className="service-card bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <FontAwesomeIcon color="currentColor" icon={faMobile} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Mobile App Development</h3>
              <p className="text-gray-600 mb-6">Seamless native and cross-platform mobile applications tailored for iOS and Android ecosystems.</p>
              <Link href="/services" className="text-blue-600 hover:underline">LEARN MORE →</Link>
            </div>

            <div className="service-card bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <FontAwesomeIcon color="currentColor" icon={faPalette} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">UI/UX Design</h3>
              <p className="text-gray-600 mb-6">We craft visually stunning and easy-to-use interfaces that delight your users.</p>
              <Link href="/services" className="text-blue-600 hover:underline">LEARN MORE →</Link>
            </div>

            <div className="service-card bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <FontAwesomeIcon color="currentColor" icon={faRankingStar} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600 mb-6">Comprehensive validation to ensure every feature works as intended — with zero surprises.</p>
              <Link href="/services" className="text-blue-600 hover:underline">LEARN MORE →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Experience Section --> */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 mb-4">WHY US</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We have over 5+ years in the industry
              </h2>
              <p className="text-gray-600 mb-8">
                Our skilled team combines deep technical expertise with creative problem-solving to deliver exceptional digital solutions that exceed expectations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mr-4 mt-1 shrink-0">
                    <FontAwesomeIcon className="text-white" icon={faCheck} />
                  </div>
                  <div className='flex-grow-1'>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Development Team</h4>
                    <p className="text-gray-600">Skilled professionals with extensive experience in modern technologies.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mr-4 mt-1 shrink-0">
                    <FontAwesomeIcon className="text-white" icon={faCheck} />
                  </div>
                  <div className='flex-grow-1'>
                    <h4 className="font-semibold text-gray-900 mb-2">24/7 Support Team</h4>
                    <p className="text-gray-600">Round-the-clock support to ensure your project runs smoothly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Image height={417} width={493} src="/assets/images/why-us.png" alt="Team working" className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Client Success Section --> */}
      <section className="py-20 bg-blur bg-blur-style-2 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-bold mb-4">OUR SUCCESS</p>
            <h2 className="text-4xl font-bold mb-6">We have helped more than 200+ clients worldwide</h2>
            <p className="text-xl text-white">Our clients trust us to deliver exceptional results that drive their business forward.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-40 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FontAwesomeIcon className="text-black" icon={faTruck} />
              </div>
              <h4 className="text-xl font-bold mb-2">Project Delivery</h4>
              <p className="text-white">On-time delivery with quality assurance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-40 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FontAwesomeIcon className="text-black" icon={faThumbsUp} />
              </div>
              <h4 className="text-xl font-bold mb-2">Client Satisfaction</h4>
              <p className="text-white">98% client satisfaction rate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-40 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FontAwesomeIcon className="text-black" icon={faPeopleArrows} />
              </div>
              <h4 className="text-xl font-bold mb-2">Technical Excellence</h4>
              <p className="text-white">Cutting-edge technology solutions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-40 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FontAwesomeIcon className="text-black" icon={faScrewdriverWrench} />
              </div>
              <h4 className="text-xl font-bold mb-2">Support & Maintenance</h4>
              <p className="text-white">Ongoing support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials Section --> */}
      {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 mb-4">TESTIMONIALS</p>
                        <h2 className="text-4xl font-bold text-gray-900">Our successful clients</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="testimonial-card bg-white border border-gray-200 p-8 rounded-xl">
                            <div className="text-blue-600 text-4xl mb-4">"</div>
                            <p className="text-gray-600 mb-6">
                                "CodMonks delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and technical expertise is outstanding."
                            </p>
                            <div className="flex items-center">
                                <img src="/placeholder.svg?height=50&width=50" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                                    <p className="text-gray-500">CEO, TechStart</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card bg-white border border-gray-200 p-8 rounded-xl">
                            <div className="text-blue-600 text-4xl mb-4">"</div>
                            <p className="text-gray-600 mb-6">
                                "Working with CodMonks was a game-changer for our business. They transformed our ideas into a powerful web platform."
                            </p>
                            <div className="flex items-center">
                                <img src="/placeholder.svg?height=50&width=50" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                                    <p className="text-gray-500">Founder, InnovateCorp</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card bg-white border border-gray-200 p-8 rounded-xl">
                            <div className="text-blue-600 text-4xl mb-4">"</div>
                            <p className="text-gray-600 mb-6">
                                "The team at CodMonks is incredibly professional and skilled. They delivered our project on time and within budget."
                            </p>
                            <div className="flex items-center">
                                <img src="/placeholder.svg?height=50&width=50" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                                    <p className="text-gray-500">CTO, DataFlow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* <!-- Portfolio Section --> */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols gap-4">
              <img src="/assets/images/projects.png" alt="Project 1" className="rounded-lg object-cover" />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our amazing project that has been completed
              </h2>
              <p className="text-gray-600 mb-8">
                Take a look at some of our recent projects that showcase our expertise in creating innovative digital solutions for businesses across various industries.
              </p>
              <Link href="/portfolio" className="bg-custom-gradient text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Team Section --> */}
      {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our certified experts</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Meet our talented team of developers, designers, and strategists who bring your digital vision to life.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="team-card text-center">
                            <img src="/placeholder.svg?height=200&width=200" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">David Kim</h3>
                            <p className="text-blue-600 mb-4">Lead Developer</p>
                            <div className="flex justify-center space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="team-card text-center">
                            <img src="/placeholder.svg?height=200&width=200" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Jessica Wang</h3>
                            <p className="text-blue-600 mb-4">UI/UX Designer</p>
                            <div className="flex justify-center space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="team-card text-center">
                            <img src="/placeholder.svg?height=200&width=200" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Alex Thompson</h3>
                            <p className="text-blue-600 mb-4">Project Manager</p>
                            <div className="flex justify-center space-x-4">
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </Link>
                                <Link href="#" className="text-gray-400 hover:text-blue-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* <!-- CTA Section --> */}
      <section className="py-20 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Service discount up to 30% for any project</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with us today and let&apos;s discuss your next project.
          </p>
          <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home;