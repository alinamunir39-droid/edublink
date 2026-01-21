import React from 'react';

export default function EventsNewsSection() {
  const events = [
    {
      id: 1,
      date: { day: '30', month: 'SEP' },
      deadline: '08:00AM-10:00PM',
      title: 'Learn English in Ease',
      description: 'Lorem ipsum dolor sit amet consectetur elit sed eiusmod ex tempor incididunt labore dolore magna.',
      location: 'Newyork City, USA',
      image: 'https://edublink-react.vercel.app/assets/images/event/event-01.jpg'
    },
    {
      id: 2,
      date: { day: '25', month: 'DEC' },
      deadline: '08:00AM-07:00PM',
      title: 'Cyber Security Awareness',
      description: 'Lorem ipsum dolor sit amet consectetur elit sed eiusmod ex tempor incididunt labore dolore magna.',
      location: 'Washington DC, USA',
      image: 'https://edublink-react.vercel.app/assets/images/event/event-02.jpg'
    },
    {
      id: 3,
      date: { day: '25', month: 'NOV' },
      deadline: '08:00AM-11:00AM',
      title: 'Design Think & Innovation',
      description: 'Lorem ipsum dolor sit amet consectetur elit sed eiusmod ex tempor incididunt labore dolore magna.',
      location: 'New york city, USA',
      image: 'https://edublink-react.vercel.app/assets/images/event/event-03.jpg'
    }
  ];

  // SVG Icons
  const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );

  const MapPinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 border-2 border-gray-200 rounded-full opacity-50"></div>
      <div className="absolute top-20 left-20">
        <div className="grid grid-cols-7 gap-1">
          {[...Array(49)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-teal-400 rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-32 right-20">
        <div className="grid grid-cols-7 gap-1">
          {[...Array(49)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-pink-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm font-semibold tracking-wider uppercase mb-2">
            EVENTS & NEWS
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Events & News
          </h1>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-teal-500"></div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                {/* Deadline Badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <ClockIcon />
                   {event.deadline}
                </div>
                {/* Date Badge */}
                <div className="absolute bottom-0 right-4 bg-teal-500 text-white w-16 h-20 flex flex-col items-center justify-center rounded-t-lg shadow-lg">
                  <span className="text-2xl font-bold">{event.date.day}</span>
                  <span className="text-xs font-semibold">{event.date.month}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPinIcon />
                  <span className="ml-2 ">{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mb-16">
          <p className="text-gray-700">
            The Latest Events from EduBlink.{' '}
            <a href="#" className="text-red-300 font-semibold hover:text-pink-600 inline-flex items-center gap-1">
              View All <ArrowRightIcon />
            </a>
          </p>
        </div>

        {/* Contact Section */}
        <div className="relative">
          <div className="absolute bottom-0 left-6">
            <div className="grid grid-cols-5 gap-1">
              {[...Array(49)].map((_, i) => (
                <div key={i} className="w-5 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-400 to-red-400 rounded-lg shadow-xl p-6 flex flex-col md:flex-row items-center justify-center gap-4 relative z-10 max-w-xl mx-auto">
            <div className="text-white text-center md:text-right">
              <p className="text-sm mb-1">Get In Touch:</p>
              <a href="mailto:info@edublink" className="text-xl font-bold hover:underline">
                info@edublink
              </a>
            </div>
            
            <div className="bg-white text-red-500 px-4 py-2 rounded-full font-bold">
              or
            </div>
            
            <div className="text-white text-center md:text-left">
              <p className="text-sm mb-1">Call Us Via:</p>
              <a href="tel:+01123564121231" className="text-xl font-bold hover:underline">
                +01 123 5641 231
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 right-10">
            <div className="grid grid-cols-7 gap-1">
              {[...Array(49)].map((_, i) => (
                <div key={i} className="w-2 h-5 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}