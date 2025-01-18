'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import happy from '@/public/assets/happy.svg'
import scared from '@/public/assets/scared.svg'
import improving from '@/public/assets/improving.svg'
import thriving from '@/public/assets/thriving.svg'
import struggling from '@/public/assets/struggling.svg'

interface Suggestion {
  image: string
  range: [number, number]
  title: string
  description: string
  tips: string[]
}

const suggestions: Suggestion[] = [
    {
        range: [0, 5],
        image: struggling,
        title: "Struggling",
        description: "Your wellness score indicates that you're facing significant challenges. It's essential to focus on rebuilding your mental well-being.",
        tips: [
            "Reach out to a mental health professional for support",
            "Share your feelings with trusted friends or family members",
            "Incorporate stress-relief activities like yoga, meditation, or journaling",
            "Ensure you're prioritizing adequate sleep and proper nutrition"
        ]
    },
    {
        range: [6, 10],
        image: scared,
        title: "Needs Attention",
        description: "Your mental wellness score suggests you're experiencing some difficulties. Taking proactive steps can make a big difference.",
        tips: [
            "Engage in regular physical activity to boost mood and energy levels",
            "Spend time outdoors or in nature to relax your mind",
            "Limit your screen time, especially on social media",
            "Practice deep breathing exercises to reduce stress and anxiety"
        ]
    },
    {
        range: [11, 15],
        image: improving,
        title: "Improving",
        description: "You're making progress in maintaining your mental wellness. Keep up the positive efforts and continue to build on them.",
        tips: [
            "Experiment with new hobbies or creative outlets to enrich your life",
            "Strengthen connections with loved ones by spending quality time together",
            "Set achievable daily goals to boost your sense of accomplishment",
            "Practice gratitude by identifying three things you're thankful for each day"
        ]
    },
    {
        range: [16, 20],
        image: happy,
        title: "Good Mental Health",
        description: "Your wellness score reflects good mental well-being. Continue maintaining these habits for long-term benefits.",
        tips: [
            "Keep your current self-care routine and make adjustments as needed",
            "Consider mentoring or supporting others who might be struggling",
            "Set personal growth goals to continue expanding your potential",
            "Maintain a balance between work, rest, and recreation"
        ]
    },
    {
        range: [21, 25],
        image: thriving,
        title: "Thriving",
        description: "Your responses indicate an excellent state of mental well-being. You're thriving—keep nurturing this positive mindset.",
        tips: [
            "Be a source of inspiration by sharing your wellness strategies with others",
            "Explore ways to give back to your community through volunteering",
            "Continue challenging yourself with new experiences and goals",
            "Stay mindful and self-aware to maintain your mental wellness"
        ]
    }
];

export default function ResultsDisplay() {
  const [score, setScore] = useState<number | null>(null)
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const scoreParam = searchParams.get('score')
    if (scoreParam) {
      const parsedScore = parseInt(scoreParam, 10)
      setScore(parsedScore)
      
      const matchingSuggestion = suggestions.find(
        s => parsedScore >= s.range[0] && parsedScore <= s.range[1]
      )
      setSuggestion(matchingSuggestion || null)
    }
  }, [searchParams])

  if (score === null || suggestion === null) {
    return <div>Loading...</div>
  }

  const maxScore = 25 // Assuming the max score is 25 (5 questions * max value of 5)
  const progressPercentage = (score / maxScore) * 100

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">{suggestion.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
            <div className='flex items-center justify-center'>
                <Image src={suggestion.image} alt="Wellness" width={200} height={200} />
            </div>
          
          <p className="text-lg font-semibold mb-2">Your Wellness Score: {score}/{maxScore}</p>
          <Progress value={progressPercentage} className="w-full h-4" />
        </div>
        <p className="text-gray-600 mb-4">{suggestion.description}</p>
        <h3 className="text-xl font-semibold mb-2">Suggestions for Improvement:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {suggestion.tips.map((tip, index) => (
            <li key={index} className="text-gray-600">{tip}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

