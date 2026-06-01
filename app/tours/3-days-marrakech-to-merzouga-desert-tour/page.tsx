import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3 Days Marrakech to Merzouga Desert Tour | Morocco Beyond',
  description: 'Experience the magic of the Sahara Desert on this 3-day luxury tour from Marrakech to Merzouga. Visit Ait Ben Haddou, Dades Gorges, and enjoy camel trekking.',
  openGraph: {
    title: '3 Days Marrakech to Merzouga Desert Tour | Morocco Beyond',
    description: 'Experience the magic of the Sahara Desert on this 3-day luxury tour from Marrakech to Merzouga. Visit Ait Ben Haddou, Dades Gorges, and enjoy camel trekking.',
  },
};

export default function ThreeDaysMarrakechMerzougaTour() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: '3 Days Marrakech to Merzouga Desert Tour',
    description: 'Experience the magic of the Sahara Desert on this 3-day luxury tour from Marrakech to Merzouga.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-amber-400">3 Days Marrakech to Merzouga Desert Tour</h1>
            <p className="text-xl text-gray-300">Experience the Magic of the Sahara</p>
          </div>
        </section>

        {/* Tour Overview */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-400">Tour Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Embark on an unforgettable 3-day journey from Marrakech to the stunning Merzouga Desert. This luxury tour takes you through the High Atlas Mountains, the UNESCO World Heritage site of Ait Ben Haddou, the dramatic Dades Gorges, and finally to the golden sand dunes of Erg Chebbi. Experience authentic Berber culture, enjoy a sunset camel trek, and spend a magical night under the stars in a luxury desert camp.
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
              <h3 className="text-2xl font-bold mb-3">Day 1: Marrakech to Ait Ben Haddou</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Depart Marrakech at 8:00 AM</li>
                <li>Cross the High Atlas Mountains via Tizi n'Tichka pass</li>
                <li>Visit the UNESCO World Heritage site of Ait Ben Haddou</li>
                <li>Lunch in a traditional Berber village</li>
                <li>Continue to Ouarzazate, the "Gateway to the Sahara"</li>
                <li>Overnight in a luxury riad in Ouarzazate</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 2: Ouarzazate to Merzouga Desert</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Breakfast at the riad</li>
                <li>Visit the Kasbah of Taourirt</li>
                <li>Drive through the Road of a Thousand Kasbahs</li>
                <li>Explore the dramatic Dades Gorges</li>
                <li>Visit Todra Gorge, a spectacular canyon</li>
                <li>Arrive at Merzouga in the afternoon</li>
                <li>Sunset camel trek into the Erg Chebbi dunes</li>
                <li>Overnight in a luxury desert camp with traditional dinner</li>
              </ul>
            </div>

            <div className="border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Day 3: Merzouga to Marrakech</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Wake up early for sunrise over the dunes</li>
                <li>Breakfast at the desert camp</li>
                <li>Camel trek back to Merzouga village</li>
                <li>Drive back through the Atlas Mountains</li>
                <li>Stop in Berber villages along the way</li>
                <li>Arrive in Marrakech in the evening</li>
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
              <p className="text-gray-300">The tour includes luxury accommodation, private transportation, English-speaking guide, all meals as specified, camel trek, and desert camp stay.</p>
            </div>

            <div className="bg-amber-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What is the best time to visit?</h3>
              <p className="text-gray-300">The best time to visit is from March to May and September to November when temperatures are pleasant for desert activities.</p>
            </div>

            <div className="bg-amber-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Is this tour suitable for families?</h3>
              <p className="text-gray-300">Yes, this tour is family-friendly and can be customized to accommodate children of all ages.</p>
            </div>

            <div className="bg-amber-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What should I pack?</h3>
              <p className="text-gray-300">We recommend comfortable clothing, sunscreen, hat, sunglasses, and warm layers for desert nights.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-amber-400">Ready to Experience the Sahara?</h2>
          <p className="text-lg text-gray-300 mb-8">Contact us to book your luxury desert adventure.</p>
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
