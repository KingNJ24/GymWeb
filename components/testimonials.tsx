export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      content:
        'EliteFit completely transformed my life. The trainers are incredibly supportive, and the community is unlike anything I&apos;ve experienced. I&apos;ve never felt more motivated.',
      rating: 5,
    },
    {
      name: 'Marcus Chen',
      role: 'Business Professional',
      content:
        'As someone with a busy schedule, EliteFit&apos;s flexible hours and expert trainers have helped me achieve results I thought were impossible. Worth every penny.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Recovering Athlete',
      content:
        'After an injury, I wasn&apos;t sure I could get back to fitness. The team at EliteFit designed a personalized program that got me back safely and stronger than ever.',
      rating: 5,
    },
    {
      name: 'James Williams',
      role: 'Strength Coach',
      content:
        'The equipment here is top-notch, and the facilities are pristine. I&apos;ve recommended EliteFit to all my clients. It&apos;s a game-changer.',
      rating: 5,
    },
    {
      name: 'Lisa Park',
      role: 'Group Class Lover',
      content:
        'The variety of classes and the energy of the community kept me coming back. I&apos;ve made amazing friends and achieved my fitness goals here.',
      rating: 5,
    },
    {
      name: 'David Brown',
      role: 'Weight Loss Success Story',
      content:
        'EliteFit isn&apos;t just a gym - it&apos;s a lifestyle change. With the nutrition guidance and support from the team, I&apos;ve lost 50 pounds and feel incredible.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase">
            Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
            Hear From Our Members
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real stories from real people who&apos;ve transformed their lives at EliteFit.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-8 border border-border hover:border-accent/50 transition-all hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">5,000+</p>
              <p className="text-foreground/70 mt-2">Active Members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-foreground/70 mt-2">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-foreground/70 mt-2">Classes Per Week</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">15 yrs</p>
              <p className="text-foreground/70 mt-2">Industry Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
