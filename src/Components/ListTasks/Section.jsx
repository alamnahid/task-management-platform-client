import { useDrop } from "react-dnd";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Header from "./Header";
import Task from "./Task";
import EmptyTask from "../EmptyTask/EmptyTask";


const Section = ({
    status,
    tasks,
    setTasks,
    todos,
    inProgress,
    closed,
    todoDataRefetch,
}) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    let text = "Todo";
    let bg = `${isOver ? "bg-[#5AC3DD]" : "bg-[#5AC3DD]"}`;
    let tasksToMap = todos;

    if (status === "inprogress") {
        text = "Ongoing";
        bg = `${isOver ? "bg-[#F3B44E]" : "bg-[#F3B44E]"}`;
        tasksToMap = inProgress;
    }
    if (status === "closed") {
        text = "Complete";
        bg = `${isOver ? "bg-[#68B266]" : "bg-[#68B266]"}`;
        tasksToMap = closed;
    }

    const axiosPublic = useAxiosPublic();

    const addItemToSection = (id) => {
        axiosPublic
            .patch(`/alltasks/${id}`, { status })
            .then((response) => {
            })
            .catch((error) => {
            })
            .finally(() => {
                todoDataRefetch();
            });
    };
    return (
        <div ref={drop} className="w-full mt-5">
            <Header text={text} bg={bg} count={tasksToMap.length} />
            <div>
                {
                    tasksToMap?.length > 0 ? <div className="space-y-1">
                    {tasksToMap?.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            tasks={tasks}
                            setTasks={setTasks}
                            todoDataRefetch={todoDataRefetch}
                        />
                    ))}
                </div>
                :
                <div>
                    <EmptyTask/>
                </div>
                }
            </div>
        </div>
    );
};

export default Section;