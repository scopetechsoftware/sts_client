import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function ImageGallery({ data }) {
  const [photos, setPhotos] = useState(null);
  const [index, setIndex] = useState(-1);
  
useEffect(() => {
  if (!data) return;

  const newData = data.map((val) => ({
    ...val,
    src: `https://sts-yyhy.onrender.com/uploads/${val.src}`, // ✅ prepend uploads path
    width: 1000,
    height: 600,
  }));

  console.log("Gallery photos (final):", newData); // check this in console
  setPhotos(newData);
}, [data]);

  return (
    <>
      {photos ? (
        <>
          <RowsPhotoAlbum
            photos={photos}
            targetRowHeight={200}
            onClick={({ index }) => setIndex(index)}
            renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
              <div style={{ ...wrapperStyle, margin: "10px", textAlign: "center" }}>
                {renderDefaultPhoto({ wrapped: true })}
                <div style={{ marginTop: "6px" }}>
                  <h4 style={{ margin: "4px 0", fontSize: "16px" }}>{photo.title}</h4>
                  <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                    {photo.description}
                  </p>
                </div>
              </div>
            )}
          />

          <Lightbox
            slides={photos.map((p) => ({
              src: p.src,
              title: p.title,
              description: p.description,
            }))}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
            captions={{
              showToggle: true,
              descriptionTextAlign: "start",
            }}
          />
        </>
      ) : (
        "Gallery not found"
      )}
    </>
  );
}
