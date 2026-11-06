import {
  GameDivision,
  CommunityPathway,
  ClubTeam,
  RoadmapMilestone,
  AchievementItem,
  GalleryItem,
  FaqItem,
} from '../types';

export const CLUB_CONFIG = {
  name: 'AFTER HOURS',
  fullName: 'AFTER HOURS — Collegiate Esports Club',
  institution: 'NMAM Institute of Technology',
  campus: 'Nitte, Karkala Taluk, Udupi, Karnataka, India',
  establishedYear: '2026',
  tagline: 'CREATE • COMPETE • CONQUER',
  motto: 'CREATE. COMPETE. CONQUER.',
  subMotto: 'CREATE • COMPETE • CONQUER',
  heroStatement: 'More than a game. A community built to compete.',
  heroDescription:
    'Bringing gamers, competitors, creators, and esports enthusiasts together at NMAMIT Nitte. From casual campus sessions to championship collegiate circuits.',
  
  // Media Paths
  logoPath: '/images/after-hours-logo.png',
  crestPath: '/images/after-hours-crest.png',
  introVideoPath: '/videos/after-hours-intro.mp4',
  scrollVideoPath: '/videos/after-hours-scroll.mp4',
  heroArenaImage: '/images/hero-arena.jpg',
  introPosterImage: '/images/intro-poster.jpg',
  entranceImage: '/images/entrance-scene.jpg',

  // Official Links & Contact
  socials: {
    instagram: 'https://www.instagram.com/afterhours.nmamit',
    instagramHandle: '@afterhours.nmamit',
    email: 'afterhours@nmamit.in',
    institutionWebsite: 'https://nmamit.nitte.edu.in',
  },

  // Color Palette Constants
  colors: {
    primaryBg: '#050505',
    secondaryBg: '#111114',
    accentCrimson: '#FF1738',
    metallicSilver: '#C7CBD1',
    pureWhite: '#F5F5F5',
    mutedGrey: '#A4A7AE',
  },
};

export const CLUB_PILLARS = [
  {
    number: '01',
    title: 'Competitive Esports',
    description:
      'Developing structured student rosters with scheduled scrims, tactical coaching, and representing NMAMIT in collegiate championships across India.',
    icon: 'Trophy',
  },
  {
    number: '02',
    title: 'Community Building',
    description:
      'Fostering an inclusive, supportive home for gamers of every skill level, across departments and graduation years—games, people, and community beyond classrooms.',
    icon: 'Users',
  },
  {
    number: '03',
    title: 'Tournaments & LAN Events',
    description:
      'Organizing campus-wide LAN showdowns, online qualifiers, and spectator viewing parties engineered with tournament-grade integrity and broadcast standards.',
    icon: 'Gamepad2',
  },
  {
    number: '04',
    title: 'Content Creation & Media',
    description:
      'Empowering student videographers, editors, shoutcasters, and social storytellers to produce esports highlights, streams, and cinematic campus showcases.',
    icon: 'Clapperboard',
  },
  {
    number: '05',
    title: 'Technical Innovation',
    description:
      'Building tournament software, bracket engines, low-latency stream networks, audio-visual stage setups, and telemetry dashboards.',
    icon: 'Cpu',
  },
  {
    number: '06',
    title: 'Student Leadership & Balance',
    description:
      'Promoting responsible gaming habits, fair play, and strict academic priority, backed by structured succession planning and junior mentorship.',
    icon: 'ShieldCheck',
  },
];

