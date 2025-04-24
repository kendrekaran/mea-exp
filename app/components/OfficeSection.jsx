import Image from "next/image";

export default function OfficeSection() {
  const cardHeight = 400; // Define a constant height for all cards
  const imageHeight = 200;

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Our Offices Section */}
      <div className="mt-12 mb-16">
        <div className="text-center mb-24">
          <h2 className="text-xl poppins-medium mb-2">Our Offices</h2>
          <h1 className="text-5xl poppins-medium mb-4">
            <span className="text-black">Explore Our </span>
            <span className="text-[#0A9DB2]">Office </span>
          </h1>
        </div>

        {/* Unified Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* New Delhi Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
            <div className="h-[200px] relative">
              <Image
                src="https://i.pinimg.com/474x/d6/db/05/d6db054449ae5515da69a959d2d14704.jpg?height=200&width=400"
                alt="New Delhi Office"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">New Delhi</h3>
              <p className="text-gray-600 mb-1">+ 91 7878868595</p>
              <p className="text-gray-600 mb-4">info@meaexpert.com</p>
              <p className="text-gray-500 text-sm mt-auto">
                MB-03, A-Block Naurang House K.G.
                <br />
                Marg Connaught Place New Delhi
                -110001
              </p>
            </div>
          </div>

          {/* Haryana Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
            <div className="h-[200px] relative">
              <Image
                src="https://i.pinimg.com/474x/3c/3d/10/3c3d10029c38098b94966a62a3cfa3a0.jpg?height=200&width=400"
                alt="Gujrat Office"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Haryana</h3>
              <p className="text-gray-600 mb-1">+ 91 8178636828, + 91 7503760950</p>
              <p className="text-gray-600 mb-4">info@meaexpert.com</p>
              <p className="text-gray-500 text-sm mt-auto">
                Surya nagar sector 91, Faridabad
                <br />
                Sco market sector 84 Dwarka expressway, Gurugram
              </p>
            </div>
          </div>

          {/* Others Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
            <div className="h-[200px] relative">
              <Image
                src="https://i.pinimg.com/474x/01/b3/21/01b3211f103f49432f273bb72ca7b99d.jpg?height=200&width=400"
                alt="Gurgaon Office"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Bangalore</h3>
              <p className="text-gray-600 mb-1">+ 91 9319333405</p>
              <p className="text-gray-600 mb-4">info@meaexpert.com</p>
              <p className="text-gray-500 text-sm mt-auto">
              Kundalahalli Colony Above Ramdev Medicals,
              <br />
              7th Cross Kundalahalli Colony, Bangalore -560037
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

