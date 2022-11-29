import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contents from './Components/Contents/Contents';
import Main from './Pages/Main/Main';

function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Contents></Contents>
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