export const PROPOSED_OBJECTIVES = [
  {
    id: 1,
    title: 'Establish Competitive Representation',
    text: 'Identify, train, and develop student teams to represent NMAMIT in recognised intercollegiate and national esports tournaments, subject to institutional approval, and achieve measurable competitive results.',
  },
  {
    id: 2,
    title: 'Host Approved Esports Events',
    text: 'Build the capability to organise intra-collegiate and intercollegiate esports tournaments and related events on campus, creating opportunities for student participation, engagement, and institutional visibility.',
  },
  {
    id: 3,
    title: 'Develop Operations & Media Capabilities',
    text: 'Provide students with practical experience in tournament management, live broadcasting, shoutcasting, graphic design, video editing, content creation, statistics, and social media management through approved club activities.',
  },
  {
    id: 4,
    title: 'Facilitate Industry Engagement',
    text: 'Explore opportunities for collaboration with tournament organisers, gaming brands, technology partners, and relevant industry stakeholders for sponsorships, resources, and exposure.',
  },
  {
    id: 5,
    title: 'Promote Student Development',
    text: 'Foster teamwork, leadership, communication, strategic thinking, project coordination, and organisational skills through structured esports activities.',
  },
  {
    id: 6,
    title: 'Responsible Gaming & Academic Balance',
    text: 'Promote responsible gaming habits, fair play, sportsmanship, and an uncompromising balance between academic responsibilities and extracurricular participation.',
  },
];

export const ACTIVITIES = [
  {
    title: 'Mobile Esports',
    badge: 'Mobile Division',
    description:
      'Structured scrims, tactical playbooks, and collegiate tournament entry for high-stakes titles including BGMI, Call of Duty: Mobile, and Free Fire MAX.',
    icon: 'Smartphone',
  },
  {
    title: 'PC Esports',
    badge: 'PC Division',
    description:
      'High-performance competitive rosters for tactical shooters and MOBAs including Valorant, Counter-Strike 2, and community Dota 2 / Rocket League.',
    icon: 'Monitor',
  },
  {
    title: 'Campus Tournaments & LANs',
    badge: 'Campus Operations',
    description:
      'Organizing structured intra-college showdowns and inter-college invitations with professional stage setups, live brackets, and auditorium crowds.',
    icon: 'Flame',
  },
  {
    title: 'Online Qualifiers & Scrims',
    badge: 'Weekly Circuits',
    description:
      'Coordinated weekly practice matches against top collegiate clans and regional universities to maintain high competitive sharpness.',
    icon: 'Wifi',
  },
  {
    title: 'Community Gaming Sessions',
    badge: 'Casual & Social',
    description:
      'Casual Friday nights, party games, fighting games, and community mini-events where any student can pick up a controller and unwind.',
    icon: 'Sparkles',
  },
  {
    title: 'Workshops & Skill Bootcamps',
    badge: 'Skill Development',
    description:
      'Aim training workshops, crosshair placement labs, micro/macro game-sense seminars, and hardware optimization clinics led by experienced players.',
    icon: 'GraduationCap',
  },
  {
    title: 'Live Casting & Production',
    badge: 'Broadcast Studio',
    description:
      'Live tournament commentary, multi-camera OBS production, on-screen graphics, highlight reels, and high-energy show broadcasts.',
    icon: 'Mic',
  },
  {
    title: 'Technical & Tournament Ops',
    badge: 'Engineering',
    description:
      'Tournament rulebook administration, fair-play enforcement, custom bracket software, automation tools, and LAN networking.',
    icon: 'Terminal',
  },
];

