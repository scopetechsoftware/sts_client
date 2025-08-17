import React, { useEffect, useState } from 'react'
import ImageGallery from '../Components/ImageGallery'
import axios from 'axios'

const Gallery = () => {
  const [data, setData] = useState(null);

  const fetchPhotos = async() => {
   try {
     const res = await axios.get(`https://sts-yyhy.onrender.com/api/events`);
     setData(res.data);
     
    
   } catch (error) {
     console.log(error);
   }
  }

  useEffect(()=> {
   fetchPhotos();
  }, [])
  return (
    <div>
    <div style={{padding:'20px'}}>
      <ImageGallery data={data}/>
    </div>
    </div>
  )
}

export default Gallery
