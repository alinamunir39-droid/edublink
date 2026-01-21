import React from 'react';

export default function NewsAndCertificateSection() {
  const articles = [
    {
      id: 1,
      date: { day: '10', month: 'JAN' },
      category: 'ONLINE',
      title: 'Eco-Education in Our Lives: We Can Change the Future',
      description: 'Lorem ipsum dolor sit amet consectetur elit adipiscing sed eiusmod tempor incidi labore dolore.',
      author: 'Edward',
      comments: 18,
      image: 'https://edublink-react.vercel.app/assets/images/blog/blog-04.jpg',
      featured: true
    }
  ];

  const sideArticles = [
    {
      id: 2,
      date: { day: '10', month: 'SEP' },
      category: 'LECTURE',
      title: "Qualification for Students' Satisfaction Rate",
      author: 'Edward',
      comments: 14,
      image: 'https://edublink-react.vercel.app/assets/images/blog/blog-01.jpg'
    },
    {
      id: 3,
      date: { day: '18', month: 'SEP' },
      category: 'LECTURE',
      title: 'Instructional Design and Adult Learners',
      author: 'Edward',
      comments: 5,
      image: 'https://edublink-react.vercel.app/assets/images/blog/blog-02.jpg'
    },
    {
      id: 4,
      date: { day: '25', month: 'SEP' },
      category: 'LECTURE',
      title: 'Join ATD 2021 International Conference & EXPO',
      author: 'Edward',
      comments: 18,
      image: 'https://edublink-react.vercel.app/assets/images/blog/blog-03.jpg'
    }
  ];

  // SVG Icons
  const UserIcon = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );

  const MessageIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );

  return (
    <div className="bg-gray-50 py-16 px-4">
      {/* News Section */}
      <div className="max-w-6xl mx-auto mb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm font-semibold tracking-wider uppercase mb-2">
            LATEST ARTICLES
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get News with EduBlink
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-teal-500"></div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article - Left Side */}
          <div>
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-6 left-6 bg-teal-500 text-white w-16 h-20 flex flex-col items-center justify-center rounded-lg shadow-lg">
                    <span className="text-2xl font-bold">{article.date.day}</span>
                    <span className="text-xs font-semibold">{article.date.month}</span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-3">
                    {article.category}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-gray-500 transition-colors duration-300 cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {article.description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <UserIcon />
                      <span>By {article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageIcon />
                      <span>Com {article.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side Articles - Right Side */}
          <div className="space-y-5">
            {sideArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group flex">
                <div className="relative overflow-hidden w-40 flex-shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Date Badge */}
                  <div className="absolute bottom-3 right-3 bg-teal-500 text-white w-12 h-14 flex flex-col items-center justify-center rounded-lg shadow-lg">
                    <span className="text-lg font-bold">{article.date.day}</span>
                    <span className="text-xs font-semibold">{article.date.month}</span>
                  </div>
                </div>

                <div className="p-4 flex-1">
                  <p className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">
                    {article.category}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-3 hover:text-teal-500 transition-colors duration-300 cursor-pointer leading-tight">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <UserIcon />
                      <span>By {article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageIcon />
                      <span>Com {article.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="relative py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
        <style>{`
          @keyframes wave {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(10px, -10px) rotate(5deg); }
            66% { transform: translate(-10px, 10px) rotate(-5deg); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes dots-fade {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          .wave-line-1 { animation: wave 3s ease-in-out infinite; }
          .wave-line-2 { animation: wave 3s ease-in-out 0.3s infinite; }
          .wave-line-3 { animation: wave 3s ease-in-out 0.6s infinite; }
          .wave-line-4 { animation: wave 3s ease-in-out 0.9s infinite; }
          .float-circle { animation: float 6s ease-in-out infinite; }
          .pulse-circle-1 { animation: pulse-slow 4s ease-in-out infinite; }
          .pulse-circle-2 { animation: pulse-slow 4s ease-in-out 2s infinite; }
          .dots-animate { animation: dots-fade 2s ease-in-out infinite; }
        `}</style>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 float-circle">
          <div className="relative">
            {/* Wavy lines with animation */}
            <svg width="120" height="80" viewBox="0 0 120 80" className="text-teal-400 opacity-60">
              <path className="wave-line-1" d="M0,20 Q15,5 30,20 T60,20 T90,20 T120,20" stroke="currentColor" strokeWidth="2.5" fill="none"/>
              <path className="wave-line-2" d="M0,35 Q15,20 30,35 T60,35 T90,35 T120,35" stroke="currentColor" strokeWidth="2.5" fill="none"/>
              <path className="wave-line-3" d="M0,50 Q15,35 30,50 T60,50 T90,50 T120,50" stroke="currentColor" strokeWidth="2.5" fill="none"/>
              <path className="wave-line-4" d="M0,65 Q15,50 30,65 T60,65 T90,65 T120,65" stroke="currentColor" strokeWidth="2.5" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Right side decorative circles and dots */}
        <div className="absolute top-16 right-20">
          <div className="relative w-36 h-36 float-circle">
            {/* Outer circle */}
            <div className="absolute inset-0 border-4 border-pink-300 rounded-full opacity-40 pulse-circle-1"></div>
            {/* Inner circle */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border-4 border-pink-400 rounded-full opacity-50 pulse-circle-2"></div>
            {/* Center dots grid */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-6 gap-1.5 dots-animate">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Get Your Quality Skills{' '}
            <span className="text-teal-500">Certificate</span>
            <br />
            Through EduBlink
          </h2>
          
          <button className="bg-gradient-to-r from-red-400 to-red-400 text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group">
            Get started now
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRightIcon />
            </span>
          </button>
        </div>

        {/* Bottom left decorative dots */}
        <div className="absolute bottom-10 left-32 float-circle">
          <div className="grid grid-cols-7 gap-1 dots-animate">
            {[...Array(35)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-teal-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}