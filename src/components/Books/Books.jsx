import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
    const books = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto my-10 md:p-0 p-8">
            <h2 className="text-4xl font-bold font-display text-center mt-24 mb-8">Books {books.bookId}</h2>
            <div className="grid md:grid-cols-3 gap-6 ">
                {
                    books.map(book => <Book book={book} key={book.id}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;