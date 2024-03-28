import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Book = ({ book }) => {
    
    const { bookName, author, category, image, rating, tags, id } = book;
    return (
        <Link to={`/details/${id}`} className="card border border-[rgba(19,19,19,0.15)]  shadow-md">
            <figure className="h-[230px] rounded-xl mx-10 mt-10 bg-[#F3F3F3]"><img className='h-full md:h-[116px]'  src={image} alt={`the image of ${bookName}`} /></figure>
            <div className="card-body gap-4">
                <div className='flex text-[#23BE0A] font-medium font-work'>
                    {
                        tags.map(tag => <p  key={tag}>{tag}</p>)
                    }
                </div>
                <h2 className="card-title text-2xl font-display">{bookName}</h2>
                <p className='text-base font-medium font-work border-b border-[rgba(19,19,19,0.15)] border-dashed pb-4'>By: {author}</p>
                <div className="card-actions  justify-end">
                    <p className="font-medium font-work">{category}</p>
                    <div className='flex items-center gap-2'>
                        <p className='text-base font-medium font-work'>{rating}</p>
                        <FaRegStar className='text-2xl'></FaRegStar>
                    </div>
                </div>
            </div>
        </Link>
    );
};
Book.propTypes = {
    book: PropTypes.object
}

export default Book;