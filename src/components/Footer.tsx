
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-cosmora-charcoal text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Cosmora</h3>
            <p className="text-gray-300 mb-4">
              Opening doors to a world without borders through expert immigration 
              and investment solutions.
            </p>
            <div className="flex space-x-4 items-center">
              <a href="#" className="text-white hover:text-cosmora-gold transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={18} className="text-cosmora-gold mr-2" />
                <span className="text-gray-300">One Financial Center, London</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-cosmora-gold mr-2" />
                <span className="text-gray-300">+44 20 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-cosmora-gold mr-2" />
                <span className="text-gray-300">info@cosmora.com</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-cosmora-gold transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cosmora-gold transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cosmora-gold transition">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Cosmora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
