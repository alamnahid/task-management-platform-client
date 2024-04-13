
import { useEffect } from "react";
import Banner from "./Banner/Banner";
import FeatureSection from "./FeatureSection/FeatureSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HowItWorks from "./HowItWorks/HowItWorks";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    useEffect(()=>{
        AOS.init();
    }, [])
    return (
        <div>
            <Banner/>
            <FeatureSection/>
            <HowItWorks/>
            <Testimonials/>
            
        </div>
    );
};

export default Home;