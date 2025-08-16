import { Link } from "react-router-dom"

export default function Error(){
    return(
        <div 
        className="h-screen flex flex-col gap-2 justify-center items-center">
            <h1 
            className="font-bold text-5xl ">Oops...</h1>
            <p>resource doesnt exit</p>
            <p>return to <span className="text-blue-700"><Link>home</Link></span></p>
        </div>
    )
}