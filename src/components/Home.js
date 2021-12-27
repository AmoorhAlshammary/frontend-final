import { useHistory } from 'react-router-dom';
import sample from '../assets/videos/background_video.mp4';

import './Home.css';



export default function Home() {
    const history = useHistory();
    const gotToDecoration = ()=>{
        history.push('/decoration');
    }
    return (
        <div>
           <video className='videoTag' autoPlay loop muted >
                <source src={sample} type='video/mp4' />
                <source src={sample} type="video/ogg" />
               your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>Amirah for Decorations</h1>
                <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
                <button id="myBtn" onClick={gotToDecoration}>SEE MORE</button>
            </div>
        </div>
    )
}
