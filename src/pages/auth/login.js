import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate()
    useEffect(() =>{
        if(localStorage.getItem("userLogin")){
            navigate('/')
        }
    },[navigate])

    
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState(false);
    const handleLogin = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
          const {data} =  await axios.post('http://localhost:8080/auth/signin', {
                username : login.username,
                password : login.password
            })
            console.log(data)
            localStorage.setItem("userLogin", JSON.stringify(data))
            setError(false)
            navigate('/')
        }catch(e){
            console.log(e)
            setError(true)
        }
        // axios.post('http://localhost:8080/auth/signin', {
        //     username : login.username,
        //     password : login.password
        // })
        // .then(respone => {
        //     localStorage.setItem("userLogin",JSON.stringify(respone))
        //         setError(false)
        //         navigate('/')
        // })
        // .catch(err =>{
        //     setError(true)
        // })
    }

    return(
        <div className="h-screen flex justify-center items-center">
            <div className=" border border-sky-500 h-1/2 w-80 p-4 rounded">
            <h1 className="font-bold text-3xl">LOGIN</h1>
            {error && <div className="border-2 border-red-600 p-2 mt-2"><span>username/password salah</span></div>}
            <form onSubmit={handleSubmit} method="POST" className="flex flex-col">
                <label htmlFor="username" className="mt-6">Username</label>
                <input onChange={handleLogin} type="text" name="username" id="username" className="border-2 rounded p-1 border-black" required/>
                <label htmlFor="password" >Password</label>
                <input onChange={handleLogin} type="password" name="password" id="password" className="border-2 rounded p-1 border-black" required/>
                <button type="submit" className="border-2 bg-green-600 text-white py-1 rounded mt-2 hover:bg-green-700">Submit</button>
            </form>
            <span>Not have account? <Link to='/daftar'><span className="text-sky-700 ">Daftar</span></Link></span>
            </div>
        </div>
    )
}

export default Login;