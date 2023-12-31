import{AiOutlineMenu} from "react-icons/ai"
import{useState} from "react"

const Sidenav = () => {

  const [nav, setNav] = useState(false)	
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      
      <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
    
    </div>
  );
};

export default Sidenav