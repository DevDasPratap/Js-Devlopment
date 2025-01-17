import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../components/RelatedProduct';

export const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('')

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  // console.log(productData);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Sidebar images */}
        <div className="flex flex-row sm:flex-col overflow-auto sm:w-[18%] w-full gap-4 sm:gap-3">
          {productData.image.map((item, index) => (
            <img
              onClick={() => setImage(item)}
              src={item}
              key={index}
              className="w-[24%] sm:w-full sm:h-auto sm:mb-3 flex-shrink-0 cursor-pointer border hover:border-blue-400"
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>

        {/* Main product image */}
        <div className="w-full sm:w-[60%]">
          <img
            src={image}
            alt="Selected Product"
            className="w-full max-w-full h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Product information */}
        <div className="flex-1">
          <h1 className="font-medium text-3xl mt-2 truncate">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-3">
            {
              Array(4).fill().map((_, idx) => (
                <img key={idx} src={assets.star_icon} className="w-4 h-4" alt="Star Icon" />
              ))}
            <img src={assets.star_dull_icon} className="w-4 h-4" alt="Dull Star Icon" />
            <p className="pl-2 text-gray-600">(22)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-600 leading-relaxed">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes && Array.isArray(productData.sizes) && productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} key={index} className={`border py-2 px-4 ${item === size ? 'bg-black text-white' : 'bg-gray-100'}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <b className='border px-5 py-3 text-sm'>Reviews {10}</b>
        </div>
        <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500'>
          <p>A shopping website is an online platform that facilitates buying and selling products or services. It offers customers a convenient way to browse and purchase items from the comfort of their own homes.</p>
          <p>This website displays products or services along with detailed descriptions, images, prices, and availability. Users can easily compare different items, read customer reviews, and make secure online payments. Additionally, it may offer various shipping and payment options to ensure a seamless shopping experience.</p>
        </div>
      </div>
      {/* display reletd product */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};
