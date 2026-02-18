import { useNavigate } from "react-router-dom";

const Hero = () => {

   const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route);
    };

    return (
        <main className="hero">
            <div className="hero-left">
                <div className="hero-content">
                    <p>
                        Dedicated to excellence in patient care, research, and education. We strive to improve the health of our community by providing high-quality, cost-effective medical services in a safe and nurturing environment.
                    </p>
                </div>
                <div className="hero-button">
                    <button onClick={() => handleClick("/Contact Us")}> Enquire </button>
                </div>
            </div>
            <div className="hero-img">
                <img src="https://www.nicepng.com/png/detail/33-336282_best-doctors-india-indian-doctor-and-nurse.png" alt="Poster image"></img>
            </div>
        </main>
    )
};

export default Hero; 