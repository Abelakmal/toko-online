import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './card';

export default function Produk() {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState(0);

  const getData = async () => {
    await axios
      .get('https://fakestoreapi.com/products')
      .then((product) => setProducts(product.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  }, []);

  const set = (value) => {
    setView(value);
  };

  return (
    <section className="products-view border-t-4 border-green-600 p-2">
      <Card products={products} />
    </section>
  );
}
