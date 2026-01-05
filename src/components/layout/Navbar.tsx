import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <Link to="/" onClick={() => setOpen(false)}>Home</Link>
      <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
      <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
      <Link to="/companies" onClick={() => setOpen(false)}>Companies</Link>
    </>
  );

  return (
    <nav className="bg-white shadow-sm z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="PrepHire" className="h-8" />
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 font-medium">
          {navLinks}
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>
      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-60 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-70 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Mobile navigation"
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <img src="/logo.png" alt="PrepHire" className="h-8" />
          <button
            className="p-2 rounded hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FiX className="text-2xl" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-6 py-6 text-lg font-medium">
          {navLinks}
        </nav>
      </aside>
    </nav>
  );
}
