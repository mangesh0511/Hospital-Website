
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate();

    const handleClick = (route: string) => {
        navigate(route); // Redirects to the '/new-page' route
    };

    // const [items, setItem] = useState(0)
    // const {item, addItem} = getCart()

    //   const { item } = useContext(CartContext);
    //   const { text } = useContext(TextContext);

    return (
        <div>
            <nav >
                <div className='logo'>
                    <img src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg?semt=ais_user_personalization&w=740&q=80" alt="logo" />
                </div>
                <ul>
                    <li onClick={() => handleClick("/Home")}> HOME </li>
                    <li onClick={() => handleClick("/Hospital")}> HOSPITAL </li>
                    <li onClick={() => handleClick("/Department")}> DEPARTMENT</li>
                    <li onClick={() => handleClick("/Book")}> BOOK</li>
                    <li onClick={() => handleClick("/Cancel")}> CANCEL </li>
                    <li onClick={() => handleClick("/Contact Us")}> CONTACT US </li>
                    <li onClick={() => handleClick("/SignUp")}> SIGNUP </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
