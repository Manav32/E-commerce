import Login from "../assests/component/frontend/auth/Login";
import Register from "../assests/component/frontend/auth/Register";
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
        path: '/admin/*',
        exact: true,
        name: 'Admin',
        element: MasterLayout
    },
    { 
        id:3,
        path: '/Login',
        exact: true,
        name: 'Login',
        element: Login
    },
    { 
        id:4,
        path: '/Register',
        exact: true,
        name: 'Register',
        element: Register
    },

];

export default routes;