import React, { useContext } from "react";
import { PRODUCT_CONTEXT } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const TopRated = () => {
  const {state: {products, loading, error}} = useContext(PRODUCT_CONTEXT)
  // console.log(products)
  
  let content
  if (loading) {
    content = <p>Loading...</p>
  }
  if (error) {
    content = <p>SomeThing Went Wrong...</p>
  }
  if (!error && !error && products.length === 0) {
    content = <p>Nothing to show.</p>
  }
  if (!error && !error && products.length) {
    content = products.filter((product) => product.rating >= 4).map(product => <ProductCard product={product} key={product.price}></ProductCard>)
  }
  
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
          content
        }
      </div>
    );
};

export default TopRated;
