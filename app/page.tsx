import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
