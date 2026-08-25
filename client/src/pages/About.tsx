/*
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary, deep navy, warm sand accents
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES } from "@/lib/images";
import Lightbox from "@/components/Lightbox";
import AnimatedHeading from "@/components/AnimatedHeading";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Target, Eye, Heart, Shield, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", desc: "We uphold the highest standards of honesty and ethical conduct in all our engagements." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace creative and forward-thinking approaches to solving complex development challenges." },
  { icon: Users, title: "Inclusivity", desc: "We champion diversity and ensure that all voices, especially marginalized groups, are heard and valued." },
  { icon: Heart, title: "Commitment", desc: "We are dedicated to delivering quality results and creating meaningful, lasting impact." },
  { icon: Target, title: "Excellence", desc: "We strive for the highest quality in our research, analysis and consulting services." },
  { icon: Eye, title: "Accountability", desc: "We take responsibility for our actions and maintain transparency with our partners and stakeholders." },
];

const galleryImages = [
  { src: IMAGES.teamCommunity, alt: "Community engagement session on disability inclusion" },
  { src: IMAGES.teamInterview, alt: "Field interview during an inclusion assessment" },
  { src: IMAGES.teamEngagement, alt: "Stakeholder engagement with school and community members" },
  { src: IMAGES.teamFieldwork2, alt: "Fieldwork supporting inclusive education practice" },
];

export default function About() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
                <span className="eyebrow">Who We Are</span>
                <AnimatedHeading
                text="Verity Metrics International Limited"
                className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6"
              />
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
                <img loading="lazy" decoding="async"
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
              <span className="eyebrow">Our Purpose</span>
              <AnimatedHeading
                text="Mission & Vision"
                className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2"
              />
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
              <span className="eyebrow">What Guides Us</span>
              <AnimatedHeading
                text="Our Core Values"
                highlight={["values"]}
                className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4"
              />
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
              <span className="eyebrow">Our Impact</span>
              <AnimatedHeading
                text="Disability Inclusion in Action"
                highlight={["Inclusion"]}
                className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4"
              />
              <p className="text-slate-600 leading-relaxed">
                We are committed to promoting inclusive practices that ensure equitable participation for persons with disabilities.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.1}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View larger: ${image.alt}`}
                  className="group relative block aspect-square w-full overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl"
                >
                  <img
                    loading="lazy"
                    decoding="async"
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Reveal on hover so it is clear these open */}
                  <span className="absolute inset-0 flex items-center justify-center bg-brand-navy/0 opacity-0 transition-all duration-300 group-hover:bg-brand-navy/45 group-hover:opacity-100 group-focus-visible:bg-brand-navy/45 group-focus-visible:opacity-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm">
                      <Maximize2 size={18} />
                    </span>
                  </span>
                </button>
              </ScrollReveal>
            ))}
          </div>

          <Lightbox
            images={galleryImages}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onIndexChange={setLightboxIndex}
          />
        </div>
      </section>
    </Layout>
  );
}
