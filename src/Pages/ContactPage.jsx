import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function ContactPage (){
    return (
        <>
        <Navbar />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '15px 0' }}>Contact </h1>
        <Contact />
        
        </>
    )
}