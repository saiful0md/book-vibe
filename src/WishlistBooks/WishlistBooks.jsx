import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { getStoredReadBook } from "../utility/localStorage";
const WishlistBooks = () => {
    const books = getStoredReadBook()
    return (
        <div>
            {
                books.map((book, index) => <div key={index}
                    className="card lg:card-side bg-base-100 shadow-xl"
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
                        <div>
                            <p><HiOutlineUsers></HiOutlineUsers> Publisher: {book.publisher}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default WishlistBooks;