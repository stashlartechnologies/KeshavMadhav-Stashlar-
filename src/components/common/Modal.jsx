import React, { useState } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';
import { Button } from './Button';

export const Modal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    programme: 'Law',
    query: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Modal Header */}
        <div className="bg-[#0F2537] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="inline-block px-3 py-1 bg-[#C59B27]/20 text-[#D4AF37] border border-[#C59B27]/30 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            Admissions 2026-27
          </span>
          <h3 className="text-2xl font-bold font-serif-prestige">Admission & Course Enquiry</h3>
          <p className="text-sm text-slate-300 mt-1">Keshav Madhav Group of Institutions, Greater Noida</p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
              <h4 className="text-2xl font-bold text-slate-800 font-serif-prestige mb-2">Thank You!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Your admission enquiry has been submitted successfully. Our counselor will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2537] focus:border-transparent text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2537] focus:border-transparent text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2537] focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Programme Interested In *
                </label>
                <select
                  value={formData.programme}
                  onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2537] focus:border-transparent text-sm bg-white"
                >
                  <option value="Law">School of Law (BA LL.B / LL.B)</option>
                  <option value="Nursing">School of Nursing (B.Sc Nursing / GNM / ANM)</option>
                  <option value="Pharmacy">School of Pharmacy (B.Pharm / D.Pharm)</option>
                  <option value="Vocational">Vocational & Allied Education</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Message / Query (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Ask about fees, eligibility, hostel facilities..."
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2537] focus:border-transparent text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <Button variant="gold" size="lg" className="w-full" type="submit" icon={Send}>
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
