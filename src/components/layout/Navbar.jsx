import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { INSTITUTION_INFO } from '../../data/kmgiData';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { 
      name: "Academics", 
      path: "/academics",
      dropdown: [
        { name: "School of Law (BA LL.B / LL.B)", path: "/academics#law" },
        { name: "School of Nursing & Healthcare", path: "/nursing" },
        { name: "School of Pharmacy (B.Pharm / D.Pharm)", path: "/academics#pharmacy" },
        { name: "School of ITI & Vocational Education", path: "/academics#vocational" }
      ] 
    },
    { name: "Nursing Portal", path: "/nursing" },
    { name: "Campus Facilities", path: "/facilities" },
    { name: "Events & Gallery", path: "/gallery" },
    { name: "Academic Affairs", path: "/academic-affairs" },
    { name: "Documents", path: "/documents" }
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2' 
        : 'bg-white border-b border-slate-200 py-3'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-12 h-12 md:w-13 md:h-13 bg-white rounded-xl p-1 shadow-sm flex items-center justify-center border border-slate-200 group-hover:border-[#C59B27] group-hover:scale-105 transition-all">
              <img 
                src={INSTITUTION_INFO.logo} 
                alt="Keshav Madhav Group of Institutions Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <span className="block text-base md:text-lg font-bold font-serif-prestige text-[#0A1724] tracking-wide leading-tight">
                KESHAV MADHAV
              </span>
              <span className="block text-[11px] font-extrabold text-[#C59B27] tracking-wider uppercase">
                GROUP OF INSTITUTIONS
              </span>
              <span className="block text-[10px] text-slate-500 font-medium">
                Greater Noida | Estd. 2012
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-xs font-medium transition-all flex items-center gap-1 ${
                      isActive
                        ? 'text-[#0A1724] font-bold border-b-2 border-[#C59B27] pb-1'
                        : 'text-slate-700 hover:text-[#0A1724] hover:bg-slate-50 rounded-md'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2.5 text-xs text-slate-700 hover:text-[#0A1724] hover:bg-slate-50 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0A1724] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-fade-in shadow-xl">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-semibold rounded-lg ${
                    location.pathname === link.path
                      ? 'text-[#0A1724] bg-slate-100 border-l-4 border-[#C59B27]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-6 space-y-1 border-l border-slate-200 ml-4 my-1">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-slate-600 hover:text-[#0A1724]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
