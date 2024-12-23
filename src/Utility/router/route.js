import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { AdminDashboard } from '../../Pages/AdminPages/AdminDashboard';
import { AdminSetting } from '../../Pages/AdminPages/AdminSetting';
import { Products } from '../../Pages/UserPages/Products/Products';
import { Categories } from '../../Pages/UserPages/Categories';
import { Cart } from '../../Pages/UserPages/Cart';
import { Login } from '../../Pages/Autherization/Login';
const UserLayout = () => {
  return (
    <div>
      <nav>navigation bar</nav>
      <Outlet />
    </div>
  );
};

const AdminLayout = () => {
  return (
    <div>
      <nav> admin navigation</nav>
      <Outlet />
    </div>
  );
};
// const Dashboard = () => <h2>Dashboard</h2>;
// const Products = () => <h2>Products</h2>;
// const Categories = () => <h2>Dashboard</h2>;
// const Cart = () => <h2>Dashboard</h2>;
// const Login = () => <h2>Dashboard</h2>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Products />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '/admin',
        element: <Navigate to="/admin/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'settings',
        element: <AdminSetting />,
      },
    ],
  },
]);
