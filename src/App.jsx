

import NewsAndCertificateSection from "./components/Articles";
import Categories from "./components/Categories";
import PopularCourses from "./components/Courses";
import EventsNewsSection from "./components/Events";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseInstructors from "./components/Instructors";
import Partners from "./components/Partners";


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories/>
      <PopularCourses/>
      <Partners/>
      <CourseInstructors/>
      <FAQSection/>
      <EventsNewsSection/>
      <NewsAndCertificateSection/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
