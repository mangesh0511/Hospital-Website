// import { useContext } from 'react';
// import { TextContext } from '../Context/text-context'
import './SignUp.css'

const ContactUs = () => {
    // const { dispText } = useContext(TextContext);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // const form = e.target;
        
        // const formData = new FormData(form);
        
        // const formJson = Object.fromEntries(formData.entries());

        // const name = formJson["name"].toString()
        // const phone = formJson["phone"].toString()
        // const message = formJson["message"].toString()
        // dispText(`${name} ${phone} ${message}`)
       
    }
    return (
        <div className="container">
            <form method = "post" onSubmit={handleSubmit}>
                <div className='contact-container'>
                    <h1> Contact Us</h1>
                    <div className="inputs">
                        <input name="name" type="text" placeholder="Enter your Name" /> <br />
                        <input name="phone" type="tel" placeholder="Enter your Contact Number" /> <br />
                        <textarea name="message" placeholder="Enter your Message" ></textarea>
                    </div>
                    <button type='submit'> Submit </button>
                </div>
            </form>
        </div>
    )
}
export default ContactUs