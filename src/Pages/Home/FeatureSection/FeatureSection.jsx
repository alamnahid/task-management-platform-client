import task from "../../../assets/bg-banner.png"
import taskcreate from "../../../assets/Effortless Task Creation.webp"
import taskstatusupdate from "../../../assets/task-status-updates.webp"
import taskprioroty from "../../../assets/prioroty.webp"
import tasklsecurity from "../../../assets/securitry.webp"
const FeatureSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:mx-[10%] my-20 gap-32">
            <img className="w-[40%]" src={task} alt="" />
            <div className="grid grid-cols-2 justify-items-center gap-6">
                <div className="text-center p-8 border border-[#fd7a386f] rounded-2xl">
                    <img className="w-24 h-24 mx-auto" src={taskcreate} alt="" />
                    <h3 className="mont text-2xl mt-3 font-medium">Effortless Task Creation</h3>
                    <p className="mt-2 text-xs">Quickly create tasks with titles, descriptions, due dates, and priorities.</p>
                </div>
                <div className="text-center p-8 border border-[#fd7a386f] rounded-2xl">
                    <img className="w-24 h-24 mx-auto" src={taskstatusupdate} alt="" />
                    <h3 className="mont text-2xl mt-3 font-medium">Task Status Updates</h3>
                    <p className="mt-2 text-xs">Swipe tasks as Ongoing, Complete, for easy progress tracking.</p>
                </div>
                <div className="text-center p-8 border border-[#fd7a386f] rounded-2xl">
                    <img className="w-24 h-24 mx-auto" src={taskprioroty} alt="" />
                    <h3 className="mont text-2xl mt-3 font-medium">Priority Management</h3>
                    <p className="mt-2 text-xs">Prioritize tasks based on urgency and importance for optimal time management.</p>
                </div>
                <div className="text-center p-8 border border-[#fd7a386f] rounded-2xl">
                    <img className="w-24 h-24 mx-auto" src={tasklsecurity} alt="" />
                    <h3 className="mont text-2xl mt-3 font-medium">Data Security and Privacy</h3>
                    <p className="mt-2 text-xs">Your data is securely encrypted and protected with advanced security measures.</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;