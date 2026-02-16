/*
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary, deep navy, warm sand accents
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { IMAGES } from "@/lib/images";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    title: "Disability Inclusion Sensitization Forums",
    client: "Various Partners",
    location: "Kenya",
    year: "2023-2024",
    image: IMAGES.disabilityForum,
    desc: "Conducted disability inclusion sensitization forums across multiple counties in Kenya, reaching thousands of community members, teachers and local government officials. The forums focused on promoting inclusive practices in education, healthcare and community participation.",
    tags: ["Disability Inclusion", "Community Engagement", "Sensitization"],
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

const impactStats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Countries Reached" },
  { value: 10000, suffix: "+", label: "Beneficiaries Impacted" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function Projects() {
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
                  <div className="text-3xl md:text-4xl font-heading font-bold text-sky-700 mb-1">
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
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4">
                Featured Projects
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A selection of our recent engagements demonstrating our expertise across multiple sectors.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Award / Recognition */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMAGES.projectsField} alt="VMIL Recognition" className="w-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Recognition</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6">
                  Making a Difference
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our commitment to quality and impact has been recognized by partners and stakeholders across the development sector. We continue to push boundaries in delivering evidence-based solutions that create lasting change.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg no-underline"
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
