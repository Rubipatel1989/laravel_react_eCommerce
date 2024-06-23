// src/Components/Home.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
const Home = () => {
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMMM dd, yyyy");
  };
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [salaryTotal, setSalaryTotal] = useState(0);
  const [adminsRecords, setAdminRecords] = useState([]);
  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, []);
  const adminCount = () => {
    axios
      .get("http://localhost:3000/auth/admin_count/")
      .then((result) => {
        if (result.data.status) {
          setAdminTotal(result.data.Result[0].total);
        } else {
          alert(result.data.message.sqlMessage);
        }
      })
      .catch((err) => console.log(err));
  };
  const employeeCount = () => {
    axios
      .get("http://localhost:3000/auth/employee_count/")
      .then((result) => {
        if (result.data.status) {
          setEmployeeTotal(result.data.Result[0].total);
        } else {
          alert(result.data.message.sqlMessage);
        }
      })
      .catch((err) => console.log(err));
  };
  const salaryCount = () => {
    axios
      .get("http://localhost:3000/auth/salary_count/")
      .then((result) => {
        if (result.data.status) {
          setSalaryTotal(result.data.Result[0].total);
        } else {
          alert(result.data.message.sqlMessage);
        }
      })
      .catch((err) => console.log(err));
  };
  const AdminRecords = () => {
    axios
      .get("http://localhost:3000/auth/admins/")
      .then((result) => {
        if (result.data.status) {
          setAdminRecords(result.data.Result);
        } else {
          alert(result.data.message.sqlMessage);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-cnter pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{adminTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-cnter pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{employeeTotal}</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-cnter pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5>{salaryTotal}</h5>
          </div>
        </div>
      </div>
      <div>
        <h3>List of Admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {adminsRecords.map((c) => (
              <tr>
                <td>{c.id}</td>
                <td>{c.email}</td>
                <td>{formatDate(c.created_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
