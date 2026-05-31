'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toursVisible, setToursVisible] = useState(false);
  const toursRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setToursVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (toursRef.current) {
      observer.observe(toursRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <main className="min-h-screen overflow-hidden bg-[#060506]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover saturate-[0.85]"
        >
          <source src="/videos/hero.mp4.mp4" type="video/mp4" />
        </video>

        {/* Dark linear-gradient overlay for cinematic premium atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

        {/* HEADER / NAVBAR */}
        <header className={`absolute inset-x-0 top-0 z-20 px-6 py-7 transition-all duration-300 sm:px-10 lg:px-14 ${isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8">
            <div className="flex flex-col space-y-1">
              <p className="text-[10px] uppercase tracking-[0.35em] font-semibold text-gray-200">Morocco Beyond</p>
              <h1 className="text-sm font-medium tracking-[0.15em] text-white uppercase">Luxury Escapes</h1>
            </div>

            <nav className="hidden items-center gap-16 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-100 lg:flex">
              <a href="#destinations" className="relative group transition duration-300 hover:text-gray-300 px-2 py-1">
                Destinations
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#experiences" className="relative group transition duration-300 hover:text-gray-300 px-2 py-1">
                Experiences
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#footer" className="relative group transition duration-300 hover:text-gray-300 px-2 py-1">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300" />
              </a>
            </nav>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 sm:px-10 lg:px-14">
          <div className="w-full max-w-2xl space-y-8 py-24">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 backdrop-blur-sm transition duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-200">
                Curated Luxury Journeys
              </span>
            </div>

            <h2 className="text-5xl font-black leading-[1.18] text-white sm:text-6xl drop-shadow-lg">
              Experience Morocco Elegantly
            </h2>

            {/* Moroccan-inspired decorative divider */}
            <div className="flex items-center gap-3 pt-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
              <div className="flex gap-1">
                <div className="h-2 w-2 rotate-45 border border-[#D4AF37]" />
                <div className="h-2 w-2 rotate-45 border border-[#D4AF37]" />
                <div className="h-2 w-2 rotate-45 border border-[#D4AF37]" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base font-light uppercase tracking-[0.15em]">
              Discover the heart of North Africa through curated luxury experiences. From vibrant medinas to endless desert dunes, explore with private guides, boutique stays, and unforgettable moments.
            </p>

            <div className="flex flex-col gap-5 sm:flex-row pt-8">
              <a
                href="#tours"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F4C430] px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-2xl shadow-amber-500/60 transition duration-300 hover:shadow-amber-400/80 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                Explore Now
                <span className="transition duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-sm border border-white/30 bg-transparent px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm transition duration-300 hover:border-white/50 hover:bg-white/5"
              >
                Discover More
              </a>
            </div>

            <div className="pt-6">
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g304017-d34251819-Reviews-Find_Your_Morocco-Merzouga_Draa_Tafilalet.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/50"
              >
                <span className="text-[#D4AF37]">⭐</span>
                <span>Rated Excellent on Tripadvisor</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TOURS SECTION */}
      <section id="tours" ref={toursRef} className={`relative border-t border-white/10 bg-[#060506] px-6 py-32 sm:px-10 lg:px-14 transition-all duration-1000 ${toursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-200">Featured Tours</span>
            </div>
            <h2 className="text-5xl font-black text-white sm:text-6xl lg:text-7xl drop-shadow-xl">
              Premium Morocco Tours
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-200 leading-relaxed uppercase tracking-[0.15em]">
              Curated itineraries designed for discerning travelers seeking authentic luxury experiences.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* 3 DAYS MARRAKECH TO MERZOUGA TOUR */}
            <article className={`group flex flex-col overflow-hidden rounded-sm border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] shadow-xl shadow-black/50 transition-all duration-700 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1 ${toursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: toursVisible ? '0ms' : '0ms' }}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/marrakesh.jpg"
                  alt="3 Days Marrakech to Merzouga"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute top-4 right-4 rounded-sm bg-[#D4AF37]/90 px-3 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">3 Days</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">Marrakech to Merzouga</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Desert camp stay</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Camel trek</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Ait Ben Haddou</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
                >
                  View Itinerary
                  <span className="transition duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>

            {/* 4 DAYS MARRAKECH TO MERZOUGA TOUR */}
            <article className={`group flex flex-col overflow-hidden rounded-sm border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] shadow-xl shadow-black/50 transition-all duration-700 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1 ${toursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: toursVisible ? '150ms' : '0ms' }}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/sahara.jpg"
                  alt="4 Days Marrakech to Merzouga"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute top-4 right-4 rounded-sm bg-[#D4AF37]/90 px-3 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">4 Days</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">Marrakech to Merzouga</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Luxury desert camp</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Sunset camel trek</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Dades Valley</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
                >
                  View Itinerary
                  <span className="transition duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>

            {/* 10 DAYS MOROCCO TOUR FROM CASABLANCA */}
            <article className={`group flex flex-col overflow-hidden rounded-sm border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] shadow-xl shadow-black/50 transition-all duration-700 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1 ${toursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: toursVisible ? '300ms' : '0ms' }}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/chefchaouen.jpg"
                  alt="10 Days Morocco Tour"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute top-4 right-4 rounded-sm bg-[#D4AF37]/90 px-3 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">10 Days</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">Morocco from Casablanca</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Chefchaouen blue city</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Fes medina</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Sahara desert</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
                >
                  View Itinerary
                  <span className="transition duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>

            {/* 14 DAYS MOROCCO GRAND TOUR */}
            <article className={`group flex flex-col overflow-hidden rounded-sm border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] shadow-xl shadow-black/50 transition-all duration-700 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-1 ${toursVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: toursVisible ? '450ms' : '0ms' }}>
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/atlas.jpg"
                  alt="14 Days Morocco Grand Tour"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute top-4 right-4 rounded-sm bg-[#D4AF37]/90 px-3 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">14 Days</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">Morocco Grand Tour</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>All major cities</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Atlas Mountains</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-300">
                      <span className="text-[#D4AF37]">✓</span>
                      <span>Complete Morocco</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
                >
                  View Itinerary
                  <span className="transition duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="relative border-t border-white/10 bg-[#060506] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-200">Trusted Excellence</span>
            </div>
            <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl drop-shadow-xl">
              Trusted by Travelers Worldwide
            </h2>
            <div className="flex items-center gap-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#D4AF37] text-3xl">★</span>
              ))}
            </div>
            <p className="max-w-2xl text-sm text-gray-200 leading-relaxed uppercase tracking-[0.15em]">
              Rated Excellent on Tripadvisor by hundreds of satisfied travelers who experienced Morocco with us.
            </p>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g304017-d34251819-Reviews-Find_Your_Morocco-Merzouga_Draa_Tafilalet.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F4C430] px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-2xl shadow-amber-500/60 transition duration-300 hover:shadow-amber-400/80 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Read Reviews on Tripadvisor
              <span className="transition duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT/INQUIRY SECTION */}
      <section id="contact" className="relative border-t border-white/10 bg-[#060506] px-6 py-32 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gray-200">Get In Touch</span>
            </div>
            <h2 className="text-5xl font-black text-white sm:text-6xl lg:text-7xl drop-shadow-xl">
              Start Planning Your Morocco Journey
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-200 leading-relaxed uppercase tracking-[0.15em]">
              Tell us about your dream Morocco experience and our travel experts will create a personalized itinerary just for you.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-sm border border-white/15 bg-white/5 px-5 py-4 text-sm text-white placeholder-gray-500 transition duration-300 focus:border-[#D4AF37]/50 focus:bg-white/10 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-sm border border-white/15 bg-white/5 px-5 py-4 text-sm text-white placeholder-gray-500 transition duration-300 focus:border-[#D4AF37]/50 focus:bg-white/10 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="w-full rounded-sm border border-white/15 bg-white/5 px-5 py-4 text-sm text-white placeholder-gray-500 transition duration-300 focus:border-[#D4AF37]/50 focus:bg-white/10 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Tour Interested In</label>
                  <select className="w-full rounded-sm border border-white/15 bg-white/5 px-5 py-4 text-sm text-white transition duration-300 focus:border-[#D4AF37]/50 focus:bg-white/10 focus:outline-none">
                    <option value="" className="bg-[#060506]">Select a tour</option>
                    <option value="3-days" className="bg-[#060506]">3 Days Marrakech to Merzouga</option>
                    <option value="4-days" className="bg-[#060506]">4 Days Marrakech to Merzouga</option>
                    <option value="10-days" className="bg-[#060506]">10 Days Morocco Tour from Casablanca</option>
                    <option value="14-days" className="bg-[#060506]">14 Days Morocco Grand Tour</option>
                    <option value="custom" className="bg-[#060506]">Custom Tour</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Travel Dates</label>
                  <input
                    type="text"
                    placeholder="Flexible or specific dates"
                    className="w-full rounded-sm border border-white/15 bg-white/5 px-5 py-4 text-sm text-white placeholder-gray-500 transition duration-300 focus:border-[#D4AF37]/50 focus:bg-white/10 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Number of Travelers</label>
                  <select className="w-full rounded-sm border border-white/15 bg-white/5 px-5 py-4 text-sm text-white transition duration-300 focus:border-[#D4AF37]/50 focus:bg-white/10 focus:outline-none">
                    <option value="" className="bg-[#060506]">Select number</option>
                    <option value="1" className="bg-[#060506]">1 Traveler</option>
                    <option value="2" className="bg-[#060506]">2 Travelers</option>
                    <option value="3-4" className="bg-[#060506]">3-4 Travelers</option>
                    <option value="5-6" className="bg-[#060506]">5-6 Travelers</option>
                    <option value="7+" className="bg-[#060506]">7+ Travelers</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream Morocco experience..."
                  className="w-full rounded-sm border border-white/15 bg-white/5 px-5 py-4 text-sm text-white placeholder-gray-500 transition duration-300 focus:border-[#D4AF37]/50 focus:bg-white/10 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F4C430] px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-2xl shadow-amber-500/60 transition duration-300 hover:shadow-amber-400/80 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                Send Inquiry
                <span className="transition duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        className="relative border-t border-white/10 bg-gradient-to-b from-[#0a0809] to-black px-6 py-20 sm:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            {/* BRAND */}
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <p className="text-xs uppercase tracking-[0.5em] font-semibold text-amber-400">Morocco Beyond</p>
                <p className="text-sm font-light text-gray-400">Luxury Travel Curated</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-500 font-light">
                Crafting unforgettable journeys through Morocco's most exclusive destinations.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" title="Instagram" className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 transition duration-300 hover:border-amber-400 hover:bg-amber-500/20 hover:scale-110">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/></svg>
                </a>
                <a href="#" title="Facebook" className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 transition duration-300 hover:border-amber-400 hover:bg-amber-500/20 hover:scale-110">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" title="Twitter" className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 transition duration-300 hover:border-amber-400 hover:bg-amber-500/20 hover:scale-110">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.999-10z"/></svg>
                </a>
              </div>
            </div>

            {/* DESTINATIONS */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
                Destinations
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#destinations"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300 font-light"
                  >
                    Marrakech
                  </a>
                </li>
                <li>
                  <a
                    href="#destinations"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300 font-light"
                  >
                    Sahara Desert
                  </a>
                </li>
                <li>
                  <a
                    href="#destinations"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300 font-light"
                  >
                    Chefchaouen
                  </a>
                </li>
              </ul>
            </div>

            {/* EXPERIENCES */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
                Experiences
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#experiences"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300 font-light"
                  >
                    Desert Glamping
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300 font-light"
                  >
                    Private Riads
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300 font-light"
                  >
                    Cultural Tours
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-400/70 mb-2 font-semibold">Email</p>
                  <a
                    href="mailto:hello@moroccobyond.com"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300 font-light"
                  >
                    hello@moroccobyond.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-400/70 mb-2 font-semibold">Phone</p>
                  <a href="tel:+1234567890" className="text-sm text-gray-400 transition duration-300 hover:text-amber-300 font-light">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-white/10 pt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-600 font-light">
              © 2026 Morocco Beyond. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-8 md:justify-start">
              <a href="#" className="text-xs text-gray-500 transition duration-300 hover:text-amber-300 font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 transition duration-300 hover:text-amber-300 font-light">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 transition duration-300 hover:text-amber-300 font-light">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
