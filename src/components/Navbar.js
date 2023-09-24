import React,{useEffect, useState} from 'react'
import { Link,useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
export default function Navbar() {

 const [expandnav,setexpandnav]=useState("false");
 const location=useLocation();

 useEffect(()=>{
 setexpandnav(false);
 },[location]);

  return (
  <div className="navbar" id={expandnav?"open":"close"}>
    <div className="toggleButton">
     <button onClick={()=>{setexpandnav((prev)=>!prev)}}><ReorderIcon/></button>
    </div>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/footer">Contact</Link>
    </div>
  </div>
  )
}
