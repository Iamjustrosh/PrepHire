import { FiMail, FiPhone } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand & Contact Info */}
        <div className="flex flex-col gap-2">
          <div className="text-xl font-bold tracking-wide mb-2">PrepHire</div>
          <div className="flex items-center gap-2">
            <FiPhone />
            <a href="tel:+919425465529" className="hover:underline">+91 94254 65529</a>
          </div>
          <div className="flex items-center gap-2">
            <FiMail />
            <a href="mailto:priya.tamrakar25@ibsindia.org" className="hover:underline">priya.tamrakar25@ibsindia.org</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold mb-1">Quick Links</div>
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-2 mt-4 md:mt-0 text-xs text-gray-200">
          <MdCopyright />
          <span>{new Date().getFullYear()} PrepHire. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
