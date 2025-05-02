import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFiter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]); // Fixed typo here
  const [sortOption, setSortOption] = useState("relevant")

  // Ensure products are set initially
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (sortOption === "low-high") {
      productsCopy.sort((a,b)=>a.price - b.price);
    } else if(sortOption === "high-low"){
      productsCopy.sort((a,b) =>b.price-a.price)
    }

    setFilterProducts(productsCopy);
  };

  // Run filtering when category, subCategory, or products change
  useEffect(() => {
    if (products.length > 0) {
      applyFilter();
    }
  }, [category, subCategory, products,sortOption]); // Added products here

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* FILTER OPTIONS */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFiter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>

        {/* CATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray'>
            <p className='flex gap-2'>
              <input onChange={toggleCategory} className='w-3' type='checkbox' value={'Men'} /> Men
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleCategory} className='w-3' type='checkbox' value={'Women'} /> Women
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleCategory} className='w-3' type='checkbox' value={'Kids'} /> Kids
            </p>
          </div>
        </div>

        {/* SUBCATEGORY FILTER */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray'>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} className='w-3' type='checkbox' value={'Topwear'} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} className='w-3' type='checkbox' value={'Bottomwear'} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input onChange={toggleSubCategory} className='w-3' type='checkbox' value={'Winterwear'} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCTS LIST */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'COLLECTIONS'} />

          {/* PRODUCT SORTING */}
          <select onChange={(e) => setSortOption(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value='relavent'>Sort by: Relavent</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* MAP PRODUCTS */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItems key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
