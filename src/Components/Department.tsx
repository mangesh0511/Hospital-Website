import { useNavigate } from 'react-router-dom';
import './dept.css';

const Department = () => {
  const navigate = useNavigate();
  const handleClick = (route: string) =>{
    navigate(route);
  };
  const lists = [
    { id: 1, img: "https://images.squarespace-cdn.com/content/v1/66356004fb7eeb30dc27ab6c/8a402a31-d0cb-4a1d-9e61-1074c8bc896f/cosmetic-banner.jpg", name: "Dermatology" },
    { id: 2, img: "https://www.hcghospitals.in/wp-content/uploads/2024/04/neuro-care.webp", name: "Neurology" },
    { id: 3, img: " https://eozxehncj7g.exactdn.com/wp-content/uploads/2025/04/Cardiology-Banner.jpg?lossy=1&ssl=1", name: "Cardiology" },
    { id: 4, img: "https://www.queens.org/wp-content/uploads/shutterstock_2253833517.jpg", name: "Radiology" },
    { id: 5, img: "https://www.vickerypediatrics.com/wp-content/uploads/2023/04/vickery-newborn-pediatrics-cumming.jpg", name: "Pediatrics" },
    { id: 6, img: " https://cms.renovahospitals.com/storage/descriptions/jNzb2yQTC1NCjorpDvGVcQ4YefGBZtfHdl93ENZc.webp", name: "E.N.T" }
  ];
  return (

    <div className="dept-container">
      {lists.map((list) => (
        <div key={list.id} className="list">
          <img src={list.img} alt=" Departments " />
          <div className="name"onClick ={() => handleClick("/Book")}>{list.name}
          </div>
        </div>
      ))}
    </div>

  )
}
export default Department;