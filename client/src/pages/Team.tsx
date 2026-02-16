/*
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary, deep navy, warm sand accents
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES } from "@/lib/images";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Fondo Hassan",
    role: "Managing Director",
    image: IMAGES.teamTraining,
    bio: "Fondo Hassan is a seasoned development professional with over 10 years of experience in research, monitoring and evaluation, disability inclusion, and organizational development. He holds a Master's degree in Development Studies and has worked with various international organizations across East Africa.",
    expertise: ["Research & Evaluation", "Disability Inclusion", "Strategic Leadership", "Program Management"],
    linkedin: "#",
    email: "fondo@veritymetrics.com",
  },
  {
    name: "Gabriel Mureithi",
    role: "Lead Consultant",
    image: IMAGES.teamWorkshop,
    bio: "Gabriel Mureithi brings extensive expertise in monitoring, evaluation, accountability and learning (MEAL) systems. With a background in statistics and data science, he leads our research and analytics practice, delivering evidence-based insights for program improvement.",
    expertise: ["MEAL Systems", "Data Analytics", "Statistical Analysis", "Research Design"],
    linkedin: "#",
    email: "gabriel@veritymetrics.com",
  },
  {
    name: "Evans Ochieng",
    role: "Senior Consultant",
    image: IMAGES.teamPresentation,
    bio: "Evans Ochieng is a specialist in capacity building and organizational development. He has facilitated numerous training programs for NGOs, government agencies, and community-based organizations, focusing on institutional strengthening and sustainable development.",
    expertise: ["Capacity Building", "Training Facilitation", "Organizational Development", "Community Engagement"],
    linkedin: "#",
    email: "evans@veritymetrics.com",
  },
];

export default function Team() {
  return (
    <Layout>
      <PageHero
        title="Our Team"
        subtitle="Meet the dedicated professionals driving our mission of sustainable development impact."
        image={IMAGES.teamFieldwork1}
        overlay="blue"
      />

      {/* Team Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
                The People Behind VMIL
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4">
                Experienced. Passionate. Committed.
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our team brings together diverse expertise spanning research methodology, data analytics, inclusive development, education, and organizational management. Together, we deliver comprehensive solutions tailored to each client's unique needs.
              </p>
            </div>
          </ScrollReveal>

          {/* Team Members */}
          <div className="space-y-16">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} delay={0.1}>
                <div className={`grid lg:grid-cols-5 gap-8 lg:gap-12 items-start ${i % 2 !== 0 ? "" : ""}`}>
                  {/* Photo */}
                  <div className={`lg:col-span-2 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="relative group">
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-sky-100 rounded-2xl -z-10" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`lg:col-span-3 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
                        {member.name}
                      </h3>
                    </div>
                    <div className="text-sky-600 font-semibold text-lg mb-4">{member.role}</div>
                    <p className="text-slate-600 leading-relaxed mb-6">{member.bio}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise.map((skill, j) => (
                        <span
                          key={j}
                          className="bg-sky-50 text-sky-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-sky-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 rounded-lg bg-sky-50 hover:bg-sky-100 flex items-center justify-center transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={18} className="text-sky-600" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 rounded-lg bg-sky-50 hover:bg-sky-100 flex items-center justify-center transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={18} className="text-sky-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo / Field Work */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">In The Field</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4">
                Our Team at Work
              </h2>
              <p className="text-slate-600 leading-relaxed">
                From community engagements to boardroom presentations, our team is committed to delivering excellence in every assignment.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMAGES.projectsField} alt="Field work" className="w-full h-72 md:h-80 object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={IMAGES.disabilityForum} alt="Community engagement" className="w-full h-72 md:h-80 object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
