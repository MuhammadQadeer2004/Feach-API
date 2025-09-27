import { useEffect, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";
import EditStudent from "./EditStudent";

export default function StudentTable() {

  const [student, setStudent] = useState("");
  const navigate = useNavigate();
  const DisplayDeatials = (id) => {
    navigate("/student/view/" + id);
  }
  const EditStudent = (id) => {
    navigate("/student/edit/" + id);
  }

  const RemoveDetails = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch("http://localhost:8000/studentdata/" +id, {
        method: 'DELETE', 
      })
        .then((res) => {
          alert("Remove Sutdent Data successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err.message)
        )
    }
  }

  useEffect(() => {
    fetch('http://localhost:8000/studentdata')
      .then((res) => res.json())
      .then((data) =>
        setStudent(data)).catch((err) =>
          console.log(err.message))
  }, [])
  return (
    <div className='container' >
      <h2>Student Records</h2>
      <div className="table-container">
        <Link to="/student/create" className="btn btn-add">Add new Student</Link>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              student && student.map((item,index) => (
                <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button onClick={() => DisplayDeatials(item.id)} className="btn btn-info">View</button>
                    <button onClick={() => { EditStudent(item.id) }} className="btn btn-primary">Edit</button>
                    <button onClick={() => { RemoveDetails(item.id) }} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
};
