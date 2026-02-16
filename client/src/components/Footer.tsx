import { Link } from "wouter";
import { IMAGES } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start gap-4 mb-6">
              <img src={IMAGES.logo} alt="Verity Metrics" className="h-24 w-auto" />
              <div>
                <div className="font-heading font-bold text-xl leading-tight">Verity Metrics</div>
                <div className="text-sky-300 text-xs tracking-wider uppercase">International</div>
              </div>
            </div>
            <p className="text-sky-200 text-sm leading-relaxed">
              Innovating Solutions, Inspiring Global Change. We empower organizations with data-driven solutions for sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-sky-100">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/team", label: "Our Team" },
                { href: "/projects", label: "Projects" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sky-300 hover:text-white text-sm transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-sky-100">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-sky-300">
              <span>Research & Analytics</span>
              <span>MEAL Services</span>
              <span>Disability Inclusion</span>
              <span>Capacity Building</span>
              <span>Education Consultancy</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-sky-100">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-sky-300">
              <a href="tel:+254117330809" className="hover:text-white transition-colors no-underline text-sky-300">
                +254 117330809
              </a>
              <a href="mailto:info@veritymetric.com" className="hover:text-white transition-colors no-underline text-sky-300">
                info@veritymetric.com
              </a>
              <div className="flex gap-3 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61572181777876" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-sky-800 hover:bg-sky-700 flex items-center justify-center transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://x.com/MetricsVerity" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-sky-800 hover:bg-sky-700 flex items-center justify-center transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/106668154" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-sky-800 hover:bg-sky-700 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.586v-5.579c0-1.333-.025-3.048-1.853-3.048-1.853 0-2.136 1.446-2.136 2.935v5.692h-3.586V10.999h3.448v1.563h.049c.48-.908 1.653-1.86 3.397-1.86 3.628 0 4.295 2.386 4.295 5.493v5.257zM5.337 9.001c-1.152 0-2.083-.934-2.083-2.083 0-1.151.931-2.083 2.083-2.083 1.151 0 2.083.932 2.083 2.083 0 1.149-.932 2.083-2.083 2.083zm1.793 11.451H3.544V10.999h3.586v9.453zM22.225 0H1.775C.794 0 0 .794 0 1.775v20.451C0 23.206.794 24 1.775 24h20.451C23.206 24 24 23.206 24 22.225V1.775C24 .794 23.206 0 22.225 0z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sky-800 text-center text-sky-400 text-sm">
          &copy; {new Date().getFullYear()} Verity Metrics International Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
