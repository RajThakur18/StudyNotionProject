import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from 'react-hot-toast'
const LoginForm = ({setIsLoggedIn}) =>{
    const[formdata,setFormdata] = useState(
        { email:'',password:''}
    )
const navigate  = useNavigate();
    const[showpassword,setShowPassword] = useState(false);

    function changeHandler(event){
        setFormdata((prevdata) =>(
            {
                ...prevdata,
            [event.target.name]:event.target.value
            }
        )
    )

    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in");
        navigate('/dashboard')
    }
    return(
        <form className="flex flex-col w-full gap-y-4 mt-6"
         onSubmit={submitHandler}>
            <label className="w-full ">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email address<sup className="text-pink-200">*</sup>
                </p>
                <input 
                required
                type="email"
                name="email"
                value={formdata.email}
                onChange={changeHandler}
                placeholder="Enter your email"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
                />
            </label>

            <label  className="w-full relative ">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading[1.375rem]">
                    Password<sup className="text-pink-200">*</sup>
                </p>
                <input 
                required
                type={ showpassword ? ("text") : ("password")}
                name="password"
                value={formdata.password}
                onChange={changeHandler}
                placeholder="Enter password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
                />
                
                <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showpassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

                <Link to="#">
                <p className="text-xs w-full m-1 text-blue-100 max-w-max ml-auto">
                    Forgot Password
                </p>
                    </Link>
            </label>
            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                Sign in
            </button>
        </form>
    )
}
export default LoginForm