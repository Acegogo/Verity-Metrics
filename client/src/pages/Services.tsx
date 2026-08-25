/*
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary, deep navy, warm sand accents
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES } from "@/lib/images";
import AnimatedHeading from "@/components/AnimatedHeading";
import RotatingWords from "@/components/RotatingWords";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import {
  BarChart3,
  Target,
  HeartHandshake,
  GraduationCap,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Database,
  PieChart,
  ClipboardCheck,
  LineChart,
  BookOpen,
  Accessibility,
  Scale,
  Brain,
  Presentation,
  Handshake,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    id: "research",
    icon: BarChart3,
    title: "Research & Analytics",
    image: IMAGES.staraCbe2,
    desc: "We design and implement rigorous research studies that generate actionable insights for informed decision-making. Our team employs both quantitative and qualitative methodologies to deliver comprehensive findings.",
    features: [
      { icon: FileSearch, label: "Baseline & Endline Studies" },
      { icon: Database, label: "Quantitative & Qualitative Research" },
      { icon: PieChart, label: "Data Analysis & Visualization" },
      { icon: ClipboardCheck, label: "Needs Assessments & Surveys" },
    ],
    details: [
      "Mixed-methods research design and implementation",
      "Statistical analysis using SPSS, Stata and R",
      "Qualitative data analysis using NVivo and Atlas.ti",
      "GIS mapping and spatial analysis",
      "Knowledge management and dissemination",
    ],
  },
  {
    id: "meal",
    icon: Target,
    title: "Monitoring, Evaluation, Accountability & Learning",
    image: IMAGES.servicesMeal,
    desc: "We develop robust MEAL frameworks and systems that enable organizations to track progress, measure impact, ensure accountability and facilitate continuous learning throughout program cycles.",
    features: [
      { icon: LineChart, label: "M&E Framework Development" },
      { icon: Target, label: "Theory of Change & Logframes" },
      { icon: ClipboardCheck, label: "Impact Evaluations" },
      { icon: BookOpen, label: "Learning & Adaptation" },
    ],
    details: [
      "Results-based management framework design",
      "Indicator development and tracking systems",
      "Mid-term and end-term evaluations",
      "Real-time monitoring and feedback mechanisms",
      "Accountability and complaints response mechanisms",
    ],
  },
  {
    id: "inclusion",
    icon: HeartHandshake,
    title: "Disability Inclusion & Gender",
    image: IMAGES.tassiaForum2,
    desc: "We champion inclusive development by integrating disability and gender perspectives across all programs. Our approach ensures equitable participation and outcomes for marginalized groups.",
    features: [
      { icon: Accessibility, label: "Disability Mainstreaming" },
      { icon: Scale, label: "Gender Analysis & Audits" },
      { icon: HeartHandshake, label: "Inclusive Program Design" },
      { icon: Users, label: "Community Sensitization" },
    ],
    details: [
      "Disability inclusion audits and assessments",
      "Gender-responsive programming support",
      "Accessibility audits for infrastructure and services",
      "Inclusive education program design",
      "Disability data collection and analysis",
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Special Needs Education Consultancy",
    image: IMAGES.servicesEducation,
    desc: "We provide expert consultancy in special needs education, helping institutions create inclusive learning environments that cater to diverse learning needs and abilities.",
    features: [
      { icon: Brain, label: "Learning Assessment Tools" },
      { icon: BookOpen, label: "Adapted Curricula Design" },
      { icon: GraduationCap, label: "Teacher Training Programs" },
      { icon: Accessibility, label: "Assistive Technology" },
    ],
    details: [
      "Individual Education Plan (IEP) development",
      "Curriculum adaptation for diverse learners",
      "Teacher professional development in SNE",
      "Assistive technology needs assessment",
      "School readiness and transition support",
    ],
  },
  {
    id: "capacity",
    icon: Users,
    title: "Capacity Building",
    image: IMAGES.teamFieldwork4,
    desc: "We design and deliver tailored training programs that strengthen organizational and individual capabilities, ensuring sustainable impact beyond our engagement.",
    features: [
      { icon: Presentation, label: "Customized Training Programs" },
      { icon: Users, label: "Mentorship & Coaching" },
      { icon: BookOpen, label: "Technical Assistance" },
      { icon: TrendingUp, label: "Skills Development" },
    ],
    details: [
      "Training needs assessment and design",
      "Workshop facilitation and delivery",
      "On-the-job mentoring and coaching",
      "E-learning content development",
      "Post-training follow-up and evaluation",
    ],
  },
  {
    id: "orgdev",
    icon: Building2,
    title: "Organizational Development",
    image: IMAGES.teamFieldwork3,
    desc: "We support organizations in strengthening their institutional capacity through strategic planning, governance improvement and systems development for sustainable growth.",
    features: [
      { icon: Target, label: "Strategic Planning" },
      { icon: Handshake, label: "Governance Strengthening" },
      { icon: Building2, label: "Institutional Assessment" },
      { icon: TrendingUp, label: "Performance Management" },
    ],
    details: [
      "Strategic plan development and review",
      "Organizational capacity assessments",
      "Governance and leadership development",
      "Policy development and review",
      "Change management support",
    ],
  },
];

export default function Services() {
  /* Detail lists start collapsed so the page can be scanned; each expands in
     place. Several can be open at once - this is reference material, not an
     either/or choice. */
  const [expanded, setExpanded] = useState<string[]>([]);
  const toggle = (id: string) =>
    setExpanded((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = el.getBoundingClientRect().top + window.scrollY - 150; // clear navbar + sticky jump bar
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive development consulting services designed to create measurable, lasting impact."
        image={IMAGES.teamWorkshop}
        overlay="blue"
      />

      {/* Rotating capability line - sibling treatment to the hero typewriter */}
      <section className="bg-brand-dawn py-14 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">What We Deliver</span>
            <p className="mt-3 font-heading text-2xl font-bold leading-tight text-slate-900 md:text-4xl">
              We help organisations get better at{" "}
              <RotatingWords
                words={[
                  "measuring impact",
                  "including everyone",
                  "using evidence",
                  "building capacity",
                ]}
                className="text-brand-flow"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Quick jump - the sections already carry ids */}
      <section className="sticky top-[92px] z-30 border-y border-sky-100 bg-white/85 backdrop-blur-md">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {services.map((service, i) => (
              <button
                key={service.id}
                type="button"
                onClick={() => jumpTo(service.id)}
                className="group flex shrink-0 items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-periwinkle hover:text-brand-indigo"
              >
                <span className="font-heading text-xs tabular-nums text-sky-400 transition-colors group-hover:text-brand-violet">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <service.icon size={15} className="text-sky-500 transition-colors group-hover:text-brand-indigo" />
                {service.title.split(",")[0].split("&")[0].trim()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-24 ${i % 2 === 0 ? "bg-white" : "bg-sky-50"}`}
        >
          <div className="container">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              {/* Image side */}
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative">
                  <img loading="lazy" decoding="async"
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[16/10]"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon size={22} className="text-white" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Content side */}
              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div>
                  <span className="eyebrow">
                    Service {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Feature icons */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feat, j) => (
                      <div key={j} className="flex items-center gap-2.5 bg-sky-50 border border-sky-100 rounded-lg px-3 py-2.5">
                        <feat.icon size={16} className="text-sky-600 shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{feat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Detail list, expanding in place */}
                  {(() => {
                    const isOpen = expanded.includes(service.id);
                    return (
                      <div className="rounded-xl border border-sky-100 bg-white/60">
                        <button
                          type="button"
                          onClick={() => toggle(service.id)}
                          aria-expanded={isOpen}
                          aria-controls={`details-${service.id}`}
                          className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                        >
                          <span className="text-sm font-semibold text-slate-800">
                            What this includes
                            <span className="ml-2 rounded-full bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700 tabular-nums">
                              {service.details.length}
                            </span>
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sky-200 text-sky-600"
                          >
                            <ChevronDown size={15} />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`details-${service.id}`}
                              key="panel"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-2 border-t border-sky-100 px-4 py-4">
                                {service.details.map((detail, j) => (
                                  <motion.div
                                    key={j}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.06 * j, duration: 0.3 }}
                                    className="flex items-start gap-2.5"
                                  >
                                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-sky-500" />
                                    <span className="text-sm text-slate-600">{detail}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })()}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-brand-deep">
        <div className="container text-center">
          <ScrollReveal>
            <AnimatedHeading
                text="Need Our Expertise?"
                highlight={["expertise"]}
                className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
              />
            <p className="text-sky-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Let us help you design and implement evidence-based solutions that create lasting impact.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-sky-700 hover:bg-sky-50 px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg no-underline"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
