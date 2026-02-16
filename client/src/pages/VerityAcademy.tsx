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
  GraduationCap,
  BookOpen,
  Monitor,
  Users,
  Clock,
  Award,
  ArrowRight,
  CheckCircle2,
  Star,
  Globe,
} from "lucide-react";

const subjects = [
  { name: "Mathematics", level: "GCSE & A-Level" },
  { name: "English Language", level: "GCSE & A-Level" },
  { name: "English Literature", level: "GCSE & A-Level" },
  { name: "Sciences (Biology, Chemistry, Physics)", level: "GCSE & A-Level" },
  { name: "Business Studies", level: "GCSE & A-Level" },
  { name: "History", level: "GCSE & A-Level" },
  { name: "Geography", level: "GCSE & A-Level" },
  { name: "Computer Science", level: "GCSE & A-Level" },
];

const features = [
  {
    icon: Monitor,
    title: "Online Tutoring",
    desc: "Live, interactive online sessions with experienced tutors using modern digital tools and platforms.",
  },
  {
    icon: Users,
    title: "Small Group Sessions",
    desc: "Personalized attention in small groups ensuring every student gets the support they need.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Resources",
    desc: "Access to curated study materials, past papers, revision guides and practice exercises.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    desc: "Sessions scheduled to accommodate different time zones and student commitments.",
  },
  {
    icon: Award,
    title: "Exam Preparation",
    desc: "Focused exam preparation with mock tests, marking schemes and examiner insights.",
  },
  {
    icon: Globe,
    title: "Global Access",
    desc: "Students from anywhere in the world can access our tutoring services online.",
  },
];

const testimonials = [
  {
    quote: "Verity Academy helped me improve my grades significantly. The tutors are patient and really know their subjects.",
    name: "Student, GCSE Mathematics",
    rating: 5,
  },
  {
    quote: "The online platform is easy to use and the small group sessions make learning interactive and fun.",
    name: "Student, A-Level Sciences",
    rating: 5,
  },
  {
    quote: "I appreciate the flexible scheduling. As a parent, it's great to know my child is getting quality tutoring.",
    name: "Parent",
    rating: 5,
  },
];

export default function VerityAcademy() {
  return (
    <Layout>
      <PageHero
        title="Verity Academy"
        subtitle="Expert GCSE and A-Level tutoring that empowers students to achieve academic excellence."
        image={IMAGES.heroAcademy}
        overlay="blue"
      />

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">
                  Academic Excellence
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6">
                  Empowering Students for Success
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Verity Academy is the educational arm of Verity Metrics International, dedicated to providing high-quality GCSE and A-Level tutoring services. Our experienced tutors deliver personalized instruction that helps students build confidence, master key concepts and achieve their academic goals.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Whether preparing for exams or seeking to strengthen understanding of core subjects, our structured approach ensures every student receives the support they need to excel.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-sky-50 border border-sky-100 rounded-lg px-4 py-2">
                    <GraduationCap size={18} className="text-sky-600" />
                    <span className="text-sm font-medium text-slate-700">GCSE Tutoring</span>
                  </div>
                  <div className="flex items-center gap-2 bg-sky-50 border border-sky-100 rounded-lg px-4 py-2">
                    <BookOpen size={18} className="text-sky-600" />
                    <span className="text-sm font-medium text-slate-700">A-Level Tutoring</span>
                  </div>
                  <div className="flex items-center gap-2 bg-sky-50 border border-sky-100 rounded-lg px-4 py-2">
                    <Monitor size={18} className="text-sky-600" />
                    <span className="text-sm font-medium text-slate-700">Online Platform</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src={IMAGES.academyClassroom}
                  alt="Verity Academy virtual classroom"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 bg-sky-500 text-white rounded-xl p-4 shadow-lg hidden md:block">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="text-yellow-300 fill-yellow-300" />
                    <span className="font-heading font-bold text-lg">4.9/5</span>
                  </div>
                  <div className="text-sky-100 text-sm">Student Rating</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4">
                The Verity Academy Advantage
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our approach combines expert instruction with modern technology to create an engaging learning experience.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-sky-100/50">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon size={22} className="text-sky-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src={IMAGES.academyStudent}
                  alt="Student studying"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Subjects Offered</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6">
                  Comprehensive Subject Coverage
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We offer tutoring across a wide range of GCSE and A-Level subjects, with experienced tutors who specialize in their respective fields.
                </p>
                <div className="space-y-3">
                  {subjects.map((subject, i) => (
                    <div key={i} className="flex items-center justify-between bg-sky-50/60 border border-sky-100 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-sky-500 shrink-0" />
                        <span className="text-slate-800 font-medium text-sm">{subject.name}</span>
                      </div>
                      <span className="text-sky-600 text-xs font-medium bg-sky-100 px-2 py-0.5 rounded">{subject.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-sky-50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-4">
                What Our Students Say
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed flex-1 mb-4 italic">"{t.quote}"</p>
                  <div className="text-sm font-medium text-slate-800">{t.name}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-700 to-sky-800">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-sky-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Join Verity Academy today and take the first step towards academic excellence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-sky-700 hover:bg-sky-50 px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg no-underline"
            >
              Enroll Now <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
