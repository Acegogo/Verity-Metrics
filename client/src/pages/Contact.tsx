/*
 * Design: Scandinavian Corporate Minimalism meets African Warmth
 * Colors: Sky blue primary, deep navy, warm sand accents
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { IMAGES } from "@/lib/images";
import { useState } from "react";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 117330809"],
    action: "tel:+254117330809",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@veritymetric.com"],
    action: "mailto:info@veritymetric.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Off Thika Superhighway, Exit 7, Blessed House, 1st Floor, House No. 18, Nairobi, Kenya"],
    action: "https://maps.app.goo.gl/GrbaEVUTrNSy5nZD9",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8:00 AM - 5:00 PM"],
    action: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team. We'd love to hear from you and discuss how we can help."
        image={IMAGES.contactHero}
        overlay="blue"
      />

      {/* Contact Info Cards */}
      <section className="py-14 bg-sky-50">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100/50 text-center h-full">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon size={22} className="text-sky-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, j) => (
                    info.action ? (
                      <a key={j} href={info.action} className="text-sky-600 hover:text-sky-700 text-sm transition-colors no-underline block">
                        {detail}
                      </a>
                    ) : (
                      <p key={j} className="text-slate-600 text-sm">{detail}</p>
                    )
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <span className="text-sky-600 font-semibold text-sm uppercase tracking-wider">Send Us a Message</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6">
                  We'd Love to Hear From You
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all text-sm bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all text-sm bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all text-sm bg-white"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all text-sm bg-white resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-sky-600/20"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-2xl p-8 text-white mb-6">
                  <h3 className="font-heading font-bold text-xl mb-4">Let's Work Together</h3>
                  <p className="text-sky-100 leading-relaxed text-sm mb-6">
                    Whether you need research support, MEAL frameworks, capacity building, or inclusive development consultancy, we're here to help you achieve your goals.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+254117330809" className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors no-underline">
                      <Phone size={18} />
                      <span className="text-sm">+254 117330809</span>
                    </a>
                    <a href="mailto:info@veritymetric.com" className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors no-underline">
                      <Mail size={18} />
                      <span className="text-sm">info@veritymetric.com</span>
                    </a>
                    <a href="https://maps.app.goo.gl/GrbaEVUTrNSy5nZD9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors no-underline">
                      <MapPin size={18} className="shrink-0" />
                      <span className="text-sm">Off Thika Superhighway, Exit 7, Blessed House, 1st Floor, House No. 18</span>
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                  <h4 className="font-heading font-semibold text-slate-900 mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=61572181777876"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white border border-sky-200 hover:bg-sky-100 flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} className="text-sky-600" />
                    </a>
                    <a
                      href="https://x.com/MetricsVerity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white border border-sky-200 hover:bg-sky-100 flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} className="text-sky-600" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/106668154"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white border border-sky-200 hover:bg-sky-100 flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} className="text-sky-600" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
