import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useReducer, useState } from "react";
import { singupReducer , firebaseErrorMessages } from "../utils/form";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import ThirdPartyLogin from "../components/ThirdPartyLogin";
import { useAuth } from "../contexts/AuthContext";


export default function Signup(){

    

    const navigate = useNavigate();

    const [ formData , dispatch ] = useReducer(singupReducer,{
        username : '',
        password : '',
        confirmPassword : ''
    })

    const [ error , updateError ] = useState({
        error : false,
        message : ''
    });


    const  { user } = useAuth();
    if(user) return <Navigate to='/' />
    //handle submission
    const handleSignup = async()=>{
        updateError({error : false , message :''})
        if(formData.password==formData.confirmPassword){
            try{
                await createUserWithEmailAndPassword(auth,formData.username,formData.password);
                navigate('/');
            }catch(err){
                updateError({error : true,message : firebaseErrorMessages[err.code]});
            }
        }else{
            updateError({error : true, message : 'Password does not match'})
        }
    }


    return (
        <div 
        className="h-screen flex justify-center items-center">
        <form
        onSubmit={(e)=>{
            e.preventDefault();
            handleSignup();
        }}
        className="flex flex-col gap-4 p-4  py-8 w-[300px]  shadow-[_0_0_10px_0_#E8E8E8] rounded-xl"
        >
            <h1 
            className="font-bold text-center">Firebase basics</h1>
            <Input
            type="email"
            label="Email"
            value={formData.username}
            onChange={(e)=>{
                dispatch({ type : 'username' , value : e.target.value })
            }}

            required={true} />

            <Input
             type="password"
             label="Password" 
             value={formData.password}
             onChange={(e)=>{
                dispatch({ type : 'password' , value : e.target.value })
            }}
              required={true}
            />

            <Input 
            type="password"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e)=>{
                dispatch({ type : 'confirmPassword' , value : e.target.value })
            }}
             required={true}
            />


            <div 
           className="flex gap-4 self-center">
            <Button
            variant="primary" 
            type="submit" >Signup</Button>
           </div>
           <p className="text-center">already have an account?<Link to="/"><span className="text-blue-700"> login</span></Link></p>
           <ThirdPartyLogin />
           { error.error && <p  className=" text-center text-sm text-red-500">{error.message}</p>}
        </form>
        </div>
    )
}