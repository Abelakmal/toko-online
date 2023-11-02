import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbar';

function DetailProduct() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    const getProductId = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((respone) => {
          setProduct(respone.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    if (productId) {
      getProductId();
    }
  }, [productId]);

  const showPopUp = () => {
    setPopup(true)
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center" style={{ height: 600 }}>
        <div className="grid  grid-flow-col border-2 border-black">
          <div className="image row-span-3 border p-6">
            <img src={product.image} alt="" className="w-96 h-96" />
          </div>
          <div className="col-span-2 font-bold text-xl m-4">
            {product.title}
            <div className="font-normal text-sm">
              <FontAwesomeIcon icon={faStar} style={{ color: '#fdf986' }} /> {product.rating?.rate} | {product.rating?.count} jumlah
            </div>
            <div>${product.price}</div>
          </div>
          <div className="row-span-1 col-span-2 w-3/5 m-4">
            {product.description}
            <div className="">
              <button className="border-2 m-2 p-2 rounded bg-green-600 text-white hover:bg-green-700">Buy Now</button>
              <button className="border-2 p-2 rounded bg-yellow-600 text-white hover:bg-yellow-700" onClick={() => showPopUp()}>
                addToCart
              </button>
            </div>
          </div>
        </div>
        {popup && (
        <div className="popup absolute border-2 bg-white w-96 h-52 p-2 flex flex-col items-center justify-center border-black rounded">
            <div>Apa anda yakin ingin menambahkan ke cart?</div>
            <div className="">
              <button className="border-2 pl-3 pr-3 rounded m-2 bg-green-600">Yes</button>
              <button className="border-2 pl-3 pr-3 rounded" onClick={() => setPopup(false)}>No</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DetailProduct;