export const GAME_DIVISIONS: GameDivision[] = [
  // Mobile Gaming Focus
  {
    id: 'bgmi',
    title: 'BGMI',
    category: 'Mobile',
    status: 'Active',
    badge: 'BGMI',
    tagline: 'Battlegrounds Mobile India',
    description:
      'Our primary mobile battle royale division focusing on tactical drops, team chemistry, rotation macro, and collegiate championship circuits.',
    platform: 'Mobile (iOS & Android)',
    format: '4-Player Squad Battle Royale',
    rosterSize: 'Main Squad (4) + 2 Reserves',
    practiceSchedule: 'Tues / Thurs / Sat 20:30 IST',
    leadRole: 'In-Game Leader (IGL) & Fraggers',
    highlights: ['Campus custom scrim rooms', 'Erangel & Miramar rotation playbooks'],
  },
  {
    id: 'freefire',
    title: 'FREE FIRE',
    category: 'Mobile',
    status: 'Active',
    badge: 'FF',
    tagline: 'Fast-Paced Survival Combat',
    description:
      'High-speed squad survival action with character synergy, gloo wall mechanics, and rapid close-quarters skirmishing in campus leagues.',
    platform: 'Mobile (iOS & Android)',
    format: '4-Player Squad Clash Squad & Battle Royale',
    rosterSize: '4 Starters + 2 Backups',
    practiceSchedule: 'Thurs / Sun 19:30 IST',
    leadRole: 'Rusher / Support',
    highlights: ['Clash Squad tournament brackets', 'Fast-paced campus community cups'],
  },
  {
    id: 'fcmobile',
    title: 'FC MOBILE',
    category: 'Mobile',
    status: 'Active',
    badge: 'FC',
    tagline: 'EA SPORTS FC Mobile',
    description:
      'Head-to-head football tournaments with custom squad caps, clean passing playbooks, tactical formations, and campus knockout cups.',
    platform: 'Mobile (iOS & Android)',
    format: '1v1 Head to Head',
    rosterSize: 'Solo Competitors',
    practiceSchedule: 'Weekly Friday Matchups',
    leadRole: 'Division Coordinator',
    highlights: ['Campus Champions League knockout format', 'Spectator big-screen showcases'],
  },
  {
    id: 'clashroyale',
    title: 'CLASH ROYALE',
    category: 'Mobile',
    status: 'Active',
    badge: 'CR',
    tagline: 'Real-Time Tower Defense & Strategy',
    description:
      'Fast-paced tower defense strategy, deck drafting, elixir efficiency, and 1v1 crown tournaments across campus.',
    platform: 'Mobile (iOS & Android)',
    format: '1v1 Dual Deck Knockout',
    rosterSize: 'Individual Competitors',
    practiceSchedule: 'Flexible / Weekly Challenges',
    leadRole: 'Strategy Lead',
    highlights: ['Draft Challenge showdowns', 'King of the Hill bracket format'],
  },
  {
    id: 'smashkarts',
    title: 'SMASH KARTS',
    category: 'Mobile',
    status: 'Active',
    badge: 'KARTS',
    tagline: '3D Multiplayer Battle Arena Kart Chaos',
    description:
      'Frenetic 3D kart battle action! Pick up weapons, outmaneuver opponents, and claim the victory crown in high-energy campus party tournaments.',
    platform: 'Mobile & Web',
    format: 'Free-For-All & Team Battle Mode',
    rosterSize: 'Open Community Drivers',
    practiceSchedule: 'Community Fun Nights',
    leadRole: 'Community Host',
    highlights: ['Crazy weapon pickups & chaotic deathmatches', 'Fast 3-minute knockout heats'],
  },

  // PC Gaming Focus
  {
    id: 'valorant',
    title: 'Valorant',
    category: 'PC',
    status: 'Active',
    badge: 'VAL',
    tagline: '5v5 Precision Tactical FPS',
    description:
      'Five-player roster mastering site executes, utility lineups, and coordinated retakes for collegiate esports circuits and campus derbies.',
    platform: 'PC (Keyboard & Mouse)',
    format: '5v5 Competitive Standard',
    rosterSize: 'Main Roster (5) + 2 Substitutes',
    practiceSchedule: 'Mon / Wed / Fri 21:00 IST',
    leadRole: 'Strategist / Controller & Entry Duelist',
    highlights: ['VOD reviews and utility lineup playbooks', 'Open trials each semester'],
  },
  {
    id: 'cs2',
    title: 'CS2.0',
    category: 'PC',
    status: 'Active',
    badge: 'CS2.0',
    tagline: 'Counter-Strike 2.0',
    description:
      'The definitive sub-tick precision shooter. Built for purists of raw crosshair placement, economy management, utility lineups, and clutch composure.',
    platform: 'PC (Keyboard & Mouse)',
    format: '5v5 MR12 Competitive Standard',
    rosterSize: 'Primary 5 + 2 Reserves',
    practiceSchedule: 'Weekend Scrims 20:00 IST',
    leadRole: 'IGL / Main AWP',
    highlights: ['Sub-tick utility mastery on Mirage, Inferno, Nuke', 'LAN tournament server optimization'],
  },
  {
    id: 'pubgpc',
    title: 'PUBG PC',
    category: 'PC',
    status: 'Active',
    badge: 'PUBG PC',
    tagline: 'PUBG: BATTLEGROUNDS PC',
    description:
      'Hardcore tactical PC battle royale on Erangel and Miramar. Long-range ballistics, vehicular rotations, and punishing circle-edge positioning.',
    platform: 'PC (Keyboard & Mouse)',
    format: '4-Player Squad Battle Royale',
    rosterSize: 'Main Squad (4) + 1 Reserve',
    practiceSchedule: 'Wed / Sat 21:00 IST',
    leadRole: 'Squad Leader & Scout',
    highlights: ['Realistic ballistic recoil control', 'Tactical vehicle rotation meta'],
  },
];

