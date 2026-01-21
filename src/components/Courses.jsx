import React from "react";

const courses = [
  {
    id: 1,
    image: "https://edublink-react.vercel.app/assets/images/course/course-03/course-01.jpg",
    duration: "4 Weeks",
    price: "$49.00",
    title: "Starting SEO as your Home Based Business",
    rating: 4.5,
    totalRating: 8,
    lessons: 13,
    students: 28,
  },
  {
    id: 2,
    image: "https://edublink-react.vercel.app/assets/images/course/course-03/course-02.jpg",
    duration: "3 Weeks",
    price: "$78.99",
    title: "Java Programming Masterclass for Software Developers",
    rating: 4.4,
    totalRating: 10,
    lessons: 15,
    students: 35,
  },
  {
    id: 3,
    image: "https://edublink-react.vercel.app/assets/images/course/course-03/course-03.jpg",
    duration: "10 Weeks",
    price: "$64.99",
    title: "Building A Better World One Student At A Time",
    rating: 5.0,
    totalRating: 15,
    lessons: 18,
    students: 33,
  },
  {
    id: 4,
    image: "	https://edublink-react.vercel.app/assets/images/course/course-03/course-04.jpg",
    duration: "6 Weeks",
    price: "$55.99",
    title: "Master Your Personal Brand Like a Marketing Pro",
    rating: 4.5,
    totalRating: 18,
    lessons: 20,
    students: 38,
  },
];

export default function PopularCourses() {
  return (
    <section className="relative py-20 bggradient-to-br from-purple-50 via-blue-50 to-cyan-50 overflow-hidden">
      
      <div className="absolute top-10 right-20 w-32 h-32 opacity-40">
        {[...Array(8)].map((_, row) => (
          <div key={row} className="flex gap-3 mb-3">
            {[...Array(8)].map((_, col) => (
              <div
                key={col}
                className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"
                style={{
                  animationDelay: `${(row + col) * 0.1}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gray-500 font-medium text-xs tracking-[0.2em] uppercase mb-4 block">
            POPULAR COURSES
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4 leading-tight">
            Pick A Course{" "}
            <span className="relative inline-block">
              To
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
            Get Started
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex gap-6 p-6"
            >
              {/* Course Image */}
              <div className="relative flexshrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <span className="absolute top-3 left-3 bg-orange-400 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {course.duration}
                </span>
              </div>

              {/* Course Info */}
              <div className="flex-1">
                <p className="text-2xl font-medium text-red-500 mb-3">
                  {course.price}
                </p>

                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-900 leading-snug">
                    {course.title}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating)
                            ? "fill-current"
                            : "fill-yellow-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({course.rating} / {course.totalRating} Rating)
                  </span>
                </div>

                {/* Lessons & Students */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span>{course.students} Students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse Button */}
        <div className="text-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            Browse more courses
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}