import React from 'react'
import AutoCarousel from '../Components/AutoCarousel'
import ImageContent from '../Components/ImageContent'
import stsabout from '../Assets/Unconfirmed 361160.png'
import CourseCarousel from '../Components/CourseCarousel'
import ProjectShowcase from '../Components/ProjectShowcase'
import PlacementShowcase from '../Components/PlacementShowcase'
import TestimonialSection from '../Components/TestimonialSelection'
import ImageGallery from '../Components/ImageGallery'


const Home = () => {
    const content = `STS Scope Tech Software Solutions is a dynamic institute and software solutions provider based in Madurai, dedicated to empowering students and businesses alike. We offer a wide range of professional courses and hands-on project opportunities that prepare students for real-world challenges while delivering quality software solutions to our clients.`;
  return (
    <div>
      <AutoCarousel/>
      <ImageContent contentText={content} imageSrc={stsabout}/>
       <h1 className="main-headline">Training</h1>
      <CourseCarousel/>
      <ProjectShowcase />
      <PlacementShowcase/>
      <TestimonialSection />
     
    </div>
  )
}

export default Home
