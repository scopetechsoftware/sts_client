import { useState } from "react";
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

const photos = [
  {
    src: "https://picsum.photos/id/1018/1000/600",
    width: 1000,
    height: 600,
    title: "Beautiful Landscape",
    description: "A breathtaking view of the mountains during sunset.",
  },
  {
    src: "https://picsum.photos/id/1015/1000/600",
    width: 1000,
    height: 600,
    title: "Mountain View",
    description: "Snow-capped peaks with clear blue skies.",
  },
  {
    src: "https://picsum.photos/id/1019/1000/600",
    width: 1000,
    height: 600,
    title: "Beach Vibes",
    description: "Waves crashing on a sunny afternoon at the beach.",
  },
];

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* Thumbnail Grid */}
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      {/* Lightbox */}
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
          showTitle: true,
          showDescription: true,
        }}
      />
    </>
  );
}
