import Button from "./Button";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Header(){

    const navigate = useNavigate();
    console.log('working perfeclty fine');
    const handleLogout = async ()=>{
         console.log('working outside function');
        try{
            await signOut(auth);
            navigate('/login');
        }catch(err){
            console.log('working');
            throw Error('something went wrong! ',err.message);
        }
    }
    return <header>
        <div>
            <h1>Firebase Basics</h1>
        </div>
        <nav>

        </nav>
        <div>
            <Button
            type="button"
            variant="primary" 
            onClick={handleLogout}
            >Logout</Button>
        </div>
    </header>
}