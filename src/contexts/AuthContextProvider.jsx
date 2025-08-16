import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "../components/Loading";


export default function AuthContextProvider({ children }){
    const [ user , setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);


    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })

        return ()=> unsubscribe(); 

    },[])

    return (
        <AuthContext.Provider value={{ user }}>
            { loading && <Loading />}
            { !loading &&  children }
        </AuthContext.Provider>
    )
}