export interface EventRoadmapStage {
  step: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
}

export const EVENT_ROADMAP: EventRoadmapStage[] = [
  {
    step: '01',
    title: 'LAUNCH EVENT',
    subtitle: 'Mobile + PC Gaming',
    category: 'Campus Kick-off',
    description: 'The official kick-off event to introduce AFTER HOURS through campus activities.',
    highlights: [
      'Official club unveiling and gaming lounge setup on campus',
      'Showcase exhibition matches across featured Mobile & PC titles',
      'Introduction of student leaders, trial guidelines, and club vision',
    ],
  },
  {
    step: '02',
    title: 'FRESHERS CUP',
    subtitle: 'For First-Year Students',
    category: 'Freshers Dedicated',
    description: 'A dedicated tournament to welcome freshers, encourage participation and identify emerging talent.',
    highlights: [
      'Exclusive bracket designed specifically for incoming first-year students',
      'Opportunity to get scouted early for official college rosters',
      'Community onboarding and connection with senior mentors and captains',
    ],
  },
  {
    step: '03',
    title: 'INTRA-COLLEGE TOURNAMENTS',
    subtitle: 'Mobile + PC Gaming',
    category: 'All Academic Years',
    description: 'Tournaments for students across all academic years in selected games, with qualifiers and finals based on registrations and resources.',
    highlights: [
      'Full campus-wide open brackets for all engineering branches and graduation years',
      'Multi-stage competition with online preliminary qualifiers leading to stage finals',
      'Points table and rankings across all 8 featured Mobile & PC games',
    ],
  },
  {
    step: '04',
    title: 'AFTER HOURS PRO SERIES',
    subtitle: 'NMAMIT Students Only',
    category: 'Championship Circuit',
    description: 'A recurring competitive series exclusively for NMAMIT students, providing a consistent platform to compete.',
    highlights: [
      'Structured seasonal league with regular match fixtures and leaderboard tracking',
      'Consistent practice ground to maintain competitive sharpness',
      'Official collegiate representation and championship trophy showdowns',
    ],
  },
  {
    step: '05',
    title: 'INTER-COLLEGE ESPORTS TOURNAMENT',
    subtitle: 'Online Qualifiers & LAN Finals',
    category: 'Inter-Collegiate Invitational',
    description: 'An inter-college esports competition bringing together teams from different colleges to compete. The event will include online qualifiers and LAN finals, subject to institutional approval, venue availability and technical readiness.',
    highlights: [
      'Inviting top university and collegiate squads from across Karnataka and beyond',
      'Intense online qualifier phase culminating in high-stakes auditorium LAN finals',
      'Live stage production, student shoutcasters, and big-screen spectator arena',
    ],
  },
];

