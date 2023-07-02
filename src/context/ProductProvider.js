import React, { createContext, useEffect, useReducer } from 'react';
import { initialState, productReducer } from '../State/ProductState/ProductReducer';
import { actionTypes } from '../State/ProductState/actionTypes';


export const PRODUCT_CONTEXT = createContext()


const ProductProvider = ({children}) => { 
    const [state, dispatch] = useReducer(productReducer, initialState)
    useEffect(() => {
      dispatch({ type: actionTypes.FETCHING_START })
      fetch('products.json')
      .then(res => res.json())
      .then(data => dispatch({type: actionTypes.FETCHING_SUCCESS, payload: data}))
      .catch(() =>{
        dispatch({type: actionTypes.FETCHING_ERROR})
      })
    },[])
    console.log(state)
  
    const value = {
      state,
      dispatch,
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductProvider;