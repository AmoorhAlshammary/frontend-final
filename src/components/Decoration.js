import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Decoration({token ,userId}) {
    
//   const history = useHistory()

  const [data, setData] = useState([])
  
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("")
  useEffect(() => {
    const getData = async () => {

        console.log(token,"kkkkkk");
        const respone = await axios.get("http://localhost:5000/decoration" , {headers: { authorization: `Bearer ${token}` }})
        setData(respone.data); 
        // console.log(respone.data);
    }
    getData();
  }, [])

  const postdecoration = async () => {
      const respone = await axios.post("http://localhost:5000/decoration" , {
        name: name , 
        description: description ,
        img: img,
      },
      {headers: { authorization: `Bearer ${token}` }}
      )
  
      setData(respone.data)
    }


    return (
      <div id="container">

    {data && data.map((element , i) => {
      return <div key = {i} id="decoration-all">
      <div key ={i} id="decoration">
      <div id="element">
      <h5>{element.name}</h5> 
      <p>{element.description}</p>
      </div>

      <img id="imgdecoration" src={element.img} width={200}
            height={200} alt="Javascript"></img>
      <button className="button" onClick={()=>{postdecoration()}}>ADD</button>
    
      </div>
      <h4>{element.price} S.R</h4> 
     
      </div> })}
      </div>

    )
    }


    

  