import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Daftar = () => {
  useEffect(() =>{
    if(localStorage.getItem("userLogin")){
        navigate('/')
    }
},[])
  const [daftar ,setDaftar] = useState({
    username: '',
    password: '',
    nama: '',
    email: ''
  })
  const navigate = useNavigate();
  const handleDaftar = (e) =>{
    setDaftar({...daftar, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/auth/signup',{
      username : daftar.username,
      password: daftar.password,
      nama: daftar.nama,
      email: daftar.email
    })
    .then(respone => {
      console.log(respone)
      if(respone.status === 200){
          navigate('/')
      }
  })
  .catch(err => console.log(err))
  }
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className=" border border-sky-500 h-auto w-80 p-4 rounded">
          <h1 className="font-bold text-3xl">DAFTAR</h1>
          <form onSubmit={handleSubmit} method="POST" className="flex flex-col">
            <label htmlFor="name" className="mt-6">
              Name
            </label>
            <input onChange={handleDaftar} type="text" name="nama" id="name" className="border-2 rounded p-1 border-black" required/>
            <label htmlFor="email">Email</label>
            <input onChange={handleDaftar} type="email" name="email" id="email" className="border-2 rounded p-1 border-black" required/>
            <label htmlFor="username">Username</label>
            <input onChange={handleDaftar} type="text" name="username" id="username" className="border-2 rounded p-1 border-black" required/>
            <label htmlFor="password">Password</label>
            <input onChange={handleDaftar} type="password" name="password" id="password" className="border-2 rounded p-1 border-black" required/>
            <button type="submit" className="border-2 bg-green-600 text-white py-1 rounded mt-2 hover:bg-green-700">
              Submit
            </button>
          </form>
          <span>
            have account? <Link to='/login'><span className="text-sky-700 ">Login</span></Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
