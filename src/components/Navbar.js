import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:8080';

export default function Navbar() {
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState();
  const userLogin = JSON.parse(localStorage.getItem('userLogin'));
  useEffect(() => {
    if (userLogin) {
      let qtyCart = JSON.parse(localStorage.getItem('cart'));
      if(qtyCart){
        let resultCal = qtyCart?.reduce((a, b) => a + b?.qty, 0);
        setQuantity(resultCal)
      }
      getImageProfile();
    }
  }, []);

  const getImageProfile = async () => {
    try {
      const jwtToken = `Bearer ${userLogin?.token}`;
      const axiosInstance = axios.create({
        baseURL: apiUrl,
        headers: {
          Authorization: jwtToken,
        },
      });


      const { data } = await axiosInstance.get(`/api/penggunas/${userLogin?.username}`);
      setImage(data.image);
    } catch (e) {
      const jwtRefreshToken = `${userLogin?.refreshToken}`;
      const { data } = await axios.post('http://localhost:8080/auth/refreshToken', {
        refreshToken: jwtRefreshToken,
      });
      localStorage.setItem('userLogin', JSON.stringify(data));
      console.log(e);
    }
  };

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
                <span className="border rounded-full p-1 ml-1">{quantity}</span>
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
