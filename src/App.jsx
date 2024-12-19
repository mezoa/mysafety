import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Users/dashboard/dashboard';
import Events from './Users/Events/events.jsx';
import EvacuationRoute from './Users/evac-route/evac_route';
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
      element: <Dashboard />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/evacuation-routes" element={<EvacuationRoute />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;