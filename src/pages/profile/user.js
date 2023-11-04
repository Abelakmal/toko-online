import React, { useEffect, useState } from 'react';
import Kembali from '../../components/Kembali';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiUrl = 'http://localhost:8080';

export default function User() {
  const [dataUser, setDataUser] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [tempUser, setTempUser] = useState();
  const { data } = JSON.parse(localStorage.getItem('userLogin'));
  const Navigate = useNavigate();
  const jwtToken = `Bearer ${data?.token}`;
  const jwtRefreshToken = `${data?.refreshToken}`;

  localStorage.setItem('image', dataUser?.image);

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
        setDataUser(respone.data);
        setTempUser(respone.data);
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

  const handleUpdate = () => {
    const axiosInstance = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: jwtToken,
      },
    });
    axiosInstance
      .put(`api/penggunas`, {
        id: tempUser.id,
        nama: tempUser.nama,
        email: tempUser.email,
        image: tempUser.image,
        alamat: tempUser.alamat,
        nomorHp: tempUser.nomorHp,
      })
      .then((response) => {
        setDataUser(response.data);
        setTempUser(response.data);
      })
      .catch((e) => {
        localStorage.setItem('error', e);
      });
  };

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
              <img src={`${dataUser?.image}`} alt="" className="rounded" />
            </div>
            <div className="col-span-2 text-white">
              <h1 className="font-bold text-xl mb-7">PROFILE</h1>
              {isEdit ? (
                <div className="flex flex-col">
                  <label htmlFor="name">Name :</label>
                  <input
                    onChange={(e) => {
                      setTempUser({ ...tempUser, nama: e.target.value });
                    }}
                    type="text"
                    name="name"
                    id="name"
                    value={tempUser?.nama}
                    className="text-black pl-2 rounded"
                  />
                  <label htmlFor="email">Email :</label>
                  <input
                    onChange={(e) => {
                      setTempUser({ ...tempUser, email: e.target.value });
                    }}
                    type="text"
                    name="email"
                    id="email"
                    value={tempUser?.email}
                    className="text-black pl-2 rounded"
                  />
                  <label htmlFor="address">Address :</label>
                  <input
                    onChange={(e) => {
                      setTempUser({ ...tempUser, alamat: e.target.value });
                    }}
                    type="text"
                    name="address"
                    id="address"
                    value={tempUser?.alamat || ''}
                    className="text-black pl-2 rounded"
                  />
                  <label htmlFor="telp">telp :</label>
                  <input
                    onChange={(e) => {
                      setTempUser({ ...tempUser, nomorHp: e.target.value });
                    }}
                    type="number"
                    name="telp"
                    id="telp"
                    value={tempUser?.nomorHp || ''}
                    className="text-black pl-2 rounded"
                  />
                  <label htmlFor="image">Input Url Image Profile :</label>
                  <input
                    onChange={(e) => {
                      setTempUser({ ...tempUser, image: e.target.value });
                    }}
                    type="url"
                    name="image"
                    id="image"
                    value={tempUser?.image || ''}
                    className="text-black pl-2 rounded"
                  />
                  <div className="flex">
                    <button
                      type="submit"
                      className="bg-green-500 w-16 p-1 rounded font-medium mt-2 text-white hover:bg-green-600"
                      onClick={() => {
                        handleUpdate();
                        setIsEdit(false);
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="bg-red-500 p-1 w-16 mt-2 ml-4 rounded font-medium  text-white hover:bg-red-600"
                      onClick={() => {
                        setTempUser({ ...dataUser });
                        setIsEdit(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="name">
                    Name <span className="ml-7">:</span> <span className="ml-4 ">{dataUser?.nama !== null ? dataUser?.nama : ''}</span>
                  </div>
                  <div className="email">
                    Email <span className="ml-8">:</span> <span className="ml-4">{dataUser?.email !== null ? dataUser?.email : ''}</span>
                  </div>
                  <div className="alamat">
                    Address <span className="ml-3">:</span> <span className="ml-4">{dataUser?.alamat !== null ? dataUser?.alamat : ''}</span>
                  </div>
                  <div className="alamat">
                    telp <span className="ml-11">:</span> <span className="ml-4">{dataUser?.nomorHp !== null ? dataUser?.nomorHp : ''}</span>
                  </div>
                </>
              )}
            </div>
            <div className="col-span-3">
              {!isEdit && (
                <>
                  <button className="bg-green-500 p-1 rounded font-medium m-2 text-white hover:bg-green-600" onClick={() => setIsEdit(true)}>
                    EDIT
                  </button>
                  <button className="bg-red-500 p-1 rounded font-medium m-2 text-white hover:bg-red-600" onClick={() => handleLogout()}>
                    LOGOUT
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
