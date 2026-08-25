/*
 * All images are served from this repository (client/public/images).
 *
 * They were previously hotlinked to an external AI-tool CDN, which left the
 * site's entire imagery dependent on a third-party host nobody here controls,
 * and the heroes weighed 5-7 MB each. They are now self-hosted and resized:
 * 85.8 MB of source material down to roughly 5 MB.
 *
 * The heroes and service illustrations are AI-generated stock, inherited from
 * the February rebuild. Replace them with real photographs of Verity Metrics
 * work when they are available.
 */
export const IMAGES = {
  // Brand
  logo: "/images/logo.png",

  // Team portraits
  fondoHassan: "/images/team/fondo-hassan.jpg",
  gabrielMureithi: "/images/team/gabriel-mureithi.jpg",
  evansNudih: "/images/team/evans-nudih.jpg",
  felixOtieno: "/images/team/felix-otieno.jpg",
  juneChopetta: "/images/team/june-chopetta.jpg",

  // Photographs from field visits and training
  teamTraining: "/images/team/team-training.jpg",
  teamFieldwork1: "/images/team/team-fieldwork-1.jpg",
  teamFieldwork2: "/images/team/team-fieldwork-2.jpg",
  teamFieldwork3: "/images/team/team-fieldwork-3.jpg",
  teamFieldwork4: "/images/team/team-fieldwork-4.jpg",
  teamFieldwork5: "/images/team/team-fieldwork-5.jpg",
  teamInterview: "/images/team/team-interview.jpg",
  teamCommunity: "/images/team/team-community.jpg",
  teamWorkshop: "/images/team/team-workshop.jpg",
  teamEngagement: "/images/team/team-engagement.jpg",

  // Page heroes
  heroHome: "/images/hero/home.jpg",
  heroAcademy: "/images/hero/academy.jpg",
  aboutHero: "/images/hero/about.jpg",
  contactHero: "/images/hero/contact.jpg",
  projectsField: "/images/hero/projects.jpg",

  // Service illustrations. The remaining two are AI-generated stock inherited
  // from the February rebuild and still need replacing with real photographs.
  servicesResearch: "/images/services/research.jpg",
  servicesMeal: "/images/services/meal.jpg",
  servicesEducation: "/images/services/education.jpg",
  servicesOrgDev: "/images/services/organisational-development.jpg",

  // Academy
  academySession1: "/images/academy/session-1.jpg",
  academySession2: "/images/academy/session-2.jpg",

  // Projects
  i3fAward: "/images/projects/i3f-award.jpg",
  staraCbe1: "/images/projects/stara-cbe-1.jpg",
  staraCbe2: "/images/projects/stara-cbe-2.jpg",
  staraCbe3: "/images/projects/stara-cbe-3.jpg",
  tassiaForum1: "/images/projects/tassia-forum-1.jpg",
  tassiaForum2: "/images/projects/tassia-forum-2.jpg",
  tassiaForum3: "/images/projects/tassia-forum-3.jpg",
  tassiaForum4: "/images/projects/tassia-forum-4.jpg",
} as const;
