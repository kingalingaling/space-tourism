import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/home'
import Crew from '../pages/crew'
import Technology from '../pages/technology'
import Destination from '../pages/destination'
import NotFound from '../pages/destination'


const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/crew', element: <Crew /> },
    { path: '/technology', element: <Technology /> },
    { path: '/destination', element: <Destination /> },
    { path: '/**', element: <NotFound /> },
])

export default routes;