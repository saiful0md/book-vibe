import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { setBook } from "../../utility/localStorage";
const BookDetails = () => {
    const details = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id)
    const detail = details.find(detail => detail.id === idInt);

    const handleRead = () => {
        setBook(detail)
        toast('Books Added to Read list')
    }
    const handleWishlist = () => {
        toast('')
    }

    return (
        <div className="max-w-6xl mx-auto my-12 grid grid-cols-2 h-[500px]">
            <div className="p-8">
                <img className="w-3/4" src={detail.image} alt={`Image from ${detail.bookName}`} />
            </div>
            <div className="flex flex-col gap-6">
                <div className="pb-6 border-b">
                    <h1 className="text-4xl font-display font-bold mb-4">{detail.bookName}</h1>
                    <p>By: {detail.author}</p>
                </div>
                    <p>{detail.category}</p>
                <div>
                    <p className="text-[#131313]  font-work"><span className="font-bold">Review:</span> {detail.review}</p>
                </div>
                <div className="flex gap-4">
                    {
                        detail.tags.map(tag => <p key={tag} className="text-[#23BE0A] font-work font-medium">{tag}</p>)
                    }
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td className="font-work text-[#131313B2]">Number of Pages:</td>
                                <td className="text-[#131313] font-bold font-work">{detail.totalPages}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <td className="font-work text-[#131313B2]">Publisher:</td>
                                <td className="text-[#131313] font-bold font-work"> {detail.publisher}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="font-work text-[#131313B2]">Year of Publishing:</td>
                                <td className="text-[#131313] font-bold font-work">{detail.yearOfPublishing}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td className="font-work text-[#131313B2]">Rating:</td>
                                <td className="text-[#131313] font-bold font-work">{detail.rating}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-4">
                    <Link to={``} onClick={handleRead} className=" btn border border-[#131313] px-6 rounded-lg font-semibold font-work hover:bg-[#23BE0A] hover:text-white ">Read</Link>
                    <Link onClick={handleWishlist} className="btn bg-[#50B1C9] hover:bg-[#09728c] text-white">Wishlist</Link>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;