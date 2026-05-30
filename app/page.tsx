'use client';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060506]">
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />

        {/* HEADER / NAVBAR */}
        <header className="absolute inset-x-0 top-0 z-20 border-b border-white/5 bg-black/20 px-6 py-6 backdrop-blur-md sm:px-10 lg:px-14">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8">
            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-[0.5em] text-amber-400">Morocco Beyond</p>
              <h1 className="text-xl font-semibold tracking-tight text-white">Luxury Escapes</h1>
            </div>

            <nav className="hidden items-center gap-10 text-xs font-medium uppercase tracking-[0.25em] text-gray-300 lg:flex">
              <a href="#destinations" className="transition duration-300 hover:text-amber-300">
                Destinations
              </a>
              <a href="#experiences" className="transition duration-300 hover:text-amber-300">
                Experiences
              </a>
              <a href="#footer" className="transition duration-300 hover:text-amber-300">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1400px] items-center px-6 py-24 sm:px-10 lg:px-14">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-amber-500/10 px-6 py-3 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs uppercase tracking-[0.35em] text-amber-200">
                Curated Luxury Journeys
              </span>
            </div>

            <h2 className="mt-6 text-6xl font-bold leading-[1.1] text-white sm:text-7xl lg:text-8xl">
              Experience Morocco Elegantly
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-gray-100 sm:text-xl">
              Discover the heart of North Africa through curated luxury experiences. From vibrant medinas to endless desert dunes, explore with private guides, boutique stays, and unforgettable moments.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="#destinations"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-xl shadow-amber-500/30 transition duration-300 hover:shadow-amber-400/50 hover:shadow-2xl"
              >
                Explore Now
                <span className="transition duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#experiences"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition duration-300 hover:border-white/50 hover:bg-white/10"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section id="destinations" className="relative border-t border-white/5 bg-[#060506] px-6 py-32 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-400">Premium Destinations</p>
            <h2 className="text-5xl font-bold text-white sm:text-6xl">
              Morocco's Most Exclusive Escapes
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Handpicked locations offering unparalleled luxury and authentic cultural experiences
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* MARRAKECH CARD */}
            <article className="group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] shadow-2xl shadow-black/40 transition duration-500 hover:border-amber-400/30 hover:shadow-amber-900/20">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1200&auto=format&fit=crop"
                  alt="Marrakech"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-6 p-8">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Marrakech</p>
                  <h3 className="text-2xl font-bold text-white">City of Palaces</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Immerse yourself in luxury riads, vibrant souks, and world-class Moroccan cuisine in the red city.
                  </p>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Luxury Riads</span>
                    <span className="text-amber-300 font-semibold">From $420/night</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-block rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 transition duration-300 hover:bg-amber-400 hover:text-black"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </article>

            {/* SAHARA CARD */}
            <article className="group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] shadow-2xl shadow-black/40 transition duration-500 hover:border-amber-400/30 hover:shadow-amber-900/20">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547235001-d703406d3f17?q=80&w=1200&auto=format&fit=crop"
                  alt="Sahara Desert"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-6 p-8">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Sahara</p>
                  <h3 className="text-2xl font-bold text-white">Desert Glamping</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Sleep under infinite stars in private luxury desert camps with guided expeditions and gourmet dining.
                  </p>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Private Camps</span>
                    <span className="text-amber-300 font-semibold">From $580/night</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-block rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 transition duration-300 hover:bg-amber-400 hover:text-black"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </article>

            {/* CHEFCHAOUEN CARD */}
            <article className="group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] shadow-2xl shadow-black/40 transition duration-500 hover:border-amber-400/30 hover:shadow-amber-900/20">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop"
                  alt="Chefchaouen"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-6 p-8">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Chefchaouen</p>
                  <h3 className="text-2xl font-bold text-white">Blue Mountain Retreat</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Wander porcelain-blue streets, stay in mountain boutique hotels, and connect with local artisans.
                  </p>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Boutique Hotels</span>
                    <span className="text-amber-300 font-semibold">From $360/night</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-block rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 transition duration-300 hover:bg-amber-400 hover:text-black"
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
      <section id="experiences" className="relative border-t border-white/5 bg-gradient-to-b from-[#060506] to-[#0a0809] px-6 py-32 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-20 space-y-4 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-400">Exclusive Experiences</p>
            <h2 className="text-5xl font-bold text-white sm:text-6xl">
              Curated Luxury Moments
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Beyond destinations—immersive experiences designed for discerning travelers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* DESERT GLAMPING */}
            <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-500 hover:border-amber-400/40 hover:bg-white/5">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 transition duration-500 group-hover:scale-150" />

              <div className="relative space-y-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400/10 text-2xl">
                  🏜️
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Desert Glamping</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Experience the raw beauty of the Sahara with private luxury camps, guided camel treks, and sunset dinners under the stars.
                  </p>
                </div>

                <ul className="space-y-2 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Private tented camps
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Expert Bedouin guides
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Gourmet desert dining
                  </li>
                </ul>
              </div>
            </div>

            {/* PRIVATE RIADS */}
            <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-500 hover:border-amber-400/40 hover:bg-white/5">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 transition duration-500 group-hover:scale-150" />

              <div className="relative space-y-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400/10 text-2xl">
                  🏛️
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Private Riads</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Stay in exclusive restored riads with personal concierge service, rooftop lounges, and access to hidden medina gems.
                  </p>
                </div>

                <ul className="space-y-2 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Boutique riads only
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Personal concierge
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Spa & wellness
                  </li>
                </ul>
              </div>
            </div>

            {/* CULTURAL TOURS */}
            <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-500 hover:border-amber-400/40 hover:bg-white/5">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-amber-500/10 transition duration-500 group-hover:scale-150" />

              <div className="relative space-y-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-amber-400/10 text-2xl">
                  🎭
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">Cultural Tours</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    Engage with Morocco's rich heritage through private artisan workshops, local cuisine classes, and intimate cultural exchanges.
                  </p>
                </div>

                <ul className="space-y-2 border-t border-white/10 pt-6">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Private guides
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Artisan workshops
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
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
        className="relative border-t border-white/10 bg-gradient-to-b from-[#0a0809] to-black px-6 py-16 sm:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-4">
            {/* BRAND */}
            <div className="space-y-4">
              <div className="flex flex-col">
                <p className="text-xs uppercase tracking-[0.4em] text-amber-400">Morocco Beyond</p>
                <p className="text-sm text-gray-400">Luxury Travel Curated</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-500">
                Crafting unforgettable journeys through Morocco's most exclusive destinations.
              </p>
            </div>

            {/* DESTINATIONS */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
                Destinations
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#destinations"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300"
                  >
                    Marrakech
                  </a>
                </li>
                <li>
                  <a
                    href="#destinations"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300"
                  >
                    Sahara Desert
                  </a>
                </li>
                <li>
                  <a
                    href="#destinations"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300"
                  >
                    Chefchaouen
                  </a>
                </li>
              </ul>
            </div>

            {/* EXPERIENCES */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
                Experiences
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#experiences"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300"
                  >
                    Desert Glamping
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300"
                  >
                    Private Riads
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className="text-sm text-gray-400 transition duration-300 hover:text-amber-300"
                  >
                    Cultural Tours
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-white">
                Get in Touch
              </h4>
              <div className="space-y-3">
                <p className="text-sm text-gray-400">
                  <a
                    href="mailto:hello@moroccobyond.com"
                    className="transition duration-300 hover:text-amber-300"
                  >
                    hello@moroccobyond.com
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  <a href="tel:+1234567890" className="transition duration-300 hover:text-amber-300">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="mt-12 border-t border-white/5 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-center md:text-left">
            <p className="text-xs text-gray-500">
              © 2026 Morocco Beyond. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-6 md:justify-start">
              <a href="#" className="text-xs text-gray-500 transition hover:text-amber-300">
                Privacy
              </a>
              <a href="#" className="text-xs text-gray-500 transition hover:text-amber-300">
                Terms
              </a>
              <a href="#" className="text-xs text-gray-500 transition hover:text-amber-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
