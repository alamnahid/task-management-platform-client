import { Link } from "react-router-dom";
import testimonialbg from "../../../assets/img_block_trust.webp"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AboutTestimonials = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="my-8 lg:my-32 mx-[3%] lg:mx-[10%]">
            <h1 className="text-2xl md:text-[2rem] lg:text-[4rem] mont text-center lg:leading-[4rem]">Trusted by over <span className="text-[#FD7B38]">15,000,000</span> <br />teams worldwide</h1>
            <div className="text-center">
                <Link to={user ? '/dashboard/dashboardhome' : '/login'}><button className="capitalize w-[14rem] md:w-[18rem] h-14  bg-[#fd7a38c9] border-none rounded-3xl text-white font-medium mt-8 text-xl md:text-2xl mont hover:bg-black hover:text-white hover:border-none">Get Started</button></Link>
            </div>
            <img className="mt-8 lg:mt-20 mx-auto" src={testimonialbg} alt="" />

        </div>
    );
};

export default AboutTestimonials;