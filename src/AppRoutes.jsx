import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import AddPrompt from "./pages/AddPrompt";
import Explore from "./pages/Explore";
import Collections from "./pages/Collections";
import Community from "./pages/Community";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import LoginForm from "./pages/Login";
import PromptsPage from "./pages/PromptsPage";
import RouteSync from "./RouteSync";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/add-prompt", element: <AddPrompt /> },
    // { path: "/explore", element: <Explore /> }, // temporarily disabled
    { path: "/collections", element: <Collections /> },
    { path: "/community", element: <Community /> },
    { path: "/login", element: <LoginForm /> },
    { path: "/signup", element: <Signup /> },
    { path: "/profile", element: <Profile /> },
    { path: "/prompts", element: <PromptsPage /> },
  ]);

  return (
    <>
      <RouteSync />
      {routes}
    </>
  );
}

export default AppRoutes;
