import  googleIcon from '../assets/logo/google.svg';
import Button from './Button';
import { auth } from '../config/firebase';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import { firebaseErrorMessages } from '../utils/form';
import { useNavigate } from 'react-router-dom';

export default function ThirdPartyLogin(){

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleGoogleLogin = async()=>{
        try{
            await signInWithPopup(auth,googleProvider);
            navigate('/');

        }catch(err){
            console.log(firebaseErrorMessages[err.code] || 'something went wrong');
        }
    }
    
    return <div className='flex flex-col gap-4'>
        <div 
        className='flex items-center gap-4'>
            <hr className='flex-grow border-gray-200 border-1'/>
            <p>or</p>
            <hr className='flex-grow border-gray-200 border-1' />
        </div>
       
            <Button
            ariaLabel="google-login"
            variant="thirdPartyLoginButton"
            type="button"
            onClick={handleGoogleLogin}
            >
                <img
                className='h-5' 
                src={googleIcon} alt="" />
            </Button>
    </div>
}