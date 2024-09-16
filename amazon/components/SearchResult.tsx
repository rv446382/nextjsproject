"use client";
import React from 'react';
import ProductCard from './ProductCard';

const SearchResult = ({ filterData }: { filterData: any }) => {
  return (
    <div className='w-[100%] min-h-screen'>
      {/* Scroll container that sticks under the header */}
      <div className='w-[80%] mx-auto pt-4 pb-8 overflow-y-auto'>
        <div className='mt-10'>
          {/* Page title */}
          <h1 className='font-bold text-2xl mb-2 text-gray-800'>Results{filterData.length}</h1>
          <p className='text-gray-600'>Price and other details may vary based on product size and colour.</p>

          {/* Filtered results grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
            {filterData && filterData.length > 0 ? (
              filterData.map((product: any) => (
                <div key={product.id} className="product-card">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
