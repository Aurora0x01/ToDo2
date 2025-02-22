import React, { useState } from "react";
import clavier from "./assets/clavier.png";
import ecran from "./assets/ecran.png";
import setup from "./assets/setup.png";
import souris from "./assets/souris.png";
import unit from "./assets/Unit.png";
import "./styles.css";

const App = () => {
  const products = [
    {
      image: setup,
      title: "Ordinateur Gamer Ultra",
      description:
        "Intel Core i7, RTX 3060, 16GB RAM, SSD 512GB. Parfait pour gaming et streaming !",
      price: "2500 TND",
    },
    {
      image: ecran,
      title: "Écran Gaming 27'' 144Hz",
      description:
        "Écran ultra fluide 144Hz avec technologie FreeSync et une résolution Full HD 1080p.",
      price: "800 TND",
    },
    {
      image: souris,
      title: "Souris Gamer RGB",
      description:
        "Souris ergonomique avec capteur optique 16 000 DPI, idéale pour les FPS et les MMO.",
      price: "150 TND",
    },
    {
      image: clavier,
      title: "Clavier Mécanique RGB",
      description:
        "Clavier gaming mécanique avec switches Red silencieux et un éclairage RGB personnalisable.",
      price: "300 TND",
    },
    {
      image: unit,
      title: "Unité Centrale Haute Performance",
      description:
        "PC gamer avec processeur AMD Ryzen 7, RTX 4070, 32GB RAM, et SSD 1TB NVMe.",
      price: "3500 TND",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-container">
      {/* Image Carousel */}
      <div className="carousel-container">
        <button className="carousel-button left" onClick={prevImage}>
          ◀
        </button>
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].title}
          className="carousel-image"
        />
        <button className="carousel-button right" onClick={nextImage}>
          ▶
        </button>
      </div>

      {/* Product Details */}
      <h2>{products[currentIndex].title}</h2>
      <p>{products[currentIndex].description}</p>
      <p className="price">Prix: {products[currentIndex].price}</p>

      {/* Buy Button */}
      <button className="buy-button">Acheter Maintenant</button>
    </div>
  );
};

export default App;
