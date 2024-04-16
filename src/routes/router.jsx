import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Map from "@pages/map/Map";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/map", element: <Map /> },
]);

export default router;
