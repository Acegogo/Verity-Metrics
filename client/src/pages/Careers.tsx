/**
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary, deep navy, warm sand accents
 * Typography: DM Sans headings, Source Sans 3 body
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES } from "@/lib/images";
import AnimatedHeading from "@/components/AnimatedHeading";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const CAREERS_EMAIL = "info@veritymetric.com";

interface Opening {
  title: string;
  meta: string;
}

interface Pathway {
  id: string;
  label: string;
  tagline: string;
  intro: string;
  doing: string[];
  looking: string[];
  cta: string;
  subject: string;
  /* Add entries here to advertise a specific role; they render automatically. */
  openings?: Opening[];
}

const pathways: Pathway[] = [
  {
    id: "volunteer",
    label: "Volunteer",
    tagline: "Lend your time and skills to inclusive development work.",
    intro:
      "Our volunteers work alongside the Verity Metrics team on research, community engagement and inclusion initiatives across Kenya. Volunteering suits professionals, students and community members who want practical exposure to evidence-driven development work while contributing to projects with real reach.",
    doing: [
      "Support field data collection, focus group discussions and school-based assessments",
      "Assist with disability inclusion sensitization forums and community outreach",
      "Contribute to knowledge products, reports and learning briefs",
      "Help coordinate events, trainings and stakeholder engagement sessions",
    ],
    looking: [
      "A genuine commitment to inclusion, equity and community impact",
      "Strong written and spoken English; Kiswahili an advantage",
      "The ability to work respectfully with children, schools and vulnerable communities",
      "Availability for an agreed minimum commitment, negotiated around your schedule",
    ],
    cta: "Apply as a volunteer",
    subject: "Volunteer Expression of Interest",
  },
  {
    id: "internship",
    label: "Internship",
    tagline: "A structured, mentored start to a career in research and MEAL.",
    intro:
      "Our internships give early-career professionals supervised, hands-on experience in research, monitoring, evaluation, accountability and learning, inclusive education and organisational development. Interns are attached to live assignments and mentored by senior consultants rather than left on the sidelines.",
    doing: [
      "Placements in Research & MEAL, Inclusive Education, Communications or Operations & Logistics",
      "Direct mentorship from senior consultants on active client assignments",
      "Exposure to the full project cycle, from inception through fieldwork to reporting",
      "A certificate of completion and a professional reference on successful placement",
    ],
    looking: [
      "Recent graduates or students in education, social sciences, statistics, development studies, procurement or a related field",
      "Working knowledge of research methods and tools such as Excel, KoboToolbox, SPSS or Stata",
      "Clear writing, curiosity and a willingness to learn in the field",
      "Availability for a placement of three to six months",
    ],
    cta: "Apply for an internship",
    subject: "Internship Application",
  },
  {
    id: "vacancies",
    label: "Vacancies",
    tagline: "Consultancy and staff roles as our portfolio grows.",
    intro:
      "Verity Metrics International Limited grows through a network of consultants, associates and staff who share our commitment to rigorous evidence and inclusive practice. We advertise specific openings here as they arise, and we maintain a standing roster of consultants we draw on for assignments.",
    doing: [
      "Associate consultants in research, MEAL, inclusive education and disability inclusion",
      "Short-term technical experts, enumerators and field supervisors for specific assignments",
      "Operations, communications and programme support roles",
      "Roster registration, so we can contact you when a matching assignment opens",
    ],
    looking: [
      "Demonstrated technical experience relevant to the area you are applying for",
      "A track record of delivering quality work to deadline for clients or programmes",
      "Professional references and, where relevant, samples of published or authored work",
      "Alignment with our safeguarding and ethical research standards",
    ],
    openings: [],
    cta: "Join our consultant roster",
    subject: "Consultant Roster Application",
  },
];

