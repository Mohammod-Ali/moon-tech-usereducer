import React, { useContext } from 'react';
import { PRODUCT_CONTEXT } from '../context/ProductProvider';
import ProductCard from '../components/ProductCard';

const WishList = () => {
    
  const {state: {wish, loading, error}} = useContext(PRODUCT_CONTEXT)
  console.log(wish)
  
  let content
  if (loading) {
    content = <p>Loading...</p>
  }
  if (error) {
    content = <p>SomeThing Went Wrong...</p>
  }
  if (!error && !error && wish.length === 0) {
    content = <p>Nothing to show.</p>
  }
  if (!error && !error && wish.length) {
    content = wish.map(product => <ProductCard product={product} key={product.price}></ProductCard>)
  }
  
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
          content
        }
      </div>
    );
};

export default WishList;