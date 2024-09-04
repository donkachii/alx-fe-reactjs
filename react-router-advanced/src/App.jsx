import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog/:id" element={<BlogPost />} />{" "}
        {/* Dynamic route for blog posts */}
      </Routes>
    </Router>
  );
}

export default App;
