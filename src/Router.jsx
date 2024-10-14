import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";
import Portfolio from "./components/Portfolio";


const Router = () => {
  const router = createBrowserRouter([
  
    {
      path: "/",
      element: <App />,
      children: [
        {path: "about", element:<About/>},
        {path: "portfolio", element:<Portfolio/>},
      
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;