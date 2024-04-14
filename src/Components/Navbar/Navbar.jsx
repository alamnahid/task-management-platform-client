import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/logo/logo1.png"
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const { user, logOut } = useContext(AuthContext)
    const handlelogOut = () => {
        logOut()
    }

    return (
        <div className="lg:mx-[10%] mt-3">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${open ? '' : 'hidden'}`}>
                            <li><NavLink className={({ isActive }) => isActive ? 'btn mont text-base border-none bg-[#FFF4EE] text-gray-700' : 'text-base font-medium btn bg-white border-none shadow-none text-gray-700'} to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'btn mont text-base border-none bg-[#FFF4EE] text-gray-700' : 'text-base font-medium btn bg-white border-none shadow-none text-gray-700'} to='/about'>About</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'btn mont text-base border-none bg-[#FFF4EE] text-gray-700' : 'text-base font-medium btn bg-white border-none shadow-none text-gray-700'} to='/dashboard/dashboardhome'>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="" />
                            <h1 className="text-2xl mont hidden lg:block font-bold">Task<span className="text-[#FD7B38]"> Manager</span></h1>

                        </div></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        <li><NavLink className={({ isActive }) => isActive ? 'btn mont text-base border-none bg-[#FFF4EE] text-gray-700' : 'text-base font-medium btn bg-white border-none shadow-none text-gray-700'} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn mont text-base border-none bg-[#FFF4EE] text-gray-700' : 'text-base font-medium btn bg-white border-none shadow-none text-gray-700'} to='/about'>About Us</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn mont text-base border-none bg-[#FFF4EE] text-gray-700' : 'text-base font-medium btn bg-white border-none shadow-none text-gray-700'} to='/dashboard/dashboardhome'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div className="flex gap-4 items-center">
                            <Link to="/"><button onClick={handlelogOut} className="btn btn-outline border-[#FD7B38] w-full text-base text-gray-700">Logout</button></Link>
                        </div>

                            :
                            <div>
                                <Link to="/login"><button className="btn mont btn-outline border-[#fd7a38c9] lg:w-[6rem] lg:text-lg border-2">Login</button></Link>
                                <Link to="/signup"><button className="btn mont border-none bg-[#fd7a38c9] lg:w-[6rem] lg:text-lg text-white ml-4 btn-neutral">Register</button></Link>
                            </div>

                    }
                </div>
            </div >
        </div >
    );
};

export default Navbar;