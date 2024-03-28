import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localStorage";

const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const bookRead = useLoaderData();
    const [readBook, setReadBook] = useState([]);
    // const [displayBook, setDisplayBook] = useState([])
    const handleBookFilter = filter => {
        if(filter === 'rating'){
            const rating = readBook.filter(book => book.rating >= 4.9)
            setReadBook(rating)
        }else if(filter === 'totalPages'){
            const totalPages = readBook.filter(book => book.totalPages >= 1178)
            setReadBook(totalPages)
        }else if(filter === 'yearOfPublishing'){
            const yearOfPublishing = readBook.filter(book => book.yearOfPublishing === 1937)
            setReadBook(yearOfPublishing)
        }
    }
    useEffect(()=>{
        const storedBook = getStoredReadBook()   
        if(bookRead > 0){
            const booksAdd =  [];
            console.log(readBook, booksAdd);
            for(const id of storedBook){
                const book = readBook.filter(book => book.id === id);
                if(book){
                    booksAdd.push(book)
                }
                setReadBook(booksAdd)
            }
        }
    },[bookRead, readBook])
    return (
        <div className="max-w-6xl mx-auto my-12">
            <h1 className="text-center text-3xl font-bold font-work bg-[#1313130D] rounded-lg my-10 p-3">Books</h1>
            <div className="text-center my-8">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white"><span>Sort By</span> 
                    <IoIosArrowDown></IoIosArrowDown>
                     </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleBookFilter("rating")}><a>Rating</a></li>
                        <li onClick={()=>handleBookFilter("totalPages")}><a>Number Of Pages</a></li>
                        <li onClick={()=>handleBookFilter("yearOfPublishing")}><a> Published year</a></li>
                    </ul>
                </details>
            </div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link
                    to={``}
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <span>Read Books</span>
                </Link>
                <Link
                    to={`wishlist`}
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBook;