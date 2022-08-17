import Dashboard from "../assests/component/Admin/Dashboard"
import Profile from "../assests/component/Admin/Profile"

export const routes = [
    { 
        path: '/admin',
        exact: true,
        name: 'Admin'
    },
    { 
        path: '/admin/dashboard',
        exact: true, 
        name: 'Dashboard', 
        element: Dashboard 
    },
    { 
        path: '/admin/profile', 
        exact: true,
        name: 'Profile', 
        element: Profile
    }

];

// export default routes;