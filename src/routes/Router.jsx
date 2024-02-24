import { createBrowserRouter } from "react-router-dom";

// Component
import ProtectedRoute from "../components/routes/ProtectedRoute";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/overview",
        element: <Home />,
      },

    ],
  },
]);

export default router;
