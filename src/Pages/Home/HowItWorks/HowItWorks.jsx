import { Link } from "react-router-dom";
import img1 from "../../../assets/bg-banner.png"
import itsfreeimg from "../../../assets/itsfree.png"
import createtaskimg from "../../../assets/task_1.png"
import managetaskimg from "../../../assets/task_2.png"
import { FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const HowItWorks = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>

            <div className="flex mx-[10%] my-32 justify-center items-center gap-20">
                <div className="flex-1">
                    <div className="flex items-center gap-5">
                        <h1 className="text-5xl mont text-[#FD7B38]">It’s free</h1>
                        <img className="w-40" src={itsfreeimg} alt="" />
                    </div>
                    <p className="mont mt-8">To get started with Bitrix24, all you have to do is sign up using your email and... that’s it! Once you’ve signed up for our free plan, you get access to all of the basic tools in Bitrix24 FOREVER.</p>
                    <ul className="mt-5">
                        <li className="flex items-center gap-2"><FaArrowRight /> No credit card required</li>
                        <li className="flex items-center gap-2 mt-2"><FaArrowRight /> Unlimited users</li>
                        <li className="flex items-center gap-2 mt-2"><FaArrowRight /> Free forever</li>
                    </ul>
                    <Link to={user ? '/dashboard/dashboardhome' : '/login'}><button className="capitalize w-[18rem] h-14 border-2 border-[#fd7a38c9] rounded-lg text-[#FD7B38] font-medium mt-8 text-2xl mont hover:bg-black hover:border-none hover:text-white">Get For Free</button></Link>
                </div>
                <div className="flex-1">
                    <img src={img1} alt="" />
                </div>

            </div>

            <div className="flex mx-[10%] my-32 justify-center items-center gap-20">
                <div className="flex-1">
                    <img src={img1} alt="" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-5">
                        <h1 className="text-5xl mont text-[#FD7B38]">Create Your Tasks</h1>
                        <img className="w-40" src={createtaskimg} alt="" />
                    </div>
                    <p className="mont mt-8">Easily create tasks with all the details you need. Simply add a title, description, due date, and priority level. You can also attach files, add notes, and break down tasks into subtasks for better organization.</p>
                    <ul className="mt-5">
                        <li className="flex items-center gap-2"><FaArrowRight /> Comprehensive Task Details</li>
                        <li className="flex items-center gap-2 mt-2"><FaArrowRight /> Subtasks for Better Organization</li>
                        <li className="flex items-center gap-2 mt-2"><FaArrowRight /> Edit and Delete Tasks</li>
                    </ul>
                    <Link to={user ? '/dashboard/dashboardhome' : '/login'}><button className="capitalize w-[18rem] h-14 border-2 border-[#fd7a38c9] rounded-lg text-[#FD7B38] font-medium mt-8 text-2xl mont hover:bg-black hover:border-none hover:text-white">Get For Free</button></Link>
                </div>


            </div>

            <div className="flex mx-[10%] my-32 justify-center items-center gap-20">
               
                <div className="flex-1">
                    <div className="flex items-center gap-5">
                        <h1 className="text-5xl mont text-[#FD7B38]">Track and Manage Your Tasks</h1>
                        <img className="w-40" src={managetaskimg} alt="" />
                    </div>
                    <p className="mont mt-8">Once your tasks are created, start tracking them with ease. Swipe tasks as Ongoing to signify works in progress, mark them as Complete when finished, or set them as Up Next for prioritization.</p>
                    <ul className="mt-5">
                        <li className="flex items-center gap-2"><FaArrowRight /> Intuitive Task Status Updates</li>
                        <li className="flex items-center gap-2 mt-2"><FaArrowRight /> Visual Progress Tracking</li>
                        <li className="flex items-center gap-2 mt-2"><FaArrowRight /> Customizable Prioritization</li>
                    </ul>
                    <Link to={user ? '/dashboard/dashboardhome' : '/login'}><button className="capitalize w-[18rem] h-14 border-2 border-[#fd7a38c9] rounded-lg text-[#FD7B38] font-medium mt-8 text-2xl mont hover:bg-black hover:border-none hover:text-white">Get For Free</button></Link>
                </div>
                <div className="flex-1">
                    <img src={img1} alt="" />
                </div>


            </div>
        </div>
    );
};

export default HowItWorks;