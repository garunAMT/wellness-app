import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Nurture Your Mind, Flourish in Life
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          WellSpring: Your daily companion for mental wellness. Discover peace, build resilience, and thrive with our guided journeys and personalized support.
        </p>
        <Link href={"/questionnaire"}><Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg">
          Start Your Journey
        </Button></Link>
        
      </div>
    </section>
  )
}

