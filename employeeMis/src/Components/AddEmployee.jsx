import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    category_id: "",
    image: "",
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
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('address', employee.address);
    formData.append('salary', employee.salary);
    formData.append('category_id', employee.category_id);
    formData.append('image', employee.image);
    console.log(employee);
    axios
      .post("http://localhost:3000/auth/add_employee", formData )
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
        <h3>Add Employee</h3>
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
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="password">
              <string>Password:</string>
            </label>
            <input
              type="password"
              name="password"
              id="inputPassword4"
              autoComplete="off"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
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
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {category.map((c) => (
                <option value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label for="image">
              <string>Select Image:</string>
            </label>
            <input
              type="file"
              id="inputGroupFile01"
              name="image"
              className="form-control rounded-0"
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.files[0] })
              }
            />
          </div>

          <div className="mt-2">
            <button className="btn btn-success w-100 rounded-0">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
