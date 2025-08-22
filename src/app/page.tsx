"use client";
import React from "react";
import Link from "next/link";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 font-sans min-h-screen">
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7v-2H4V4h16v12h-2v2h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 12h2v2H8zm4-4h2v2h-2zM8 8h2v2H8zm4 4h2v2h-2zm-4 4h2v2H8zm4-4h2v2h-2zm-4 4h2v2H8zm8 0h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"/>
            </svg>
            <span className="text-2xl font-extrabold text-gradient bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent select-none">
              Privacy-Translator
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">FAQ</a>
            <a href="https://x.com/tushar_nerd" target="_blank" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium">Connect</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center py-20 px-4 relative">
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200 via-white to-indigo-100"></div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4 drop-shadow-sm">
            Effortless Understanding,<br className="hidden md:inline" /> Instantly Realization.
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Do you also feel skeptical while accepting terms and conditions on a website you have never visited before? 
          </p>
          <Link
            id="main-cta"
            href="/translate"
            className="py-4 px-10 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-xl hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Start Translating, Now
          </Link>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[{
              title: "Input Your Text",
              desc: "Simply type or paste the terms and conditions you want to translate into the human readable form.",
            },{
              title: "Click on Translate ",
              desc: "You have to click on translate button to get results",
            },{
              title: "Get Instant Results",
              desc: "Our powerful AI translates the content instantly, displaying the result in seconds.",
            }].map((step, i) => (
              <div className="flex flex-col items-center" key={step.title}>
                <div className="bg-blue-200 text-blue-800 rounded-full h-16 w-16 flex items-center justify-center text-3xl font-black mb-4 shadow-md">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gradient-to-r from-white via-blue-100 to-white rounded-2xl shadow-xl mt-8 text-center">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Privacy-Translator is Absolutely Free</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Enjoy this powerful translator at no cost. 
          </p>
          <Link
            href="/translate"
            className="py-4 px-10 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-xl hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Start Translating Now
          </Link>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="font-semibold text-xl mb-2 text-gray-900">What languages do you support ?</h4>
                <p className="text-gray-600">We support over 100 languages, including major global languages and many regional dialects. We are constantly adding more!</p>
              </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="font-semibold text-xl mb-2 text-gray-900">How accurate is the translation?</h4>
                <p className="text-gray-600">Our translation engine is powered by a state-of-the-art AI model, providing highly accurate and context-aware translations for most use cases.</p>
              </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-20">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Ready to Break the commercial Language Barrier?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Join thousands of users who are using Privacy-Translator to know what they are getting into</p>
          <Link
            href="/translate"
            className="py-4 px-10 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-xl hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500 text-base">
          <p>&copy; {new Date().getFullYear()} Privacy-Translator. All rights reserved. </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
