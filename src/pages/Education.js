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
        date="2013-2018"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<SchoolIcon/>}
        >
        <h3 classNmae="vertical-timeline-element-title">Jawahar Navodaya Vidyalaya Kannad,Aurangabad(MH).</h3>
        <p>Secondary School Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2018-2020"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<SchoolIcon/>}
        >
        <h3 classNmae="vertical-timeline-element-title">Jawahar Navodaya Vidyalaya Kannad,Aurangabad(MH).</h3>
        <p>High School Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2021-2025"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<SchoolIcon/>}
        >
        <h3 classNmae="vertical-timeline-element-title">Indian Institute of Information Technology Una,Himachal Pradesh.</h3>
        <p>Btech-Information Technology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}