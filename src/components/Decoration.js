import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

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
    // eslint-disable-next-line
  }, []);



 


  return (
    // https://getbootstrap.com/docs/5.1/layout/grid/
    <div class="container">
      <div class="row">
        {data.map((element, i) => {
            return (
              // https://getbootstrap.com/docs/5.1/components/card/
                <div key={element._id} className="card m-2" style={{width: 300}}>
                  <img src={element.img} className="card-img-top" alt="" width="350" height="350"/>
                  <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.description}</p>
                    <Link className="btn btn-primary" to={`/decoration/${element._id}`} >Open</Link>
                  </div>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}




