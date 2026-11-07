import React, { useState } from 'react';
import { ScrollVideoIntro } from './components/ScrollVideoIntro';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { WhatWeDo } from './components/WhatWeDo';
import { GameDivisions } from './components/GameDivisions';
import { TournamentsEvents } from './components/TournamentsEvents';
import { CommunityRoles } from './components/CommunityRoles';
import { ClubStructure } from './components/ClubStructure';
import { Roadmap } from './components/Roadmap';
import { Achievements } from './components/Achievements';
import { MediaGallery } from './components/MediaGallery';
import { JoinSection } from './components/JoinSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [preselectedRole, setPreselectedRole] = useState('');

  // Handle replaying / jumping to the scroll video intro at the top
  const handleReplayIntro = () => {
    const el = document.getElementById('cinematic-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenJoinModal = (roleOrEventName?: string) => {
    if (roleOrEventName) {
      setPreselectedRole(roleOrEventName);
    } else {
      setPreselectedRole('');
    }
    setJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setJoinModalOpen(false);
    setPreselectedRole('');
  };

  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] relative selection:bg-[#FF1738] selection:text-white">
      {/* 1. Scroll-Driven Cinematic Video Walkthrough at Top */}
      <ScrollVideoIntro />

      {/* 2. Sticky Navigation Bar */}
      <Navbar
        onReplayIntro={handleReplayIntro}
        onOpenJoinModal={() => handleOpenJoinModal()}
      />

      {/* 3. Section A: Home — The Hero Experience (Features Logo & CREATE.COMPETE.CONQUER) */}
      <Hero onOpenJoinModal={() => handleOpenJoinModal()} />

      {/* 4. Section B: About Us — More Than A Game */}
      <AboutUs />

      {/* 5. Section C: What We Do — Activities & Operations */}
      <WhatWeDo />

      {/* 6. Section D: Esports & Game Divisions (Focused on Mobile Gaming & PC Gaming) */}
      <GameDivisions onOpenJoinModal={handleOpenJoinModal} />

      {/* 7. Section E: Tournaments & Events — Official Event Roadmap */}
      <TournamentsEvents onOpenJoinModal={handleOpenJoinModal} />

      {/* 8. Section F: Our Community — Student Pathways */}
      <CommunityRoles onOpenJoinModal={handleOpenJoinModal} />

      {/* 9. Section G: Club Structure & Governance */}
      <ClubStructure />

      {/* 10. Section H: Our Roadmap — The Future of After Hours */}
      <Roadmap />

      {/* 11. Section I: Achievements & Highlights */}
      <Achievements />

      {/* 12. Section J: Media Gallery & Arena Archive */}
      <MediaGallery />

      {/* 13. Section K: Join After Hours (Recruitment Section & Modal) */}
      <JoinSection
        isModalOpen={joinModalOpen}
        onCloseModal={handleCloseJoinModal}
        onOpenModal={handleOpenJoinModal}
        preselectedRole={preselectedRole}
      />

      {/* 14. Section L: FAQ */}
      <FaqSection />

      {/* 15. Section M: Contact & Footer */}
      <Footer
        onReplayIntro={handleReplayIntro}
        onOpenJoinModal={() => handleOpenJoinModal()}
      />
    </div>
  );
};

export default App;
