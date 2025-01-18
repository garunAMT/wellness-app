import QuestionnaireForm from '@/components/shared/QuestionnaireForm'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export default function QuestionnairePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Mental Wellness Questionnaire</h1>
        <QuestionnaireForm />
      </main>
      <Footer />
    </div>
  )
}