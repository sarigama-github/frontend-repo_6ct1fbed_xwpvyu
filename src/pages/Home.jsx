import React from 'react';
import HeroSpline from '../components/HeroSpline';
import { TrustStrip, CoreServicesPreview, UGCEngine, CaseStudyStrip, EmotionalCTA, AboutMission, TalentPool, CoursesWorkshops, Testimonials, FinalCTA } from '../components/Sections';

export default function Home() {
  return (
    <div>
      <HeroSpline
        title="Stories that move. Content that converts."
        subtitle="Female-led creative studio crafting content and strategy for purpose-led Kiwi brands."
        ctaPrimary="Book a Strategy Call"
        ctaSecondary="Explore Our Services"
      />
      <TrustStrip />
      <CoreServicesPreview />
      <UGCEngine />
      <CaseStudyStrip />
      <EmotionalCTA />
      <AboutMission />
      <TalentPool />
      <CoursesWorkshops />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
