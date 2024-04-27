import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Map from "../pages/map/Map";
import EstabDetails from "../pages/estabDetails/EstabDetails";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/map", element: <Map /> },
  {path: "/estabelecimento/:id", element :<EstabDetails/>}
]);

export default router;
