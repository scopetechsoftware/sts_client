import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Chatbot from '../Components/Chatbot';
import EnquiryForm from '../Components/EnquiryForm';
import Course from '../Pages/Course';
import CourseDetail from '../Pages/CourseDetail';
import Gallery from '../Pages/Gallery';
import Placement from '../Pages/Placement';
import ClientProjects from '../Pages/Projects/ClientProjects';
import ProjectDetailsPage from '../Pages/Projects/ProjectDetailsPage';

const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
         <Route path='/gallery' element={<Gallery />} />
         <Route path='/course' element={<Course />} />
         <Route path='/course/:id' element={<CourseDetail />} />
        <Route path='/contact' element={<About />} />
        <Route path='/placement' element={<Placement />} />
        <Route path='/projects/:tech' element={<ClientProjects />} />
        <Route path='/project/details/:id' element={<ProjectDetailsPage />} />
      </Routes>
      <Footer/>
      <Chatbot/>
      <EnquiryForm />
    </BrowserRouter>
  );
};

export default AppRoutes;
