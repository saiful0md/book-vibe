import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookDetails from './components/BookDetails/BookDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ListedBook from './components/ListedBooks/ListedBook';
import PagesRead from './components/PagesRead/PagesRead';
import Root from './components/Root/Root';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('/book.json')
      },
      {
        path:"/listBook",
        element: <ListedBook></ListedBook>,
      },
      {
        path: '/pagesRead',
        element:<PagesRead></PagesRead>
      },
      {
        path: '/details/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch(`/book.json`)
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
