import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { Button } from '../common/Button';
import { INSTITUTION_INFO } from '../../data/kmgiData';

export const Navbar = ({ onOpenEnquiry }) => {
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
        ? 'bg-[#0F2537]/95 backdrop-blur-md shadow-xl border-b border-[#173752] py-2' 
        : 'bg-[#0F2537] border-b border-[#173752] py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/95 rounded-lg p-1.5 shadow-md flex items-center justify-center border border-[#C59B27]/40 group-hover:scale-105 transition-transform">
              <img 
                src={INSTITUTION_INFO.logo} 
                alt="Keshav Madhav Group of Institutions Logo" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <span className="block text-lg md:text-xl font-bold font-serif-prestige text-white tracking-wide leading-tight group-hover:text-[#D4AF37] transition-colors">
                KESHAV MADHAV
              </span>
              <span className="block text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                Group of Institutions
              </span>
              <span className="block text-[10px] text-slate-300">
                Greater Noida | Estd. 2012
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1 ${
                    location.pathname === link.path
                      ? 'text-[#D4AF37] font-semibold bg-white/5'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-[#081826] border border-[#173752] rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2.5 text-xs text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="gold" size="sm" onClick={onOpenEnquiry} icon={GraduationCap}>
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button variant="gold" size="sm" onClick={onOpenEnquiry} className="text-xs px-2.5 py-1.5">
              Enquire
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#081826] border-b border-[#173752] px-4 pt-3 pb-6 animate-fade-in">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-lg ${
                    location.pathname === link.path
                      ? 'text-[#D4AF37] bg-white/10 font-bold'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-6 space-y-1 border-l border-[#173752] ml-4 my-1">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-xs text-slate-300 hover:text-[#D4AF37]"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-4 pt-4 border-t border-[#173752] flex flex-col gap-2">
            <Button variant="gold" size="md" className="w-full" onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }}>
              Admission Enquiry 2026-27
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
