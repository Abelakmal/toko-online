import React, { useEffect, useState } from 'react';
import Kembali from '../../components/Kembali';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiUrl = 'http://localhost:8080';

export default function User() {
  const { data } = JSON.parse(localStorage.getItem('userLogin'));
  const [dataUser, setDataUser] = useState();
  const Navigate = useNavigate();
  const jwtToken = `Bearer ${data?.token}`;
  const jwtRefreshToken = `${data?.refreshToken}`;
  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: jwtToken,
      },
    });
    axiosInstance
      .get(`/api/penggunas/${data.username}`)
      .then((respone) => {
        setDataUser(respone);
      })
      .catch((e) => {
        axios
          .post('http://localhost:8080/auth/refreshToken', {
            refreshToken: jwtRefreshToken,
          })
          .then((response) => {
            localStorage.setItem('userLogin', JSON.stringify(response));
          });
      });

    if (!data) {
      Navigate('/');
    }
  }, []);
  // console.log(dataUser?.data.alamat);

  const handleLogout = () => {
    localStorage.removeItem('userLogin');
    Navigate('/login');
  };
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
              <div className="name">
                Name <span className="ml-7">:</span> <span className="ml-4 ">{dataUser?.data.nama !== null ? dataUser?.data.nama: ""}</span>
              </div>
              <div className="email">
                Email <span className="ml-8">:</span> <span className="ml-4">{dataUser?.data.email !== null ? dataUser?.data.email: ""}</span>
              </div>
              <div className="alamat">
                Address <span className="ml-3">:</span> <span className="ml-4">{dataUser?.data.alamat !== null ? dataUser?.data.alamat: ""}</span>
              </div>
              <div className="alamat">
                telp <span className="ml-11">:</span> <span className="ml-4">{dataUser?.data.nomorHp !== null ? dataUser?.data.nomorHp: ""}</span>
              </div>
            </div>
            <div className="col-span-3">
              <button className="bg-green-500 p-1 rounded font-medium m-2 text-white hover:bg-green-600" onClick={() => handleLogout()}>
                EDIT
              </button>
              <button className="bg-red-500 p-1 rounded font-medium m-2 text-white hover:bg-red-600" onClick={() => handleLogout()}>
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
