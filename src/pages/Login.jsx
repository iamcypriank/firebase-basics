import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom";
import { loginReducer,  firebaseErrorMessages } from "../utils/form";
import { useReducer, useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import ThirdPartyLogin from "../components/ThirdPartyLogin";

export default function Login(){

    const navigate = useNavigate();

    

    const [ formData , dispatch ] = useReducer(loginReducer,{
        username : '',
        password : '',
    })

    const [ error , updateError ] = useState({
            error : false,
            message : ''
    });

    const { user } = useAuth();
    if(user) return <Navigate to='/' />;

    



    const handleSignin = async()=>{
        try{
            await signInWithEmailAndPassword(auth,formData.username,formData.password);
            navigate('/');

        }catch(err){
            const message = firebaseErrorMessages[err.code] || 'Wrong credentials';
            updateError({ error : true,message})
        }
    }

    return<div 
    className="h-screen flex justify-center items-center">
        <form 
        onSubmit={(e)=>{
            e.preventDefault();
            handleSignin();
        }}
        className="flex flex-col gap-4 p-4 py-10 w-[300px] shadow-[_0_0_10px_0_#0A1D3B] rounded-xl">
             <h1 
            className="font-bold text-center">Firebase basics</h1>

            <Input
            value={formData.username}
            label="Username"
            type="email"
            onChange={(e)=>{
                dispatch({ type : 'username' , value : e.target.value })
            }}
            required={true} 
             />

            <Input
            onChange={(e)=>{
                dispatch({ type : 'password' , value : e.target.value })
            }}
            value={formData.password}
            label="Password" 
            type="password"
            required={true}  
             />


            {/* login-signup buttons */}
           <div 
           className="flex gap-4 self-center">
            <Button
            variant="primary" 
            type="submit" >Login</Button>
           </div>
           <p className="self-center">no account? <Link to="/signup"><span className="text-blue-700">signup</span></Link></p>
            <ThirdPartyLogin ariaLabel="google-login" />
            { error.error && <p className=" text-center text-sm text-red-500">{error.message}</p>}
        </form>
    </div>
}