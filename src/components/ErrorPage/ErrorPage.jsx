import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <div className="">
            <div className="max-w-6xl rounded-2xl mx-auto h-[500px] my-10 flex gap-4 justify-center items-center text-center flex-col">
                <h1 className="flex items-center justify-center text-error-content text-5xl font-bold"><TbError404 className="text-7xl text-red-600"></TbError404> - Page Not Found</h1>
                <p className="text-2xl">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
                <Link to={`/`}>
                    <button className="btn btn-primary" >Go back to the home page</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;