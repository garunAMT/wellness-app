import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Mental Wellness?</h2>
        <p className="text-xl mb-8">Join thousands of users who have already started their journey to a healthier mind.</p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-8 rounded-full text-lg">
          Download WellSpring Now
        </Button>
      </div>
    </section>
  )
}

