const getStoredReadBook = () => {
    const storedReadBook = localStorage.getItem('read');
    if (storedReadBook) {
        return JSON.parse(storedReadBook)
    }
    return [];
}

const setBook = (id) => {
    const storedReadBooks = getStoredReadBook();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read', JSON.stringify(storedReadBooks))
    }

}


export { getStoredReadBook, setBook };

