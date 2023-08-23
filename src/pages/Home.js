import React from 'react'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className="about">
        <h2>Hi, My Name is Saurav.</h2>
        <div className="prompt">
          <p>A Software Developer with a passion os Learning and Creating.</p>
          <Link to="https://www.linkedin.com/in/saurav-sable-0b334823b"><LinkedInIcon/></Link>
          <Link to="https://github.com/sauravsable"><GitHubIcon/></Link>
          <Link to="https://drive.google.com/file/d/1jCDexc9sSDFmnjS0ib-DJyy9VwKPvo4-/view?usp=drive_link"><CoPresentIcon/></Link> 
          </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              Html,Css,JavaScript,ReactJs.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Node.js,Express.js,MongoDB.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              C,C++,Python.
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}
