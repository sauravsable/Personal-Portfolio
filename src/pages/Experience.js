import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
export default function About() {
  return (
    <div classNmae="experience">
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="Sept 2023-Present"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<SchoolIcon/>}
        >
        <h3 classNmae="vertical-timeline-element-title">Kurenai.</h3>
        <p>Web Developer Intern</p>
        </VerticalTimelineElement>
       
      
      </VerticalTimeline>
    </div>
  )
}