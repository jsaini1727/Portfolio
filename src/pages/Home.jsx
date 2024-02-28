// Create a component function called Home that returns a fragment block of html with a single h1
// The text of the h1 says 'Home'
function Home() {
    const sentence = "Javascript Applications Spark Vivid Innovations Nurturing Developers Expertise & Resources"
    const words = sentence.split(" ");
    const name = words.map(word => word.charAt(0)).join("").replace("&", "");
   

    return (
        <>
        <h1 className="text-center">Home</h1>
        <div className="text-center">
        <p>HELLO and thank you for allowing me to showcase some of my skills.</p>
        <p>I believe <strong>J</strong>avascript <strong>A</strong>pplications <strong>S</strong>park <strong>V</strong>ivid <strong>I</strong>nnovations <strong>N</strong>urturing <strong>D</strong>evelopers <strong>E</strong>xpertise & <strong>R</strong>esources.</p>
        <p>My name is <strong>{name}</strong> and an aspiring Full Stack Developer. I have a philosophy of getting on the problem, figuring it our and</p>
        <p>resolving the problem. My ability to learn quickly coupled with this philosophy will enable me to succeed as a developer.</p>
        </div>
        </>
    )
}

export default Home 