import { toast } from "react-toastify";

const getStoredReadBook = async () => {
    const storedReadBook = localStorage.getItem('read');
    if (storedReadBook) {
        const storedArray = JSON.parse(storedReadBook)
        const respons = await fetch('/book.json')
        const allBooks = await respons.json()
        return allBooks.filter(item => storedArray.includes(item.id)  )
    }
    return [];
}

const getStoredReadBook2 =  () => {
    const storedReadBook = localStorage.getItem('read');
    if (storedReadBook) {
        return JSON.parse(storedReadBook)
      
    }
    return [];
}

const getStoredWishlistBook = async () => {
    const storedWishlistBook = localStorage.getItem('wishlist');
    if (storedWishlistBook) {
        const storedArray = JSON.parse(storedWishlistBook)
        const respons = await fetch('/book.json')
        const allBooks = await respons.json()
        return allBooks.filter(item => storedArray.includes(item.id)  )
    }
    return [];
}
const getStoredWishlistBook2 =  () => {
    const storedWishlistBook = localStorage.getItem('wishlist');
    if (storedWishlistBook) {
        return JSON.parse(storedWishlistBook)
    }
    return [];
}

const setBook =  (id) => {
    const storedReadBooks =  getStoredReadBook2();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read', JSON.stringify(storedReadBooks))
        toast('Books Added to Read list')
    }else{
        return toast.warn('already been added')
    }
    

}
const setBookWislist =  (id) => {
    const storedWishlistBooks =  getStoredWishlistBook2();
    const storedReadBooks =  getStoredReadBook2();
    const exists1 = storedWishlistBooks.find(bookId => bookId === id);
    const exists = storedReadBooks.find(bookId => bookId === id);
    if(!exists && !exists1){
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlistBooks))
        toast('Books Added to Read list')
    }else{
        return toast.warn('already been added')
    }
    

}


export { getStoredReadBook, getStoredWishlistBook, setBook, setBookWislist };

