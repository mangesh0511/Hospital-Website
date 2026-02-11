
import { addBookingApi } from '../api/hospital-service';
import './BookCancel.css'

const Book = () => {
    // const { dispText } = useContext(TextContext);

    const handleSubmit = async (e: any) => {
        //this stops form from reloading
        e.preventDefault();

        //we grab the form from html
        const form = e.target;

        // //we extract the data from form
        const formData = new FormData(form);

        // //converts JS object to JSON -> {name: "Mangesh"}
        const formJson = Object.fromEntries(formData.entries());

        const name = formJson["name"].toString()
        const number = formJson["phone"].toString()
        const slot = formJson["slot"].toString()

        if (!name || !number || !slot) {
            let message = 'Missing Fields are ';
            if (!name) {
                message += 'Name ';
            }

            if (!number) {
                message += 'Number ';
            }

            if (!slot) {
                message += 'Slot '
            }

            alert(message)
        }
        else {
            await addBookingApi({ name, number, slot })
        }
        // console.log(formJson["name"].toString())
    }

    return (
            <div className="container">
                <form method="post" onSubmit={handleSubmit}>
                    <div className='book-container'>
                        <button> Appointment </button><br /> <br />
                        <div className="inputs">
                            <input name="name" type="text" placeholder="Name" /> <br />
                            <input name="phone" type="tel" placeholder="Contact Number" /> <br />
                        
                            <button> 10:00 - 11:00 </button><button> 11:00 - 12:00 </button>
                            <button> 12:00 - 13:00 </button><button> 13:00 - 14:00 </button><br /><br/>
                
                            <button> 17:00 - 18:00</button><button> 18:00 - 19:00</button>
                            <button> 19:00 - 20:00</button><button> 20:00 - 21:00</button><br /><br />
                            
                            <input name="slot" type="time" placeholder="Enter time" />
                        </div>
                        <button type='submit'>Book an Appointment </button>
                    </div>
                </form>
            </div>
    )
}

export default Book;