export const COMMUNITY_PATHWAYS: CommunityPathway[] = [
  {
    id: 'competitive-player',
    title: 'Competitive Players',
    category: 'Competition',
    icon: 'Crosshair',
    summary: 'Roster spots, structured practices, scrim schedules, and team chemistry.',
    responsibilities: [
      'Commit to weekly team practice and scrim sessions',
      'Analyze VODs and participate in tactical map reviews',
      'Represent NMAMIT with sportsmanship in inter-college circuits',
    ],
    skillsGained: ['Teamwork & high-pressure decision making', 'Tactical spatial awareness', 'Discipline & mental focus'],
  },
  {
    id: 'streamers-casters',
    title: 'Casters & Streamers',
    category: 'Production',
    icon: 'Radio',
    summary: 'The voices and energy bringing thrilling campus match moments to life.',
    responsibilities: [
      'Provide play-by-play and color commentary on live matches',
      'Host post-match interviews and player spotlights',
      'Manage stream overlays, audio mixing, and broadcast pacing',
    ],
    skillsGained: ['Public speaking & impromptu delivery', 'Broadcast technology (OBS / VMix)', 'Storytelling & hype generation'],
  },
  {
    id: 'video-editors',
    title: 'Video Editors & Motion Designers',
    category: 'Creative',
    icon: 'Film',
    summary: 'Craft high-energy tournament trailers, cinematic fragmovies, and social reels.',
    responsibilities: [
      'Cut cinematic game replays synchronized to hard-hitting audio',
      'Design animated lower-thirds, scoreboards, and title cards',
      'Produce short-form vertical reels for Instagram and YouTube',
    ],
    skillsGained: ['Adobe Premiere / After Effects / DaVinci', 'Pacing & visual rhythm', 'Brand asset motion consistency'],
  },
  {
    id: 'graphic-designers',
    title: 'Graphic Designers',
    category: 'Creative',
    icon: 'Palette',
    summary: 'Visual identity architects designing posters, roster reveals, and banners.',
    responsibilities: [
      'Design tournament match-day banners and bracket graphics',
      'Create social media announcement posts in After Hours brand identity',
      'Produce stream overlays, schedule graphics, and winner badges',
    ],
    skillsGained: ['Brand identity enforcement', 'Typography & hierarchy in dark esports themes', 'Adobe Illustrator / Figma / Photoshop'],
  },
  {
    id: 'tournament-organizers',
    title: 'Event Organizers & Admins',
    category: 'Organization',
    icon: 'CalendarDays',
    summary: 'The operational engine behind smooth brackets, refereeing, and venues.',
    responsibilities: [
      'Manage bracket software, seeding, check-ins, and match disputes',
      'Coordinate venue setups, seating, power, and stage management',
      'Communicate rules and schedules clearly with team captains',
    ],
    skillsGained: ['Project management & logistics', 'Conflict resolution under tight timelines', 'Event administration workflows'],
  },
  {
    id: 'technical-engineers',
    title: 'Developers & IT Engineers',
    category: 'Production',
    icon: 'Code2',
    summary: 'Build web systems, match tooling, live telemetry, and LAN setups.',
    responsibilities: [
      'Maintain the official club website and web apps',
      'Develop tournament platforms, automated scrim rooms, and team verification',
      'Configure local gigabit LAN switches and low-latency servers',
    ],
    skillsGained: ['Full-stack web engineering (React / TypeScript / Tailwind)', 'Networking & socket communication', 'Bot automation and API integration'],
  },
];

