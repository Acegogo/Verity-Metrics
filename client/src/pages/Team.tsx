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
  bio: string[];
  expertise: string[];
  achievements?: string[];
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "FONDO K HASSAN",
    position: "Founder and Executive Director",
    image: IMAGES.teamPresentation,
    expertise: [
      "Inclusive Education",
      "Disability Advocacy",
      "Program Strategy",
      "MEAL",
      "Research & Policy Influence",
    ],
    bio: [
      "Fondo Hassan is a visionary leader, strategist and advocate for inclusive development with a mission to transform lives through innovation, research and empowerment. As the Founder and Executive Director of Verity Metrics International Limited, Fondo has built a dynamic platform that delivers cutting-edge research, policy advisory, monitoring and evaluation and inclusive development solutions across Africa.",
      "Driven by an unwavering commitment to social justice and equity, Fondo has led impactful initiatives spanning inclusive education, disability rights, health systems strengthening and climate-resilient development. His work has shaped transformative programs with organizations such as the Clinton Health Access Initiative's Building a World of Play initiative, where he pioneered early childhood disability screening, assistive technology integration and inclusive therapeutic play interventions that have reached hundreds of children with disabilities across Kenya.",
      "Internationally, Fondo has coordinated inclusive remote learning programs through Student World in the United Kingdom, designing innovative, accessible education models for neurodivergent students. As a Lead Trainer for Core Life Skills under the We Can Work Program, he builds the employment readiness and social empowerment capacities of young persons with disabilities, positioning them for leadership and economic independence.",
      "Fondo's expertise spans inclusive education program design, disability advocacy, Monitoring, Evaluation, Accountability and Learning (MEAL), project management, research design, policy influence, grant and proposal development and multi-stakeholder engagement. He has worked extensively across Kenya, delivering results-driven programs in Nairobi, Turkana, Kilifi, Kiambu, Central Kenya and Machakos and enabling grassroots organizations to secure critical funding from global donors, including the Government of Ireland and the Issroff Family Foundation.",
      "Currently, Fondo also serves as a Project Officer at the Centre for Education Policy and Climate Justice (CEPCJ), where he champions the integration of education reform with climate justice advocacy, ensuring marginalized communities are centered in national policy dialogues.",
      "Fondo holds a Master's Degree and a Bachelor's Degree in Special Needs Education from Maseno University, alongside a Diploma in Monitoring and Evaluation from Kenyatta University. His rare blend of visionary leadership, technical expertise and grassroots experience makes him not just a consultant, but a catalyst for lasting change.",
    ],
  },
  {
    name: "Gabriel Mureithi",
    position: "Project Management & Child Protection Expert",
    image: IMAGES.teamTraining,
    expertise: [
      "Project Management",
      "Child Protection",
      "Safeguarding",
      "HR Management",
      "GBV Prevention",
      "Policy Development",
    ],
    bio: [
      "Gabriel Mureithi is a seasoned professional with over 16 years of experience in international non-governmental organizations (INGOs), specializing in Child Protection, Project Management and Human Resources & Administration. With a strong commitment to safeguarding vulnerable children and advocating for their rights, Gabriel has led high-impact projects focused on accountability, quality education and gender-based violence (GBV) prevention.",
      "Gabriel excels in cross-sector collaboration, having successfully built partnerships between organizations like World Vision Kenya and the Judiciary to enhance child protection services. He is also skilled in capacity building, having mentored graduate interns and trained staff on critical topics such as safeguarding, occupational safety and mental health.",
      "Gabriel holds a Master's in Human Resources Management and a Bachelor's in Education (Arts) from the University of Nairobi. His expertise spans project coordination, advocacy and emergency response, making him a valuable asset to Verity Metrics International.",
    ],
    achievements: [
      "Authoring the Kilifi County GBV Policy (2024)",
      "Reviewing the Kenya National Guidelines for Child Protection in Emergencies (2023)",
      "Establishing innovative child protection initiatives recognized as best practices in the region",
    ],
  },
  {
    name: "EVANS OCHIENG NUDIH",
    position: "Senior Research & Policy Specialist",
    image: IMAGES.teamFieldwork1,
    expertise: [
      "Research Design",
      "Monitoring & Evaluation",
      "Health Policy",
      "Economic Analysis",
      "Project Management",
    ],
    bio: [
      "Evans Ochieng Nudih is a seasoned Senior Research and Policy Specialist with over 15 years of experience in research, monitoring and evaluation (M&E), health policy, economic analysis and project management. He holds a Bachelor of Arts degree in Economics and Political Science from the University of Nairobi.",
      "Evans began his career at the Ministry of Planning and National Development, where he contributed to the preparation of Kenya's Third Annual Progress Report of the Economic Recovery Strategy (ERS) and the Public Expenditure Review (PER) 2007. He also supported the implementation of the National Integrated Monitoring and Evaluation System (NIMES), gaining valuable expertise in national development tracking and policy evaluation.",
      "From 2008 to 2012, Evans worked at Disabled for Education and Economic Development (DEEDS) Kenya as a Senior Program Officer, Monitoring and Evaluation, where he strengthened partnerships with government and civil society, led compliance monitoring and enhanced organizational visibility through evidence-based reporting.",
      "Evans currently serves as a Research Officer seconded to the Chairperson of the Health Committee at the National Assembly of Kenya, providing technical research support, policy analysis and legislative advisory services to influence health sector reforms. He brings a strong background in research design, monitoring and evaluation, health policy development, project risk management and strategic partnership building.",
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
                    <div className="mb-8">
                      <h3 className="text-lg font-heading font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Briefcase size={20} className="text-sky-500" />
                        Areas of Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-4 py-2 bg-sky-50 text-sky-700 rounded-full text-sm font-medium border border-sky-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                      {member.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Achievements */}
                    {member.achievements && (
                      <div>
                        <h3 className="text-lg font-heading font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Award size={20} className="text-sky-500" />
                          Key Achievements
                        </h3>
                        <ul className="space-y-3">
                          {member.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-slate-600 leading-relaxed"
                            >
                              <span className="text-sky-500 font-bold mt-1">
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
                evidence-based solutions, and transformative impact. We believe
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
                  desc: "We maintain the highest standards in research, analysis, and implementation",
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
