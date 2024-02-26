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
        <p>I believe <strong>J</strong>avascript <strong>A</strong>pplications Spark Vivid Innovations Nurturing Developers Expertise & Resources.</p>
        <p>My name is {name}</p>
        </div>
        </>
    )
}

export default Home 