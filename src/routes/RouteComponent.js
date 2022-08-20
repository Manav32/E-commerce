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

];

export default routes;