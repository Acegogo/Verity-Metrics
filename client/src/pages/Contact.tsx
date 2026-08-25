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

  // Honeypot: real people never see this field, bots fill it in.
  const [botField, setBotField] = useState("");
  const [sending, setSending] = useState(false);

  // Posts to Netlify Forms. The matching static form in client/index.html is
  // what Netlify detects at build time; this sends the encoded submission.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          "bot-field": botField,
          ...formData,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      toast.success("Message sent. We will get back to you within two working days.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setBotField("");
    } catch (error) {
      // Never tell someone their message was received when it was not.
      toast.error(
        "Your message could not be sent. Please email info@veritymetric.com or call +254 117 330 809.",
        { duration: 10000 },
      );
    } finally {
      setSending(false);
    }
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
                <span className="eyebrow">Send Us a Message</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mt-2 mb-6">
                  We'd Love to Hear From You
                </h2>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Do not fill this in
                      <input
                        name="bot-field"
                        value={botField}
                        onChange={(e) => setBotField(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        name="name"
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
                        name="email"
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
                      name="subject"
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
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-sky-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all text-sm bg-white resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 bg-brand-flow disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-brand-indigo/25 hover:shadow-xl hover:shadow-brand-indigo/40 hover:-translate-y-0.5 disabled:translate-y-0"
                  >
                    {sending ? "Sending…" : "Send Message"} <Send size={16} />
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
                      href="https://web.facebook.com/profile.php?id=61573955033398&locale=en_GB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white border border-sky-200 hover:bg-sky-100 flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} className="text-sky-600" />
                    </a>
                    <a
                      href="https://x.com/VerityMetrics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white border border-sky-200 hover:bg-sky-100 flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={18} className="text-sky-600" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/verity-metrics-international/"
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
