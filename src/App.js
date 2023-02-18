import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import AddUser from './components/AddUser';
import Home from './components/Home';
import Main from './components/Main';
import UpdateUser from './components/UpdateUser';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home', 
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/users')
        },
        {
          path: '/adduser',
          element: <AddUser></AddUser>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/update-user/:id',
          element: <UpdateUser></UpdateUser>,
          loader: ({params}) => fetch(`http://localhost:5000/update-user/${params.id}`)
        }
      ]
    }
    
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}>
  
      </RouterProvider>
    </div>
  );
};

export default App;