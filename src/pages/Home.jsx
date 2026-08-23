import React from 'react';
import { Hero } from '../components/home/Hero';
import { StatsBar } from '../components/home/StatsBar';
import { FacultyCards } from '../components/home/FacultyCards';
import { AboutPreview } from '../components/home/AboutPreview';
import { ProgrammesSection } from '../components/home/ProgrammesSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { LeadershipPreview } from '../components/home/LeadershipPreview';
import { NursingHighlights } from '../components/home/NursingHighlights';
import { CampusPreview } from '../components/home/CampusPreview';
import { EventsGalleryPreview } from '../components/home/EventsGalleryPreview';

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Hero />
      <StatsBar />
      <FacultyCards />
      <AboutPreview />
      <ProgrammesSection />
      <WhyChooseUs />
      <LeadershipPreview />
      <NursingHighlights />
      <CampusPreview />
      <EventsGalleryPreview />
    </div>
  );
};
