import { Link, useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const details = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id)
    const detail = details.find(detail => detail.id === idInt);

    return (
        <div className="max-w-6xl mx-auto my-12 grid grid-cols-2 h-[]">
            <div className="p-8">
                <img className="w-3/4" src={detail.image} alt={`Image from ${detail.bookName}`} />
            </div>
            <div className="flex flex-col gap-">
                <div>
                    <h1 className="text-4xl font-display font-bold">{detail.bookName}</h1>
                    <p>By: {detail.author}</p>
                </div>
                <div>
                    <p>{detail.category}</p>
                </div>
                <div>
                    <p className="text-[#131313]  font-work"><span className="font-bold">Review:</span> {detail.review}</p>
                </div>
                <div className="flex gap-4">
                    <span className="font-bold"> Tags:</span><p className="text-[#23BE0A] font-work font-medium">{detail.tags[0]}</p>
                    <p className="text-[#23BE0A] font-work font-medium">{detail.tags[1]}</p>
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
                    <Link className=" btn border border-[#131313] px-6 rounded-lg font-semibold font-work hover:bg-[#23BE0A] hover:text-white ">Read</Link>
                    <Link className="btn bg-[#50B1C9] hover:bg-[#09728c] text-white">Wishlist</Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;