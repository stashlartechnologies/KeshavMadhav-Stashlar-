import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopHeader } from './components/layout/TopHeader';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/common/Toast';
import { ScrollToTop } from './components/common/ScrollToTop';
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
  const [toastState, setToastState] = useState({
    show: false,
    title: '',
    message: ''
  });

  const showToastNotification = (title, message) => {
    setToastState({ show: true, title, message });
  };

  const handleCloseToast = () => {
    setToastState(prev => ({ ...prev, show: false }));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0A1724] text-slate-100 antialiased selection:bg-[#C59B27] selection:text-[#0A1724]">
        <TopHeader />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/nursing" element={<NursingPage />} />
            <Route path="/academic-affairs" element={<AcademicAffairsPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/gallery" element={<GalleryEventsPage />} />
            <Route path="/documents" element={<DocumentsPage onShowToast={showToastNotification} />} />
          </Routes>
        </main>

        <Footer />
        <Toast
          show={toastState.show}
          onClose={handleCloseToast}
          title={toastState.title}
          message={toastState.message}
        />
      </div>
    </Router>
  );
}

export default App;
