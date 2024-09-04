import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Contact (){
    return (
        <>
        <Navbar />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '15px 0' }}>Home </h1>
        <Hero />
        <About/>
        </>
    )
}