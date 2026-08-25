/*
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary, deep navy, warm sand accents
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { IMAGES } from "@/lib/images";
import { HEADLINE_STATS } from "@/lib/stats";
import AnimatedHeading from "@/components/AnimatedHeading";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    title: "Competency Based Education (CBE) Implementation Assessment",
    client: "Stara Rescue Centre and School",
    location: "Nairobi, Kenya",
    year: "2025",
    image: IMAGES.staraCbe1,
    desc: "Stakeholder engagement during the Competency Based Education Implementation Assessment at Stara Rescue School. Through focus group discussions, classroom observations and consultations, Verity Metrics International Limited gathered evidence to inform practical recommendations for strengthening teaching and learning.",
    tags: ["Competency Based Education", "Classroom Observation", "Stakeholder Engagement"],
  },
  {
    title: "Disability Inclusion Sensitization Forum",
    client: "St. Margaret Catholic School, Tassia",
    location: "Nairobi, Kenya",
    year: "2025",
    image: IMAGES.tassiaForum1,
    desc: "A three-week sensitization forum on disability awareness and inclusive education, equipping educators, staff and learners with the knowledge and tools to foster an inclusive school environment. Sessions covered inclusive communication, models of disability and practical classroom strategies.",
    tags: ["Disability Inclusion", "Inclusive Education", "Teacher Training"],
  },
  {
    title: "MEAL Framework Development for Education Programs",
    client: "International NGO Partners",
    location: "East Africa",
    year: "2022-2023",
    image: IMAGES.teamFieldwork1,
    desc: "Designed and implemented comprehensive Monitoring, Evaluation, Accountability and Learning frameworks for education programs across East Africa. The project included indicator development, data collection tools, and real-time monitoring dashboards.",
    tags: ["MEAL", "Education", "Framework Design"],
  },
  {
    title: "Inclusive Education Baseline Study",
    client: "Development Partners",
    location: "Kenya",
    year: "2023",
    image: IMAGES.academyClassroom,
    desc: "Conducted a comprehensive baseline study on inclusive education practices in Kenyan schools. The research assessed the current state of inclusion for children with disabilities and provided evidence-based recommendations for program design.",
    tags: ["Research", "Inclusive Education", "Baseline Study"],
  },
  {
    title: "Capacity Building for Community Organizations",
    client: "CBOs & NGOs",
    location: "Kenya & Uganda",
    year: "2022-2024",
    image: IMAGES.academyStudent,
    desc: "Delivered tailored capacity building programs for community-based organizations and local NGOs. Training covered project management, financial management, MEAL and governance strengthening.",
    tags: ["Capacity Building", "Training", "Organizational Development"],
  },
  {
    title: "Gender Analysis and Mainstreaming Project",
    client: "International Partners",
    location: "East Africa",
    year: "2023",
    image: IMAGES.servicesInclusion,
    desc: "Conducted gender analysis across multiple programs and developed gender mainstreaming strategies. The project included gender audits, staff training and the development of gender-responsive indicators.",
    tags: ["Gender", "Mainstreaming", "Analysis"],
  },
  {
    title: "Organizational Strategic Planning",
    client: "Multiple Organizations",
    location: "Kenya",
    year: "2022-2024",
    image: IMAGES.servicesOrgDev,
    desc: "Facilitated strategic planning processes for various organizations, including needs assessments, stakeholder consultations and the development of comprehensive 3-5 year strategic plans with implementation frameworks.",
    tags: ["Strategic Planning", "Organizational Development", "Consulting"],
  },
];

const impactStats = HEADLINE_STATS;

/* Grouping used by the filter. A project can sit in more than one theme. */
const THEMES: Record<string, string[]> = {
  "Inclusion": ["Disability Inclusion", "Inclusive Education", "Gender", "Mainstreaming"],
  "Research & MEAL": ["MEAL", "Research", "Baseline Study", "Analysis", "Framework Design"],
  "Education": ["Competency Based Education", "Education", "Teacher Training", "Classroom Observation"],
  "Capacity & Strategy": [
    "Capacity Building",
    "Training",
    "Organizational Development",
    "Strategic Planning",
    "Consulting",
    "Stakeholder Engagement",
  ],
};

function themesFor(tags: string[]): string[] {
  return Object.entries(THEMES)
    .filter(([, keys]) => keys.some((k) => tags.includes(k)))
    .map(([theme]) => theme);
}

export default function Projects() {
  const [active, setActive] = useState<string>("All");

  const filters = useMemo(() => {
    const present = new Set<string>();
    projects.forEach((p) => themesFor(p.tags).forEach((t) => present.add(t)));
    return ["All", ...Object.keys(THEMES).filter((t) => present.has(t))];
  }, []);

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => themesFor(p.tags).includes(active)),
    [active],
  );

  return (
    <Layout>
      <PageHero
        title="Our Projects"
        subtitle="Explore our portfolio of impactful projects across research, MEAL, inclusion and capacity building."
        image={IMAGES.projectsField}
        overlay="blue"
      />

      {/* Impact Stats */}
      <section className="py-14 bg-sky-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-brand-flow mb-1 tabular-nums">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Our Portfolio</span>
              <AnimatedHeading
                text="Featured Projects"
                className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4"
              />
              <p className="text-slate-600 leading-relaxed">
                A selection of our recent engagements demonstrating our expertise across multiple sectors.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter by theme */}
          <ScrollReveal>
            <div className="mb-10 flex flex-wrap justify-center gap-2.5">
              {filters.map((theme) => {
                const isActive = theme === active;
                return (
                  <button
                    key={theme}
                    type="button"
                    onClick={() => setActive(theme)}
                    aria-pressed={isActive}
                    className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-white"
                        : "border border-sky-200 bg-white text-sky-700 hover:border-brand-periwinkle hover:text-brand-indigo"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="project-filter-pill"
                        className="absolute inset-0 rounded-full bg-brand-flow"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{theme}</span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <p className="mb-8 text-center text-sm text-slate-500" aria-live="polite">
            Showing <span className="font-semibold text-sky-700">{visible.length}</span> of{" "}
            {projects.length} projects
            {active !== "All" && (
              <>
                {" in "}
                <span className="font-semibold text-sky-700">{active}</span>
              </>
            )}
          </p>

          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group card-lift bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-white/90 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs text-sky-600 font-semibold uppercase tracking-wider mb-2">
                      {project.client}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="bg-sky-50 text-sky-700 px-2.5 py-1 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Award / Recognition */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  loading="lazy"
                  decoding="async"
                  src={IMAGES.i3fAward}
                  alt="Verity Metrics International receiving the i3F Business Grant recognition"
                  className="w-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="eyebrow">
                  Recognition
                </span>
                <AnimatedHeading
                text="Winner, i3F Business Grant Competition"
                className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6"
              />
                <p className="text-slate-600 leading-relaxed mb-6">
                  After six weeks of business training and assessment, Verity Metrics International
                  emerged first in the business plan stage and secured a top two position in the final
                  pitch round of the Imagine &middot; Inspire &middot; Innovate Foundation (i3F)
                  Business Grant Competition.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "First place in the business plan stage",
                    "Top two finalist in the pitch competition",
                    "Selected from Kenya's top twelve ventures",
                    "One of only five finalists awarded grants",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-slate-600 text-sm leading-relaxed">
                      <span className="text-sky-500 font-bold mt-0.5 flex-shrink-0">&bull;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-flow text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-brand-indigo/25 hover:shadow-xl hover:shadow-brand-indigo/40 hover:-translate-y-0.5 no-underline"
                >
                  Partner With Us <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </Layout>
  );
}
