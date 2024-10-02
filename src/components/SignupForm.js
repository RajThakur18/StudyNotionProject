import React, { useState } from "react"
import toast from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
const SignupForm = ({setIsLoggedIn}) =>{
    const [formdata,setFormdata] = useState(
        {   firstname:"",
            lastname:"",
            email:"",
            password:"",
            confirmpassword:""
        }
    )
    const[showpassword,setShowPassword] = useState(false);
    const[confirmpassword,setConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const[accounttype,setAccounttype] = useState("student");

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
        if(formdata.password!=formdata.confirmpassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formdata
        };
        console.log("printing account data ");
        console.log(accountData);
        navigate('/dashboard');

    }
    return(
        <div >
            {/* Student instructor tab */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
            <button
            className={`${accounttype === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccounttype("student")}>
                Student
            </button>

            <button
            className={`${accounttype === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccounttype("instructor")}>
                Instructor
            </button>
            </div>
            <form onSubmit={submitHandler}>
                {/* It contains firstname and lastname */}
                <div className="flex justify-between gap-x-4 mt-[20px]">
                <label  className="w-full ">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">First name
                        <sup className="text-pink-200">*</sup></p>
                    <input
                            required 
                            type="text"
                            name="firstname"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formdata.firstname}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
                           
                        />
                </label>

                <label className="w-full ">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Last name
                        <sup className="text-pink-200">*</sup></p>
                    <input 
                    required
                    type="text"
                    name="lastname"
                    value={formdata.lastname}
                    onChange={changeHandler}
                    
                    placeholder="Enter your last name:"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
                    />
                </label>
                </div>

               <div className="mt-[20px]">
               <label className="w-full  ">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Email Address
                        <sup className="text-pink-200">*</sup></p>
                    <input 
                    required
                    type="email"
                    name="email"
                    onChange={ changeHandler}
                    value={formdata.email}
                    placeholder="Enter your email:"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
                    />
                </label>
               </div>

               <div className="flex justify-between gap-x-4 mt-[20px]">

               <label className=" w-full relative ">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Create Password
                        <sup className="text-pink-200">*</sup></p>
                    <input 
                    required
                    type={showpassword  ? ("text"):("password")}
                    name="password"
                    onChange={ changeHandler}
                    value={formdata.password}
                    placeholder="Enter your password:"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowPassword((prev)=>!prev)}>
                    {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                </label>

                <label className=" w-full relative ">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">Confirm Password
                        <sup className="text-pink-200">*</sup></p>
                    <input 
                    required
                    type={confirmpassword ? ("text"):("password")}
                    name="confirmpassword"
                    onChange={ changeHandler}
                    value={formdata.confirmpassword}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer'
                     onClick={() => setConfirmPassword((prev)=>!prev)}>
                    {confirmpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>
                </label>

               </div>
                <button className="bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                    Create Account
                </button>
            </form>
        </div>
    )
}
export default SignupForm