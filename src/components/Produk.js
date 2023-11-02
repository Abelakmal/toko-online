
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './card'

export default function Produk() {

  const [products, setProducts] = useState([]);

  const getData = async () => {
        await axios.get("https://fakestoreapi.com/products")
    .then((product) => setProducts(product.data))
    .catch((e) => console.log(e))
  }


  useEffect( () =>{
    getData()
  },[])

  return (
    <section className="products-view ">
      <Tag/>
      <div className='border'></div>
      <Card products={products}/>
    </section>
  );
}



function Tag(all) {
  const [view, setView] = useState(1);

  const set = (value) => {
    setView(value);
  };

  return (
    <>
      <div className="card  flex justify-around border-b-1">
        <div className="all bg-green-700 rounded px-9 pt-1 pb-1 hover:bg-green-800 mb-8" onClick={() => set(1)}>
          <span className="text-white">All</span>
        </div>
        <div className="popular bg-green-700 rounded px-9 pt-1 pb-1 hover:bg-green-800 mb-8" onClick={() => set(2)}>
          <span className="text-white">Popular</span>
        </div>
        <div className="review bg-green-700 rounded px-9 pt-1 pb-1 hover:bg-green-800 mb-8" onClick={() => set(3)}>
          <span className="text-white">Rating</span>
        </div>
        <div className="recomend bg-green-700 rounded px-9 pt-1 pb-1 hover:bg-green-800 mb-8" onClick={() => set(4)}>
          <span className="text-white">Recomendation</span>
        </div>
      </div>
    </>
  );
}
