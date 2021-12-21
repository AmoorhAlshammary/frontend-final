import React from 'react'
import { useHistory } from 'react-router-dom';
import sample from '../assets/videos/background_video.mp4';

import './Home.css';



export default function Home() {
    const hestory = useHistory()
    const login=()=>{
        hestory.push("/login")
    }
    return (
        <div>
           <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
                <source src={sample} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="home">
               <p>الاميره للديكور </p>
    
            </div>
        </div>
    )
}
