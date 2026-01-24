import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image";
import Link from "next/link";

const servicesLinks = [
  { label: 'Web Development', path: '/services' },
  { label: 'Mobile App Development', path: '/services' },
  { label: 'UI/UX Design', path: '/services' },
  { label: 'Quality Assurance', path: '/services' },
  { label: 'Digital Marketing', path: '/services' },
];

const companyLinks = [
  { label: 'About Us', path: '/about-us' },
  { label: 'Technologies', path: '/technologies' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
];

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <Link href="/" className="flex items-center">
                    <picture>
                        <Image 
                          src="/assets/images/logo-1-tp.png" 
                          alt="Company Logo" 
                          width={194} 
                          height={49}
                          className="max-w-[194px] h-auto"
                        />
                    </picture>
                </Link>
              </h3>
              <p className="text-black mb-6">
                We are a global digital solutions company crafting high-performing, scalable products and platforms that exceed user and business expectations.
              </p>
              <div className="flex space-x-4">
                <Link target="_blank" href="https://www.facebook.com/people/Codmonks-Technologies/61580622238665/" className="text-blue-600 hover:text-golden">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link target="_blank" href="https://x.com/codmonkstech?s=11" className="text-blue-600 hover:text-golden">
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/company/codmonks-technologies/" className="text-blue-600 hover:text-golden">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link target="_blank" href="https://www.instagram.com/codmonkstech/" className="text-blue-600 hover:text-golden">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-black">
                {servicesLinks.map(({ label, path }) => (
                  <li key={label}>
                    <Link href={path}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-black">
                {companyLinks.map(({ label, path }) => (
                  <li key={label}>
                    <Link href={path}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-black">
                <p><FontAwesomeIcon icon={faPhone} /> +91 8285670396</p>
                <Link href="mailto:sales@codmonks.com"><FontAwesomeIcon icon={faEnvelope} /> sales@codmonks.com</Link>
                <p><FontAwesomeIcon icon={faLocationDot} /> 769, Sec - 64, Ballabhgarh, Faridabad, Haryana - 121004</p>
              </div>
            </div>
          </div>

          <div className="border-t border-black mt-12 pt-8 text-center text-black">
            <p>&copy; { new Date().getFullYear() } CodMonks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;