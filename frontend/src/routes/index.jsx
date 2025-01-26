import Dashboard from '../layout/auth/Dashboard';
import SIGNIN from '../layout/auth/SIGNIN';
import SIGNUP from '../layout/auth/SIGNUP';
import AppLayout from '../layout/pages/AppLayout';


const routes = [
    {
        path: '/',
        element: <AppLayout />,
        children: []
    },
    {
        path: "/auth/signin",
        element: <SIGNIN/>
    },
    {
        path: "/auth/register",
        element: <SIGNUP/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: '*',
        element: <h1>Page Not Found</h1>
    }

]


export default routes;