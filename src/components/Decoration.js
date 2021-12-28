import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import './Decoration.css';

export default function Decoration({ token, user }) {
  const history = useHistory()
  const [data, setData] = useState([]);

  useEffect(() => {
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
    getData();
  }, []);



 


  return (
    <div className="gallery-container">
    
      <div className="decoration-grid" >
        {data.length ? data.map((element, i) => {
            return (
              <div key={element._id} className={"gallery-item h-2"} >
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
          })
          :
          <h1>NO DECORATIONS</h1>
        }
      </div>
    </div>

  )
}