export default function Careers() {
  const [openId, setOpenId] = useState<string | null>("volunteer");

  return (
    <Layout>
      <PageHero
        title="Careers"
        subtitle="Build a career in evidence and inclusion. There are three ways to work with us."
        image={IMAGES.teamTraining}
        overlay="blue"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">
                Join Us
              </span>
              <AnimatedHeading
                text="Work With Verity Metrics"
                className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4"
              />
              <p className="text-slate-600 leading-relaxed">
                We bring together researchers, evaluators and inclusion specialists who believe
                development decisions should be built on credible evidence.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {pathways.map((pathway, index) => {
              const isOpen = openId === pathway.id;

              return (
                <ScrollReveal key={pathway.id} delay={index * 0.08}>
                  <div
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-sky-300 shadow-xl bg-white"
                        : "border-sky-100 shadow-sm bg-white hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : pathway.id)}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${pathway.id}`}
                      className="w-full flex items-center gap-5 text-left p-6 md:p-7 cursor-pointer"
                    >
                      <span className="font-heading font-bold text-sky-300 text-xl tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="block font-heading font-bold text-xl md:text-2xl text-slate-900">
                          {pathway.label}
                        </span>
                        <span className="block text-slate-500 text-sm mt-1">{pathway.tagline}</span>
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 w-9 h-9 rounded-full border border-sky-200 flex items-center justify-center text-sky-600"
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`panel-${pathway.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-7 pb-7 pt-1 border-t border-sky-100 mx-6 md:mx-7 -mx-0">
                            <p className="text-slate-600 leading-relaxed pt-5 mb-6">
                              {pathway.intro}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-7">
                              <div>
                                <h3 className="text-xs font-heading font-bold text-sky-700 uppercase tracking-wider mb-3">
                                  What you would do
                                </h3>
                                <ul className="space-y-2">
                                  {pathway.doing.map((item) => (
                                    <li
                                      key={item}
                                      className="flex gap-2 text-slate-600 text-sm leading-relaxed"
                                    >
                                      <span className="text-sky-500 font-bold mt-0.5 flex-shrink-0">
                                        &bull;
                                      </span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-xs font-heading font-bold text-sky-700 uppercase tracking-wider mb-3">
                                  What we look for
                                </h3>
                                <ul className="space-y-2">
                                  {pathway.looking.map((item) => (
                                    <li
                                      key={item}
                                      className="flex gap-2 text-slate-600 text-sm leading-relaxed"
                                    >
                                      <span className="text-sky-500 font-bold mt-0.5 flex-shrink-0">
                                        &bull;
                                      </span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {pathway.openings && (
                              <div className="mb-7">
                                <h3 className="text-xs font-heading font-bold text-sky-700 uppercase tracking-wider mb-3">
                                  Current openings
                                </h3>
                                {pathway.openings.length > 0 ? (
                                  <ul className="space-y-2">
                                    {pathway.openings.map((opening) => (
                                      <li
                                        key={opening.title}
                                        className="border border-sky-100 rounded-lg px-4 py-3"
                                      >
                                        <div className="font-semibold text-slate-900 text-sm">
                                          {opening.title}
                                        </div>
                                        <div className="text-slate-500 text-xs mt-0.5">
                                          {opening.meta}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-slate-600 text-sm leading-relaxed bg-sky-50 border-l-2 border-sky-400 rounded-r-lg px-4 py-3">
                                    There are no advertised vacancies at the moment. We keep a standing
                                    roster of consultants and associates, so send us your CV and we will
                                    be in touch when an assignment matches your expertise.
                                  </p>
                                )}
                              </div>
                            )}

                            <a
                              href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(pathway.subject)}`}
                              className="inline-flex items-center gap-2 bg-brand-flow text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-brand-indigo/25 hover:shadow-xl hover:shadow-brand-indigo/40 hover:-translate-y-0.5 no-underline text-sm"
                            >
                              {pathway.cta} <ArrowRight size={16} />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-sky-700 to-sky-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">How to apply</h2>
              <p className="text-sky-100 leading-relaxed mb-6">
                Applications are reviewed on a rolling basis. To be considered, please send:
              </p>
              <ol className="space-y-3 mb-8">
                {[
                  "Your CV, no more than three pages.",
                  "A short cover note explaining which pathway you are applying for and why.",
                  "Two professional or academic referees.",
                ].map((item, i) => (
                  <li key={item} className="flex gap-3 text-sky-50 leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs font-bold tabular-nums">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
              <a
                href={`mailto:${CAREERS_EMAIL}`}
                className="inline-flex items-center gap-2 bg-white text-sky-700 px-6 py-3 rounded-lg font-semibold transition-all hover:bg-sky-50 no-underline"
              >
                <Mail size={16} /> {CAREERS_EMAIL}
              </a>
              <p className="text-sky-200 text-sm leading-relaxed mt-8 mb-0">
                Verity Metrics International Limited is an equal opportunity organisation. We actively
                encourage applications from persons with disabilities and will make reasonable
                adjustments at every stage of the process.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
