/**
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary (#4DBBEB), deep navy, warm sand accents
 * Typography: DM Sans headings, Source Sans 3 body
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES } from "@/lib/images";
import { motion } from "framer-motion";
import { Award, Users, Briefcase } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  expertise: string[];
  achievements?: string[];
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Fondo Hassan Kalama",
    position: "Founder & Executive Director",
    image: IMAGES.fondoHassan,
    expertise: [
      "Research & MEAL",
      "Inclusive Education",
      "Disability Inclusion",
      "Policy Analysis",
      "Impact Evaluation",
      "Strategic Planning",
    ],
    bio: "Fondo Hassan Kalama is an Inclusive Education Specialist, Disability Inclusion Expert, Researcher and MEAL practitioner whose work sits at the intersection of evidence generation, policy influence and systems strengthening. As Founder and Executive Director of Verity Metrics International Limited, he leads a multidisciplinary consulting firm delivering research, monitoring and evaluation, policy advisory and organisational development services to governments, development partners, academic institutions and NGOs across Africa and beyond. He holds a Master of Education (Special Needs Education) from Maseno University and a Bachelor of Education (Special Needs Education with IT), First Class Honours, alongside a Diploma in Monitoring and Evaluation (Distinction) from Kenyatta University.",
    achievements: [
      "Founded Verity Metrics International Limited to bridge the gap between research, policy and practice",
      "Published researcher on disability inclusion, functional skills development and teacher preparedness",
      "Prospective PhD candidate at Te Herenga Waka - Victoria University of Wellington, New Zealand",
    ],
  },
  {
    name: "Felix Okoth Otieno",
    position: "Associate Consultant - Inclusive Education & Disability Inclusion",
    image: IMAGES.felixOtieno,
    expertise: [
      "Inclusive Education",
      "Disability Inclusion",
      "Teacher Development",
      "Assistive Technology",
      "Research Translation",
    ],
    bio: "Felix Okoth Otieno is a Disability-Inclusive Education Specialist and learning systems practitioner supporting inclusive education initiatives across Kenya. His work spans teacher professional development, disability inclusive programming, research translation and the design of accessible learning environments. Currently supporting national disability inclusion efforts within Kenya's Ministry of Education, he brings together a background in Special Needs Education and Information Technology, with a particular interest in translating evidence into classroom practice.",
    achievements: [
      "Co-developed the Inclusive Education Toolkit for Early Childhood Education",
      "Supported training of educators and education professionals across multiple counties",
      "Contributed to research and inclusive pedagogy with The Action Foundation and the Clinton Health Access Initiative",
    ],
  },
  {
    name: "Gabriel Mureithi",
    position: "Project Management & Child Protection Expert",
    image: IMAGES.gabrielMureithi,
    expertise: [
      "Project Management",
      "Child Protection",
      "Safeguarding",
      "HR Management",
      "GBV Prevention",
    ],
    bio: "Gabriel is a seasoned professional with over 16 years of experience in international non-governmental organizations, specializing in Child Protection, Project Management and Human Resources. With a strong commitment to safeguarding vulnerable children, he has led high-impact projects focused on accountability, quality education and gender-based violence prevention. Gabriel holds a Master's in Human Resources Management and a Bachelor's in Education from the University of Nairobi.",
    achievements: [
      "Authored the Kilifi County GBV Policy (2024)",
      "Reviewed the Kenya National Guidelines for Child Protection in Emergencies (2023)",
      "Built innovative child protection initiatives recognized as best practices in the region",
    ],
  },
  {
    name: "Evans Ochieng Nudih",
    position: "Senior Research & Policy Specialist",
    image: IMAGES.evansNudih,
    expertise: [
      "Research Design",
      "Monitoring & Evaluation",
      "Health Policy",
      "Economic Analysis",
      "Project Management",
    ],
    bio: "Evans is a seasoned Senior Research and Policy Specialist with over 15 years of experience in research, monitoring and evaluation, health policy and economic analysis. He began his career at the Ministry of Planning and National Development, contributing to Kenya's Economic Recovery Strategy and Public Expenditure Review. Evans currently serves as a Research Officer to the Chairperson of the Health Committee at the National Assembly of Kenya, providing technical research support and policy analysis.",
    achievements: [
      "Contributed to Kenya's Third Annual Progress Report of the Economic Recovery Strategy (ERS)",
      "Strengthened partnerships with government and civil society at DEEDS Kenya",
      "Provides legislative advisory services to influence health sector reforms",
    ],
  },
  {
    name: "Abraham Shivachi",
    position: "Education Specialist & Leadership Coach",
    expertise: [
      "Education Quality",
      "Leadership Coaching",
      "Curriculum Development",
      "Teacher Training",
      "Educational Technology",
    ],
    bio: "Abraham is an accomplished Education Specialist with over 20 years of experience improving learner performance, teacher training and school leadership development. His expertise lies in school quality assessment, curriculum development and educational technology integration, particularly in underserved areas. As a Leadership Coach with the Transforming Schooling into Learning project, he has delivered professional development to school leaders and teacher mentors. Abraham holds a Bachelor's in Early Childhood Studies and Primary Education from Mount Kenya University.",
    achievements: [
      "Trained and mentored over 64 school leaders and 96 teachers, improving outcomes for 2,400+ learners",
      "Represented World Vision Kenya at the 21st Conference of Commonwealth Education Ministers",
      "Coordinated the KIX IDRC Global Partnership in Education and LEGO Foundation Learning through Play projects",
    ],
  },
  {
    name: "Daniel Kheri Kazungu",
    position: "MEAL Specialist & Program Development Expert",
    expertise: [
      "Monitoring & Evaluation",
      "Program Development",
      "Accountability",
      "Capacity Building",
      "Humanitarian Response",
    ],
    bio: "Daniel is a Monitoring, Evaluation, Accountability and Learning specialist with over seven years of experience in the humanitarian and development sector, working across Kenya, Ethiopia and Sudan. He has designed and implemented MEAL frameworks for multi-million-dollar interventions in nutrition, WASH, livelihoods, cash assistance and child protection. Daniel holds a B.Sc. in Project Planning and Management and a Master's in Community Development, and is certified in disaster management and cash and voucher assistance programming.",
    achievements: [
      "Led MEAL processes for large-scale programs across Kenya, Ethiopia and Sudan",
      "Contributed to the expansion of the USAID BHA portfolio in Kenya as MEAL Coordinator at World Vision Kenya",
      "Certified in disaster management, humanitarian response and cash & voucher assistance programming",
    ],
  },
  {
    name: "Chungune June Chopetta",
    position: "Operations & Logistics Associate",
    image: IMAGES.juneChopetta,
    expertise: [
      "Procurement & Supply Chain",
      "Logistics Coordination",
      "Operations",
      "Research Assistance",
      "Field Engagement",
    ],
    bio: "June is a procurement and supply chain professional with a Bachelor's degree in Procurement and Logistics Management from Kabarak University. She brings experience in operations, logistics coordination, procurement support, research assistance and field engagement. At Verity Metrics International Limited she supports project administration, logistics coordination, procurement functions, field operations and stakeholder engagement, helping ensure the smooth delivery of consultancy, research and evaluation assignments.",
    achievements: [
      "Participated in research and data collection on learning environments and ICT readiness in schools with The Action Foundation",
      "Experienced in tender documentation, market assessments, contract support and inventory management",
      "Skilled in field coordination, stakeholder engagement, interviewing and reporting",
    ],
  },
];

export default function Team() {
  return (
    <Layout>
      <PageHero
        title="Our Team"
        subtitle="Meet the talented professionals driving innovation and impact at Verity Metrics International"
        image={IMAGES.aboutHero}
        overlay="blue"
      />

      {/* Team Members Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="absolute -inset-4 bg-gradient-to-br from-sky-200 to-sky-100 rounded-2xl blur-xl opacity-40" />
                      {member.image ? (
                        <img
                          loading="lazy"
                          decoding="async"
                          src={member.image}
                          alt={member.name}
                          className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
                        />
                      ) : (
                        /* No portrait on file yet - show a monogram rather than a gap */
                        <div
                          role="img"
                          aria-label={member.name}
                          className="relative rounded-2xl shadow-2xl w-full aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-sky-600 to-sky-800"
                        >
                          <span className="font-heading font-bold text-white/90 text-6xl md:text-7xl tracking-wide">
                            {member.name
                              .split(" ")
                              .filter(Boolean)
                              .slice(0, 2)
                              .map((word) => word[0])
                              .join("")}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="mb-6">
                      <span className="eyebrow">
                        Team Member
                      </span>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-2">
                        {member.name}
                      </h2>
                      <p className="text-lg text-sky-600 font-semibold">
                        {member.position}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h3 className="text-sm font-heading font-bold text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wider">
                        <Briefcase size={16} className="text-sky-500" />
                        Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-medium border border-sky-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Achievements */}
                    {member.achievements && (
                      <div>
                        <h3 className="text-sm font-heading font-bold text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wider">
                          <Award size={16} className="text-sky-500" />
                          Key Achievements
                        </h3>
                        <ul className="space-y-2">
                          {member.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex gap-2 text-slate-600 text-sm leading-relaxed"
                            >
                              <span className="text-sky-500 font-bold mt-0.5 flex-shrink-0">
                                ✓
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="eyebrow">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6">
                Driven by Shared Values
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our team is united by a commitment to inclusive development,
                evidence-based solutions and transformative impact. We believe
                that diverse perspectives and collaborative excellence drive
                innovation and create lasting change in communities across
                Africa.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Users,
                  title: "Collaboration",
                  desc: "We work together across disciplines to deliver comprehensive solutions",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  desc: "We maintain the highest standards in research, analysis and implementation",
                },
                {
                  icon: Briefcase,
                  title: "Impact",
                  desc: "We measure success by the tangible change we create in people's lives",
                },
              ].map((value, i) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <Icon className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                      <h3 className="font-heading font-bold text-slate-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{value.desc}</p>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
