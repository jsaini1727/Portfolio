

import { useEffect } from "react"


// The text of the h1 says 'About'
function Project() {
    const projects = ['Always Sunny', 'Installasagna', 'Project 3']

    return (
        <section>
            <h1 className="text-center">PROJECTS</h1>
            <div className=" text-center project-btn">
               {projects.map((project, index) => (
                <button className="button" key={index}>{project}</button>    
               ))}
                
           </div>
         

        </section>
    )
}

export default Project