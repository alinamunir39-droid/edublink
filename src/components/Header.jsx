import React from "react";

export default function Header() {
  return (
    <header className="w-full font-urbanist">
      
      <div className="bg-[#181818] text-gray-300 px-4 md:px-12 py-2 hidden md:flex justify-between items-center text-sm font-light">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 group cursor-pointer">
            <span className="text-[#1ab69d] ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </span> 
            <span className="group-hover:text-[#8c9694] transition-colors">Call: 123 4561 5523</span>
          </span>

          <span className="flex items-center gap-2 group cursor-pointer">
            <span className="text-[#1ab69d]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </span> 
            <span className="group-hover:text-[#758885] transition-colors">Email: info@edublink.com</span>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <button className="hover:text-[#667e7a] transition cursor-pointer">Login</button>
          <span className="text-gray-700">|</span>
          <button className="hover:text-[#1ab69d] transition cursor-pointer">Register</button>
          <button className="bg-[#1ab69d] px-6 py-2.5 ml-2 text-white font-medium hover:bg-[#181818] transition-all cursor-pointer">
            Apply Now →
          </button>
        </div>
      </div>

      
      <nav className="sticky top-0 z-50 bg-white flex justify-between items-center px-4 md:px-12 py-5 shadow-sm border-b border-gray-100">
        <img src="https://edublink-react.vercel.app/assets/images/logo/logo-dark.png" alt="Logo" className="h-9" />
        
        <ul className="hidden lg:flex gap-9 font-bold text-[#181818]">
          {["Home", "Pages", "Courses", "Blog", "Contact"].map((item) => (
            <li key={item} className="group flex items-center gap-1.5 hover:text-[#1ab69d] cursor-pointer transition-colors">
              {item}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3 mt-0.5 group-hover:text-[#1ab69d] transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </li>
          ))}
        </ul>

        <div className="flex gap-6 items-center text-[#181818]">
          <span className="text-gray-300">|</span>
          <button className="hover:text-[#1ab69d] transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          <div className="relative cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-[#1ab69d] transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#1ab69d] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
          </div>

          <div className="relative cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 group-hover:text-[#1ab69d] transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#1ab69d] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
          </div>
        </div>
      </nav>
    </header>
  );
}