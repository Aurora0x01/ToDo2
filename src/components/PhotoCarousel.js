import React from "react";
import PhotoCard from "./PhotoCard.js";
import clavier from "../assets/clavier.png"
import ecran from "../assets/ecran.png"
import setup from "../assets/setup.png"
import souris from "../assets/souris.png"
import unit from "../assets/Unit.png"

const images = [
  {
    src: setup,
    title: "Gaming Setup",
    description: "Complete high-end gaming setup with RGB lighting."
  },
  {
    src: ecran,
    title: "Gaming Monitor",
    description: "Widescreen gaming monitor with high refresh rate."
  },
  {
    src: clavier,
    title: "Mechanical Keyboard",
    description: "RGB backlit keyboard with mechanical switches."
  },
  {
    src: souris,
    title: "Gaming Mouse",
    description: "Ergonomic gaming mouse with programmable buttons."
  },
  {
    src: unit,
    title: "PC Tower",
    description: "High-performance PC with RTX 3060 GPU."
  }
];

const PhotoCarousel = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {images.map((item, index) => (
        <PhotoCard key={index} image={item.src} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default PhotoCarousel;
