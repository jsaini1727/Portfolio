// Create a component function called Contact that returns a fragment block of html with a single h1
// The text of the h1 says 'Contact Me'
function Contact() {

    return (
        <>
        <h1 className="text-center">Contact Me</h1>

        <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="6215dc33-ea1f-46bd-8c2d-4aab6b0d5ec2" />
            <input name="name" type="text" placeholder="Enter your Full Name" />
            <input name="email" type="email" placeholder="Enter your Email address" />
            <textarea name="message" cols="30" rows="10" placeholder="Enter your message" />
            {/* <input type="hidden" name="redirect" value="https://web3forms.com/success" /> */}
            <button>Send</button>
        </form>
        </>
    )
}

export default Contact 