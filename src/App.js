import axios from "axios";
import React , {useState ,useEffect} from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route } from "react-router";
import Decoration from "./components/Decoration";
import Reservation from "./components/Reservation";
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.css"
import"./Style.css"
export default function App() {
const [token,setToken]=useState("");
  const [userId, setUserId] = useState("")
 const [name , setName] = useState("")
useEffect(() => { 
     if (!token) {
         const mytoken = JSON.parse(localStorage.getItem("token"))
         const myuserId = JSON.parse(localStorage.getItem("userId"))
        setToken(mytoken)
         setUserId(myuserId)
     }
 }, [])

  
  return (
    <div>
     <Navbar token={token} setToken={setToken} setName = {setName} name = {name} setUserId = {setUserId}></Navbar>

<Route exact path= "/decoration" render={() => {
  return < Decoration token = {token} setToken = {setToken} userId={userId}/>
}} />


<Route exact path= "/login" render={() => (
  <Login token = {token} setToken = {setToken} setName={setName} setUserId={setUserId} />
)
}/>
<Route exact path= "/signup" render={() => (
  <SignUp token = {token} setToken = {setToken} />
)
}/>
{

 <Route exact path= "/reservation/:id" render={() => (
  <Reservation token = {token} userId={userId} />
)
}/> }

 
  <Route exact path= "/reservation" render={() => (
  <Reservation token={token} userId={userId}/>
 )
}/> 


  <Route exact path= "/home" render={() => (
    <Home  />
  )
  }/>
  
   {/* {token} */}
</div>
)
}
// export moddefault App;
