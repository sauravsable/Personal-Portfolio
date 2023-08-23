import React from 'react'
import ProjectItems from '../components/ProjectItems'
import {ProjectList} from '../Helpers/ProjectList' 
import '../styles/Project.css'

export default function Projects() {
  return (
   <div className="projects">
    <h1>My Personal Projects</h1>
    <div className="projectList">
      {ProjectList.map((project,idx)=>{
        return <ProjectItems id={idx} name={project.name} image={project.image}/>
      })}
    </div>
   </div>
  )
}
