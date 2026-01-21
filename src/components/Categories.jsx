import React from "react";

const categories = [
  { 
    name: "Management", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ), 
    color: "text-[#1ab69d]", 
    bg: "bg-[#e8f8f5]" 
  },
  { 
    name: "Arts & Design", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    ), 
    color: "text-[#ee4a62]", 
    bg: "bg-[#fef0f2]" 
  },
  { 
    name: "Development", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ), 
    color: "text-[#5866eb]", 
    bg: "bg-[#eeeffd]" 
  },
  { 
    name: "Health & Fitness", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ), 
    color: "text-[#f8b81f]", 
    bg: "bg-[#fef9ed]" 
  },
  { 
    name: "Data Science", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ), 
    color: "text-[#9d5ce9]", 
    bg: "bg-[#f6f1fd]" 
  },
  { 
    name: "Data Science", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ), 
    color: "text-[#d946ef]", 
    bg: "bg-[#fdf4ff]" 
  },
  { 
    name: "Marketing", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-5v12L3 14v-3z"/>
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
      </svg>
    ), 
    color: "text-[#54d4f5]", 
    bg: "bg-[#ecfbfe]" 
  },
  { 
    name: "Computer Science", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ), 
    color: "text-[#f472b6]", 
    bg: "bg-[#fef2f8]" 
  },
  { 
    name: "Photography", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ), 
    color: "text-[#1ab69d]", 
    bg: "bg-[#e8f8f5]" 
  },
  { 
    name: "Music Class", 
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ), 
    color: "text-[#fbbf24]", 
    bg: "bg-[#fffbeb]" 
  },
];

export default function Categories() {
  return (
    <section className="py-20 bggradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#ee4a62] font-semibold text-xs tracking-[0.2em] uppercase mb-4 block">
            CATEGORIES
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Online{" "}
            <span className="text-[#1ab69d]">
              Classes
            </span>{" "}
            <span className="relative inline-block">
              For
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
            </span>{" "}
            Remote Learning.
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Consectetur adipiscing elit sed do eiusmod tempor.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
            >
              <div
                className={`w-16 h-16 ${cat.bg} ${cat.color} rounded-full flex items-center justify-center mx-auto mb-5 hover:scale-110 transition-transform duration-300 cursor-pointer`}
              >
                {cat.icon}
              </div>

              <h3 className="font-bold text-gray-800 text-base">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}