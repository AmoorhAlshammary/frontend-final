import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


export default function UserReservation({ token, user }) {
  const history = useHistory()
  const [data, setData] = useState([]);
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
    // eslint-disable-next-line
  }, []);



 


  return (
      // https://getbootstrap.com/docs/5.1/utilities/spacing/
      // https://getbootstrap.com/docs/5.1/layout/grid/
      <div class="container mt-5 pt-5">
        <div class="row">
          {data.map((element, i) => {
              return (
                // https://getbootstrap.com/docs/5.1/components/card/
                  <div key={element._id} className="card m-2" style={{width: 300}}>
                    <img src={element.decoration.img} className="card-img-top" alt={element.decoration.name} />
                    <div className="card-body">
                      <h5 className="card-title">{element.decoration.name}</h5>
                      <p className="card-text">{element.user.email}</p>
                      <Link className="btn btn-primary" to={`/decoration/${element.decoration._id}`} >Open</Link>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </div>

  )
}




