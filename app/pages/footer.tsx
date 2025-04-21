import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook className="text-xl" />, url: "#", label: "Facebook" },
    { icon: <FaLinkedin className="text-xl" />, url: "#", label: "LinkedIn" },
    { icon: <FaInstagram className="text-xl" />, url: "#", label: "Instagram" },
    { icon: <FaTwitter className="text-xl" />, url: "#", label: "Twitter" },
    { icon: <FaGithub className="text-xl" />, url: "#", label: "GitHub" },
  ];

  const footerLinks = [
    { title: "Navigation", links: ["Home", "About", "Services", "Portfolio", "Contact"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
    { title: "Resources", links: ["Blog", "Documentation", "Support"] },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">STEPHDEV</h2>
            <p className="mb-6">Crafting digital experiences that inspire and deliver results.</p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="text-white font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={`/#${link.toLowerCase()}`}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} STEPHDEV. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;