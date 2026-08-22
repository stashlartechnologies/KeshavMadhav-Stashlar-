import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopHeader } from './components/layout/TopHeader';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Modal } from './components/common/Modal';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { NursingPage } from './pages/NursingPage';
import { AcademicAffairsPage } from './pages/AcademicAffairsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryEventsPage } from './pages/GalleryEventsPage';
import { DocumentsPage } from './pages/DocumentsPage';

export function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleOpenEnquiry = () => setIsEnquiryOpen(true);
  const handleCloseEnquiry = () => setIsEnquiryOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#FAFAFC] text-slate-800 antialiased">
        <TopHeader onOpenEnquiry={handleOpenEnquiry} />
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/leadership" element={<LeadershipPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/academics" element={<AcademicsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/nursing" element={<NursingPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/academic-affairs" element={<AcademicAffairsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/facilities" element={<FacilitiesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/gallery" element={<GalleryEventsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
          </Routes>
        </main>

        <Footer onOpenEnquiry={handleOpenEnquiry} />
        <Modal isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />
      </div>
    </Router>
  );
}

export default App;
