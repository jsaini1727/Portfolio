

import { useEffect } from "react"
import Project from "../components/Project"

// The text of the h1 says 'Projects'
function Portfolio() {
    const projects = [{
        title: 'Always Sunny', 
        image: 'sunny',
        link: 'https://magellanrose.github.io/Always_Sunny_Project/',
        githubLink: 'https://github.com/magellanrose/Always_Sunny_Project'
     }, 
     {
        title: 'InstalLasagna',
        image: 'instalLasagna',
        link: 'https://lasagna-vr6a.onrender.com/',
        githubLink: 'https://github.com/jman2476/instalLasagna'
    }, 
    {
        title: 'Project 3',
        image: 'construction',
        link: 'Under Construction',
        githubLink: ''
    
    }]

    return (
        <section>
            <h1 className="text-center">PROJECTS</h1>
            <div className=" text-center project-btn">
               {projects.map((project) => (
                <Project project={project}  key={project.title}></Project>  
               ))}
                
           </div>
         

        </section>
    )
}

export default Portfolio