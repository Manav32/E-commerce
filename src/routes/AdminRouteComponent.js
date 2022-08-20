import Dashboard from "../assests/component/Admin/Dashboard"
import Profile from "../assests/component/Admin/Profile"

 const routes = [
    { 
        id:3,
        path: '/admin/dashboard',
        exact: true, 
        name: 'Dashboard', 
        element: Dashboard()
    },
    { 
        id:4,
        path: '/admin/profile', 
        exact: true,
        name: 'Profile', 
        element: Profile()
    }

];

export default routes;