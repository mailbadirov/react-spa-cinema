import Main from "pages/Main";
import Movie from "pages/Movie";
import NotFound from "pages/NotFound";
import Profile from "pages/Profile";

import { Routes } from "app/constants";

interface IRoutes {
  path: Routes;
  element: JSX.Element;
}

const routesArray: IRoutes[] = [
  {
    path: Routes.MainPage,
    element: <Main />,
  },
  {
    path: Routes.ProfilePage,
    element: <Profile />,
  },
  {
    path: Routes.NotFoundPage,
    element: <NotFound />,
  },
  {
    path: (Routes.MoviePage + "/:id") as Routes.MoviePage,
    element: <Movie />,
  },
];

export default routesArray;
