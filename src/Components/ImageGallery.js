import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// plugins
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
      width: 1000,
      height: 600,
    }));
    setPhotos(newData);
  }, [data]);

  return (
    <>
      {photos ? (
        <>
          <RowsPhotoAlbum
            photos={photos}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
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
          />
        </>
      ) : (
        "Gallery not found"
      )}
    </>
  );
}
