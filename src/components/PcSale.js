import React from "react";
import PhotoCarousel from "./PhotoCarousel";
import ProductDetails from "./ProductDetails";

const PcSale = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md p-4 shadow-lg rounded-2xl bg-white">
        <PhotoCarousel />
        <div className="p-4">
          <ProductDetails />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Acheter Maintenant
          </button>
        </div>
      </div>
    </div>
  );
};
export default PcSale;