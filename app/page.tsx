export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/90" />

        <header className="absolute inset-x-0 top-0 z-20 px-6 py-6 sm:px-10 lg:px-14">
          <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-amber-300">Morocco Beyond</p>
              <h1 className="text-2xl font-semibold text-white">Luxury Travel Collection</h1>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.24em] text-gray-200 md:flex">
              <a href="#destinations" className="transition hover:text-white">Destinations</a>
              <a href="#experiences" className="transition hover:text-white">Experiences</a>
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1300px] items-center px-6 py-24 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-amber-300/30 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-amber-200 shadow-lg shadow-amber-900/20">
              Curated journeys
            </span>

            <h2 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Escape to Morocco with elegance and authenticity.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200 sm:text-xl">
              Explore ancient medinas, desert oases, and coastal blue cities with private guides, boutique hotels, and seamless luxury service.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#destinations"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-lg shadow-amber-500/20 transition hover:scale-[1.02]"
              >
                Explore Destinations
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/15"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="relative bg-[#08070b] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1300px]">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-300">Top Destinations</p>
            <h3 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Handpicked escapes across Morocco.
            </h3>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-black/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1200&auto=format&fit=crop"
                  alt="Marrakech"
                  className="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-28 text-white">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200">Marrakech</p>
                  <h4 className="mt-3 text-3xl font-semibold">City of Palaces</h4>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-7 text-gray-300">
                  Stay in luxury riads, dine in exclusive restaurants, and discover the red city's hidden charms.
                </p>
                <div className="flex items-center justify-between text-sm text-amber-200">
                  <span>Private riads</span>
                  <span>From $420 / night</span>
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-black/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1547235001-d703406d3f17?q=80&w=1200&auto=format&fit=crop"
                  alt="Sahara Desert"
                  className="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-28 text-white">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200">Sahara</p>
                  <h4 className="mt-3 text-3xl font-semibold">Desert Retreats</h4>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-7 text-gray-300">
                  Sleep beneath the stars with private tents, guided dunes, and authentic cultural evenings.
                </p>
                <div className="flex items-center justify-between text-sm text-amber-200">
                  <span>Private camps</span>
                  <span>From $580 / night</span>
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-black/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577147444367-01856d151af1?q=80&w=1200&auto=format&fit=crop"
                  alt="Chefchaouen"
                  className="h-72 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-28 text-white">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-200">Chefchaouen</p>
                  <h4 className="mt-3 text-3xl font-semibold">Blue Serenity</h4>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-7 text-gray-300">
                  Wander the blue streets, enjoy boutique coastal hotels, and savor local traditions.
                </p>
                <div className="flex items-center justify-between text-sm text-amber-200">
                  <span>Coastal charm</span>
                  <span>From $360 / night</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
