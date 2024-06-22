import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const formatDate = (dateString) => {
  return format(new Date(dateString), "MMMM dd, yyyy");
};
const Employee = () => {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee/")
      .then((result) => {
        if (result.data.status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((c) => (
              <tr>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.salary}</td>
                <td>{c.address}</td>
                <td>
                  <img src={`http://localhost:3000/Images/` + c.image} alt="Profile" className="employee_image" />
                </td>
                <td>
                  <Link to={`/dashboard/edit_employee/` + c.id} className="btn btn-info btn-sm">Edit</Link>&nbsp;
                  <Link to={`/dashboard/delete_employee` + c.id} className="btn btn-danger btn-sm">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
