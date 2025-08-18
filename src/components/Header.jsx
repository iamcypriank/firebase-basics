import Button from "./Button";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CircleUser,Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";


export default function Header(){

    const { theme, setTheme } = useTheme();

    const navigate = useNavigate();
    const handleLogout = async ()=>{
        try{
            await signOut(auth);
            navigate('/login');
        }catch(err){
            throw Error('something went wrong! ',err.message);
        }
    }
    
    function handleTheme(){
        if(theme=='light') setTheme('dark');
        if(theme=='dark') setTheme('light');
    }
    return <header 
    className="p-4 flex justify-between border-b-[1px] border-gray-300 dark:border-gray-700">
        <div 
        className="self-center">
            <h1 
            className="font-bold">Firebase Basics</h1>
        </div>
        <div 
        className="flex gap-4 items-center">
        <div className="flex gap-2 ">
            <Button 
            type="normal"
            onClick={handleTheme}
            > { theme!='dark' ? <Moon className="" size={16} /> :  <Sun className="" size={16} /> } </Button>
        </div>
        <nav 
        className="font-medium">
            <Link to='/profile'> Profile</Link>
        </nav>
        <div>
            <Button
            size="small"
            type="button"
            variant="primary" 
            onClick={handleLogout}
            >Logout</Button>
        </div>
        </div>
    </header>
}