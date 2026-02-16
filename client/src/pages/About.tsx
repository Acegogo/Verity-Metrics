/*
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary, deep navy, warm sand accents
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES } from "@/lib/images";
import { Target, Eye, Heart, Shield, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", desc: "We uphold the highest standards of honesty and ethical conduct in all our engagements." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace creative and forward-thinking approaches to solving complex development challenges." },
  { icon: Users, title: "Inclusivity", desc: "We champion diversity and ensure that all voices, especially marginalized groups, are heard and valued." },
  { icon: Heart, title: "Commitment", desc: "We are dedicated to delivering quality results and creating meaningful, lasting impact." },
  { icon: Target, title: "Excellence", desc: "We strive for the highest quality in our research, analysis and consulting services." },
  { icon: Eye, title: "Accountability", desc: "We take responsibility for our actions and maintain transparency with our partners and stakeholders." },
];

export default function About() {
  return (
    <Layout>
      <PageHero
        title="About Us"
        subtitle="Learn about our mission, values and the team driving sustainable development impact."
        image={IMAGES.aboutHero}
        overlay="blue"
      />

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6">
                  Verity Metrics International Limited
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Verity Metrics International Limited (VMIL) is a consultancy firm that provides Research, Monitoring, Evaluation, Accountability and Learning (MEAL), Disability Inclusion and Gender, Special Needs Education consultancy, Capacity Building and Organizational Development services.
                  </p>
                  <p>
                    We work with governments, non-governmental organizations, community-based organizations and private sector entities to design and implement evidence-based programs that create sustainable impact.
                  </p>
                  <p>
                    Our team brings together diverse expertise spanning research methodology, data analytics, inclusive development, education and organizational management to deliver comprehensive solutions tailored to each client's unique needs.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src={IMAGES.teamEngagement}
                  alt="Verity Metrics team engagement and workshop"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-sky-100 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-sky-50 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2">
                Mission & Vision
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 md:p-10 text-white h-full">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-sky-100" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-sky-100 leading-relaxed text-lg">
                  To empower organizations and communities with innovative, data-driven solutions that promote sustainable development, inclusivity and social impact across the globe.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 text-white h-full">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-sky-300" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  A world where evidence-based practices and inclusive approaches lead to equitable and transformative development outcomes for all communities.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">What Guides Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4">
                Our Core Values
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These principles guide every engagement and decision we make.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-sky-50/60 border border-sky-100 rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                    <value.icon size={22} className="text-sky-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disability Inclusion Gallery */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4">
                Disability Inclusion in Action
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We are committed to promoting inclusive practices that ensure equitable participation for persons with disabilities.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[IMAGES.teamCommunity, IMAGES.teamInterview, IMAGES.teamEngagement, IMAGES.teamFieldwork2].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-square">
                  <img src={img} alt={`Inclusion work ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
