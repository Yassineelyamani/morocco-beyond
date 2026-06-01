import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Morocco Beyond | Private Morocco Tours',
  description: 'Learn about Morocco Beyond and our mission to create unforgettable private travel experiences across Morocco, from Marrakech to the Sahara Desert.',
  openGraph: {
    title: 'About Morocco Beyond | Private Morocco Tours',
    description: 'Learn about Morocco Beyond and our mission to create unforgettable private travel experiences across Morocco, from Marrakech to the Sahara Desert.',
    type: 'website',
    url: 'https://morocco-beyond.vercel.app/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Morocco Beyond | Private Morocco Tours',
    description: 'Learn about Morocco Beyond and our mission to create unforgettable private travel experiences across Morocco.',
  },
  alternates: {
    canonical: 'https://morocco-beyond.vercel.app/about',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Morocco Beyond',
  description: 'Private and authentic Moroccan journeys designed for travelers seeking culture, adventure, comfort, and unforgettable memories.',
  url: 'https://morocco-beyond.vercel.app',
  logo: 'https://morocco-beyond.vercel.app/logo.png',
  sameAs: [
    'https://www.tripadvisor.com/Attraction_Review-g304017-d34251819-Reviews-Find_Your_Morocco-Merzouga_Draa_Tafilalet.html',
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#060506] text-white">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-b from-amber-900/20 to-[#060506]">
          <div className="absolute inset-0">
            <Image
              src="/images/about-morocco-beyond.jpg"
              alt="Morocco Beyond - Premium Morocco Tours"
              fill
              className="object-cover opacity-30"
              priority
              sizes="100vw"
              quality={90}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#060506]" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-400">
              Discover Morocco Beyond The Ordinary
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Private and authentic Moroccan journeys designed for travelers seeking culture, adventure, comfort, and unforgettable memories.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Our Story</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mb-8" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about-morocco-beyond.jpg"
                alt="Morocco Beyond - Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Morocco Beyond was created to help international travelers discover the true beauty of Morocco through carefully crafted private tours, local expertise, and authentic cultural experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We believe that the best way to experience Morocco is through authentic travel experiences that go beyond the typical tourist trail. Our personalized itineraries are designed to connect travelers with the heart of Morocco, from the vibrant medinas of Marrakech to the golden dunes of the Sahara Desert.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With deep local knowledge and a passion for sharing our culture, we ensure every journey is comfortable, convenient, and filled with meaningful cultural connections that create lasting memories.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Morocco Beyond */}
        <section className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-b from-transparent to-amber-900/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Why Choose Morocco Beyond</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/15 rounded-lg p-8 shadow-xl hover:border-amber-400/50 transition duration-300">
              <div className="text-amber-400 text-4xl mb-4">✦</div>
              <h3 className="text-xl font-bold mb-3 text-white">Personalized Itineraries</h3>
              <p className="text-gray-300 leading-relaxed">
                Every journey is tailored to each traveler's interests, schedule, and travel style.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/15 rounded-lg p-8 shadow-xl hover:border-amber-400/50 transition duration-300">
              <div className="text-amber-400 text-4xl mb-4">✦</div>
              <h3 className="text-xl font-bold mb-3 text-white">Authentic Experiences</h3>
              <p className="text-gray-300 leading-relaxed">
                Discover Morocco beyond the tourist trail through local culture, traditions, and hidden gems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/15 rounded-lg p-8 shadow-xl hover:border-amber-400/50 transition duration-300">
              <div className="text-amber-400 text-4xl mb-4">✦</div>
              <h3 className="text-xl font-bold mb-3 text-white">Trusted Local Experts</h3>
              <p className="text-gray-300 leading-relaxed">
                Travel with experienced local drivers and guides who know Morocco inside and out.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/8 to-white/[0.02] border border-white/15 rounded-lg p-8 shadow-xl hover:border-amber-400/50 transition duration-300">
              <div className="text-amber-400 text-4xl mb-4">✦</div>
              <h3 className="text-xl font-bold mb-3 text-white">Seamless Travel Planning</h3>
              <p className="text-gray-300 leading-relaxed">
                From arrival to departure, every detail is carefully managed for your peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Morocco At A Glance */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Morocco At A Glance</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-400/30 rounded-lg">
              <div className="text-5xl font-bold text-amber-400 mb-2">100%</div>
              <p className="text-gray-300 uppercase tracking-wider text-sm">Private Tours</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-400/30 rounded-lg">
              <div className="text-5xl font-bold text-amber-400 mb-2">15+</div>
              <p className="text-gray-300 uppercase tracking-wider text-sm">Top Destinations</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-400/30 rounded-lg">
              <div className="text-5xl font-bold text-amber-400 mb-2">10+</div>
              <p className="text-gray-300 uppercase tracking-wider text-sm">Years Experience</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-400/30 rounded-lg">
              <div className="text-5xl font-bold text-amber-400 mb-2">24/7</div>
              <p className="text-gray-300 uppercase tracking-wider text-sm">Personalized Service</p>
            </div>
          </div>
        </section>

        {/* Destinations We Love */}
        <section className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-b from-transparent to-amber-900/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Destinations We Love</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg border border-white/15 shadow-xl">
              <div className="relative h-64 bg-[url('/images/marrakesh.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Marrakech</h3>
                <p className="text-gray-300 text-sm">The Red City with vibrant souks, palaces, and gardens.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-white/15 shadow-xl">
              <div className="relative h-64 bg-[url('/images/sahara.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sahara Desert</h3>
                <p className="text-gray-300 text-sm">Golden dunes, starlit nights, and unforgettable camel treks.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-white/15 shadow-xl">
              <div className="relative h-64 bg-[url('/images/fes.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Fes</h3>
                <p className="text-gray-300 text-sm">Ancient medina, historic madrasas, and traditional crafts.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-white/15 shadow-xl">
              <div className="relative h-64 bg-[url('/images/chefchaouen.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Chefchaouen</h3>
                <p className="text-gray-300 text-sm">The Blue City with charming streets and mountain views.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-white/15 shadow-xl">
              <div className="relative h-64 bg-[url('/images/atlas.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Atlas Mountains</h3>
                <p className="text-gray-300 text-sm">Majestic peaks, Berber villages, and scenic valleys.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-white/15 shadow-xl">
              <div className="relative h-64 bg-[url('/images/casablanca.jpg')] bg-cover bg-center transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Casablanca</h3>
                <p className="text-gray-300 text-sm">Modern metropolis with stunning architecture and coastal charm.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-400">Our Promise</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-12" />
          <blockquote className="text-2xl md:text-3xl text-gray-200 leading-relaxed italic">
            "We believe every journey should be personal, meaningful, and unforgettable. Our mission is to create authentic Moroccan experiences that leave lasting memories and connect travelers with the heart of Morocco."
          </blockquote>
        </section>

        {/* Call To Action */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center bg-gradient-to-b from-transparent to-amber-900/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Start Planning Your Morocco Adventure</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let us create a tailor-made Moroccan experience designed around your interests and travel goals.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-2xl shadow-amber-500/60 transition duration-300 hover:shadow-amber-400/80 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Contact Us
            <span className="transition duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </section>
      </main>
    </>
  );
}
