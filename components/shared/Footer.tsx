import Link from 'next/link'
import { Droplet, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <Link href="/" className="flex items-center space-x-2 text-white mb-4">
              <Droplet size={32} />
              <span className="text-xl font-bold">WellSpring</span>
            </Link>
            <p className="text-gray-400">Nurturing minds, one day at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WellSpring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

