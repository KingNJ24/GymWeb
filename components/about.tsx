export function About() {
  return (
    <section id="about" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative h-80 md:h-full min-h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-32 h-32 mx-auto text-primary/40 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  <p className="text-primary/60">Facility Image</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wide uppercase">
                About Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 text-primary text-balance">
                Where Passion Meets Performance
              </h2>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              EliteFit Ghaziabad has been serving the local community for over a decade, becoming the best gym in Ghaziabad. We&apos;re not just a gym - we&apos;re a movement dedicated to empowering individuals to achieve their wildest goals.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Our state-of-the-art facility in Ghaziabad features premium equipment, cutting-edge technology, and a team of certified trainers who are passionate about your success. Trusted by thousands of local Ghaziabad residents, every member of our community is here to inspire and be inspired.
            </p>

            {/* Trust Badge */}
            <div className="bg-accent/10 border border-accent rounded-lg p-4 my-6">
              <p className="text-sm font-semibold text-accent">Trusted by Local Businesses in Ghaziabad</p>
              <p className="text-sm text-foreground/70 mt-1">Join 5,000+ members in Ghaziabad who have transformed their fitness journey with us.</p>
            </div>

            {/* Values */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Community First</h3>
                  <p className="text-sm text-foreground/70">Build lasting friendships with like-minded fitness enthusiasts</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Expert Guidance</h3>
                  <p className="text-sm text-foreground/70">Access world-class trainers and personalized training programs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Premium Equipment</h3>
                  <p className="text-sm text-foreground/70">Train on the latest technology and top-tier fitness equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
