import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
    category_id: "",
    salary: "",
  });

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category/")
      .then((result) => {
        if (result.data.status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3000/auth/employee/" + id)
      .then((result) => {
        setEmployee({
          ...employee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,
          salary: result.data.Result[0].salary,
          category_id: result.data.Result[0].category_id
        });
        console.log(result.data.Result[0].email + " Employee Email Set");
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/auth/edit_employee/" + id, employee)
      .then((result) => {
        if (result.data.status) {
          console.log("Success");
          navigate("/dashboard/employee");
        } else {
          console.log(result.data.message);
          alert(result.data.message.sqlMessage);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3>Edit Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="name">
              <string>Employee:</string>
            </label>
            <input
              type="text"
              id="inputName"
              autoComplete="off"
              placeholder="Enter Name"
              className="form-control rounded-0"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="employee">
              <string>Email:</string>
            </label>
            <input
              type="email"
              name="email"
              id="inputEmail4"
              autoComplete="off"
              placeholder="Enter Email"
              className="form-control rounded-0"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>          
          <div className="col-12">
            <label for="salary">
              <string>Salary:</string>
            </label>
            <input
              type="text"
              name="salary"
              id="inputSalary"
              autoComplete="off"
              placeholder="Enter Salary"
              className="form-control rounded-0"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="address">
              <string>Address:</string>
            </label>
            <input
              type="text"
              name="address"
              id="inputAddress"
              autoComplete="off"
              placeholder="Enter Address"
              className="form-control rounded-0"
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12 mb-3">
            <label for="category">
              <string>Select Category:</string>
            </label>
            <select
              name="category_id"
              id="category_id"
              className="form-select"
              value={employee.category_id }
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {category.map((c) => (
                <option value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>         

          <div className="mt-2">
            <button className="btn btn-success w-100 rounded-0">
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
