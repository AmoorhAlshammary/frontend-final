import {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


import './OneDecoration.css';

function OneDecoration({token, user}) {
    const { id } = useParams();
    // console.log(id);
    const [decorationId, setDecorationId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')
    const [isReserved, setIsReserved] = useState(false)
    const [reserveStatus, setReserveStatus] = useState(false);
    const [reservations, setReservations] = useState([]);

    const history = useHistory();

    useEffect(()=> {
      const getOneDecoration = async ()=>{
          if(token){
            // console.log(token,"kkkkkk");
            const response = await axios.get(`http://localhost:5000/decoration/${id}`, { headers: { authorization: `Bearer ${token}` } });
            // console.log(response.data);
            if(response.status===200){
              const { reservations, oneDecoration } = response.data;
              setDecorationId(oneDecoration._id);
              setName(oneDecoration.name);
              setDescription(oneDecoration.description);
              setImg(oneDecoration.img);
              setPrice(oneDecoration.price);
              setReservations(reservations);
              setIsReserved(reservations.some(reservation => reservation.decoration === oneDecoration._id));
            }
            
          }else{
            history.push('/login');
          }
      }
        getOneDecoration();
    },[reserveStatus]);
     



    const postReserve = async () => {
      // console.log(decorationId, user._id)
        try {
          const response = await axios.post("http://localhost:5000/reservation", {
            decorationId: decorationId,
            userId: user._id,
            date: new Date()
          },
            { headers: { authorization: `Bearer ${token}` } }
          )
          if(response.status===201){
            // show alert done with reservation
            alert('reservation is done')
            setReserveStatus(!reserveStatus);
          }
          
        } catch (error) {
          console.log(error)
        }
    }

    const cancelReservation = async () => {
                                                                  //  استخراج ال idالخاص بالحجز
        try {
          const reservationId = reservations.find(reservation=> reservation.decoration === decorationId && reservation.user === user._id)._id
          const response = await axios.delete(`http://localhost:5000/reservation/${reservationId}`,
            { headers: { authorization: `Bearer ${token}` } }
          )
          if(response.status===201){
            // show alert done with reservation
            alert(`done cancelling reservation for decoration :  ${name}`)
            setReserveStatus(!reserveStatus);
          }
          
        } catch (error) {
          console.log(error)
        }
    }



    // admin functions
    const updateDecoration = async ()=>{
      try {
        const response = await axios.put('http://localhost:5000/decoration',{
          id: decorationId,
          name,
          description,
          img,
          price
        },
        {headers: {authorization: `Bearer ${token}`}}
        )
        if(response.status===201){
          // show alert update done
          alert(`Decoration : ${name} updated successfully`)
        }
      } catch (error) {
        console.log(error);
      }
    }

    const deleteDecoration = async ()=>{
      try {
        const response = await axios.delete(`http://localhost:5000/decoration/${decorationId}`,
        {headers: {authorization: `Bearer ${token}`}}
        )
        if(response.status===201){
          // show alert update done
          alert(`Decoration : ${response.data.name} deleted successfully with all reservations`)
          history.push('/decoration')
        }
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <div className='decoration-item-container'>
            <div className='decoration-item'>
              <div className='decoration-img'>
                <img src={img} alt={name} />
              </div>
              <div className='decoration-info'>
                {user.isAdmin ?
                  <>
                    <h3>Update Decoration</h3>
                    <input type="text" value={name} placeholder='Name' onChange={(e)=> setName(e.target.value)} />
                    <input type="text" value={description} placeholder='Decoration' onChange={(e)=> setDescription(e.target.value)} />
                    <input type="text" value={img} placeholder='Image URL' onChange={(e)=> setImg(e.target.value)} />
                    <input type="number" value={price} placeholder='price' onChange={(e)=> setPrice(e.target.value)} />
                    <button onClick={()=>updateDecoration()}>UPDATE</button>
                    <button onClick={()=>deleteDecoration()}>DELETE</button>
                  </>
                  :
                  <>
                    <h5>Name : {name} {isReserved ? 'reserved' : null }</h5>
                    <p>Description : {description}</p>
                    {isReserved ? 
                      <button onClick={ ()=>cancelReservation() }>CANCEL</button> 
                      :
                      <button onClick={ ()=>postReserve() }>RESERVE</button>
                    }
                  </>
                }
              </div>
            </div>
        </div>
    )
}

export default OneDecoration
