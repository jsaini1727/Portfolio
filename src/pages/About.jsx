// Create a component function called About that returns a fragment block of html with a single h1

import { useEffect } from "react"
import JasBtn from "../components/JasBtn"

// The text of the h1 says 'About'
function About() {
    const data = ['hello', 'goodbye', 'see ya']

    return (
        <section>
            <h1 className="text-center">About Me</h1>
   
            <p className="text-center">Enthusiastic and decicated rookie full stack developer with a strong foundation in languages like HTML, CSS, javascript</p>
            <p className="text-center"> tools and frameworks like Node.js, Express.js, React, PWA, databases like SQL and MongoDB. I am eager to leverage my</p>
            <p className="text-center">passion for coding and problem solving skills to contribute to a dynamic team and grow as a professional in the field.</p>
         {data.map((item)=> (
           <JasBtn btnTitle={item} />
         ))}

        </section>
    )
}

export default About 