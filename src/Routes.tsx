import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import App from "./App";
import Hosp from "./Components/Hosp";
import Department from "./Components/Department";
import ContactUs from "./Components/ContactUs";
import SignUp from "./Components/SignUp";
import Book from "./Components/ Book";
import Cancel from "./Components/Cancel";

function AppRoutes(){
    return (
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route index element ={<App />}/>
            <Route path = "Home" element = {<App/>}/>
            <Route path = "Hospital" element = {< Hosp />} />
            <Route path = "Department" element = {< Department/>} />
            <Route path = "Book" element = {<Book/>}/>
            <Route path = "Cancel" element = {<Cancel/>}/>
            <Route path = "Contact Us" element = { < ContactUs />} />
            <Route path = "SignUp" element = { < SignUp />} />
        </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;