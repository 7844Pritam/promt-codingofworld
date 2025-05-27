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
import AppRoutes from "./AppRoutes";



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
