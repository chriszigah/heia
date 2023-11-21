import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import {
  NotFound,
  Profile,
  Login,
  TLogin,
  ALogin,
  PLogin,
  RLogin,
  Home,
  DashBoardNav,
  StudentDashboard,
  Register,
} from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/rlogin" element={<RLogin />} />
        <Route path="/slogin" element={<Login />} />
        <Route path="/tlogin" element={<TLogin />} />
        <Route path="/alogin" element={<ALogin />} />
        <Route path="/plogin" element={<PLogin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<DashBoardNav />} />
        <Route path="/sdash" element={<StudentDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
