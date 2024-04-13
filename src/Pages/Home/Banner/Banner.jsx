import { Link } from "react-router-dom";
import bannerImage from "../../../assets/banner.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Banner = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:h-[80vh] justify-between items-center px-[3%] xl:px-[10%] mt-6 lg:mt-0 xl:gap-32">

            <div className="flex-1">
                <h1 className="mont text-[1.5rem] md:text-[2.5rem] 2xl::text-[3.5rem] xl:leading-[4.5rem]">Effortless Task Management, Elevated Productivity</h1>
                <p className="mont mt-6 text-base md:text-xl">Organize and manage your team like a boss with Bitrix24, a free task management tool packing more capabilities than you can imagine.</p>

                <Link to={user ? '/dashboard/dashboardhome' : '/login'}><button className="capitalize w-[14rem] md:w-[18rem] h-14  bg-[#fd7a38c9] border-none rounded-lg text-white font-medium mt-8 text-xl md:text-2xl mont hover:bg-black hover:text-white hover:border-none">Get Started</button></Link>
            </div>

            <div className="flex-1">
                <img className="" src={bannerImage} alt="" />
            </div>

        </div>
    );
};

export default Banner;