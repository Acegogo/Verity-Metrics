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

  // Photographs from field visits and training
  teamTraining: "/images/team/team-training.jpg",
  teamFieldwork1: "/images/team/team-fieldwork-1.jpg",
  teamFieldwork2: "/images/team/team-fieldwork-2.jpg",
  teamFieldwork3: "/images/team/team-fieldwork-3.jpg",
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

  // Service illustrations
  servicesResearch: "/images/services/research.jpg",
  servicesMeal: "/images/services/meal.jpg",
  servicesInclusion: "/images/services/inclusion.jpg",
  servicesEducation: "/images/services/education.jpg",
  servicesCapacity: "/images/services/capacity.jpg",
  servicesOrgDev: "/images/services/organisational-development.jpg",

  // Academy
  academyClassroom: "/images/academy/classroom.jpg",
  academyStudent: "/images/academy/student.jpg",

  // Projects
  disabilityForum: "/images/projects/disability-forum.jpg",
} as const;
