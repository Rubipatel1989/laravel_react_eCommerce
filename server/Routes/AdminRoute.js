import express from "express";
const router = express.Router();
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

router.post("/adminlogin", (req, res) => {
  console.log(req.body);
  const sql = "SELECT * FROM admin WHERE email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ loginStatus: false, Error: "Query error" });
    } else if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie("token", token);
      return res.json({ loginStatus: true, message: "Login Successfully." });
    } else {
      return res.json({ loginStatus: false, Error: "Wrong email/password" });
    }
  });
});
router.post("/add_category", (req, res) => {
  const sql = "INSERT INTO category (name) VALUES (?)";
  con.query(sql, [req.body.category], (err, result) => {
    console.log(err + " Error");
    console.log(result + "result");
    if (err) {
      console.log(err);
      return res.json({ status: false, Error: "Query error" });
    } else {
      return res.json({ status: true, Error: "Added successfully." });
    }
  });
});

router.get("/category", (req, res) => {
  const sql = "SELECT * FROM category";
  con.query(sql, (err, result) => {
    if (err) {
      return res.json({ status: false, Error: "Query error" });
    } else {
      return res.json({ status: true, Result: result });
    }
  });
});
router.post("/add_employee", (req, res) => {
  console.log(req.body);
  const sql =
    "INSERT INTO employee (name, email, password, category_id, salary, address, image) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
    if (err) {
      return res.json({ status: false, Error: "Query error" });
    }
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.category_id,
      req.body.salary,
      req.body.address,
      req.body.image,
    ];
    con.query(sql, [values], (err, result) => {
      console.log(err + " Error");
      console.log(result + "result");
      if (err) {
        console.log(err);
        return res.json({ status: false, Error: "Query error" });
      } else {
        return res.json({ status: true, Error: "Added successfully." });
      }
    });
  });
});

export { router as adminRouter };
