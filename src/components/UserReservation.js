import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import './Decoration.css';

export default function UserReservation({ token, user }) {
  const history = useHistory()
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      // console.log(token,"kkkkkk");
      if(token){
          try {
              const response = await axios.get(`http://localhost:5000/reservation/${user._id}`, { headers: { authorization: `Bearer ${token}` } })
              setData(response.data);
            //   console.log(response.data);
          } catch (error) {
              console.log(error)
          }
      }else{
        history.push('/login')
      }
    }
    getData();
  }, []);



 


  return (
    <div className="gallery-container">
    
      <div className="decoration-grid" >

        {/* {data && !data.length && <h1>no data</h1>} */}
        {token && data && data.length && data.map((element, i) => {
          return (
            <div key={element._id} className={"gallery-item h-2"} >
              <Link to={`/decoration/${element.decoration._id}`} >
                
                <div className="image">
                  <img src={element.decoration.img} alt={element.name} />
                </div>
                <div className="text">
                  {element.user.email}
                  <br />
                  {new Date(element.date).toLocaleDateString()}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>

  )
}




