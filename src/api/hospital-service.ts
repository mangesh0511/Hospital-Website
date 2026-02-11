
const SERVER_URL = "http://localhost:3000"

const hospitalListApi = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/hospitalDb`, { method: "GET" });
        if (response.ok) {
            const decoded = await response.json();
            return decoded;
        }
        throw Error("cannot get response")
        // const json = await list.json();

    } catch (error) {
        console.log(error)
        alert(error);
    }
}

const addUserDataApi = async (body: any) => {
    try {
        const response = await fetch(`${SERVER_URL}/UserDB`,
            {
                method: "POST",
                body: JSON.stringify(body)
            }
        );

        if (response.ok) {
            alert("User Added");
            return true;

        }
        return false;
    } catch (error) {
        console.log(error)
        alert(error);
    }
}
const addBookingApi = async (body: any) => {
    try {
        const response = await fetch(`${SERVER_URL}/Bookings`,
            {
                method: "POST",
                body: JSON.stringify(body)
            }
        );

        if (response.ok) {
            alert("slot booked");
            return true;

        }
        return false;
    } catch (error) {
        console.log(error)
        alert(error);
    }
}

const getAllBookingApi = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/Bookings`,
            {
                method: "GET",
            }
        );

        if (response.ok) {
            const decoded = await response.json();
            return decoded;

        }
        // return false;
    } catch (error) {
        console.log(error)
        // alert(error);
    }
}


const cancelBookingApi = async (body: any) => {
    try {   
        //get data from application   
           // body contains the data 
           
        //add data to cancel table
        let processingDone = false;
        const response = await fetch(`${SERVER_URL}/Cancel`,
            {
                method: "POST",
                body: JSON.stringify(body)
            }
        );

        //remove from booking table
        const deleteResponse = await fetch(`${SERVER_URL}/Bookings/${body['id']}`,
            {
                method: "DELETE",
            }
        );

        if(deleteResponse.ok){
            processingDone = true;
        }

        if (processingDone && response.ok) {
            alert("slot cancelled");
            return true;

        }
        return false;
    } catch (error) {
        console.log(error)
        alert(error);
    }
}
// const cancelBookingApi = async (body: any) => {
//     try {
//         const response = await fetch(`${SERVER_URL}/Bookings${"id"}`,
//             {
//                 method: "DELETE",
//                 body: JSON.stringify(body)
//             }
//         );

//         if (response.ok) {
//             alert("slot Cancelled");
//             return true;

//         }
//         return false;
//     } catch (error) {
//         console.log(error)
//         alert(error);
//     }
// }

export { hospitalListApi, addUserDataApi, addBookingApi, cancelBookingApi, getAllBookingApi }