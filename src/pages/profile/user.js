import axios from 'axios';
import React from 'react';

export default function user() {
  const dataUser = JSON.parse(localStorage.getItem('userLogin'));
  setTimeout(() => {
    axios
      .post('http://localhost:8080/auth/refreshToken', {
        refreshToken: dataUser.data.refreshToken,
      })
      .then((respone) => {
        localStorage.setItem('userLogin', JSON.parse(respone));
      });
  }, 1000 * 60);
  console.log(dataUser)
  const getUser = () => {
    axios.get(`http://localhost:8080/api/penggunas/`,);
  };
  return (
    <div className="flex h-screen justify-center ">
      <div className="border-x-2 border-black w-2/3">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="row-span-3 ...">
            <img src="https://placehold.co/400x500" alt="" />
          </div>
          <div className="col-span-2 ...">02</div>
          <div className="row-span-2 col-span-2 ...">03</div>
        </div>
      </div>
    </div>
  );
}
