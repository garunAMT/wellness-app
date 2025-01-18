'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

const questions = [
  "How would you rate your overall mood today?",
  "How well did you sleep last night?",
  "How would you rate your stress level today?",
  "How satisfied are you with your productivity today?",
  "How connected do you feel to your loved ones today?"
]

export default function QuestionnaireForm() {
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const router = useRouter()

  const handleRadioChange = (value: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const score = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0)
    router.push(`/results?score=${score}`)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <Progress value={progress} className="w-full mb-6" />
        <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion]}</h2>
        <RadioGroup
          value={answers[currentQuestion]}
          onValueChange={handleRadioChange}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <div key={value} className="flex items-center space-x-2">
              <RadioGroupItem value={value.toString()} id={`option-${value}`} />
              <Label htmlFor={`option-${value}`}>{value}</Label>
            </div>
          ))}
        </RadioGroup>
        <div className="flex justify-between mt-6">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
          >
            {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
          </Button>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </CardContent>
    </Card>
  )
}

