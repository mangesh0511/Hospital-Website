
import { useNavigate } from 'react-router-dom';
import './hosp.css';

const Hosp = () => {
   const navigate = useNavigate();
    const handleClick = (route: string) => {
        navigate(route);
    };
  const lists = [
    { id: 1, img: "https://content.jdmagicbox.com/v2/comp/mumbai/23/022p101223/catalogue/dr-r-n-cooper-municipal-general-hospital-and-hbt-medical-college-vile-parle-west-mumbai-hospitals-pyrdz.jpg", name: "Cooper Hospital" },
    { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1lHnjl1t4BVDaDnMQMyAGj6D1jbHQFHDvg&s", name: " Wockhardt " },
    { id: 3, img: " https://ehealth.eletsonline.com/wp-content/uploads/2020/08/Fortis-Hospital.jpg", name: "Fortis" },
    { id: 4, img: "https://content.jdmagicbox.com/v2/comp/mumbai/g1/022pxx22.xx22.000183058072.h0g1/catalogue/lilavati-hospital-and-research-centre-bandra-reclamation-bandra-west-mumbai-dermatologists-pfmzzytexa.jpg", name: "Lilavati Hospital" },
  ];
  return (

    <div className="hosp-container">
      {lists.map((list) => (
        <div key={list.id} className="list">
          <img src={list.img} alt=" Hospitals " />
          <div className="name" onClick ={() => handleClick("/Department")}>{list.name} 
          </div>
        </div>
      ))}
    </div>

  )
}
export default Hosp;