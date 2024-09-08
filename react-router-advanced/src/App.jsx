import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import NotFound from "./NotFound";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./AuthContext";

function App() {
  const isAuthenticated = false;
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute
                element={<Profile />}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/blog/:id" element={<BlogPost />} />{" "}
          {/* Dynamic route for blog posts */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
