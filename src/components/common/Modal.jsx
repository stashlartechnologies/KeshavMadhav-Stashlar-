import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';
import { Button } from './Button';

export const Modal = ({ isOpen, onClose, onShowToast }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    programme: 'Law',
    query: ''
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onShowToast) {
      onShowToast("Enquiry Submitted!", `Thank you ${formData.name || 'Candidate'}. Our counselors will contact you shortly.`);
    }
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={onClose}>
      <div className="relative w-full max-w-lg bg-[#0F263B] rounded-2xl shadow-2xl overflow-hidden border border-[#C59B27]/40" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="bg-[#0A1724] text-white p-6 relative border-b border-[#132F48]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="inline-block px-3 py-1 bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/40 text-xs font-bold rounded-full uppercase tracking-wider mb-2">
            Admissions 2026-27
          </span>
          <h3 className="text-2xl font-bold font-serif-prestige text-white">Admission & Course Enquiry</h3>
          <p className="text-xs text-slate-300 font-light mt-1">Keshav Madhav Group of Institutions, Greater Noida</p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle className="w-16 h-16 text-[#D4AF37] mx-auto animate-bounce" />
              <h4 className="text-2xl font-bold text-white font-serif-prestige">Enquiry Received!</h4>
              <p className="text-slate-300 text-xs max-w-sm mx-auto font-light leading-relaxed">
                Thank you for contacting KMGI. Our admissions counselor will call you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#132F48] bg-[#0A1724] text-white placeholder-slate-400 focus:ring-2 focus:ring-[#C59B27] focus:border-transparent text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#132F48] bg-[#0A1724] text-white placeholder-slate-400 focus:ring-2 focus:ring-[#C59B27] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#132F48] bg-[#0A1724] text-white placeholder-slate-400 focus:ring-2 focus:ring-[#C59B27] focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                  Programme Interested In *
                </label>
                <select
                  value={formData.programme}
                  onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#132F48] bg-[#0A1724] text-white focus:ring-2 focus:ring-[#C59B27] focus:border-transparent text-sm"
                >
                  <option value="Law">School of Law (BA LL.B / LL.B)</option>
                  <option value="Nursing">School of Nursing (B.Sc Nursing / GNM / ANM)</option>
                  <option value="Pharmacy">School of Pharmacy (B.Pharm / D.Pharm)</option>
                  <option value="Vocational">Vocational & Technical Trades (ITI / B.Voc)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                  Message / Query (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Ask about fees, eligibility, hostel facilities..."
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#132F48] bg-[#0A1724] text-white placeholder-slate-400 focus:ring-2 focus:ring-[#C59B27] focus:border-transparent text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <Button variant="gold" size="lg" className="w-full text-[#0A1724] font-bold" type="submit" icon={Send}>
                  Submit Admission Enquiry
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
