import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutPreview } from '../components/home/AboutPreview';
import { ProgrammesSection } from '../components/home/ProgrammesSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { LeadershipPreview } from '../components/home/LeadershipPreview';
import { NursingHighlights } from '../components/home/NursingHighlights';
import { CampusPreview } from '../components/home/CampusPreview';
import { EventsGalleryPreview } from '../components/home/EventsGalleryPreview';
import { AdmissionCTA } from '../components/home/AdmissionCTA';

export const Home = ({ onOpenEnquiry }) => {
  return (
    <div className="min-h-screen bg-[#FAFAFC]">
      <Hero onOpenEnquiry={onOpenEnquiry} />
      <AboutPreview />
      <ProgrammesSection onOpenEnquiry={onOpenEnquiry} />
      <WhyChooseUs />
      <LeadershipPreview />
      <NursingHighlights onOpenEnquiry={onOpenEnquiry} />
      <CampusPreview />
      <EventsGalleryPreview />
      <AdmissionCTA onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
};
