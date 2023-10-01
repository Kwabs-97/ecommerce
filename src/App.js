/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Pages/Home";
import Cart from "./Cart/Cart";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={routes} />;
    </div>
  );
}

export default App;
