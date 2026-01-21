import React from "react";

export default function CourseInstructors() {
  const instructors = [
    {
      name: "Jane Seymour",
      role: "UI Designer",
      image: "https://edublink-react.vercel.app/assets/images/team/team-02/team-01.webp",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
      name: "Edward Norton",
      role: "Web Developer",
      image: "https://edublink-react.vercel.app/assets/images/team/team-02/team-02.webp",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
      name: "Penelope Cruz",
      role: "Digital Marketer",
      image: "https://edublink-react.vercel.app/assets/images/team/team-02/team-03.webp",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    }
  ];

  const stats = [
    { value: "29.3K", label: "STUDENT ENROLLED", color: "text-[#1ab69d]" },
    { value: "32.4K", label: "CLASS COMPLETED", color: "text-[#ee4a62]" },
    { value: "100%", label: "SATISFACTION RATE", color: "text-[#8e56ff]" },
    { value: "354%", label: "TOP INSTRUCTORS", color: "text-[#f8941f]" }
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-20 font-poppins">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-3">
            INSTRUCTORS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#181818]">
            Course Instructors
          </h2>
          <div className="w-20 h-1 bg-[#1ab69d] mx-auto mt-4"></div>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#181818] mb-2">
                  {instructor.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-3">
                  {instructor.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {instructor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </h3>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}