import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar(e) {
  console.log(e.path);
  return (
    <nav className="flex justify-between p-5 border-b-4">
      <h1 className="font-black text-xl">
        <Link to="/">Toko Online</Link>
      </h1>
      <form action="/search-product" method="get">
        <input className="outline-green-700 border-4 border-green-700 h-9 w-96 p-2 rounded-l-lg" type="search" id="search" placeholder="Serch..." />
        <button className="text-white  bg-green-700 px-2 text-lg h-9 rounded-r-lg">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      <div className="flex">
        <img src="https://placehold.co/50x50" alt="profile" className="rounded-full mr-2" />
        <button className="bg-green-500 p-1 rounded font-medium m-2 text-white hover:bg-green-600">
          <Link to="/login">LOGIN</Link>
        </button>
        <div className="m-3">
          <Link to="/cartshopping">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="border rounded-full p-1 ml-1">5</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