export const CLUB_TEAMS: ClubTeam[] = [
  {
    name: 'Administration & Governance',
    code: 'ADMIN',
    leadTitle: 'Faculty Coordinator & Student President',
    scope: 'Institutional alignment, policy compliance, faculty reporting, and semester roadmap approval.',
    responsibilities: [
      'Ensuring club activities strictly respect academic schedules and exams',
      'Maintaining documentation, budget transparency, and institutional records',
      'Overseeing junior succession planning and annual leadership transitions',
    ],
  },
  {
    name: 'Esports & Game Divisions',
    code: 'DIVISIONS',
    leadTitle: 'Head of Esports & Division Captains',
    scope: 'Rosters, trial tryouts, scrim logistics, practice calendars, and rulebook verification.',
    responsibilities: [
      'Conducting fair, skill-verified tryouts each semester',
      'Scheduling inter-college scrimmage matches with regional colleges',
      'Reviewing match VODs to continuously sharpen competitive standards',
    ],
  },
  {
    name: 'Tournament & Event Operations',
    code: 'EVENTS',
    leadTitle: 'Operations Lead & Chief Referees',
    scope: 'Bracket engineering, match-day coordination, lab/hall reservations, and stage logistics.',
    responsibilities: [
      'Drafting official tournament rulebooks, tie-breaker policies, and schedule sheets',
      'Overseeing hardware checks, power safety, and player check-ins on match day',
      'Managing live disputes with impartial rule compliance and sportsmanship standards',
    ],
  },
  {
    name: 'Broadcast, Media & Content',
    code: 'MEDIA',
    leadTitle: 'Media Lead & Production Crew',
    scope: 'Live match streaming, commentary desks, highlight packages, and video reels.',
    responsibilities: [
      'Directing live multi-cam switchboards and audio mixes during LAN events',
      'Editing high-impact social media reels and tournament recap videos',
      'Managing broadcast graphics and camera cranes in the arena setup',
    ],
  },
  {
    name: 'Creative & Visual Design',
    code: 'DESIGN',
    leadTitle: 'Art Director & Brand Custodians',
    scope: 'Preserving the official After Hours visual identity across all print, digital, and stage assets.',
    responsibilities: [
      'Creating posters, match-day cards, schedule graphics, and player banners',
      'Maintaining the crimson-and-silver brand guidelines across all club media',
      'Designing physical merchandise, stage backdrops, and event credentials',
    ],
  },
  {
    name: 'Technical & Web Team',
    code: 'TECH',
    leadTitle: 'Tech Lead & Systems Engineers',
    scope: 'Website development, bracket telemetry, network configuration, and platform tooling.',
    responsibilities: [
      'Maintaining and evolving the official After Hours web portal',
      'Developing automated verification tools for tournament registration and player rosters',
      'Configuring low-latency local gaming servers and network switches for LANs',
    ],
  },
];

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    step: 1,
    phase: 'Phase 01',
    title: 'BUILD THE COMMUNITY',
    subtitle: 'Connect students and create a strong campus gaming culture',
    status: 'Completed',
    deliverables: [
      'Launched campus-wide Student Gaming Interest Survey across all engineering branches',
      'Established digital community hub with verified NMAMIT student role onboarding',
      'Formulated institutional proposal with faculty coordinator oversight model',
      'Mapped student platform preferences across Mobile, PC, and Console gaming',
    ],
  },
  {
    step: 2,
    phase: 'Phase 02',
    title: 'ESTABLISH THE CORE TEAM',
    subtitle: 'Develop leadership and operational processes',
    status: 'Current Focus',
    deliverables: [
      'Formed operational working groups: Administration, Divisions, Media, Creative, and Tech',
      'Drafted club bylaws, code of conduct, and academic balance commitments',
      'Published official brand identity system and production website',
      'Established transparent junior succession and training pathways',
    ],
  },
  {
    step: 3,
    phase: 'Phase 03',
    title: 'LAUNCH CAMPUS EVENTS',
    subtitle: 'Organize tournaments and community gaming sessions',
    status: 'Upcoming',
    deliverables: [
      'Host inaugural intra-collegiate LAN tournament in the campus auditorium',
      'Launch bi-weekly online scrim customs for BGMI and Valorant',
      'Organize casual gaming showcases and friendly community party sessions',
      'Implement live broadcast production with student shoutcasters and graphics',
    ],
  },
  {
    step: 4,
    phase: 'Phase 04',
    title: 'DEVELOP COMPETITIVE TEAMS',
    subtitle: 'Support structured practice and competitive participation',
    status: 'Upcoming',
    deliverables: [
      'Conduct semester trials to select primary and secondary college rosters',
      'Institute weekly tactical practice sessions, aim labs, and VOD analysis',
      'Establish health guidelines, posture awareness, and responsible gaming limits',
      'Provide structured team jerseys and official college competitive representation',
    ],
  },
  {
    step: 5,
    phase: 'Phase 05',
    title: 'HOST INTER-COLLEGE COMPETITIONS',
    subtitle: 'Work towards online qualifiers and LAN finals',
    status: 'Upcoming',
    deliverables: [
      'Invite premier engineering colleges across Karnataka for an inter-collegiate cup',
      'Run multi-stage online qualifiers culminating in high-stakes LAN stage finals',
      'Partner with college tech fests to integrate esports into major campus celebrations',
      'Produce broadcast-grade multi-camera livestream coverage with instant replays',
    ],
  },
  {
    step: 6,
    phase: 'Phase 06',
    title: 'RECOGNIZED ESPORTS ECOSYSTEM',
    subtitle: 'Expand partnerships, competitive opportunities and event quality',
    status: 'Upcoming',
    deliverables: [
      'Build long-term relationships with verified collegiate esports leagues across India',
      'Host industry guest sessions with professional esports athletes and broadcast leads',
      'Provide students with industry-ready portfolios in broadcast, design, and management',
      'Position NMAMIT Nitte as a benchmark collegiate esports ecosystem in the nation',
    ],
  },
];

