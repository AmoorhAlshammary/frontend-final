import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


import './OneDecoration.css';

function OneDecoration({match, token, user}) {
    // console.log(match)
    const [reserveStatus, setReserveStatus] = useState(false);
    const [date, setDate] = useState('');
    const [reservations, setReservations] = useState([]);
    const [decoration, setDecoration] = useState({id:'',name:'', description:'', img:'', price:0, isReserved: false});

    const history = useHistory();
    useEffect(()=> {
      const getOneDecoration = async ()=>{
          if(!token){
            history.push('/login');
            return;
          }
          // console.log(token,"kkkkkk");
          const response = await axios.get(`http://localhost:5000/decoration/${params.id}`, { headers: { authorization: `Bearer ${token}` } });
          // console.log(response.data);
          if(response.status===200){
            const { reservations, oneDecoration } = response.data;
            setReservations(reservations);
            setDecoration({
              id:oneDecoration._id,
              name: oneDecoration.name,
              description: oneDecoration.description,
              img: oneDecoration.img,
              price: oneDecoration.price,
              // isReserved: reservations.some(reservation => reservation.decoration === oneDecoration._id)
            });
            // console.log(decoration)
          }
      }
        getOneDecoration();
    }, [reserveStatus]);

    // useEffect(() => {
    //   if(decoration.isReserved){
    //     const reserved = reservations.find(reservation => reservation.decoration === decoration.id)
    //     const d = new Date(reserved.date);
    //     const mm = (d.getMonth() < 10) ? "0" + (d.getMonth()+1).toString() : d.getMonth()+1;
    //     const dd = (d.getDate() < 10) ? "0" + d.getDate().toString() : d.getDate();
    //     const yy = d.getFullYear();
    //     setDate(prevState => yy + '-' + mm + '-' + dd)
    //   }
    // }, [decoration])



    const postReserve = async () => {
      // console.log(decoration._id, user._id)
      if(date){ 
        try {
          const response = await axios.post("http://localhost:5000/reservation", {
            decorationId: decoration.id,
            userId: user._id,
            date: new Date(date)
          },
            { headers: { authorization: `Bearer ${token}` } }
          )
          if(response.status===201){
            // show alert done with reservation
            alert('reservation is done')
            setReserveStatus(!prevState);
            // console.log('reservation is done')
          }
          
        } catch (error) {
          console.log(error)
        }
      }
    }

    // const updateReservation = async () => {
    //   // console.log(decoration._id, user._id)
    //   if(date){ 
    //     try {
    //       const response = await axios.put("http://localhost:5000/reservation", {
    //         reservationId: reservations.find(reservation=> reservation.decoration === decoration.id && reservation.user === user._id)._id,
    //         decorationId: decoration.id,
    //         userId: user._id,
    //         date: new Date(date)
    //       },
    //         { headers: { authorization: `Bearer ${token}` } }
    //       )
    //       if(response.status===201){
    //         // show alert done with reservation
    //         alert(`done updating reservation ${decoration.name}`)
    //         setReserveStatus(prevState=> (!prevState));
    //         // console.log('reservation is done')
    //       }
          
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    // }

    const cancelReservation = async () => {

        try {
          const reservationId = reservations.find(reservation=> reservation.decoration === decoration.id && reservation.user === user._id)._id
          const response = await axios.delete(`http://localhost:5000/reservation/${reservationId}`,
            { headers: { authorization: `Bearer ${token}` } }
          )
          if(response.status===201){
            // show alert done with reservation
            alert(`done cancelling reservation ${decoration.name}`)
            setReserveStatus(prevState=> (!prevState));
            // console.log('reservation is done')
          }
          
        } catch (error) {
          console.log(error)
        }
    }



    // admin functions
    const updateDecoration = async ()=>{
      try {
        const response = await axios.put('http://localhost:5000/decoration',{
          id: decoration.id,
          name: decoration.name,
          description: decoration.description,
          img: decoration.img,
          price: decoration.price
        },
        {headers: {authorization: `Bearer ${token}`}}
        )
        if(response.status===201){
          // show alert update done
          alert(`Decoration : ${decoration.name} updated successfully`)
        }
      } catch (error) {
        console.log(error);
      }
    }

    const deleteDecoration = async ()=>{
      try {
        const response = await axios.delete(`http://localhost:5000/decoration/${decoration.id}`,
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
                <img src={decoration.img} alt={decoration.name} />
              </div>
              <div className='decoration-info'>
                {token && user.isAdmin &&
                  <>
                    <h3>Update Decoration</h3>
                    <input type="text" value={decoration.name} placeholder='Decoration Name' onChange={(e)=> setDecoration(prevState => ({...prevState, name: e.target.value}))} />
                    <input type="text" value={decoration.description} placeholder='Decoration Description' onChange={(e)=> setDecoration(prevState => ({...prevState, description: e.target.value}))} />
                    <input type="text" value={decoration.img} placeholder='Decoration Image URL' onChange={(e)=> setDecoration(prevState => ({...prevState, img: e.target.value}))} />
                    <input type="number" value={decoration.price} placeholder='Decoration price' onChange={(e)=> setDecoration(prevState => ({...prevState, price: e.target.value}))} />
                    <button onClick={updateDecoration}>UPDATE</button>
                    <button onClick={deleteDecoration}>DELETE</button>
                  </>
                }
                {token && !user.isAdmin && 
                  <>
                    <h5>Name : {decoration.name} {decoration.isReserved && 'reserved' }</h5>
                    <p>Description : {decoration.description}</p>
                    <label>Choose date: </label>
                    <input type='date' value={date} onChange={(e)=> setDate(prevState => e.target.value)} />
                    <button onClick={decoration.isReserved ? updateReservation : postReserve}>{decoration.isReserved ? "UPDATE" : "RESERVE"}</button>
                    {decoration.isReserved &&  <button onClick={ cancelReservation }>CANCEL</button>}
                    
                  </>
                }
              </div>
              </div>
        </div>
    )
}

export default OneDecoration
