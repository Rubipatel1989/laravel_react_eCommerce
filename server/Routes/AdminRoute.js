import express from "express";
const router = express.Router();
import con from "../utils/db.js";
import jwt from "jsonwebtoken";

router.post("/adminlogin", (req, res) => {
  console.log(req.body);
  const sql = "SELECT * FROM admin WHERE email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) {
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
    } else{
        return res.json({ loginStatus: false, Error: "Wrong email/password" });
    }
  });
});

export { router as adminRouter };
