import { useState } from "react";
import { useDrag } from "react-dnd";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";



const Task = ({ task, todoDataRefetch }) => {


    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const axiosPublic = useAxiosPublic();

    const handleRemoveTask = (id) => {
        axiosPublic.delete(`/alltasks/${id}`)
            .then((res) => {
                console.log(res.data?.deletedCount);
                if (res.data?.deletedCount === 1) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task Deleted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    todoDataRefetch();
                }
            });
    };
    return (
        <div>
            <div
                ref={drag}
                tabIndex={0}
                className='text-black border-2 p-2 rounded-lg shadow-md hover:shadow-2xl cursor-pointer bg-white relative w-[23rem]'
            >
                <div className="font-medium mont text-lg text-gray-600"><h2 className="w-[18rem] h-fit">{task?.tasktitle} </h2></div>
                <div className="">
                    <span className="font-semibold text-[#DA4F49] text-xs">Deadline : {task?.deadline}</span>
                    <p className="text-sm mt-3 text-[#787486]">
                    {task?.description}
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 w-full mt-4">
                    
                <button
                    className={`px-10 py-1 rounded-lg ${task?.prioroty==='Low' && 'bg-[#F1F2F4] text-[#65676D]'} ${task?.prioroty==='High' && 'bg-[#FF6C65]'} ${task?.prioroty==='Moderate' && 'bg-[#FFA500]'} text-white border-none `}
                >{task?.prioroty}</button>
                <button
                    type="submit"
                    onClick={() => handleRemoveTask(task._id)}
                    className=" text-red-800 text-[1.38rem] border-none absolute top-2 right-2"
                >
                    <MdDeleteForever/>
                </button>

                <Link to={`/dashboard/updatetask/${task?._id}`}>
                    <button
                        type="submit"
                        className=" text-gray-700 text-xl border-none absolute top-2 right-10"
                        data-tip="Edit"
                    >
                        <FaEdit/>
                    </button>
                </Link>
                </div>
            </div>

        </div>
    );
};

export default Task;