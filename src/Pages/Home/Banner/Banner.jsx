import { Link } from "react-router-dom";
import bannerImage from "../../../assets/banner.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Banner = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:h-[80vh] justify-between items-center px-[10%] mt-6 lg:mt-0">

            <div>
                <h1 className="mont text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] lg:leading-[4.5rem] lg:w-[50rem]">Effortless Task Management, Elevated Productivity</h1>
                <p className="mont mt-6 text-xl lg:w-[45rem]">Organize and manage your team like a boss with Bitrix24, a free task management tool packing more capabilities than you can imagine.</p>

                <Link to={user? '/dashboard/dashboardhome' : '/login'}><button className="capitalize w-[18rem] h-14  bg-[#fd7a38c9] border-none rounded-lg text-white font-medium mt-8 text-2xl mont hover:bg-black hover:text-white hover:border-none">Get Started</button></Link>
            </div>

            <img data-aos="flip-right"  data-aos-duration="1500" className="w-[100vw] lg:w-[43rem] lg:h-[43rem]" src={bannerImage} alt="" />
            
        </div>
    );
};

export default Banner;