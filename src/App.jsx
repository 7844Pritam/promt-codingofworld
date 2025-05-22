import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import AddPrompt from "./pages/AddPrompt";
import Explore from "./pages/Explore";
import Collections from "./pages/Collections";
import Community from "./pages/Community";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import LoginForm from "./pages/Login";
import PromptsPage from "./pages/PromptsPage";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/add-prompt", element: <AddPrompt /> },
    { path: "/explore", element: <Explore /> },
    { path: "/collections", element: <Collections /> },
    { path: "/community", element: <Community /> },
    { path: "/login", element: <LoginForm /> },
    { path: "/signup", element: <Signup /> },
    { path: "/profile", element: <Profile /> },
    { path: "/prompts", element: <PromptsPage /> },
    
  ]);

  return routes;
}

function App() {
  return (  
    <Router>
      <div className="flex">
        <div className="flex-1">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
