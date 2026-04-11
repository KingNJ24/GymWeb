import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="w-full pt-32 pb-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-sm tracking-wide uppercase">
                Transform Your Life
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                Become Your Best Self in Ghaziabad
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-md text-balance">
              Join thousands in Ghaziabad who&apos;ve discovered that strength goes beyond the gym. At EliteFit, we build bodies, minds, and a community of champions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto"
                >
                  Contact on WhatsApp
                </Button>
              </a>
              <Link href="#contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
                >
                  Get Started in Ghaziabad
                </Button>
              </Link>
            </div>
            {/* Stats */}
            <div className="pt-8 flex gap-8">
              <div>
                <p className="text-3xl font-bold">5,000+</p>
                <p className="text-sm text-primary-foreground/70">Active Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-primary-foreground/70">Expert Trainers</p>
              </div>
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-primary-foreground/70">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-32 h-32 mx-auto text-accent/40 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  <p className="text-accent/60">Gym Interior Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
