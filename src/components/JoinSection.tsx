import React, { useState } from 'react';
import {
  Instagram,
  Mail,
  ArrowRight,
  CheckCircle2,
  X,
  Gamepad2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLUB_CONFIG } from '../config/clubData';

interface JoinSectionProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: (pref?: string) => void;
  preselectedRole?: string;
}

export const JoinSection: React.FC<JoinSectionProps> = ({
  isModalOpen,
  onCloseModal,
  onOpenModal,
  preselectedRole = '',
}) => {
  // Modal form state
  const [studentYear, setStudentYear] = useState('1st Year');
  const [studentBranch, setStudentBranch] = useState('CSE');
  const [studentRole, setStudentRole] = useState(preselectedRole || 'Competitive Player');
  const [studentGamerTag, setStudentGamerTag] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync preselected role if passed
  React.useEffect(() => {
    if (preselectedRole) {
      setStudentRole(preselectedRole);
    }
  }, [preselectedRole]);

  const handleSubmitInterest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Confetti celebration effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF1738', '#FFFFFF', '#C7CBD1'],
    });

    // Draft email directly to afterhours@nmamit.in
    const subject = encodeURIComponent(`AFTER HOURS Interest: ${studentRole} - ${studentBranch}`);
    const body = encodeURIComponent(
      `Hello AFTER HOURS Team,\n\nI would like to express interest in joining the club at NMAMIT.\n\nAcademic Year: ${studentYear}\nBranch: ${studentBranch}\nPreferred Track: ${studentRole}\nGamer Tag / Alias: ${studentGamerTag || 'N/A'}\n\nPlease let me know about the next intake round and trial dates.\n\nBest regards,\nStudent, NMAMIT Nitte`
    );

    setTimeout(() => {
      window.location.href = `mailto:${CLUB_CONFIG.socials.email}?subject=${subject}&body=${body}`;
    }, 1200);
  };

  return (
    <>
      <section id="join" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0d] border-t border-white/5 overflow-hidden">
        {/* Ambient Crimson Laser Sweeps */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-ah-red/15 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
            <span className="font-mono text-xs text-ah-silver uppercase tracking-widest">
              COLLEGIATE RECRUITMENT • NMAMIT
            </span>
          </div>

          {/* Headline: YOUR NEXT LEVEL STARTS HERE. */}
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight mb-6">
            YOUR NEXT LEVEL <br className="hidden sm:inline" />
            <span className="text-ah-red text-glow-crimson">STARTS HERE.</span>
          </h2>

          {/* Supporting Text: "Play. Create. Compete. Lead. Find your place in the AFTER HOURS community." */}
          <p className="font-heading font-bold text-lg sm:text-2xl text-ah-silver tracking-wide max-w-2xl mx-auto mb-4">
            "Play. Create. Compete. Lead. Find your place in the AFTER HOURS community."
          </p>

          <p className="font-sans text-sm sm:text-base text-ah-muted max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you want to represent NMAMIT on stage, run collegiate tournaments, or produce next-gen gaming content—the door is open.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            {/* Primary: Register Interest */}
            <button
              onClick={() => onOpenModal()}
              type="button"
              className="w-full sm:w-auto px-8 py-4 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 shadow-[0_0_25px_rgba(255,23,56,0.5)] hover:shadow-[0_0_35px_rgba(255,23,56,0.8)] esports-cut flex items-center justify-center gap-2 group"
            >
              <span>REGISTER FOR RECRUITMENT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary: Follow on Instagram */}
            <a
              href={CLUB_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-[#111114] hover:bg-white/10 text-white font-heading font-bold text-xs sm:text-sm tracking-widest uppercase rounded-sm border border-white/20 hover:border-ah-red/60 transition-all flex items-center justify-center gap-2 esports-cut"
            >
              <Instagram className="w-4 h-4 text-ah-red" />
              <span>FOLLOW ON INSTAGRAM</span>
            </a>

            {/* Tertiary: Email the Club */}
            <a
              href={`mailto:${CLUB_CONFIG.socials.email}`}
              className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-white/5 text-ah-silver hover:text-white font-heading font-bold text-xs sm:text-sm tracking-widest uppercase rounded-sm border border-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-ah-red" />
              <span>EMAIL THE CLUB</span>
            </a>
          </div>

          {/* Micro-disclaimer */}
          <p className="font-mono text-[11px] text-ah-subtle mt-8 tracking-wider">
            OPEN TO ALL ENROLLED STUDENTS OF NMAMIT NITTE • ALL BRANCHES & ACADEMIC YEARS
          </p>
        </div>
      </section>

      {/* Interactive Recruitment & Interest Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={onCloseModal}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-[#111114] border border-ah-red/60 shadow-2xl rounded-sm p-6 sm:p-8 z-10 esports-cut">
            {/* Close */}
            <button
              onClick={onCloseModal}
              className="absolute top-5 right-5 p-1.5 text-ah-muted hover:text-white hover:bg-white/10 rounded-sm"
              aria-label="Close recruitment modal"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmitInterest}>
                <div className="flex items-center gap-2 mb-2">
                  <Gamepad2 className="w-5 h-5 text-ah-red" />
                  <span className="font-mono text-xs text-ah-silver uppercase tracking-widest font-bold">
                    NMAMIT STUDENT RECRUITMENT
                  </span>
                </div>

                <h3 className="font-heading font-black text-2xl text-white mb-2">
                  REGISTER YOUR INTEREST
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ah-muted mb-6">
                  Select your academic year and preferred role in AFTER HOURS. You will be connected directly to the official recruitment pipeline.
                </p>

                <div className="space-y-4 mb-6">
                  {/* Academic Year */}
                  <div>
                    <label className="block font-mono text-[11px] text-ah-silver uppercase tracking-wider mb-1.5">
                      Academic Year *
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {['1st Year', '2nd Year', '3rd Year', '4th Year'].map((yr) => (
                        <button
                          key={yr}
                          type="button"
                          onClick={() => setStudentYear(yr)}
                          className={`py-2 text-center text-xs font-mono rounded border transition-all ${
                            studentYear === yr
                              ? 'bg-ah-red text-white border-ah-red font-bold'
                              : 'bg-black/40 text-ah-muted border-white/10 hover:border-white/20'
                          }`}
                        >
                          {yr}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Branch / Department */}
                  <div>
                    <label className="block font-mono text-[11px] text-ah-silver uppercase tracking-wider mb-1.5">
                      Engineering Branch / Program *
                    </label>
                    <select
                      value={studentBranch}
                      onChange={(e) => setStudentBranch(e.target.value)}
                      className="w-full px-3 py-2.5 rounded bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-ah-red"
                    >
                      <option value="CSE">Computer Science & Engineering (CSE)</option>
                      <option value="ISE">Information Science & Engineering (ISE)</option>
                      <option value="AI & ML">Artificial Intelligence & Machine Learning (AIML)</option>
                      <option value="Data Science">Data Science</option>
                      <option value="ECE">Electronics & Communication (ECE)</option>
                      <option value="EEE">Electrical & Electronics (EEE)</option>
                      <option value="Mechanical">Mechanical Engineering</option>
                      <option value="Civil">Civil Engineering</option>
                      <option value="Other">Other NMAMIT Department</option>
                    </select>
                  </div>

                  {/* Role / Game Interest */}
                  <div>
                    <label className="block font-mono text-[11px] text-ah-silver uppercase tracking-wider mb-1.5">
                      Primary Area of Interest *
                    </label>
                    <select
                      value={studentRole}
                      onChange={(e) => setStudentRole(e.target.value)}
                      className="w-full px-3 py-2.5 rounded bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-ah-red"
                    >
                      <option value="Competitive Player (Valorant / BGMI / CS2)">
                        Competitive Player (Valorant / BGMI / CS2)
                      </option>
                      <option value="Shoutcaster / Live Commentary">Shoutcaster / Live Commentary</option>
                      <option value="Livestreaming & OBS Production">Livestreaming & OBS Production</option>
                      <option value="Video Editor & Reel Creator">Video Editor & Reel Creator</option>
                      <option value="Graphic Designer (Branding & Posters)">
                        Graphic Designer (Branding & Posters)
                      </option>
                      <option value="Tournament Organizer & Admin">Tournament Organizer & Admin</option>
                      <option value="Web Developer & Technical Team">Web Developer & Technical Team</option>
                      <option value="Casual Gamer & Community Member">Casual Gamer & Community Member</option>
                    </select>
                  </div>

                  {/* Gamer Tag / In-Game Name */}
                  <div>
                    <label className="block font-mono text-[11px] text-ah-silver uppercase tracking-wider mb-1.5">
                      Gamer Tag / In-Game Alias (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. PhantomX, Viper#1337"
                      value={studentGamerTag}
                      onChange={(e) => setStudentGamerTag(e.target.value)}
                      className="w-full px-3 py-2.5 rounded bg-black/60 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-ah-red placeholder:text-ah-subtle"
                    >
                    </input>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-ah-red hover:bg-ah-red-bright text-white font-heading font-black text-xs tracking-widest uppercase rounded-sm transition-all shadow-[0_0_20px_rgba(255,23,56,0.5)] esports-cut-sm flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>DRAFT INQUIRY EMAIL</span>
                </button>

                <p className="font-mono text-[10px] text-ah-subtle text-center mt-3">
                  Direct inquiry to afterhours@nmamit.in. Follow @afterhours.nmamit for next intake announcements.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4 animate-bounce" />
                <h4 className="font-heading font-black text-2xl text-white mb-2">
                  INQUIRY PREPARED!
                </h4>
                <p className="font-sans text-sm text-ah-silver mb-6">
                  An email has been drafted to <strong className="text-white">afterhours@nmamit.in</strong>. Follow <a href={CLUB_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-ah-red underline underline-offset-2">@afterhours.nmamit</a> on Instagram for upcoming trial dates.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={CLUB_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-ah-red text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm text-center"
                  >
                    FOLLOW @AFTERHOURS.NMAMIT
                  </a>
                  <button
                    onClick={onCloseModal}
                    className="w-full py-2 bg-white/10 text-ah-silver font-mono text-xs rounded-sm hover:bg-white/15"
                  >
                    BACK TO SITE
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
