import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  ClockIcon,
  ArrowLeftIcon,
  BeakerIcon,
  RocketLaunchIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
  title: 'Technology - Rattlesnake Systems',
  description: 'Discover Rattlesnake Systems advanced drone protection technology and counter-drone solutions for mission-critical asset defense.',
  keywords: 'drone protection technology, counter-drone systems, directed energy defense, UAV protection technology',
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-tactical-black text-white">
        <div className="absolute inset-0">
          <Image
            src="/technology-hero.jpg"
            alt="Military drone technology and defense systems"
            width={1920}
            height={1080}
            priority
            className="object-cover w-full h-full opacity-60"
          />
          <div className="absolute inset-0 bg-tactical-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advanced <span className="text-strike-orange">Defense Technology</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Cutting-edge drone protection systems engineered to defend against 
              directed energy weapons and ensure mission-critical asset survivability 
              in contested environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Request Technical Demo
              </Link>
              <a href="/specifications-pending.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-3xl transition-all duration-200 hover:bg-white hover:text-tactical-black min-w-[180px]">
                View Specifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Overview */}
      <section id="detailed-technology" className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tactical-black mb-4">
              Platform-Agnostic Protection Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our modular technology stack provides comprehensive threat detection, 
              real-time response, and autonomous protection capabilities for any UAV platform.
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

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-tactical-black mb-6">
                Military-Grade Drone Protection
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We engineer secure autonomous survivability systems that shield unmanned platforms from directed energy, electronic warfare, and next-gen threats — no operator required.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <EyeIcon className="w-8 h-8 text-strike-orange mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-tactical-black mb-3">Autonomous Threat Detection</h4>
                    <p className="text-gray-600">360° sensor coverage with real-time AI threat classification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <RocketLaunchIcon className="w-8 h-8 text-strike-orange mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-tactical-black mb-3">Instant Countermeasures</h4>
                    <p className="text-gray-600">Sub-millisecond response to lasers, jammers, and signal disruption</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BeakerIcon className="w-8 h-8 text-strike-orange mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-tactical-black mb-3">Field-Proven Resilience</h4>
                    <p className="text-gray-600">Tested for performance in GPS-denied and contested environments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ClockIcon className="w-8 h-8 text-strike-orange mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-tactical-black mb-3">Always-On Defense</h4>
                    <p className="text-gray-600">Continuous protection across missions, day or night</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/tech-research.jpg"
                alt="Cybersecurity technology and digital protection systems"
                width={800}
                height={600}
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration and Deployment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/tech-development.jpg"
                alt="Military communication systems and command center technology"
                width={800}
                height={600}
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-tactical-black mb-6">
                Command & Control Integration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Seamless integration with existing command and control systems, providing 
                real-time situational awareness and centralized threat management.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-strike-orange pl-4">
                  <h4 className="font-bold text-tactical-black mb-2">System Architecture</h4>
                  <p className="text-gray-600">Modular design enables rapid deployment across diverse platforms and environments</p>
                </div>
                <div className="border-l-4 border-strike-orange pl-4">
                  <h4 className="font-bold text-tactical-black mb-2">Data Analytics</h4>
                  <p className="text-gray-600">Advanced analytics provide actionable intelligence and predictive threat assessment</p>
                </div>
                <div className="border-l-4 border-strike-orange pl-4">
                  <h4 className="font-bold text-tactical-black mb-2">Mission Planning</h4>
                  <p className="text-gray-600">Integration with mission planning systems ensures optimal protection coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tactical-black text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Deploy Advanced Protection?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our technical team to discuss your specific requirements and 
            schedule a demonstration of our cutting-edge defense technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Technical Demo
            </Link>
            <a href="mailto:greg@rattlesnakesystems.com" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-3xl transition-all duration-200 hover:bg-white hover:text-tactical-black min-w-[200px]">
              Speak with Engineering
            </a>
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