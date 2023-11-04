import React, { useEffect } from 'react';
import Kembali from '../../components/Kembali';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const dataUser = JSON.parse(localStorage.getItem('userLogin'));
  const Navigate = useNavigate();
  useEffect(() => {
    if (!dataUser) {
      Navigate('/');
    }
  }, [dataUser, Navigate]);

  const handleLogout = () =>{
    localStorage.removeItem('userLogin')
    Navigate("/login")
  }
  return (
    <>
      <Kembali />
      <div className="flex h-screen justify-center bg-slate-500">
        <div className="w-2/3 bg-slate-800 rounded">
          <div className="grid grid-rows-3 grid-flow-col gap-4 ">
            <div className="row-span-3 ... ">
              <img src="https://sman93jkt.sch.id/wp-content/uploads/2018/01/765-default-avatar.png" alt="" className="rounded" />
            </div>
            <div className="col-span-2 text-white">
              <h1 className="font-bold text-xl mb-7">PROFILE</h1>
              <div className="username ">
                Username : <span className="ml-4 ">{dataUser?.data.username}</span>
              </div>
              <div className="email">
                Email <span className="ml-8">:</span> <span className="ml-4">{dataUser?.data.email}</span>
              </div>
            </div>
            <div className="col-span-3">
              <button className="bg-green-500 p-1 rounded font-medium m-2 text-white hover:bg-green-600" onClick={() => handleLogout()}>LOGOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
