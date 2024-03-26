import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <NavLink to="/"
            className={({ isActive }) => isActive ? 'font-work font-bold text-[#23BE0A] border hover:text-white hover:bg-[#23BE0A] border-[#23BE0A] px-4 py-3 rounded-lg' : 'px-4 py-3 font-work font-bold'}>
            Home
        </NavLink>
        <NavLink to={`/listBook`}
            className={({ isActive }) => isActive ? 'font-work font-bold text-[#23BE0A] border hover:text-white hover:bg-[#23BE0A] border-[#23BE0A] px-4 py-3 rounded-lg' : 'px-4 py-3 font-work font-bold'}>
            Listed Books
        </NavLink>
        <NavLink to={`/pagesRead`}
            className={({ isActive }) => isActive ? 'font-work font-bold text-[#23BE0A] border hover:text-white hover:bg-[#23BE0A] border-[#23BE0A] px-4 py-3 rounded-lg' : 'px-4 py-3 font-work font-bold'}>
            Pages to Read
        </NavLink>
    </>
    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto mt-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content gap-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={`/`} className="text-2xl font-bold font-work">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className=" text-white font-work md:text-lg bg-[#23BE0A] md:px-7 btn mr-4">Sign In</button>
                <button className=" text-white font-work md:text-lg bg-[#59C6D2] md:px-7 btn">Sign Up</button>
            </div>
        </div>
    );
};

export default Header;