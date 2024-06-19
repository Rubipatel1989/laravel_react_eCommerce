import React from 'react'

const AddCategory = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-75">
      <div className="p-3 rounded w-25 border">
        <h2>Add Category</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="category">
              <string>Category:</string>
            </label>
            <input
              type="text"
              name="category"
              autoComplete="off"
              placeholder="Category"
              className="form-control rounded-0"
              onChange={(e) =>setvalues({...values, category : e.target.value})}
            />
          </div>
          
          <div className="mb-2">
            <button className="btn btn-success w-100 rounded-0">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCategory