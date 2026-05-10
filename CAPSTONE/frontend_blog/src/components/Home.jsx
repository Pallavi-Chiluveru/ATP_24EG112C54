import React from 'react'
import { Link } from 'react-router'
import heroImg from '../assets/hero.png'

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-x-12">
            <div className="max-w-2xl lg:flex-auto">
              <div className="mb-8 flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-indigo-600 ring-1 ring-indigo-600/10 hover:ring-indigo-600/20">
                  New features just released.{' '}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl bg-gradient-to-r from-slate-900 to-indigo-800 bg-clip-text text-transparent">
                Share Your Stories with the World
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                A modern platform for thinkers, writers, and creators. Build your audience, share your knowledge, and connect with a community of passionate readers.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/register"
                  className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link to="/articles" className="text-sm font-semibold leading-6 text-slate-900 hover:text-indigo-600 transition-colors">
                  Explore Articles <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform duration-500">
                  <img
                    src={heroImg}
                    alt="Blog Hero"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply"></div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-4 -right-4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -left-4 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Write, Edit, and Publish with Ease
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="✍️"
              title="Rich Editor"
              description="A seamless writing experience with full markdown support and real-time preview."
            />
            <FeatureCard 
              icon="🚀"
              title="Fast Performance"
              description="Built with the latest technologies to ensure your blog loads instantly for every reader."
            />
            <FeatureCard 
              icon="🌍"
              title="Global Audience"
              description="Reach readers from all over the world with our optimized SEO and sharing tools."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your blogging journey?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-slate-300">
              Join thousands of creators who are already sharing their passion on our platform.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 transform hover:scale-105"
              >
                Sign Up Now
              </Link>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="#4f46e5" />
                  <stop offset="1" stopColor="#7c3aed" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 transition-transform">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}

export default Home