import google from "../../assets/icon/google.svg"
import { useContext, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { AuthContext } from "../../Provider/AuthProvider"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import Swal from "sweetalert2"
import shape1 from "../../assets/im.png"



const Login = () => {

    const { signIn, googleSignIn, user } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.form?.pathname || "/dashboard/dashboardhome";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { mutate } = useMutation({
        mutationKey: ['users'],
        mutationFn: (addingData) => {
          return axios.post('https://task-management-platform-server-alpha.vercel.app/users', addingData, { withCredentials: true, })
        },
        onSuccess: () => {
    
        }
    
      })

    const onSubmit = async (data) => {
        console.log(data)

        signIn(data.email, data.password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Logged successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
                navigate(from, { replace: true })
                reset();
            })
            .catch(error => {

                if (error.code === 'auth/invalid-login-credentials') {
                    toast.error('Invalid email or password. Please try again.')
                } else if (error.code === 'auth/user-not-found') {
                    toast.error('User not found. Please check your email.')
                }
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
          .then(result => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Logged successfully",
                showConfirmButton: false,
                timer: 1500
              });
            mutate({
              email: result.user?.email,
              name: result.user?.displayName,
              photo: result.user?.photoURL,
              uid: user?.uid,
              role: "user",
            })
            navigate(from, { replace: true })
          })
          .catch(error => {
            toast.error(error.message)
          })
      }



    return (
        <div className="w-[100vw] py-[5vh] lg:h-[100vh] lg:login">

            <div className="max-w-screen-2xl lg:h-[90vh] mx-auto flex flex-col md:flex-row justify-around items-center">
                <div>
                    <img className="loginimg mx-auto w-[15rem] md:w-[20rem] lg:w-auto" src={shape1} alt="" />

                </div>
                <div className="md:w-[28rem] bg-white shadow-xl rounded-3xl p-8">
                    <h1 className="text-black text-center text-[2rem] font-semibold">Login into account</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <p className="text-[#444] mt-5 text-xl font-semibold">Email</p>

                        <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="email" name="email" id="" placeholder="Type here" {...register("email", { required: true })} />

                        <p className="text-[#444]  text-xl mt-4 font-semibold">Password</p>

                        <input className="w-full mt-2 h-[3.5rem] text-gray-700 placeholder:text-[#A1A1A1] text-lg outline-none pl-[1.81rem] rounded-lg border-2 border-[#D0D0D0] bg-white" type="password" name="password" id="" placeholder="Enter your password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} />

                        {errors.password?.type === 'minLength' && <span>Password must be 6 character</span>}


                        <input className="w-full mt-5 h-[3.5rem] btn btn-neutral border-none bg-[#575DFB] text-white text-xl font-bold rounded-xl" type="submit" id="" value="Sign In" />

                        <p className="text-[#575DFB] mt-5 text-center text-xl font-medium">Do not have an account? <Link to='/signup'><span className="font-bold underline">Sign Up</span></Link></p>

                        <p className="text-[#444] mt-5 text-xl font-medium text-center">Or sign in with</p>

                        <div className="flex items-center justify-center gap-14 mt-5">

                            <div onClick={handleGoogleSignIn} className="w-[8.25rem] hover:bg-white cursor-pointer btn-neutral h-[3.5rem] border-2 flex justify-center items-center border-gray-200 rounded-md">
                                <img src={google} alt="" />
                            </div>

                        </div>
                    </form>


                </div>


            </div>

        </div>
    );
};

export default Login;