import { Brain, Heart, Smile } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "Mindfulness Exercises",
    description: "Engage in daily mindfulness practices to reduce stress and improve focus."
  },
  {
    icon: Heart,
    title: "Mood Tracking",
    description: "Monitor your emotional well-being with our intuitive mood tracking tools."
  },
  {
    icon: Smile,
    title: "Personalized Growth",
    description: "Receive tailored recommendations to support your mental health journey."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Empower Your Mental Wellness</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="mx-auto h-16 w-16 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

