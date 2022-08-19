import Dashboard from "../assests/component/Admin/Dashboard"
import Profile from "../assests/component/Admin/Profile"
import { Home } from "../assests/component/frontend/Home";
import MasterLayout from "../assests/Layout/admin/MasterLayout";

 const routes = [
    { 
        id:1,
        path: '/',
        exact: true,
        name: 'Home',
        element: Home
    },
    { 
        id:2,
        path: '/admin',
        exact: true,
        name: 'Admin',
        element: MasterLayout
    },
    { 
        id:3,
        path: '/admin/dashboard',
        exact: true, 
        name: 'Dashboard', 
        element: Dashboard
    },
    { 
        id:4,
        path: '/admin/profile', 
        exact: true,
        name: 'Profile', 
        element: Profile
    }

];

export default routes;