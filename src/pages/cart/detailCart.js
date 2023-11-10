import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Kembali from '../../components/Kembali';

function DetailCart() {
  const [product, setProduct] = useState([]);
  const [allQty, setAllQty] = useState();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem('cart'));
  useEffect(() => {
    getCart();
    countTotal();
  }, [carts,product]);
  const getCart = async (id) => {
    const respone = [];
    for (let cart of carts) {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${cart.id}`);
        respone.push(data);
      } catch (e) {
        console.log(e);
      }
    }
    setProduct(respone);
  };

  const countTotal = () => {
    const qty = carts.reduce((total, cart) => total + cart.qty, 0);
    const price = product.reduce((total, item) => total + item.price, 0);
    const result = price.toFixed(2) * qty;
    setTotal(result);
    setAllQty(qty);
  };

  // console.log(carts[0].qty);
  return (
    <div>
      <Navbar />
      <Kembali />
      <div className="flex mt-14">
        <div className="border-2  w-2/3 rounded">
          {product.map((item, index) => (
            <div className="flex border-2 w-content p-5" key={index}>
              <div className="mr-5">
                <img src={item.image} alt="" width={80} />
              </div>
              <div className="flex justify-center items-center mr-5">{item.title}</div>
              <div className="flex justify-center items-center w-24"> (+) {carts[index].qty} (-) </div>
              <div className="w-full  flex justify-end items-center">
                <button className="border-2 rounded p-1 bg-red-500 text-white hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center border-2 w-96 h-40 rounded ml-2">
          <h1 className='font-bold'>TOTAL PEMBELIAN</h1>
          <div className='mt-2 '>
            <div>Jumlah Barang : {allQty}</div>
            <div>Harga Total: ${total}</div>
          </div>
          <button className='mt-5 border-2 px-5 rounded bg-green-500 text-white hover:bg-green-600'>Beli</button>
        </div>
      </div>
    </div>
  );
}

export default DetailCart;
