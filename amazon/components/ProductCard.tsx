import React from 'react';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      {/* Product image */}
      <img
        src={product.image}
        alt='img'
        className="w-full h-[260px] object-cover mb-4 rounded-md mix-blend-multiply bg-gray-100 overflow:hidden"
      />

      {/* Product category */}
      <h3 className="text-sm text-gray-900 mb-1">{product.title}</h3>

     

      {/* Product description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
       {`${product.description.substring(0,50)}...`}
      </p>

      {/* Product price */}
      <p className="text-sm text-gray-600 font-bold">{`$${product.price}`}</p>
    </div>
  );
};

export default ProductCard;
