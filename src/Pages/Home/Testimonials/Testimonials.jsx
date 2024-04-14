import Marquee from "react-fast-marquee";


const Testimonials = () => {
    return (
        <div className="mb-32">
            <h1 className="text-2xl md:text-4xl text-gray-600 text-center mb-8 lg:mb-20">What Our Users Are Saying</h1>

            <div className="flex gap-12">
                <Marquee pauseOnClick>
                    <div className="w-[22rem] lg:w-[35rem] h-[25rem] lg:h-[18rem] border border-[#FD7B38] p-8 ml-12">
                        <p className="mont md:text-lg text-gray-700">Task Manager has been a game-changer for me! As a freelancer juggling multiple projects, keeping track of tasks used to be chaotic. With Task Manager, I can easily create, prioritize, and update tasks on the go. Its simple, intuitive, and has made me so much more organized.</p>

                        <h1 className="text-3xl mont text-right mt-4">Sarah W.</h1>
                    </div>

                    <div className="w-[22rem] lg:w-[35rem] h-[25rem] lg:h-[18rem] border border-[#FD7B38] p-8 ml-12">
                        <p className="mont md:text-lg text-gray-700">Ive tried several task management tools, but Task Manager stands out. The ability to swipe tasks as Ongoing, Complete, or Up Next is brilliant. It gives me a clear overview of my progress and helps me stay focused. Highly recommend it!</p>

                        <h1 className="text-3xl mont text-right mt-4">Mark S.</h1>
                    </div>

                    <div className="w-[22rem] lg:w-[35rem]  h-[25rem] lg:h-[18rem] border border-[#FD7B38] p-8 ml-12">
                        <p className="mont md:text-lg text-gray-700">I love the flexibility Task Manager offers. Being able to attach files to tasks and break them down into subtasks has made project management a breeze. Plus, the notifications keep me on track without feeling overwhelmed. Its become an essential part of my daily routine.</p>

                        <h1 className="text-3xl mont text-right mt-4">Anna L.</h1>
                    </div>

                    <div className="w-[22rem] lg:w-[35rem]  h-[25rem] lg:h-[18rem] border border-[#FD7B38] p-8 ml-12">
                        <p className="mont md:text-lg text-gray-700">Task Manager has streamlined our teams workflow like never before. We can easily assign tasks, track progress, and collaborate seamlessly. It has saved us time, improved communication, and boosted our productivity. Thank you, Task Manager!</p>

                        <h1 className="text-3xl mont text-right mt-4">Greg M.</h1>
                    </div>

                    <div className="w-[22rem] lg:w-[35rem] h-[25rem] lg:h-[18rem] border border-[#FD7B38] p-8 ml-12">
                        <p className="mont md:text-lg text-gray-700">Task Manager has been a game-changer for me! As a freelancer juggling multiple projects, keeping track of tasks used to be chaotic. With Task Manager, I can easily create, prioritize, and update tasks on the go. Its simple, intuitive, and has made me so much more organized.</p>

                        <h1 className="text-3xl mont text-right mt-4">Sarah W.</h1>
                    </div>

                </Marquee>
            </div>

        </div>
    );
};

export default Testimonials;