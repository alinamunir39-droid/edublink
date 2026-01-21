import React from "react";

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600;700;800&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes dots-move {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5px, -5px); }
          50% { transform: translate(-5px, 5px); }
          75% { transform: translate(5px, 5px); }
        }
        @keyframes blob-move {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-dots {
          animation: dots-move 4s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob-move 10s ease-in-out infinite;
        }
        .gradient-bg {
          background: linear-gradient(-45deg, #f0f9ff, #fef3f7, #f0fdf4, #faf5ff);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>

      {/* Sidebar Icon */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center bg-white shadow-[-4px_0_15px_rgba(0,0,0,0.1)] rounded-l-2xl p-3 gap-2 border border-gray-100">
        <div className="w-10 h-10 flex items-center justify-center bg-[#ee4a62] text-white rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M3 12h2.25m.386-6.364 1.591-1.591M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
          </svg>
        </div>
        <span className="text-[11px] font-semibold text-[#181818] uppercase tracking-widest [writing-mode:vertical-lr] py-2">
          Dark
        </span>
      </div>

      <section className="relative overflow-hidden gradient-bg py-20 px-6 lg:px-20 min-h-[85vh] flex items-center">
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-[10%] left-[8%] animate-dots opacity-50">
          <div className="grid grid-cols-6 gap-1.5">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="absolute top-[8%] right-[15%] animate-dots opacity-60">
          <div className="grid grid-cols-6 gap-1.5">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="absolute top-[25%] left-[15%] w-20 h-20 bg-orange-300 rounded-full opacity-40 animate-blob"></div>
        
        <div className="absolute bottom-[35%] right-[20%] w-4 h-4 bg-pink-400 rounded-full animate-float-slow"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
          
          {/* Left Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-16 h-16 opacity-40 animate-float">
                <svg viewBox="0 0 100 100" className="text-teal-400">
                  <path d="M20,50 Q30,30 50,50 T80,50" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <path d="M20,60 Q30,40 50,60 T80,60" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <path d="M20,70 Q30,50 50,70 T80,70" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              
              <img 
                src="https://edublink-react.vercel.app/assets/images/banner/girl-4.jpg" 
                className="rounded-3xl shadow-2xl w-[280px] lg:w-[320px] relative z-10" 
                alt="Student"
              />
              
              <div className="absolute -bottom-6 -left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-float-slow">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M10,30 L20,20 L30,25 L40,15 L50,20 L60,10 L70,15 L80,5 L90,10" 
                          stroke="#1ab69d" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <circle cx="20" cy="20" r="3" fill="#1ab69d"/>
                    <circle cx="40" cy="15" r="3" fill="#1ab69d"/>
                    <circle cx="60" cy="10" r="3" fill="#1ab69d"/>
                    <circle cx="80" cy="5" r="3" fill="#1ab69d"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-pink-500 font-bold uppercase tracking-wider">ONLINE SUPPORT</p>
                  <p className="font-extrabold text-[#181818] text-sm">+012 (345) 6789</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center px-4">
            <h1 
              className="text-[40px] md:text-[50px] lg:text-[58px] font-[800] text-[#181818] leading-[1.15] mb-5 tracking-tight"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              The Best Program to<br />Enroll for Exchange
            </h1>
            <p className="text-gray-600 text-base mb-7 max-w-md mx-auto leading-relaxed">
              Excepteur sint occaecat cupidatat non proident sunt in<br />culpa qui officia deserunt mollit.
            </p>
            <button className="bg-[#1ab69d] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#181818] transition-all shadow-lg flex items-center gap-2 mx-auto hover:scale-105 transform">
              Find courses 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Right Images */}
          <div className="relative flex flex-col items-end -gap-4">
            <div className="relative self-end">
              <div className="absolute -top-6 -right-6 w-16 h-16 opacity-30 rotate-90 animate-float">
                <svg viewBox="0 0 100 100" className="text-pink-400">
                  <path d="M20,50 Q30,30 50,50 T80,50" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <path d="M20,60 Q30,40 50,60 T80,60" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              
              <img 
                src="https://edublink-react.vercel.app/assets/images/banner/girl-5.jpg" 
                className="rounded-3xl shadow-xl w-[220px] lg:w-[240px] relative z-10" 
                alt="Student 2"
              />
            </div>
            
            <div className="relative self-start -ml-8 -mt-8">
              <img 
                src="	https://edublink-react.vercel.app/assets/images/banner/girl-6.jpg" 
                className="rounded-3xl shadow-xl w-[200px] lg:w-[220px] relative z-10" 
                alt="Student 3"
              />
            </div>
          </div>

        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#1ab69d] animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </section>
    </>
  );
}