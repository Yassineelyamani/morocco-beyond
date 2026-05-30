'use client';

export default function Home() {
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
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Subtle premium overlay for text readability - 20% opacity */}
        <div className="absolute inset-0 bg-black/20" />

        {/* HEADER / NAVBAR */}
        <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-gradient-to-b from-black/40 to-transparent px-6 py-7 backdrop-blur-2xl sm:px-10 lg:px-14">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8">
            <div className="flex flex-col space-y-1.5">
              <p className="text-xs uppercase tracking-[0.6em] font-semibold text-amber-400 drop-shadow-lg">Morocco Beyond</p>
              <h1 className="text-xl font-bold tracking-tight text-white">Luxury Escapes</h1>
            </div>

            <nav className="hidden items-center gap-12 text-xs font-semibold uppercase tracking-[0.3em] text-gray-100 lg:flex">
              <a href="#destinations" className="relative group transition duration-300 hover:text-amber-300 px-2 py-1">
                Destinations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#experiences" className="relative group transition duration-300 hover:text-amber-300 px-2 py-1">
                Experiences
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#footer" className="relative group transition duration-300 hover:text-amber-300 px-2 py-1">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 group-hover:w-full transition-all duration-300" />
              </a>
            </nav>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 sm:px-10 lg:px-14">
          <div className="w-full max-w-2xl space-y-8 py-24">
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/70 bg-amber-500/30 px-7 py-4 backdrop-blur-xl shadow-lg shadow-amber-900/50 hover:shadow-amber-500/50 transition duration-500">
              <div className="h-2.5 w-2.5 rounded-full bg-amber-300 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.4em] font-semibold text-amber-50">
                Curated Luxury Journeys
              </span>
            </div>

            <h2 className="text-5xl font-black leading-[1.18] text-white sm:text-6xl drop-shadow-lg">
              Experience Morocco Elegantly
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-gray-50 sm:text-lg font-light">
              Discover the heart of North Africa through curated luxury experiences. From vibrant medinas to endless desert dunes, explore with private guides, boutique stays, and unforgettable moments.
            </p>

            <div className="flex flex-col gap-5 sm:flex-row pt-8">
              <a
                href="#destinations"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-2xl shadow-amber-500/60 transition duration-300 hover:shadow-amber-400/80 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                Explore Now
                <span className="transition duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#experiences"
                className="group inline-flex items-center justify-center rounded-lg border-2 border-white/60 bg-white/15 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition duration-300 hover:border-white/80 hover:bg-white/25 hover:shadow-xl hover:shadow-white/20"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section id="destinations" className="relative border-t border-white/10 bg-[#060506] px-6 py-32 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/15 px-5 py-3">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-300">✓ Premium Destinations</span>
            </div>
            <h2 className="text-5xl font-black text-white sm:text-6xl lg:text-7xl drop-shadow-xl">
              Morocco's Most Exclusive Escapes
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-300 leading-relaxed">
              Handpicked locations offering unparalleled luxury and authentic cultural experiences curated for discerning travelers.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* MARRAKECH CARD */}
            <article className="group flex flex-col overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] shadow-2xl shadow-black/50 transition-all duration-700 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-900/30 hover:scale-105">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1200&auto=format&fit=crop"
                  alt="Marrakech"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-6 p-10">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-300">Marrakech</p>
                  <h3 className="text-3xl font-bold text-white">City of Palaces</h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Immerse yourself in luxury riads, vibrant souks, and world-class Moroccan cuisine in the red city.
                  </p>
                </div>

                <div className="space-y-4 border-t border-white/15 pt-6">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span className="font-medium">Luxury Riads</span>
                    <span className="text-amber-300 font-bold">From $420/night</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-block rounded-lg bg-amber-500/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 border border-amber-400/30 transition duration-300 hover:bg-amber-400 hover:text-black hover:border-amber-400"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </article>

            {/* SAHARA CARD */}
            <article className="group flex flex-col overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] shadow-2xl shadow-black/50 transition-all duration-700 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-900/30 hover:scale-105">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547235001-d703406d3f17?q=80&w=1200&auto=format&fit=crop"
                  alt="Sahara Desert"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-6 p-10">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-300">Sahara</p>
                  <h3 className="text-3xl font-bold text-white">Desert Glamping</h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Sleep under infinite stars in private luxury desert camps with guided expeditions and gourmet dining.
                  </p>
                </div>

                <div className="space-y-4 border-t border-white/15 pt-6">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span className="font-medium">Private Camps</span>
                    <span className="text-amber-300 font-bold">From $580/night</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-block rounded-lg bg-amber-500/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 border border-amber-400/30 transition duration-300 hover:bg-amber-400 hover:text-black hover:border-amber-400"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </article>

            {/* CHEFCHAOUEN CARD */}
            <article className="group flex flex-col overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] shadow-2xl shadow-black/50 transition-all duration-700 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-900/30 hover:scale-105">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop"
                  alt="Chefchaouen"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-6 p-10">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-300">Chefchaouen</p>
                  <h3 className="text-3xl font-bold text-white">Blue Mountain Retreat</h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Wander porcelain-blue streets, stay in mountain boutique hotels, and connect with local artisans.
                  </p>
                </div>

                <div className="space-y-4 border-t border-white/15 pt-6">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span className="font-medium">Boutique Hotels</span>
                    <span className="text-amber-300 font-bold">From $360/night</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-block rounded-lg bg-amber-500/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 border border-amber-400/30 transition duration-300 hover:bg-amber-400 hover:text-black hover:border-amber-400"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* LUXURY EXPERIENCES SECTION */}
      <section id="experiences" className="relative border-t border-white/10 bg-gradient-to-b from-[#060506] to-[#0a0809] px-6 py-32 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/15 px-5 py-3">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-amber-300">✨ Exclusive Experiences</span>
            </div>
            <h2 className="text-5xl font-black text-white sm:text-6xl lg:text-7xl drop-shadow-xl">
              Curated Luxury Moments
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-300 leading-relaxed">
              Beyond destinations—immersive experiences designed for discerning travelers seeking authentic connection
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* DESERT GLAMPING */}
            <div className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] p-10 backdrop-blur-xl transition-all duration-500 hover:border-amber-400/50 hover:bg-white/8 hover:shadow-2xl hover:shadow-amber-900/20">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/15 transition duration-500 group-hover:scale-150" />

              <div className="relative space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/30 text-3xl">
                  🏜️
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Desert Glamping</h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Experience the raw beauty of the Sahara with private luxury camps, guided camel treks, and sunset dinners under the stars.
                  </p>
                </div>

                <ul className="space-y-3 border-t border-white/15 pt-6">
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                    Private tented camps
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                    Expert Bedouin guides
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                    Gourmet desert dining
                  </li>
                </ul>
              </div>
            </div>

            {/* PRIVATE RIADS */}
            <div className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] p-10 backdrop-blur-xl transition-all duration-500 hover:border-amber-400/50 hover:bg-white/8 hover:shadow-2xl hover:shadow-amber-900/20">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/15 transition duration-500 group-hover:scale-150" />

              <div className="relative space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/30 text-3xl">
                  🏛️
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Private Riads</h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Stay in exclusive restored riads with personal concierge service, rooftop lounges, and access to hidden medina gems.
                  </p>
                </div>

                <ul className="space-y-3 border-t border-white/15 pt-6">
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                    Boutique riads only
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                    Personal concierge
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                    Spa & wellness
                  </li>
                </ul>
              </div>
            </div>

            {/* CULTURAL TOURS */}
            <div className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-br from-white/8 to-white/[0.02] p-10 backdrop-blur-xl transition-all duration-500 hover:border-amber-400/50 hover:bg-white/8 hover:shadow-2xl hover:shadow-amber-900/20">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/15 transition duration-500 group-hover:scale-150" />

              <div className="relative space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-400/30 text-3xl">
                  🎭
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Cultural Tours</h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Engage with Morocco's rich heritage through private artisan workshops, local cuisine classes, and intimate cultural exchanges.
                  </p>
                </div>

                <ul className="space-y-3 border-t border-white/15 pt-6">
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                    Private guides
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                    Artisan workshops
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300" />
                    Culinary experiences
                  </li>
                </ul>
              </div>
            </div>
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
