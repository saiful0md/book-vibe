import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';
import { getStoredReadBook } from '../../utility/localStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};
const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const Chart = () => {
    const bookRead = useLoaderData();
    const [readBook, setReadBook] = useState([])
    useEffect(() => {
        const storedBook = getStoredReadBook()
        if (bookRead.length > 0) {
            const booksFilter = bookRead.filter(book => storedBook.includes(book.id))
            setReadBook(booksFilter)
        }
    }, [bookRead])
    return (
        <div>
            <BarChart
                width={1100}
                height={300}
                data={readBook}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar></TriangleBar>} label={{ position: 'top' }}>
                    {readBook.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};
TriangleBar.propTypes = {
    props: PropTypes
}


export default Chart;