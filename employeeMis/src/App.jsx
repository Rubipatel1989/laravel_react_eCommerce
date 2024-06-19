import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Employee from "./Components/Employee"; // Import the Employee component
import Category from "./Components/Category"; // Import the Category component
import AddCategory from "./Components/AddCategory"; // Import the Category component
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard/employee" element={<Employee />} />
          <Route path="/dashboard/category" element={<Category />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/add_category" element={<AddCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
