/** @format */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopContextProvider from "./context/shop-context";
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
    <ShopContextProvider>
      <RouterProvider router={routes} />;
    </ShopContextProvider>
  );
}

export default App;
