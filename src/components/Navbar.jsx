import logo from "../assets/kevinRushLogo.png";
import logo2 from "../assets/Black and White Minimalist Professional Initial Logo (1).png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
 

   <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10 "src={logo2} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl md:space-x-8">
       {/* <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
        */}
      
      <ul className="hidden md:flex">
        <li className="mr-6">
          <a href='/'>Home</a>
        </li>
        <li className="mr-6">
          <a href='/Experience'>Experience </a>
        </li>
        <li>
          <a href='/Contact'>Contact </a>
        </li>
          </ul>
          </div>
    </nav>
        
  );  
};

export default Navbar;
  