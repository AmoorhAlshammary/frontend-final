import { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


function AddDecoration({token}) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')

    const history = useHistory(); 

    const postDecoration = async ()=>{
        const response = await axios.post("http://localhost:5000/decoration", {
            name,
            description,
            price,
            img,
          },
            { headers: { authorization: `Bearer ${token}` } }
          )
          if(response.status === 201){
            history.push("/decoration");
          }

    }
    return (
          <div className='container mb-2row'>
            <h2>ADD DECORATION</h2>
            <input type='text' className='form-controlcol-5 mb-9'  placeholder='name' onChange={(e)=> setName(e.target.value)} />
            <input type='text' className='form-controlcol-5 mb-9' placeholder='description' onChange={(e)=> setDescription(e.target.value)} />
            <input type='number' className='form-controlcol-5 mb-9' placeholder='price' onChange={(e)=> setPrice(e.target.value)} />
            <input type='text' className='form-controlcol-5 mb-9' placeholder='image url' onChange={(e)=> setImg(e.target.value)} />
            <button className='btn btn-primary' onClick={()=> postDecoration()}>ADD</button>
          </div>
    )
}

export default AddDecoration;
