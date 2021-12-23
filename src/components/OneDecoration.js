import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


import './OneDecoration.css';

function OneDecoration({match, token, user}) {
    // console.log(match)
    const [date, setDate] = useState('');
    const [decoration, setDecoration] = useState({});
    const history = useHistory();
    useEffect(()=> {
        getOneDecoration()
    }, []);

    const getOneDecoration = async ()=>{
        // console.log(token,"kkkkkk");
        const response = await axios.get(`http://localhost:5000/decoration/${match.params.id}`, { headers: { authorization: `Bearer ${token}` } })
        setDecoration(response.data);
        // console.log(response.data);
    }


    const postReserve = async (decorationId) => {
      // console.log(decorationId, user._id)
      if(date){ 
        try {
          const response = await axios.post("http://localhost:5000/reservation", {
            decorationId,
            userId: user._id,
            date: new Date()
          },
            { headers: { authorization: `Bearer ${token}` } }
          )
          if(response.status===201){
            history.push('/decoration')
            console.log('reservation is done')
          }
          
        } catch (error) {
          console.log(error)
        }
      }
    }

    return (
        <div className='decoration-item-container'>
            <div className='decoration-item'>
              <div className='decoration-img'>
                <img src={decoration.img} width={500} alt={decoration.name} />
              </div>
              <div className='decoration-info'>
                <h5>Name : {decoration.name}</h5>
                <p>Description : {decoration.description}</p>
                <label>Choose date: </label>
                <input type='date' onChange={(e)=> setDate(e.target.value)} />
                <button onClick={()=> postReserve(decoration._id)}>RESERVE</button>
              </div>
              </div>
        </div>
    )
}

export default OneDecoration
