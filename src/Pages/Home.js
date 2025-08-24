import React from 'react'
import AutoCarousel from '../Components/AutoCarousel'
import ImageContent from '../Components/ImageContent'
import stsabout from '../Assets/Unconfirmed 361160.png'
import CourseCarousel from '../Components/CourseCarousel'
import ProjectShowcase from '../Components/ProjectShowcase'
import PlacementShowcase from '../Components/PlacementShowcase'
import TestimonialSection from '../Components/TestimonialSelection'
import ImageGallery from '../Components/ImageGallery'
import Reviews from './Reviews'
import { Link } from 'react-router-dom'
import CourseCard from '../Components/CourseCard'
import CardLoader from '../Components/Loader/CardLoader'
import LiCardLoader from '../Components/Loader/ListLoader'
import CounterSection from '../Components/CounterSection'


const Home = () => {
    const content = `STS is a dynamic institute and software solutions provider based in Madurai, dedicated to empowering students and businesses alike. We offer a wide range of professional courses and hands-on project opportunities that prepare students for real-world challenges while delivering quality software solutions to our clients.`;
  return (
    <div>
      <AutoCarousel/>
      <ImageContent contentText={content} imageSrc={stsabout}/>
       <h1 className="main-headline">Training</h1>
   
      <CourseCard/>
                        <p className='link' style={{textAlign: 'center'}}> <Link to={'/course'}>Get More Details <i class="fa-solid fa-arrow-right"></i></Link> </p>
      <CounterSection/>
      <ProjectShowcase />
      <PlacementShowcase/>
                        <p className='link' style={{textAlign: 'center'}}> <Link to={'/placements'}>View More <i class="fa-solid fa-arrow-right"></i></Link> </p>

      <TestimonialSection />
                        <p className='link' style={{textAlign: 'center', marginBottom: '50px'}}> <Link to={'/reviews'}>View More <i class="fa-solid fa-arrow-right"></i></Link> </p>

       
    </div>
  )
}

export default Home
