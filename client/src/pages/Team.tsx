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
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Fondo Hassan",
    position: "Founder and Executive Director",
    image: IMAGES.fondoHassan,
    expertise: [
      "Inclusive Education",
      "Disability Advocacy",
      "Program Strategy",
      "MEAL",
      "Research & Policy",
    ],
    bio: "Fondo is a visionary leader and advocate for inclusive development with a mission to transform lives through innovation and empowerment. As Founder and Executive Director of Verity Metrics International, he delivers cutting-edge research, policy advisory and inclusive development solutions across Africa. His work spans inclusive education, disability rights, health systems strengthening and climate-resilient development. Fondo holds a Master's Degree in Special Needs Education from Maseno University, alongside a Diploma in Monitoring and Evaluation from Kenyatta University.",
    achievements: [
      "Led early childhood disability screening and assistive technology integration programs reaching hundreds of children",
      "Coordinated inclusive remote learning programs through Student World in the United Kingdom",
      "Lead Trainer for Core Life Skills under the We Can Work Program for youth with disabilities",
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
    image: IMAGES.evansPlaceholder,
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
                      <img
                        src={member.image}
                        alt={member.name}
                        className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="mb-6">
                      <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
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
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
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
