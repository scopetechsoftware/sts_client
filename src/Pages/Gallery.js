import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "../Components/ImageGallery";

const Gallery = () => {
  const [data, setData] = useState(null);

  const fetchPhotos = async () => {
    try {
      const res = await axios.get("https://sts-yyhy.onrender.com/api/events"); 
      setData(res.data);
    } catch (error) {
      console.log("Error fetching gallery:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Event Gallery
      </h2>
      <ImageGallery data={data} />
    </div>
  );
};

export default Gallery;
