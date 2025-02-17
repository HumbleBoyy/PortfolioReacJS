import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import Login from "../Login/Login";
import Home from "./home";


const Dashboard = () => {
 
  const [user, setUser] = useState(null)
  const auth = getAuth();


  useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    })
  },[]);



  return (
    <div className="container23">
      {user ? <Home/> : <Login/>}
    </div>
  )
}

export default Dashboard
