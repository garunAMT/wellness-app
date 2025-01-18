import Link from 'next/link'
import { Droplet } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-blue-600">
          <Droplet size={32} />
          <span className="text-xl font-bold">WellSpring</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {/* <li><Link href="#features" className="text-gray-600 hover:text-blue-600">Features</Link></li>
            <li><Link href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link></li> */}
            <li><Link href="/questionnaire" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

