import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">E</span>
              </div>
              <span className="font-bold text-lg">EliteFit</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Transforming lives through fitness and community. Join us in becoming your best self.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Memberships
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Group Classes
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Nutrition Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition">
                  Recovery Services
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.948c-3.395.714-6.647.714-10.042 0-.924-.194-1.354-.985-1.354-1.986v-5.34c0-.494.278-.856.682-.995 3.396-.714 6.647-.714 10.042 0 .404.14.682.501.682.995v5.34c0 1.001-.43 1.792-1.354 1.986zm-5.521-8.948c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 1 3 1.5a4.5 4.5 0 001-9A4.5 4.5 0 0023 3" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; 2024 EliteFit. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-foreground transition">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
