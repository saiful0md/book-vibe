import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiPagesLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../utility/localStorage";
const WishlistBooks = () => {
    const wishlistAll = useLoaderData();
    const [wishlist, setReadBook] = useState([])
    useEffect(()=>{
        const storedBook = getStoredReadBook()   
        if(wishlistAll.length > 0){
            const wishlistFilter = wishlistAll.filter(book => storedBook.includes(book.id))
            setReadBook(wishlistFilter)
        }
    },[])
    return (
        <div>
            {
                wishlist.map((book, index) => <div key={index}
                    className="card lg:card-side bg-base-100 shadow-xl my-6 p-8"
                >
                    <figure><img src={book.image} alt={`the picture of ${book.bookName}`} /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-display font-bold">{book.bookName}</h2>
                        <p> <span className="font-bold font-work">By:</span> {book.author}</p>
                        <div className="flex gap-4 font-work">
                            <div className="flex gap-4">
                                <span className="text-[#131313] font-bold">Tag:</span> {
                                    book.tags.map(tag => <p key={tag} className="text-[#23BE0A] font-work font-medium">  {tag}</p>)
                                }
                            </div>
                            <div className="flex items-center ">
                                <CiLocationOn></CiLocationOn>
                                <p className="ml-3">Year Of Publishing: {
                                    book.yearOfPublishing
                                }</p>
                            </div>
                        </div>
                        <div className="flex gap-4 border-b border-[#13131326] pb-8">
                            <div>
                                <p className="flex items-center gap-2"><HiOutlineUsers></HiOutlineUsers> Publisher: {book.publisher}</p>
                            </div>
                            <div>
                                <p className="flex items-center gap-2"><RiPagesLine></RiPagesLine> Page: {book.totalPages}</p>
                            </div>
                        </div>
                        <div className="card-actions justify-start items-center gap-8">
                            <div>
                                <p className=" py-2 text-[#328EFF] rounded-3xl bg-[#328EFF26] px-8">category: {book.category}</p>
                            </div>
                            <div>
                                <p className="py-2 text-[#FFAC33] rounded-3xl bg-[#FFAC3326] px-8">Rating: {book.rating}</p>
                            </div>
                            <div>
                                <Link to={`/details/${book.id}`} className=" btn bg-[#23BE0A] text-white px-8 rounded-3xl font-semibold font-work hover:bg-[#2c5b25] hover:text-white ">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default WishlistBooks;