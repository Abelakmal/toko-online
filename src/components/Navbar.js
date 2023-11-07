import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const cart = useSelector((state) => state.cart.data);
  const [quantity, setQuantity] = useState(0);
  const userLogin = JSON.parse(localStorage.getItem('userLogin'));
  useEffect(() =>{
    setQuantity(cart)
  },[cart])
  const image = localStorage.getItem("image")


  return (
    <nav className="flex justify-between p-5 border-b-4">
      <h1 className="font-black text-xl">
        <Link to="/">Toko Online</Link>
      </h1>
      <form action="/search-product" method="get">
        <input className="outline-green-700 border-4 border-green-700 h-9 w-96 p-2 rounded-l-lg" name="search" type="input" id="search" placeholder="Serch..." />
        <button className="text-white  bg-green-700 px-2 text-lg h-9 rounded-r-lg">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      <div className="flex">
        {userLogin && (
          <>
            <div className="profil ">
              <Link to="/profile">
                <img src={`${image}`} style={{ width: 50, height: 50 }} alt="profile" className="border-2 rounded-full mr-2" />
              </Link>
            </div>
            <div className="m-3">
              <Link to="/cartshopping">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="border rounded-full p-1 ml-1">{0}</span>
              </Link>
            </div>
          </>
        )}
        {!userLogin && (
          <button className="bg-green-500 p-1 rounded font-medium m-2 text-white hover:bg-green-600">
            <Link to="/login">LOGIN</Link>
          </button>
        )}
      </div>
    </nav>
  );
}
