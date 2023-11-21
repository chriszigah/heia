import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Tutorial, TutorialList, AddTutorial, NotFound } from "./components";

import { Home } from "./pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tutorial",
    element: <Tutorial />,
  },
  {
    path: "/tutorial/:id",
    element: <Tutorial />,
  },
  {
    path: "/addtutorial",
    element: <AddTutorial />,
  },
  {
    path: "/tutoriallist",
    element: <TutorialList />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
