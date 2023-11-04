import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ products }) {


  return (
    <div className="flex flex-wrap justify-center">
      {products.map((item,index) => (
        <Link to={`/product-details/${item.id}`} key={item.id}>
          <div className="card m-2 border mb-5 rounded shadow-lg hover:border-gray-400" >
            <div className="image">
              <img src={item.image} alt="" className="w-32 h-32" />
            </div>
            <div className="deskripsi">
              <div className="title w-48 m-2 font-medium">{item.title}</div>
              <div className="price font-bold m-2">${item.price}</div>
              <div className="rating m-2">
                <FontAwesomeIcon icon={faStar} style={{ color: '#fdf986' }} /> {item.rating.rate} | {item.rating.count} jumlah
              </div>
            </div>
          </div>
        </Link>
        
      ))}
    </div>
  );
}

export default Card;
