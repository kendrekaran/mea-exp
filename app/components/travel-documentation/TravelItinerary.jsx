import { CalendarDays, MapPin, Hotel, Plane } from 'lucide-react';

const features = [
  {
    icon: CalendarDays,
    title: 'Day-by-day Planning',
    description: 'Detailed daily itineraries with locations, activities, and timings'
  },
  {
    icon: MapPin,
    title: 'Location Details',
    description: 'Specific tourist spots, attractions, and local destinations'
  },
  {
    icon: Hotel,
    title: 'Accommodation Info',
    description: 'Hotel names, addresses, and booking references'
  },
  {
    icon: Plane,
    title: 'Travel Logistics',
    description: 'Internal transfers and transportation details'
  }
];

const destinations = [
  "Schengen countries (France, Germany, Italy)",
  "UK, USA, Canada, Australia",
  "Singapore, Dubai, and other destinations"
];

export default function TravelItinerary() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-[#0A9DB2]">Verified Travel</span> Itineraries
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Get a professionally crafted travel itinerary that meets embassy standards and aligns with your visa purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-100 rounded-full p-3 mr-4">
                  <feature.icon className="w-6 h-6 text-[#0A9DB2]" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-6">Best for:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <span className="text-[#0A9DB2] mr-3">✈️</span>
                <span className="text-gray-700">{destination}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-lg font-semibold mb-4">You receive:</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-[#0A9DB2] mr-3">✓</span>
                <span className="text-gray-700">Embassy-accepted PDF itinerary</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#0A9DB2] mr-3">✓</span>
                <span className="text-gray-700">Hotel details, sightseeing plans, and internal transfers</span>
              </li>
              <li className="flex items-center">
                <span className="text-[#0A9DB2] mr-3">✓</span>
                <span className="text-gray-700">Tailored to fit your dummy tickets and visa purpose</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}