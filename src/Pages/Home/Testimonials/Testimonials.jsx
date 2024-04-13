import Marquee from "react-fast-marquee";


const Testimonials = () => {
    return (
        <div className="mb-32">
            <h1 className="text-4xl text-gray-600 text-center mb-20">What Our Users Are Saying</h1>

            <div className="flex gap-12">
                <Marquee pauseOnClick>
                <div className="w-[35rem] h-[20rem] border border-[#FD7B38] p-8">
                    <p className="mont text-lg text-gray-700">Task Manager has been a game-changer for me! As a freelancer juggling multiple projects, keeping track of tasks used to be chaotic. With Task Manager, I can easily create, prioritize, and update tasks on the go. Its simple, intuitive, and has made me so much more organized.</p>

                    <h1 className="text-3xl mont text-right mt-4">Sarah W.</h1>
                </div>
                <div className="w-[35rem] h-[20rem] border border-[#FD7B38] p-8 ml-12">
                    <p className="mont text-lg text-gray-700">Task Manager has been a game-changer for me! As a freelancer juggling multiple projects, keeping track of tasks used to be chaotic. With Task Manager, I can easily create, prioritize, and update tasks on the go. Its simple, intuitive, and has made me so much more organized.</p>

                    <h1 className="text-3xl mont text-right mt-4">Sarah W.</h1>
                </div>
                </Marquee>
                

                

            </div>

        </div>
    );
};

export default Testimonials;