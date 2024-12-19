import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Users/dashboard/dashboard';
import Events from './Users/Events/events.jsx';
import EvacuationRoute from './Users/evac-route/evac_route';
import SignIn from './Auth/Sign-in/sign-in';
import SignUp from './Auth/Sign-up/sign-up';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Hotlines from './Users/Hotlines/hotlines';
import Teams from './Users/Teams/teams';

// Create router with ALL future flags enabled
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/evacuation-routes",
      element: <EvacuationRoute />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/hotlines",
      element: <Hotlines />,
    },
    {
      path: "/response-team",
      element: <Teams />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_prependBasename: true,
      v7_skipActionErrorRevalidation: true
    }
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;