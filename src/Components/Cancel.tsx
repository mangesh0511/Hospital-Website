
// import { addCancelledApi, cancelBookingApi } from '../api/hospital-service';
import { useEffect, useState } from 'react';
import './BookCancel.css'
import { cancelBookingApi, getAllBookingApi } from '../api/hospital-service';

const Cancel = () => {
    const [booking, setBookings] = useState([]);
    // const { dispText } = useContext(TextContext);

    // const handleSubmit = async (e: any) => {
    //     //this stops form from reloading
    //     e.preventDefault();

    //     //we grab the form from html
    //     const form = e.target;

    //     // //we extract the data from form
    //     const formData = new FormData(form);

    //     // //converts JS object to JSON -> {name: "Mangesh"}
    //     const formJson = Object.fromEntries(formData.entries());

    //     const name = formJson["name"].toString()
    //     const number = formJson["phone"].toString()
    //     const slot = formJson["slot"].toString()

    //     if (!name || !number || !slot) {
    //         let message = 'Missing Fields are ';
    //         if (!name) {
    //             message += 'Name ';
    //         }

    //         if (!number) {
    //             message += 'Number ';
    //         }

    //         if (!slot) {
    //             message += 'Slot '
    //         }

    //         alert(message)
    //     }
    //     else {
    //         await cancelBookingApi({ name, number, slot })
    //         await addCancelledApi({ name, number, slot })

    //     }

    //     // dispText( `${name} ${email} ${password}`)

    //     // console.log(formJson["name"].toString())
    // }

    useEffect(() => {
        const getBookings = async () => {
            const res = await getAllBookingApi();
            setBookings(res);
            // console.log(booking)
            console.log(res)
        }

        getBookings();

    }, [])

    return (
        <div className="container">
            <form method="post">
                <div className='cancel-container'>
                    <div className=''>Bookings</div>
                    <ul>{booking.map((i) =>
                        <div className='cancel-row'>
                            <li>{i['name']}</li>
                            <button onClick={async (e) => {
                                e.preventDefault()
                                cancelBookingApi(i)
                                // window.location.reload()
                            }}>Cancel</button>
                        </div>

                    )}</ul>
                    {/* <button> Cancel An Appoitment </button><br /> <br />
                    <div className="inputs">
                        <input name="name" type="text" placeholder="Name" /> <br />
                            <input name="phone" type="tel" placeholder="Contact Number" /> <br />
                        <label>
                            Select your slot:
                            <select name="slot">
                                <option value="10:00 - 11:00">10:00-11:00</option>
                                <option value="11:00 - 12:00">11:00-12:00</option>
                                <option value="12:00 - 13:00">12:00-13:00</option>
                                <option value="13:00 - 14:00">13:00-14:00</option>
                                <option value="17:00 - 18:00">17:00-18:00</option>
                                <option value="18:00 - 19:00">18:00-19:00</option>
                                <option value="19:00 - 20:00">19:00-20:00</option>
                                <option value="20:00 - 21:00">20:00-21:00</option>
                            </select>
                        </label><br/><br/>
                        <button type="submit"> Cancel Slot </button> */}
                    {/* </div> */}
                </div>
            </form>
        </div>

    )
}

export default Cancel;