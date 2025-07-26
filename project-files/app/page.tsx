import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  PhoneIcon, 
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import Navigation from './components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-tactical-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero-drone.jpg"
            alt="Advanced military drone technology and defense systems"
            width={1920}
            height={1080}
            priority
            className="object-cover w-full h-full opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tactical-black via-tactical-black/80 to-gray-900/80"></div>
        </div>
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Strike First. <span className="text-strike-orange">Defend Always.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Advanced drone protection systems for mission-critical asset survivability 
              against directed energy weapons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request Demo
              </Link>
              <Link href="/technology" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-3xl transition-all duration-200 hover:bg-white hover:text-tactical-black min-w-[150px]">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tactical-black mb-4">
              Next-Generation Defense Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our modular, platform-agnostic solutions provide real-time threat response 
              and autonomous protection for your most critical assets.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="w-20 h-20 bg-strike-orange rounded-full flex items-center justify-center mx-auto mb-8">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-tactical-black mb-6">
                Drone Survivability Solutions
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Integrated systems to protect unmanned platforms against directed energy, electronic warfare, and emerging threats in contested environments.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <ul className="text-sm text-gray-500 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-strike-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Autonomous threat detection & response</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-strike-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Directed energy mitigation (laser, RF, microwave)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-strike-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Modular, platform-agnostic protection pods</span>
                  </li>
                </ul>
                <ul className="text-sm text-gray-500 space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-strike-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Thermal, RF, and visual signature reduction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-strike-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Seamless integration with commercial & tactical UAVs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-strike-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Field-upgradable for evolving mission sets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Critical Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-tactical-black mb-6">
                Mission-Critical Asset Protection
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In contested environments, drone survivability is paramount. Our solutions 
                address the growing threat of directed energy weapons that can disable or 
                destroy friendly UAVs without detection.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-strike-orange rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <strong>Survivability Enhancement:</strong> Protect against invisible laser threats
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-strike-orange rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <strong>Modular Design:</strong> Platform-agnostic integration for any UAV system
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-strike-orange rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <strong>Real-time Response:</strong> Autonomous threat detection and countermeasures
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/security-features.jpg"
                alt="Advanced radar defense systems and military technology"
                width={800}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tactical-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Advanced Defense Technology Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-tactical-black mb-6">
            Innovation from the lone star state
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We build high-performance hardware and mission-critical systems designed for real-world impact. From advanced drone protection systems to counter drone technology, our solutions are engineered for resilience, power, and control. Born in the American Southwest, and built to strike fast- Rattlesnake Systems delivers the bite behind the next generation of innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-strike-orange mb-2">Patent Pending</div>
              <p className="text-gray-600">Autonomous Protection System</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-strike-orange mb-2">2023</div>
              <p className="text-gray-600">Founded in Texas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-strike-orange mb-2">24/7</div>
              <p className="text-gray-600">Mission-Ready Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-tactical-black text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Enhance Your Mission Survivability?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a demonstration or discuss your specific 
            drone protection requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary">
              Request Demo
            </Link>
            <a href="tel:281-508-4454" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-3xl transition-all duration-200 hover:bg-white hover:text-tactical-black min-w-[140px]">
              Call Now
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <EnvelopeIcon className="w-8 h-8 text-strike-orange mb-2" />
              <p className="text-gray-300">greg@rattlesnakesystems.com</p>
            </div>
            <div className="flex flex-col items-center">
              <PhoneIcon className="w-8 h-8 text-strike-orange mb-2" />
              <p className="text-gray-300">281-508-4454</p>
            </div>
            <div className="flex flex-col items-center">
              <ClockIcon className="w-8 h-8 text-strike-orange mb-2" />
              <p className="text-gray-300">M-F 10AM-11PM CST</p>
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