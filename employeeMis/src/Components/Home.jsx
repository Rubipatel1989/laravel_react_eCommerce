// src/Components/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-cnter pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total:</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-cnter pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total:</h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-cnter pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total:</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
