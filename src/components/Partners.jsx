import React from "react";

const partners = [
  {
    id: 1,
    name: "Urban Academy",
    logo: "https://edublink-react.vercel.app/assets/images/brand/brand-01.png",
  },
  {
    id: 2,
    name: "Creative Book",
    logo: "https://edublink-react.vercel.app/assets/images/brand/brand-02.png",
  },
  {
    id: 3,
    name: "Owl Book",
    logo: "https://edublink-react.vercel.app/assets/images/brand/brand-03.png",
  },
  {
    id: 4,
    name: "University",
    logo: "https://edublink-react.vercel.app/assets/images/brand/brand-04.png",
  },
  {
    id: 5,
    name: "Royal Academy",
    logo: "https://edublink-react.vercel.app/assets/images/brand/brand-05.png",
  },
  {
    id: 6,
    name: "Unity University",
    logo: "https://edublink-react.vercel.app/assets/images/brand/brand-06.png",
  },
  {
    id: 7,
    name: "Edu House",
    logo: "https://edublink-react.vercel.app/assets/images/brand/brand-07.png",
  },
  {
    id: 8,
    name: "State University",
    logo: "https://edublink-react.vercel.app/assets/images/brand/brand-08.png",
  },
];

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flexshrink-0 max-w-md">
            <span className="text-gray-500 font-semibold text-xs tracking-[0.2em] uppercase mb-4 block">
              OUR PARTNERS
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Learn with{" "}
              <span className="relative inline-block">
                Our
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,0 100,5 T200,5"
                    fill="none"
                    stroke="#1ab69d"
                    strokeWidth="3"
                  />
                </svg>
              </span>
              <br />
              Partners
            </h2>

            <p className="text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt.
            </p>
          </div>

          {/* Right - Partners Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.id}
                  className="bg-white border-2 border-gray-200 rounded-xl p-4 flex items-center justify-center  hover:shadow-lg transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-20 object-contain filter duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}