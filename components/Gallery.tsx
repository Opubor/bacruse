import React from "react";
import GalleryClient from "./GalleryClient";
import { fetchGallery } from "@/services/gallery";

async function Gallery() {
  const gallery = await fetchGallery();

  return (
    <div id="gallery" className="py-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center uppercase border-b-2 border-b-black text-sm px-2">
          Gallery
        </h1>
        <p className="text-center text-lg lg:text-2xl pt-4 font-bold tracking-tighter mb-4">
          A glimpse into our care, facilities, and the people who make it all
          possible.
        </p>
      </div>

      {/* jisun */}
      <GalleryClient gallery={gallery} />
    </div>
  );
}

export default Gallery;
