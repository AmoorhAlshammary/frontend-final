import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Decoration({ token, user }) {
  //   const history = useHistory()
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // console.log(token,"kkkkkk");
      const response = await axios.get("http://localhost:5000/decoration", { headers: { authorization: `Bearer ${token}` } })
      setData(response.data);
      // console.log(respone.data);
    }
    getData();
  }, [])

  // const postdecoration = async () => {
  //   const respone = await axios.post("http://localhost:5000/decoration", {
  //     name: name,
  //     description: description,
  //     img: img,
  //   },
  //     { headers: { authorization: `Bearer ${token}` } }
  //   )

  //   setData(respone.data)
  // }

  const postReserve = async (decorationId) => {
    try {
      console.log(decorationId, user._id)
      const response = await axios.post("http://localhost:5000/reservation", {
        decorationId,
        userId: user._id,
        date: new Date()
      },
        { headers: { authorization: `Bearer ${token}` } }
      )
      if(response.status===201){
        console.log('reservation is done')
      }
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div id="container">
      {token && user.isAdmin && <Link to='/decoration/add'>add</Link>}
      {!data.length && <h1>no data</h1>}
      {token  && data.map(element => {
        return (
          <div key={element._id} className="decoration-container">
            <div>
              <div>
                <h5>{element.name}</h5>
                <p>{element.description}</p>
              </div>

              <img src={element.img} width={200} height={200} alt={element.name} />
              <button className="button" onClick={() => { postReserve(element._id) }}>RESERVE</button>

            </div>
            <h4>{element.price} S.R</h4>

          </div>
        )
      })}
    </div>

  )
}




