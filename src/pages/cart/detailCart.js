import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Kembali from '../../components/Kembali';
import { useNavigate } from 'react-router-dom';

function DetailCart() {
  const [product, setProduct] = useState([]);
  const [allQty, setAllQty] = useState();
  const [total, setTotal] = useState(0);
  const [isHave, setIshave] = useState(true)
  const carts = JSON.parse(localStorage.getItem('cart'));
  const userLogin = JSON.parse(localStorage.getItem('userLogin'))
  const Navigate = useNavigate()
  useEffect(() => {
    if(userLogin){
      if(carts){
        getCart();
        countTotal();
      }else{
        setIshave(false)
      }
    }else{
      Navigate('/login')
    }
  }, [carts,isHave,product]);
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

  // delete carts[0]
  // console.log(carts)

  const countTotal = async() => {
    const qty = carts?.reduce((total, cart) => total + cart?.qty, 0);
    const price = product?.reduce((total, item) => total + item?.price, 0);
    const result = price.toFixed(2) * qty;
    setTotal(result);
    setAllQty(qty);
  };

  const deleteCart = (indk) =>{
    console.log(carts)
    if(carts.length == 1){
      setIshave(false)
      delete carts[indk]
      localStorage.removeItem('cart')
    }else{
      delete carts[indk]
      localStorage.setItem('cart',JSON.stringify(carts))
    }
  }

  return (
    <div>
      <Navbar />
      <Kembali />
      <div className="flex mt-14">
        <div className="border-2  w-2/3 rounded">
          { isHave ?
          <>
          {product.map((item, index) => (
            <div className="flex border-2 w-content p-5" key={index}>
              <div className="mr-5">
                <img src={item.image} alt="" width={80} />
              </div>
              <div className="flex justify-center items-center mr-5">{item.title}</div>
              <div className="flex justify-center items-center w-24"> (+) {carts[index]?.qty} (-) </div>
              <div className="w-full  flex justify-end items-center">
                <button className="border-2 rounded p-1 bg-red-500 text-white hover:bg-red-600" onClick={() => deleteCart(index)}>Delete</button>
              </div>
            </div>
          ))}
          </>
          :
          <>
          <div className="flex border-2 justify-center border-black w-content  items-center h-full w-full">
            tidak punya cart
          </div>
          </>
}
        </div>
        <div className="flex flex-col items-center border-2 w-96 h-40 rounded ml-2">
          <h1 className='font-bold'>TOTAL PEMBELIAN</h1>
          <div className='mt-2 '>
            <div>Jumlah Barang : {isHave ? allQty: 0} </div>
            <div>Harga Total: ${total}</div>
          </div>
          <button className='mt-5 border-2 px-5 rounded bg-green-500 text-white hover:bg-green-600'>Beli</button>
        </div>
      </div>
    </div>
  );
}

export default DetailCart;
