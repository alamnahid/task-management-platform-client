import Accordian from "../Home/Accordian/Accordian";
import AboutTestimonials from "./AboutTestimonial/AboutTestimonials";
import Story from "./Story/Story";


const About = () => {
    return (
        <div className="min-h-screen pt-8 lg:pt-20">
            <Story/>
            <AboutTestimonials/>
            <Accordian/>
            
        </div>
    );
};

export default About;