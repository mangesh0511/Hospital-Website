
import { useEffect } from 'react'
import './App.css'
import Hero from './Components/Hero';
import Department from './Components/Department';
import Hosp from './Components/Hosp';
import ContactUs from './Components/ContactUs';
import SignUp from './Components/SignUp';
import Book from './Components/ Book';
import Cancel from './Components/Cancel';


function App() {

  useEffect(() => {

    // const hospitalGetRequest = async () => {
    //   await hospitalApi();
    // }

    // hospitalApi();

  }, [])

  return (
    <>
      
      <Hero />
      <Hosp />
      <Department />
      <Book/>
      <Cancel />
      <ContactUs />
      <SignUp />
    </>
  )
}

export default App;
// function hospitalApi() {
//   throw new Error('Function not implemented.');
// }