export const VERIFIED_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    year: '2026',
    title: 'Institutional Club Charter & Proposal Drafted',
    category: 'Milestone',
    description:
      'Completed comprehensive collegiate esports proposal for NMAMIT Nitte, featuring faculty guidance, operating bylaws, and academic priority charter.',
    verified: true,
    tag: 'Institutional Governance',
  },
  {
    id: 'ach-2',
    year: '2026',
    title: 'Campus-Wide Gaming Survey Deployed',
    category: 'Community',
    description:
      'Conducted multi-branch student interest assessment capturing gaming platform trends across CSE, ISE, AIML, Data Science, ECE, and Mechanical.',
    verified: true,
    tag: 'Community Research',
  },
  {
    id: 'ach-3',
    year: '2026',
    title: 'Official Brand Identity & Cinematic Intro Launch',
    category: 'Community',
    description:
      'Engineered authentic crimson-and-black brand system, official gaming-controller compass crest, and 10-second cinematic headquarters walkthrough.',
    verified: true,
    tag: 'Brand & Creative',
  },
  {
    id: 'ach-4',
    year: '2025–26',
    title: 'Pilot LAN Tournament Feasibility Trials',
    category: 'Competitive',
    description:
      'Conducted test LAN exhibition matches on local campus networks to measure ping stability, spectator views, and tournament admin workflows.',
    verified: true,
    tag: 'Competitive Infrastructure',
  },
];

