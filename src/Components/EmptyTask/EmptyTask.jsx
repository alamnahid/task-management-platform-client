import emptytaskimg from "../../assets/emptytask.png"

const EmptyTask = () => {
    return (
        <div>
            <img className="w-[18rem] mx-auto" src={emptytaskimg} alt="" />
            <h2 className="text-lg playfont text-center">You have not added any task yet!</h2>
            

            
        </div>
    );
};

export default EmptyTask;