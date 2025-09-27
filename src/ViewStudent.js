import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function ViewStudent() {
    const { studentid } = useParams();
    const [studentData, setstudentData] = useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/studentdata/" + studentid)
            .then((res) => res.json())
            .then((data) => setstudentData(data))
            .catch((err) => console.log(err.message)
            )
    },[]);
    return (
        <div className="container">
            <h1>Student detail</h1>
            { studentData && <div className="details">
                <p><strong>ID: </strong>{studentData.id}</p>
                <p><strong>Name: </strong>{studentData.name}</p>
                <p><strong>Place: </strong>{studentData.place}</p>
                <p><strong>Phone: </strong>{studentData.phone}</p>
            </div>}
            <Link to="/" className="btn-back">Back</Link>
        </div>

    )
};