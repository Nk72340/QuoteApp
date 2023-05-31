import React, { useState } from "react";
import "../styles/style.css"

const Crud = () => {
  const [data, setData] = useState([]);
  const [inputValues, setInputValues] = useState({
    id: "",
    name: "",
    lastname: "",
    age: "",
    tech: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedData = [...data];
      updatedData[editingIndex] = { ...inputValues, id: editingIndex + 1 };
      setData(updatedData);
      setEditingIndex(null);
      window.alert("Data updated successfully");
    } else {
      const newData = { ...inputValues };
      setData([...data, newData]);
    }
    setInputValues({
      id: "",
      name: "",
      lastname: "",
      age: "",
      tech: "",
    });
  };

  const handleEdit = (index) => {
    const itemToEdit = data[index];
    setInputValues({ ...itemToEdit });
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    window.alert("Data deleted successfully");
  };

  return (
    <div>
      <div className="container main my-5">
        <h1 style={{ textAlign: "center", fontSize: "30px" }}>
          FULL CRUD IN REACT
        </h1>
        <form onSubmit={handleSubmit} className="form-control form">
          <input
            type="text"
            name="name"
            className="px-3 py-2 mb-4"
            value={inputValues.name}
            onChange={handleInputChange}
            placeholder="First-Name"
          />
          <input
            type="text"
            name="lastname"
            className="px-3 py-2 mb-4"
            value={inputValues.lastname}
            onChange={handleInputChange}
            placeholder="Last-name"
          />
          <input
            type="text"
            name="age"
            className="px-3 py-2 mb-4"
            value={inputValues.age}
            onChange={handleInputChange}
            placeholder="Age"
          />
          <input
            type="text"
            name="tech"
            className="px-3 py-2 mb-4"
            value={inputValues.tech}
            onChange={handleInputChange}
            placeholder="write-tech"
          />
          <button type="submit" className="btn btn-success">
            {editingIndex !== null ? "Update" : "ADD"}
          </button>
        </form>
        <table className="table table-responsive table-hover my-5">
          <thead>
            <tr>
              <th scope="col">Sr N.</th>
              <th scope="col">First-Name</th>
              <th scope="col">Last-Name</th>
              <th scope="col">Age</th>
              <th scope="col">Tech</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td>{item.tech}</td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
