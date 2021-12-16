import React from 'react'
import { useHistory } from 'react-router-dom';



export default function Home() {
    const hestory = useHistory()
    const login=()=>{
        hestory.push("/login")
    }
    return (
        <div>
           
           
            <div className="home">
               <p>الاميره للديكور </p>
    
            </div>
        </div>
    )
}