export const MEDIA_GALLERY: GalleryItem[] = [
  {
    id: 'arena-main',
    title: 'Tournament Command & Main Arena',
    category: 'Arena',
    type: 'image',
    src: '/images/hero-arena.jpg',
    thumbnail: '/images/hero-arena.jpg',
    caption: 'Full view of the professional gaming arena setup with multi-monitor rigs, broadcast crane, and overhead display screens.',
    timestamp: 'Arena Reveal — Scene 04',
  },
  {
    id: 'entrance-crest',
    title: 'After Hours Headquarters Portal',
    category: 'Arena',
    type: 'image',
    src: '/images/entrance-scene.jpg',
    thumbnail: '/images/entrance-scene.jpg',
    caption: 'The illuminated After Hours Esports Club emblem overhead at the futuristic arena entrance gateway.',
    timestamp: 'Entrance Sequence — Scene 03',
  },
  {
    id: 'tunnel-cinematic',
    title: 'The Crimson Corridor Approach',
    category: 'Behind The Scenes',
    type: 'image',
    src: '/images/gallery/tunnel-walk.jpg',
    thumbnail: '/images/gallery/tunnel-walk.jpg',
    caption: 'Player walking down the atmospheric corridor lined with crimson-red LED lightbars and headset in place.',
    timestamp: 'Corridor Walk — Scene 02',
  },
  {
    id: 'stadium-full',
    title: 'Esports Championship Stadium Rigs',
    category: 'Tournaments',
    type: 'image',
    src: '/images/gallery/esports-stadium-full.jpg',
    thumbnail: '/images/gallery/esports-stadium-full.jpg',
    caption: 'Dual team stages with ergonomic seating, low-latency monitors, and tournament command area.',
    timestamp: 'LAN Arena View',
  },
  {
    id: 'broadcast-rig',
    title: 'Broadcasting & Crane Camera Array',
    category: 'Highlights',
    type: 'image',
    src: '/images/gallery/broadcast-crane.jpg',
    thumbnail: '/images/gallery/broadcast-crane.jpg',
    caption: 'Live production jib crane sweeping over the tournament arena during high-intensity competitive rounds.',
    timestamp: 'Broadcast Operations',
  },
  {
    id: 'arena-monitors',
    title: 'High-Refresh Tactical Displays',
    category: 'Arena',
    type: 'image',
    src: '/images/gallery/arena-monitors.jpg',
    thumbnail: '/images/gallery/arena-monitors.jpg',
    caption: 'High-performance RGB battle stations equipped for tactical shooters and live match telemetry.',
    timestamp: 'Player Rig Overview',
  },
  {
    id: 'arena-doors',
    title: 'Gateway Threshold to the Arena',
    category: 'Behind The Scenes',
    type: 'image',
    src: '/images/gallery/arena-doors-open.jpg',
    thumbnail: '/images/gallery/arena-doors-open.jpg',
    caption: 'Doors parting to reveal the smoke-filled esports arena and roaring competition floor.',
    timestamp: 'Arena Transition',
  },
  {
    id: 'spotlights-rig',
    title: 'Overhead Arena Ring Lighting',
    category: 'Highlights',
    type: 'image',
    src: '/images/gallery/arena-spotlights.jpg',
    thumbnail: '/images/gallery/arena-spotlights.jpg',
    caption: 'Overhead truss ring with stadium spotlights, angled LED screens, and tournament ambiance.',
    timestamp: 'Stage Production',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is AFTER HOURS?',
    answer:
      'AFTER HOURS is the collegiate esports and gaming club at NMAM Institute of Technology, Nitte, Karnataka. Created by students for students, the club brings together competitive players, casual gamers, content creators, shoutcasters, and technical organizers into a structured, recognized campus ecosystem.',
    category: 'General',
  },
  {
    question: 'Who can join AFTER HOURS?',
    answer:
      'Membership is open to all actively enrolled students of NMAMIT Nitte across all engineering branches (CSE, ISE, AI & ML, Data Science, ECE, EEE, Mechanical, Civil, etc.) and all academic years (1st to 4th year). Both undergraduate and postgraduate students are welcome.',
    category: 'Membership',
  },
  {
    question: 'Do I need competitive gaming experience to join?',
    answer:
      'Not at all! While we field competitive rosters for collegiate tournaments, AFTER HOURS is also a social home for casual players who just want to find teammates, participate in friendly campus game nights, or learn new games in a non-toxic environment.',
    category: 'Membership',
  },
  {
    question: 'Can non-gamers join creative, media, or operations teams?',
    answer:
      'Absolutely yes. Esports is powered by people outside the game: shoutcasters, livestream producers, graphic designers, video editors, software developers, tournament administrators, and event organizers. We actively recruit and train non-playing contributors.',
    category: 'Roles',
  },
  {
    question: 'What games are currently supported or planned?',
    answer:
      'We support both Mobile and PC competitive titles popular on Indian campuses. Primary titles include BGMI, Valorant, Counter-Strike 2, Call of Duty: Mobile, Free Fire MAX, and Chess. We are also expanding into Clash of Clans / Clash Royale and EA SPORTS FC Mobile.',
    category: 'Games',
  },
  {
    question: 'How can I participate in tournaments?',
    answer:
      'Official tournaments and scrims are announced on our official channels and website. Each event has a registration window where you can enter with your pre-formed squad or register as a free agent to be matched with fellow NMAMIT students.',
    category: 'Tournaments',
  },
  {
    question: 'Where can I find official announcements and updates?',
    answer:
      'Follow our official Instagram (@afterhours.nmamit) and bookmark this website. Major campus LAN events, tournament brackets, and recruitment drives are announced directly on Instagram and confirmed college notice boards.',
    category: 'General',
  },
  {
    question: 'How does the club maintain balance with academics?',
    answer:
      'Academics remain the club\'s highest priority. Under our faculty-supervised charter, no club tournaments or official practices are scheduled during internal examinations, lab submissions, or semester finals. Participation must support the college journey—never hinder it.',
    category: 'Governance',
  },
];
