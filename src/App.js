import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
