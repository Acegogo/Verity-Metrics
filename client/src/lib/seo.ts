/*
 * Per-route metadata.
 *
 * Used twice: the prerender step bakes it into each route's static HTML so
 * crawlers and link-preview bots see it without running JavaScript, and the
 * client updates the document head on in-app navigation.
 */
export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

const SITE = "Verity Metrics International";
export const SITE_URL = "https://www.veritymetric.com";

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: `${SITE} | Research, Evaluation & Inclusion`,
    description:
      "Verity Metrics International Limited delivers research, monitoring and evaluation, inclusive education and organisational development services to governments, development partners and learning institutions across Africa and beyond.",
  },
  {
    path: "/about",
    title: `About Us | ${SITE}`,
    description:
      "Founded on integrity, innovation and excellence, Verity Metrics International bridges the gap between evidence and implementation for academic institutions, NGOs and enterprises.",
  },
  {
    path: "/services",
    title: `Our Services | ${SITE}`,
    description:
      "Research and analytics, monitoring and evaluation, disability inclusion, special needs education consultancy, capacity building and organisational development.",
  },
  {
    path: "/team",
    title: `Our Team | ${SITE}`,
    description:
      "Meet the researchers, evaluators, inclusive education specialists and operations professionals behind Verity Metrics International Limited.",
  },
  {
    path: "/projects",
    title: `Our Projects | ${SITE}`,
    description:
      "Competency Based Education assessment at Stara Rescue School, disability inclusion forums at St. Margaret Tassia, MEAL frameworks and more from Verity Metrics International.",
  },
  {
    path: "/verity-academy",
    title: `Verity Academy | ${SITE}`,
    description:
      "Fully online GCSE and A-Level tutoring with expert tutors and tailored learning plans, delivered by Verity Metrics International.",
  },
  {
    path: "/careers",
    title: `Careers | ${SITE}`,
    description:
      "Volunteer, intern or consult with Verity Metrics International Limited. Explore our volunteer pathway, structured internships and consultant roster.",
  },
  {
    path: "/contact",
    title: `Contact Us | ${SITE}`,
    description:
      "Get in touch with Verity Metrics International Limited in Nairobi, Kenya. Call +254 117 330 809 or email info@veritymetric.com.",
  },
];

export function metaForPath(path: string): RouteMeta {
  const clean = path.replace(/\/+$/, "") || "/";
  return (
    ROUTES.find((r) => r.path === clean) ?? {
      path: clean,
      title: `Page Not Found | ${SITE}`,
      description: "The page you are looking for could not be found.",
    }
  );
}
