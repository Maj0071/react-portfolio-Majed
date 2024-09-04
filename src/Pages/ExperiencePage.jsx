import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Navbar from "../components/Navbar";


export default function Contact (){
    return (
        <>
        <Navbar />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '15px 0' }}>Experience</h1>
        <Experience />
        <Projects/>
        <Technologies/>

        </>
    )
}