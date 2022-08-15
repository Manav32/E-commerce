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
        component: Dashboard 
    },
    { 
        path: '/admin/profile', 
        exact: true,
        name: 'Profile', 
        component: Profile
    }

];

// export default routes;