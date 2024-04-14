import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-platform-server-psi.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;