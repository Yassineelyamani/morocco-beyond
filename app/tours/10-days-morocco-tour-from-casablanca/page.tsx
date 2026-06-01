import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '10 Days Morocco Tour from Casablanca | Morocco Beyond',
  description: 'Comprehensive 10-day luxury Morocco tour from Casablanca. Explore Casablanca, Rabat, Chefchaouen, Fes, Merzouga Desert, Marrakech, and more with private guides.',
  openGraph: {
    title: '10 Days Morocco Tour from Casablanca | Morocco Beyond',
    description: 'Comprehensive 10-day luxury Morocco tour from Casablanca. Explore Casablanca, Rabat, Chefchaouen, Fes, Merzouga Desert, Marrakech, and more with private guides.',
  },
};

export default function TenDaysMoroccoTourCasablanca() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: '10 Days Morocco Tour from Casablanca',
    description: 'Comprehensive 10-day luxury Morocco tour from Casablanca exploring the best of Morocco.',
    touristType: 'Luxury Traveler',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Contact for pricing',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#060506] text-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-b from-amber-900/20 to-[#060506]">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-amber-400">10 Days Morocco Tour from Casablanca</h1>
            <p className="text-xl text-gray-300">Complete Morocco Experience</p>
          </div>
        </section>

        {/* Tour Overview */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-400">Tour Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Experience the best of Morocco on this comprehensive 10-day luxury tour starting from Casablanca. From the modern metropolis of Casablanca to the blue streets of Chefchaouen, the ancient medina of Fes, the golden dunes of Merzouga, and the vibrant city of Marrakech, this tour covers all of Morocco's highlights. Enjoy luxury accommodation, private guides, and authentic cultural experiences throughout your journey.
          </p>
          <Link href="/" className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 rounded-lg transition">
            Book This Tour
          </Link>
        </section>

        {/* Detailed Itinerary */}
        <section className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-b from-transparent to-amber-900/10">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">Detailed Itinerary</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 1: Arrival in Casablanca</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Airport pickup and transfer to hotel</li>
                <li>Visit the magnificent Hassan II Mosque</li>
                <li>Explore the Corniche and city center</li>
                <li>Welcome dinner at a local restaurant</li>
                <li>Overnight in luxury hotel in Casablanca</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 2: Casablanca to Rabat</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Breakfast at the hotel</li>
                <li>Drive to Rabat, the capital of Morocco</li>
                <li>Visit the Hassan Tower and Mausoleum of Mohammed V</li>
                <li>Explore the Kasbah of the Udayas</li>
                <li>Visit Chellah Necropolis</li>
                <li>Overnight in luxury hotel in Rabat</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 3: Rabat to Chefchaouen</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Breakfast at the hotel</li>
                <li>Drive through the Rif Mountains to Chefchaouen</li>
                <li>Arrive in the famous "Blue City"</li>
                <li>Explore the picturesque blue-washed streets</li>
                <li>Visit the Kasbah and Outa el Hammam square</li>
                <li>Overnight in a traditional riad in Chefchaouen</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 4: Chefchaouen to Fes</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Breakfast at the riad</li>
                <li>Morning exploration of Chefchaouen</li>
                <li>Drive to Fes through the countryside</li>
                <li>Arrive in the imperial city of Fes</li>
                <li>Overnight in a luxury riad in Fes</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 5: Full Day in Fes</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Breakfast at the riad</li>
                <li>Guided tour of the ancient medina</li>
                <li>Visit the Bou Inania Madrasa</li>
                <li>Explore the famous tanneries</li>
                <li>Visit the Royal Palace and Jewish Quarter</li>
                <li>Traditional Moroccan dinner</li>
                <li>Overnight in Fes</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 6: Fes to Merzouga Desert</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Breakfast at the riad</li>
                <li>Drive through the Middle Atlas Mountains</li>
                <li>Stop in Ifrane, known as "Little Switzerland"</li>
                <li>Visit the cedar forests of Azrou</li>
                <li>Continue to Merzouga through the Ziz Valley</li>
                <li>Sunset camel trek into the Erg Chebbi dunes</li>
                <li>Overnight in a luxury desert camp</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 7: Merzouga to Ouarzazate</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Sunrise over the dunes</li>
                <li>Breakfast at the desert camp</li>
                <li>Camel trek back to Merzouga</li>
                <li>Drive through the Dades Valley</li>
                <li>Visit the Dades Gorges</li>
                <li>Continue to Ouarzazate</li>
                <li>Overnight in a luxury riad in Ouarzazate</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 8: Ouarzazate to Marrakech</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Breakfast at the riad</li>
                <li>Visit Ait Ben Haddou UNESCO site</li>
                <li>Cross the High Atlas Mountains via Tizi n'Tichka</li>
                <li>Arrive in Marrakech in the afternoon</li>
                <li>Overnight in a luxury riad in Marrakech</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 9: Full Day in Marrakech</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Breakfast at the riad</li>
                <li>Visit the Koutoubia Mosque</li>
                <li>Explore Bahia Palace and Saadian Tombs</li>
                <li>Visit the Majorelle Gardens</li>
                <li>Explore the vibrant souks of the medina</li>
                <li>Traditional dinner at Jemaa el-Fna square</li>
                <li>Overnight in Marrakech</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 10: Departure</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Breakfast at the riad</li>
                <li>Transfer to Marrakech airport</li>
                <li>Departure assistance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-amber-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What is included in the tour?</h3>
              <p className="text-gray-300">The tour includes luxury accommodation, private transportation, English-speaking guides, all meals as specified, entrance fees to monuments, and airport transfers.</p>
            </div>

            <div className="bg-amber-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What is the best time to visit?</h3>
              <p className="text-gray-300">The best time to visit is from March to May and September to November when temperatures are pleasant throughout the country.</p>
            </div>

            <div className="bg-amber-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Is this tour suitable for families?</h3>
              <p className="text-gray-300">Yes, this tour is family-friendly and can be customized to accommodate children of all ages.</p>
            </div>

            <div className="bg-amber-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What should I pack?</h3>
              <p className="text-gray-300">We recommend comfortable clothing, sunscreen, hat, sunglasses, and warm layers for desert and mountain regions.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-400">Ready to Explore Morocco?</h2>
          <p className="text-lg text-gray-300 mb-8">Contact us to book your comprehensive Morocco adventure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 rounded-lg transition">
              Book This Tour
            </Link>
            <Link href="/" className="inline-block border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black font-bold px-8 py-3 rounded-lg transition">
              Return to Homepage
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
