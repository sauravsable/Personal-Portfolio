import React from 'react'
import { Link } from 'react-router-dom';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
     {/* <Link to="https://www.linkedin.com/in/saurav-sable-0b334823b"><LinkedInIcon/></Link> */}
      <Link to="mailto:sauravsable4102@gmail.com"> <EmailIcon/></Link>
      <Link to="https://www.instagram.com/_.stubborn._007/"><InstagramIcon/></Link>
      <Link to="https://www.facebook.com/saurav.sable.1"><FacebookIcon/></Link>
      
      </div>
      <p> &copy; saurav.com </p>
    </div>
  )
}
