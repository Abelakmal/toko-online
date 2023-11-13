import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './card';

export default function Produk() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState([]);
  const [view, setView] = useState(true);
  // const [sortProduct ,setSortProduct] = useState()

  const getData = async () => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [sort]);

  
  
  const setSortprice = (value) => {
    if(value === "height"){
      const data = products.sort((a, b) => b.price - a.price);
      setView(false)
      setSort(data)
    }else{
      const data = products.sort((a, b) => a.price - b.price);
      setView(false)
      setSort(data)
    }

  };
  const setSortRate = () =>{
    const data = products.sort((a, b) => b.rating.rate - b.rating.rate)
    setView(data)
  }
  // console.log("ini sort",sort);
  // console.log("ini product",products);

  return (
    <div>
      <div className='flex justify-around'>
        <button className='bg-green-600 text-white p-2 rounded mb-2 hover:bg-green-700' onClick={() => setSortprice("height")}>sort the highest price</button>
        <button className='bg-green-600 text-white p-2 rounded mb-2 hover:bg-green-700' onClick={() => setSortprice("lowest")}>sort the lowest price</button>
        <button className='bg-green-600 text-white p-2 rounded mb-2 hover:bg-green-700' onClick={() => setSortRate()}>sort the highest rate</button>
      </div>
      <section className="products-sort border-t-4 border-green-600 p-2">
        <Card products={(view ? products : sort)} />
      </section>
    </div>
  );
}
