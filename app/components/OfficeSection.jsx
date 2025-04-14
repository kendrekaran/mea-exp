import Image from "next/image";

export default function OfficeSection() {
  const cardHeight = 400; // Define a constant height for all cards
  const imageHeight = 200;

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Our Offices Section */}
      <div className="mt-24 mb-16">
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
                src="/office1.svg?height=200&width=400"
                alt="New Delhi Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">New Delhi</h3>
              <p className="text-gray-600 mb-1">+ 91 7878868595</p>
              <p className="text-gray-600 mb-4">contact@meaexpert.com</p>
              <p className="text-gray-500 text-sm mt-auto">
                MB-03, A-Block Naurang House K.G.
                <br />
                Marg Connaught Place New Delhi
                <br />
                -110001
              </p>
            </div>
          </div>

          {/* Gujrat Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
            <div className="h-[200px] relative">
              <Image
                src="/office1.svg?height=200&width=400"
                alt="Gujrat Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Gujrat</h3>
              <p className="text-gray-600 mb-1">+ 91 7878868595</p>
              <p className="text-gray-600 mb-4">contact@meaexpert.com</p>
              <p className="text-gray-500 text-sm mt-auto">
                MB-03, A-Block Naurang House K.G.
                <br />
                Marg Connaught Place New Delhi
                <br />
                -110001
              </p>
            </div>
          </div>

          {/* Gurgaon Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
            <div className="h-[200px] relative">
              <Image
                src="/office1.svg?height=200&width=400"
                alt="Gurgaon Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Gurgaon</h3>
              <p className="text-gray-600 mb-1">+ 91 7878868595</p>
              <p className="text-gray-600 mb-4">contact@meaexpert.com</p>
              <p className="text-gray-500 text-sm mt-auto">
                MB-03, A-Block Naurang House K.G.
                <br />
                Marg Connaught Place New Delhi
                <br />
                -110001
              </p>
            </div>
          </div>


          {/* Banglore Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
             <div className="h-[200px] relative">
              <Image
                src="/office1.svg?height=200&width=400"
                alt="Banglore Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Banglore</h3>
              <p className="text-gray-600 mb-1">+ 91 7878868595</p>
              <p className="text-gray-600 mb-4">contact@meaexpert.com</p>
              <p className="text-gray-500 text-sm mt-auto">
                MB-03, A-Block Naurang House K.G.
                <br />
                Marg Connaught Place New Delhi
                <br />
                -110001
              </p>
            </div>
          </div>

          {/* Haryana Office Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
            <div className="h-[200px] relative">
              <Image
                src="/office1.svg?height=200&width=400"
                alt="Haryana Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Haryana Office</h3>
              <p className="text-gray-600 mb-1">+ 91 7878868595</p>
              <p className="text-gray-600 mb-4">contact@meaexpert.com</p>
              <p className="text-gray-500 text-sm mt-auto">
                MB-03, A-Block Naurang House K.G.
                <br />
                Marg Connaught Place New Delhi
                <br />
                -110001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

