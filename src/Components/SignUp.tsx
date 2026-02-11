// import { useContext } from 'react';
// import { TextContext } from '../Context/text-context';
import { addUserDataApi } from '../api/hospital-service';
import './SignUp.css'

const SignUp = () => {
    // const { dispText } = useContext(TextContext);

    const handleSubmit = async (e: any) => {
        //this stops form from reloading
        e.preventDefault();

        //we grab the form from html
        const form = e.target;

        //we extract the data from form
        const formData = new FormData(form);

        //converts JS object to JSON -> {name: "Mangesh"}
        const formJson = Object.fromEntries(formData.entries());

        const name = formJson["name"].toString()
        const number = formJson["phone"].toString()
        const password = formJson["password"].toString()

        if (!name || !number || !password) {
            let message = 'Missing Fields are ';
            if (!name) {
                message += 'Name ';
            }

            if (!number) {
                message += 'Number ';
            }

            if (!password) {
                message += 'Password '
            }

            alert(message)
        }
        else {
           await addUserDataApi({ name, number, password })
        }

        // dispText( `${name} ${email} ${password}`)

        // console.log(formJson["name"].toString())
    }

    return (
        <div className="container">
            <form method="post" onSubmit={handleSubmit}>
                <div className='signup-container'>
                    <h1> SignUp </h1>
                    <div className="inputs">
                        <input name="name" type="text" placeholder="Name" /> <br />
                        <input name="phone" type="tel" placeholder="Contact Number" /> <br />
                        <input name="password" type="password" placeholder="Password" />
                    </div>
                    <button type='submit'>Create Account </button>
                    <div>
                        <p> Already have an account <a href="Login"> @Login </a>
                        </p>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SignUp;