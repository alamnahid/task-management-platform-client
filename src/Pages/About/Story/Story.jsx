import storybg from "../../../assets/storybg.png"
import { FaArrowRight } from "react-icons/fa";
const Story = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center mx-[3%] lg:mx-[10%] gap-8">
            <div className="flex-1">
                <img src={storybg} alt="" />
            </div>
            <div className="flex-1">
                <p className="mont text-3xl font-medium text-gray-600">About Task Manager</p>

                <p className="mt-8 mont text-gray-600">Task Manager is a powerful platform designed to simplify the way you manage tasks, projects, and goals. Whether you are a busy professional, a student juggling multiple assignments, or a homemaker organizing daily chores, Task Manager is here to help.</p>
                <p className="mt-2 mont text-gray-600">At Task Manager, our mission is clear: to empower individuals and teams to achieve their goals with ease. We understand the challenges of staying organized and productive in todays fast-paced world. Thats why we have created a user-friendly, intuitive platform that streamlines task management from start to finish.</p>
                <ul className="mt-5">
                    <li className="flex mont text-gray-600 items-center gap-2"><FaArrowRight /> Effortless Task Creation</li>
                    <li className="flex mont text-gray-600 items-center gap-2 mt-2"><FaArrowRight /> Intuitive Task Tracking:</li>
                    <li className="flex mont text-gray-600 items-center gap-2 mt-2"><FaArrowRight /> Customizable Categories</li>
                    <li className="flex mont text-gray-600 items-center gap-2 mt-2"><FaArrowRight /> Priority Management</li>
                </ul>
                <p className="mt-8 mont text-gray-600">Ready to take control of your tasks and achieve your goals effortlessly? Sign up for Task Manager today and experience the difference!</p>

            </div>

        </div>
    );
};

export default Story;