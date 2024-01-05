import './App.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AddmissionPage, CoursesPage, HomePage, LoginPage, RegisterPage, TeacherPage } from './Pages';
import { AuthProvider } from './Providers';
import Cookies from 'universal-cookie';
import { Navbar } from './Components';
function App() {
  const cookies = new Cookies(null, { path: '/' });
  const isAuthenticated = !!cookies.get('auth');
  console.log(isAuthenticated);
  const routes = [
    {
      path: "/",
      element: <Navbar><HomePage /></Navbar>
    },
    {
      path: '/Register',
      element: <Navbar><RegisterPage /></Navbar>
    },
    {
      path: '/Login',
      element: <Navbar><LoginPage /></Navbar>
    },
    {
      path: '/Courses',
      element:<Navbar><CoursesPage /></Navbar>
    },
    {
      path: '/Teachers',
      element: <Navbar><TeacherPage /></Navbar>
    },
    {
      path: '/Addmission',
      element: <Navbar><AddmissionPage /></Navbar>
    }

    // {
    //   path: '/Courses',
    //   element: isAuthenticated ? <Navbar><CoursesPage /></Navbar> : <Navigate to="/" />
    // },
    // {
    //   path: '/Teachers',
    //   element: isAuthenticated ? <Navbar><TeacherPage /> </Navbar>: <Navigate to="/" />
    // },
    // {
    //   path: '/Addmission',
    //   element: isAuthenticated ? <Navbar><AddmissionPage /></Navbar>: <Navigate to="/" />
    // }
  ];

  const router = createBrowserRouter(routes);
  return (
    <>

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
