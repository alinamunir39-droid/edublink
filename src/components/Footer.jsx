import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#9b9b9b] py-20 px-6 lg:px-20 font-['League_Spartan']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
       
        <div className="space-y-6">
          <img src="https://edublink-react.vercel.app/assets/images/logo/logo-white.png" alt="logo" className="w-40" />
          <p className="leading-relaxed text-sm">
            Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
          </p>
          <div className="space-y-2 text-[#9b9b9b] text-sm">
            <p><span className="font-medium text-[#9b9b9b]">Add:</span> 70-80 Upper St Norwich NR2</p>
            <p><span className="font-medium text-[#9b9b9b]">Call:</span> +01 123 5641 231</p>
            <p><span className="font-medium text-[#999898]">Email:</span> info@edublink.com</p>
          </div>
        </div>

        
        <div>
          <h3 className="text-white text-xl font-bold mb-8">Online Platform</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">Courses</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">Instructor</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">Events</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">Instructor Profile</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">Purchase Guide</a></li>
          </ul>
        </div>

        {/* Column Links */}
        <div>
          <h3 className="text-white text-xl font-bold mb-8">Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">News & Articles</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">FAQ's</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">Sign In/Registration</a></li>
            <li><a href="#" className="hover:text-[#1ab69d] transition-colors">Coming Soon</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white text-xl font-bold mb-8">Contacts</h3>
          <p className="text-sm mb-6 leading-relaxed">Enter your email address to register to our newsletter subscription</p>
          
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white p-4 text-gray-900 w-full outline-none text-sm rounded-md" 
            
            />
            <button className="bg-[#1ab69d] text-white px-6 py-4 rounded-md font-bold text-sm hover:bg-[#181818] transition-all flex items-center justify-center gap-2 w-full md:w-max">
              Subscribe <span className="text-xl">→</span>
            </button>
          </div>
          
          <div className="flex gap-4 mt-8">
            <a href="#" className="text-[#3b5998] hover:scale-110 transition-transform"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-[#1da1f2] hover:scale-110 transition-transform"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-[#0077b5] hover:scale-110 transition-transform"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-[#ff0000] hover:scale-110 transition-transform"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-20 pt-8 text-center text-sm">
        <p>Copyright 2026 <span className="text-[#1ab69d]">EduBlink</span> Designed By <span className="text-[#1ab69d]">DevsBlink</span>. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer