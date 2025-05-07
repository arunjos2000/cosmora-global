
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-cosmora-charcoal text-white">
      <div className="container-custom py-12 md:py-16">
        {/* Contact Info - Left Aligned */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center">
            <Mail size={18} className="text-cosmora-gold mr-2" />
            <span className="text-gray-300">info@cosmora.global</span>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Cosmora.Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
