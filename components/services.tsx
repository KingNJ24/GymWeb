import { Activity, Apple, Dumbbell, HeartPulse } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Services() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for beginners ready to start their fitness journey',
      features: [
        'Unlimited gym access',
        'Locker room facilities',
        'Basic equipment training',
        'Monthly newsletter',
        'Community events access',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '59',
      description: 'For serious athletes looking to accelerate their progress',
      features: [
        'Everything in Starter',
        'Personal training sessions (4/month)',
        'Nutrition consultation',
        'Group fitness classes',
        'Progress tracking app',
        'Priority class booking',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      price: '99',
      description: 'Maximum results with our most comprehensive package',
      features: [
        'Everything in Pro',
        'Unlimited personal training',
        'Custom meal planning',
        'Recovery services (massage)',
        '1-on-1 coaching calls',
        'VIP lounge access',
        'Guest passes (4/month)',
      ],
      highlighted: false,
    },
  ]

  const additionalServices = [
    {
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers',
      icon: Dumbbell,
    },
    {
      title: 'Nutrition Plans',
      description: 'Custom meal planning from nutrition experts',
      icon: Apple,
    },
    {
      title: 'Group Classes',
      description: 'HIIT, yoga, spin, and more every day',
      icon: Activity,
    },
    {
      title: 'Recovery Services',
      description: 'Massage therapy and recovery tools',
      icon: HeartPulse,
    },
  ]

  return (
    <section id="services" className="w-full py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-accent font-semibold text-sm tracking-wide uppercase">
            Membership Plans
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
            Plans Built for Every Goal
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose a plan that fits your goals and budget. All memberships include gym access and community benefits.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? 'bg-primary text-primary-foreground ring-2 ring-accent transform md:scale-105'
                  : 'bg-background border border-border hover:border-accent/50'
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? '' : 'text-primary'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-primary-foreground/80' : 'text-foreground/70'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? '' : 'text-primary'}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.highlighted ? 'text-primary-foreground/70' : 'text-foreground/70'}`}>
                  /month
                </span>
              </div>

              <Button className="w-full mb-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Started
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-accent"
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
                    <span
                      className={`text-sm ${
                        plan.highlighted ? 'text-primary-foreground/90' : 'text-foreground/80'
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20 pt-20 border-t border-border">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="text-center">
                <div className="mb-4 flex justify-center text-accent">
                  <service.icon className="h-12 w-12" strokeWidth={1.75} />
                </div>
                <h4 className="font-semibold text-primary mb-2">{service.title}</h4>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
