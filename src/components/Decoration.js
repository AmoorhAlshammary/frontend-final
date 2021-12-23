import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import './Decoration.css';

export default function Decoration({ token, user }) {
  const history = useHistory()
  const [data, setData] = useState([]);

  useEffect(() => {
      getData();
  }, []);


  const getData = async () => {
    // console.log(token,"kkkkkk");
    if(token){
      const response = await axios.get("http://localhost:5000/decoration", { headers: { authorization: `Bearer ${token}` } })
      setData(response.data);
      // console.log(respone.data);
    }else{
      history.push('/login')
    }
  }

 


  return (
    <>
      <div className="top-btn">
        {token && user.isAdmin && <Link className="add-link" to='/decoration/add'>add</Link>}
      </div>
    
      <div className="decoration-grid" >
        {!data.length && <h1>no data</h1>}
        {token  && data.map((element, i) => {
          return (
            <div key={element._id} className={["gallery-item", `w-${i%2 ? 4 : 2}`, `h-${i%2 ? 2 : 2}`].join(' ')} >
              <Link to={`/decoration/${element._id}`} >
                
                <div className="image">
                  <img src={element.img} alt={element.name} />
                </div>
                <div className="text">
                  {element.name}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>

  )
}

