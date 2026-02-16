/*
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary, deep navy, warm sand accents
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES } from "@/lib/images";
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
} from "lucide-react";

const services = [
  {
    id: "research",
    icon: BarChart3,
    title: "Research & Analytics",
    image: IMAGES.servicesResearch,
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
    image: IMAGES.servicesInclusion,
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
    image: IMAGES.servicesCapacity,
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
    image: IMAGES.servicesOrgDev,
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
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive development consulting services designed to create measurable, lasting impact."
        image={IMAGES.servicesCapacity}
        overlay="blue"
      />

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
                  <img
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
                  <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
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

                  {/* Detail list */}
                  <div className="space-y-2">
                    {service.details.map((detail, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-sky-500 mt-0.5 shrink-0" />
                        <span className="text-slate-600 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-700 to-sky-800">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Need Our Expertise?
            </h2>
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
