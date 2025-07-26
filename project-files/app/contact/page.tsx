import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  PhoneIcon, 
  EnvelopeIcon,
  MapPinIcon,
  ArrowLeftIcon,
  UserGroupIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Contact - Rattlesnake Systems',
  description: 'Get in touch with Rattlesnake Systems for advanced drone protection technology solutions. Located in The Woodlands, Texas.',
  keywords: 'contact rattlesnake systems, drone protection contact, counter-drone technology inquiries',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-tactical-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/contact-hero.jpg"
            alt="Professional business meeting and team collaboration"
            width={1920}
            height={1080}
            priority
            className="object-cover w-full h-full opacity-40"
          />
          <div className="absolute inset-0 bg-tactical-black bg-opacity-60"></div>
        </div>
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Connect with Our <span className="text-strike-orange">Defense Experts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Ready to enhance your mission-critical asset protection? Our technical team 
              is standing by to discuss your specific requirements and demonstrate our 
              cutting-edge drone protection technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="btn-primary">
                Request Demo
              </a>
              <a href="tel:281-508-4454" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-3xl transition-all duration-200 hover:bg-white hover:text-tactical-black min-w-[200px]">
                Call Now: 281-508-4454
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tactical-black mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need a technical demonstration, have specific requirements, 
              or want to discuss integration possibilities, we&apos;re here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-strike-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-tactical-black mb-4">
                Direct Phone
              </h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our engineering team for immediate technical support and consultation.
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-tactical-black">281-508-4454</p>
                <p className="text-gray-500 text-sm">Available M-F 10AM-11PM CST</p>
              </div>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-strike-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-tactical-black mb-4">
                Email Contact
              </h3>
              <p className="text-gray-600 mb-4">
                Reach out via email for detailed technical specifications, proposals, and documentation.
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-tactical-black">greg@rattlesnakesystems.com</p>
                <p className="text-gray-500 text-sm">Response within 24 hours</p>
              </div>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-strike-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-tactical-black mb-4">
                Headquarters
              </h3>
              <p className="text-gray-600 mb-4">
                Located in The Woodlands, Texas, serving defense contractors nationwide and internationally.
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-tactical-black">The Woodlands, Texas</p>
                <p className="text-gray-500 text-sm">Founded 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-tactical-black mb-6">
                Request Technical Demonstration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete the form below to schedule a personalized demonstration of our 
                drone protection technology. Our technical team will contact you within 24 hours 
                to discuss your specific requirements.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strike-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strike-orange focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strike-orange focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/Company *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strike-orange focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strike-orange focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strike-orange focus:border-transparent"
                  >
                    <option value="">Select your primary interest</option>
                    <option value="drone-protection">Drone Protection Pod</option>
                    <option value="counter-drone">Counter-Drone Technology</option>
                    <option value="directed-energy">Directed Energy Defense</option>
                    <option value="integration">System Integration</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Please describe your project requirements, timeline, and any specific technical needs..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-strike-orange focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                >
                  Request Demonstration
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/contactus.webp"
                  alt="Professional team collaboration and technical consultation"
                  width={800}
                  height={600}
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-tactical-black mb-4">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CalendarIcon className="w-6 h-6 text-strike-orange mt-1" />
                    <div>
                      <h4 className="font-semibold text-tactical-black">Initial Consultation</h4>
                      <p className="text-sm text-gray-600">30-minute technical discussion of your requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-strike-orange mt-1" />
                    <div>
                      <h4 className="font-semibold text-tactical-black">Custom Demonstration</h4>
                      <p className="text-sm text-gray-600">Tailored demo focused on your specific use case</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <UserGroupIcon className="w-6 h-6 text-strike-orange mt-1" />
                    <div>
                      <h4 className="font-semibold text-tactical-black">Technical Support</h4>
                      <p className="text-sm text-gray-600">Ongoing engineering support throughout evaluation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Rattlesnake Systems</h3>
              <p className="text-gray-400 mb-4">
                Advanced drone protection and counter-drone technology for mission-critical 
                asset survivability.
              </p>
              <p className="text-sm text-gray-500">
                The Woodlands, Texas | Founded 2023
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>greg@rattlesnakesystems.com</p>
                <p>281-508-4454</p>
                <p>M-F 10AM-11PM CST</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="https://www.linkedin.com/company/rattlesnake-systems1/" className="text-gray-400 hover:text-white block">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/rattlesnakesystems" className="text-gray-400 hover:text-white block">
                  Instagram
                </a>
                <a href="https://www.crunchbase.com/organization/rattlesnake-systems" className="text-gray-400 hover:text-white block">
                  Crunchbase
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 Rattlesnake Systems. All rights reserved. Patent pending technology.</p>
            <p className="mt-2">
              Defense Technology Website made with 💚 by{' '}
              <a href="https://gmgwebdesign.com" target="_blank" rel="noopener noreferrer" className="text-strike-orange hover:text-white">
                Gator Media Group
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 