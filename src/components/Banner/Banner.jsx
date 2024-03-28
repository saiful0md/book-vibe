import { Link } from "react-router-dom";
import bg from '../../assets/bennerBg.png';


const Banner = () => {
    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="hero md:h-[554px] bg-[#1313130D] rounded-lg md:p-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bg} className=" rounded-lg " />
                    <div className="flex flex-col gap-12">
                        <h1 className="text-3xl md:text-6xl font-bold font-display">Books to freshen up your bookshelf</h1>
                        <Link to={`/listBook`}>
                            <button className="btn text-work font-bold bg-[#23BE0A]  hover:bg-[#366c2e] text-white">View The List</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;