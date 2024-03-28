// import { createBrowserRouter } from "react-router-dom";
// import BookDetails from './components/BookDetails/BookDetails';
// import Home from './components/Home/Home';
// import ListedBook from './components/ListedBooks/ListedBook';
// import PagesRead from './components/PagesRead/PagesRead';

// import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import BookDetails from "../components/BookDetails/BookDetails";
import ListedBook from "../components/ListedBooks/ListedBook";
import PagesRead from "../components/PagesRead/PagesRead";

import WishlistBooks from "../WishlistBooks/WishlistBooks";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import Root from '../components/Root/Root';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/book.json')
            },
            {
                path: "/listBook",
                element: <ListedBook></ListedBook>,
                children:[
                    {
                        index: true,
                        element:<ReadBooks></ReadBooks>,
                        loader: () => fetch('/book.json')
                    },
                    {
                        path:'wishlist',
                        element:<WishlistBooks></WishlistBooks>,
                        loader: () => fetch('/book.json')
                    }
                ]
             
            },
            {
                path: '/pagesRead',
                element: <PagesRead></PagesRead>
            },
            {
                path: '/details/:id',
                element: <BookDetails></BookDetails>,
                loader: () => fetch('/book.json')
            }
        ]
    }
]);