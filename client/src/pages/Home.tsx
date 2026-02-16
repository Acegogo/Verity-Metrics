/*
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary (#4DBBEB), deep navy, warm sand accents
 * Typography: DM Sans headings, Source Sans 3 body
 */
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { IMAGES } from "@/lib/images";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  BarChart3,
  Target,
  Users,
  GraduationCap,
  Building2,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Research & Analytics",
    desc: "Comprehensive research design, data collection, analysis and reporting to inform evidence-based decision making.",
    image: IMAGES.servicesResearch,
  },
  {
    icon: Target,
    title: "MEAL Services",
    desc: "Monitoring, Evaluation, Accountability and Learning frameworks that drive program effectiveness and impact.",
    image: IMAGES.servicesMeal,
  },
  {
    icon: HeartHandshake,
    title: "Disability Inclusion & Gender",
    desc: "Promoting inclusive practices that ensure equitable participation for persons with disabilities and gender equity.",
    image: IMAGES.servicesInclusion,
  },
  {
    icon: GraduationCap,
    title: "Special Needs Education",
    desc: "Expert consultancy in special needs education, inclusive learning environments and adapted curricula.",
    image: IMAGES.servicesEducation,
  },
  {
    icon: Users,
    title: "Capacity Building",
    desc: "Tailored training programs that strengthen organizational and individual capabilities for lasting impact.",
    image: IMAGES.servicesCapacity,
  },
  {
    icon: Building2,
    title: "Organizational Development",
    desc: "Strategic planning, institutional strengthening and governance support for sustainable growth.",
    image: IMAGES.servicesOrgDev,
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "+", label: "Partners & Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const partners = [
  "UNICEF", "World Bank", "USAID", "GIZ", "Save the Children",
  "Plan International", "CBM", "Leonard Cheshire",
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src={IMAGES.heroHome}
          alt="Verity Metrics team in the field"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/85 via-sky-900/70 to-sky-800/50" />
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-200 text-sm font-medium">
                Consultancy Firm
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.08] mb-6"
            >
              Innovating Solutions,{" "}
              <span className="text-sky-300">Inspiring</span> Global Change
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg md:text-xl text-sky-100/90 max-w-2xl mb-8 leading-relaxed"
            >
              We empower organizations with data-driven solutions in Research,
              Monitoring, Evaluation & Learning, Disability Inclusion and
              Capacity Building for sustainable development impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-400/40 no-underline"
              >
                Our Services <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all border border-white/25 no-underline"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f0f9ff] to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="bg-sky-50 py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-sky-700 mb-1">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={IMAGES.aboutHero}
                  alt="About Verity Metrics"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -right-6 bg-sky-500 text-white rounded-xl p-5 shadow-lg hidden md:block">
                  <div className="text-2xl font-heading font-bold">10+</div>
                  <div className="text-sm text-sky-100">Years of Impact</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6">
                  Driving Sustainable Development Through Evidence
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Verity Metrics International Limited (VMIL) is a consultancy
                  firm that provides Research, Monitoring, Evaluation,
                  Accountability and Learning (MEAL), Disability Inclusion and
                  Gender, Special Needs Education consultancy, Capacity Building
                  and Organizational Development services.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Evidence-based research and analytics",
                    "Inclusive development practices",
                    "Capacity strengthening programs",
                    "Strategic organizational support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-sky-500 mt-0.5 shrink-0"
                      />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors no-underline"
                >
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4">
                Our Core Services
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We offer a comprehensive range of development consulting services
                designed to create measurable, lasting impact.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center shadow-lg">
                      <service.icon size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">
                      {service.desc}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-medium text-sm mt-4 transition-colors no-underline"
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 md:p-10 text-white h-full">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <Target size={24} className="text-sky-100" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Our Mission
                </h3>
                <p className="text-sky-100 leading-relaxed">
                  To empower organizations and communities with innovative,
                  data-driven solutions that promote sustainable development,
                  inclusivity and social impact across the globe.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 text-white h-full">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sky-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  A world where evidence-based practices and inclusive approaches
                  lead to equitable and transformative development outcomes for
                  all communities.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-sky-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
                Trusted By
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mt-2">
                Our Partners & Clients
              </h2>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {partners.map((partner, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-sky-100 text-slate-700 font-medium text-sm hover:shadow-md hover:border-sky-200 transition-all">
                  {partner}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img
          src={IMAGES.teamFieldwork1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sky-900/85" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-sky-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Partner with us to drive evidence-based solutions and create
              lasting change in communities across the globe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-sky-500/30 no-underline"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-semibold transition-all border border-white/25 no-underline"
              >
                View Our Projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
