import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can I contact a school directly?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eius mod ex tempor incididunt labore dolore magna aliquantenim ad minim eniam."
    },
    {
      question: "How do I find a school where I want to study?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eius mod ex tempor incididunt labore dolore magna aliquantenim ad minim eniam."
    },
    {
      question: "Where should I study abroad?",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eius mod ex tempor incididunt labore dolore magna aliquantenim ad minim eniam."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#e8f1f5] via-[#f5f9fa] to-[#e3f5f0] py-20 px-6 lg:px-20 font-urbanist overflow-hidden">
      <style>{`
        @keyframes float-circle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes dots-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes wave-move {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-circle {
          animation: float-circle 8s ease-in-out infinite;
        }
        .animate-dots-pulse {
          animation: dots-pulse 3s ease-in-out infinite;
        }
        .animate-wave-move {
          animation: wave-move 4s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
      
      {/* Animated Circle */}
      <div className="absolute top-[10%] right-[5%] w-44 h-44 border-[4px] border-[#ee4a62] rounded-full opacity-50 animate-float-circle" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)" }}></div>
      
      {/* Top Right Dots */}
      <div className="absolute top-[8%] right-[35%] grid grid-cols-6 gap-1.5 opacity-60 animate-dots-pulse">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1ab69d]"></div>
        ))}
      </div>

      {/* Bottom Right Dots */}
      <div className="absolute bottom-[18%] right-[20%] grid grid-cols-7 gap-1.5 opacity-60 animate-dots-pulse" style={{ animationDelay: '1s' }}>
        {[...Array(49)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ee4a62]"></div>
        ))}
      </div>

      {/* Wavy Lines */}
      <svg className="absolute bottom-[38%] left-[38%] w-20 h-20 opacity-50 animate-wave-move" viewBox="0 0 100 100">
        <path d="M10,50 Q30,30 50,50 T90,50" fill="none" stroke="#181818" strokeWidth="3.5"/>
        <path d="M10,65 Q30,45 50,65 T90,65" fill="none" stroke="#181818" strokeWidth="3.5"/>
        <path d="M10,80 Q30,60 50,80 T90,80" fill="none" stroke="#181818" strokeWidth="3.5"/>
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div>
          <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
            FAQ'S
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#181818] leading-tight mb-6">
            Learn Your Best Education Culture with{" "}
            <span className="relative inline-block">
              EduBlink
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
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt labore dolore magna.
          </p>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors duration-300 ${
                    openIndex === index ? "bg-[#1ab69d]" : "bg-white"
                  }`}
                >
                  <span
                    className={`font-medium text-base transition-colors duration-300 ${
                      openIndex === index ? "text-white" : "text-[#181818]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-all duration-300 ${
                      openIndex === index ? "rotate-180 text-white" : "text-[#1ab69d]"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 bg-white animate-fadeIn">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex flex-col items-start gap-6 pt-8">
          {/* Top Image */}
          <div className="relative z-20 ml-8">
            <img
              src="https://edublink-react.vercel.app/assets/images/faq/faq-05.jpg"
              alt="Student"
              className="rounded-3xl shadow-2xl w-60 h-82 object-cover"
            />
          </div>

          {/* Bottom Image */}
          <div className="relative z-10 self-end mr-8">
            <img
              src="	https://edublink-react.vercel.app/assets/images/banner/girl-6.jpg"
              alt="Student"
              className="rounded-3xl shadow-2xl w-72 h-80 object-cover"
            />
            
            {/* Wavy decoration near bottom image */}
            <div className="absolute -bottom-8 -left-12 z-0">
              <svg width="80" height="60" viewBox="0 0 80 60" className="opacity-60">
                <path d="M0,30 Q20,15 40,30 T80,30" stroke="#181818" strokeWidth="3" fill="none"/>
                <path d="M0,40 Q20,25 40,40 T80,40" stroke="#181818" strokeWidth="3" fill="none"/>
                <path d="M0,50 Q20,35 40,50 T80,50" stroke="#181818" strokeWidth="3" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}