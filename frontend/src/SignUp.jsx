import NavBar from "./NavBar"
import { User } from 'lucide-react'
import { KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react';
import { UserPen } from 'lucide-react'
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";
const SignUp = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);
    const[formData,setformData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const handlePassword = () => {
        setshowPassword((password) => !password)

    }
    const handleConfirmPassword = () => {
        setshowConfirmPassword((confirmpassword) => !confirmpassword)

    }
    const handleChange=(event)=>{
      
        setSuccess("")
        setformData((formData)=>({
            ...formData,
            [event.target.name]:event.target.value
        }))
        setErrors((errors)=>({
            ...errors,
            [event.target.name]:""
        }))

    }
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const handleSubmit=(event)=>{
        event.preventDefault();
        let newErrors={}
           if(! formData.fullName){
          newErrors.fullName="Please enter your Name"
           }
           if(!formData.email){
            newErrors.email="Please enter your email"
           }
           if(!formData.password){
            newErrors.password="Please enter your password"
           }
         if(!formData.confirmPassword){
            newErrors.confirmPassword="Please confirm your password"
         }else if(formData.password != formData.confirmPassword){
            newErrors.confirmPassword="Your passwords did not match"
         }
         if(Object.keys(newErrors).length>0){
            setErrors(newErrors)
         }   else{
            setSuccess("Your account is created successfully")
            setformData({
                fullName:"",
                email:"",
                password:"",
                confirmPassword:""
            })
        }

         }    
          // if(!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword){
        //     setError("Please fill all the fields")
        // }
        // else if(formData.password != formData.confirmPassword){
        //     setError("Your password did not match")

        // }
        // else{
        //     setSuccess("Your account is created successfully")
        //     setError('')
        //     setformData({
        //         fullName:"",
        //         email:"",
        //         password:"",
        //         confirmPassword:""
        //     })
        // }
    
    const [errors,setErrors]=useState({
        fullName:"",
        email:"",
        password:"",
    confirmPassword:""
    })
    
    return (
        <div className="flex   items-center flex-col  ">
            <NavBar />
            <h1 className="text-3xl text-blue-700 font-bold mt-5">Join BlogVerse</h1>
            <p className="text-l text-gray-700 text-center">Create your account and <br ></br>
                start your Blogging journey today</p>
            <form  onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-1/4 py-0.5  mt-8 gap-3 items-center rounded-3xl">
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p className="font-semibold text-md text-gray-700">Full Name </p>
                    <div className="relative">
                        <input 
                    
                        value={formData.fullName}
                        onChange={handleChange} 
                        name="fullName"
                        type="text" placeholder="Enter your Full Name"
                            className="border-1  border-gray-700 w-full pl-10
                    py-2 px-3 rounded-xl focus:outline-none focus:border-purple-500" />
                        <UserPen className="absolute top-2 left-3 text-gray-400" />

                    </div>
                    {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}
                </div>
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="font-semibold text-md text-gray-700">Email </p>
                    <div className="relative">
                        <input 
                    
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                                 type="email" placeholder="Enter your email"
                            className="border-1  border-gray-700 w-full pl-11
                    py-2 pr-3 rounded-xl focus:outline-none focus:border-purple-500" />
                        <Mail className="absolute top-3 left-3 text-gray-400" />
                    </div>


                </div>
                {errors.email && <p className="text-red-600">{errors.email}</p>}
                <div className="w-[90%] flex flex-col gap-2 ">
                    <p className="font-semibold text-md text-gray-700">Password </p>
                    <div className="relative">
                        <input 
                       
                        value={formData.password}
                        onChange={handleChange} 
                        name="password" 
                        type={showPassword?"password":"text"} placeholder="Enter your Password"
                            className="border-1  border-gray-700 w-full pl-10
                    py-2 pr-3 rounded-xl  focus:outline-none focus:border-purple-500" />
                        <KeyRound className="absolute  top-3 left-3 text-gray-400 " />
                        <p onClick={handlePassword}>{showPassword ? <EyeOff className="absolute right-3 top-3 text-gray-500" /> : <Eye className="absolute right-3 top-3 text-gray-500" />}</p>
                    </div>


                </div>
                {errors.password && <p lassName="text-red-600">{errors.password}</p>}
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="font-semibold text-md text-gray-700">Confirm Password</p>
                    <div className="relative">
                        <input
                     
                        value={formData.confirmPassword}
                        onChange={handleChange} 
                        name="confirmPassword"
                        type={showConfirmPassword?"password":"text"} placeholder="Confirm your Password"
                            className="border-1  border-gray-700 w-full pl-10
                    py-2 pr-3 rounded-xl focus:outline-none focus:border-purple-500" />
                        <KeyRound className="absolute  top-3 left-3 text-gray-400 " />
                        <p onClick={handleConfirmPassword}>{showConfirmPassword ? <EyeOff className="absolute right-3 top-3 text-gray-500" />
                            : <Eye className="absolute right-3 top-3 text-gray-500" />}</p>
                    </div>

                </div>
                {errors.confirmPassword && <p lassName="text-red-600">{errors.confirmPassword}</p>}
                <div className="flex gap-2 border-1 border-b-gray-800 w-[90%] px-3 py-2 rounded-xl items-center justify-center">
                    <input type="checkbox"
                        className="h-3 w-5  "

                    />
                    <p>I agree to the Terms of Service and Privacy Policy</p>
                </div>
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}

                <button type="submit" className="bg-purple-600 py-4 w-[90%] text-white rounded-xl font-semibold cursor-pointer flex justify-center gap-5">  <User className="text-black" /><p>Create Account</p></button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-2"></div>
                <p className="text-gray-700 font-semibold cursor-pointer">Already have an Account?
                    <Link to="/SignIn" className="text-purple-500 cursor-pointer">Sign In here</Link></p>
                <button className="text-gray-500 font-semibold hover:bg-gray-200 py-0.5 w-[90%] rounded-xl ccursor-pointer">Back to Home </button>


            </form>
        </div>
    )
}
export default SignUp