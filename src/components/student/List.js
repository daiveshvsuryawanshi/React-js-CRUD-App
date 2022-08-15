import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const Listview = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        async function getAllStudent() {
            try {
                const students = await axios.get("http://localhost:4000/posts")
                // console.log(students.data);
                setStudents(students.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getAllStudent();
    }, [])

    const handleDelete = async id => {
        await axios.delete(`http://localhost:4000/posts/${id}`);
        var newstudent = students.filter((item) => {
            // console.log(item);
            return item.id !== id;
        })
        setStudents(newstudent);
    }


    return (
        <>
            

            <div className="container col-lg-6 mt-4">
                <table className="table table-bordered border-dark">
                    <thead>
                        <tr >
                            <th>No</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Mark</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        students.map((student, i) => {
                            return (
                                <tbody>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.class}</td>
                                    <td>{student.mark}</td>

                                    <td className="px-4">
                                        <Link to={`/view/${student.id}`}>
                                            <i class="bi bi-eye-fill view"></i>
                                        </Link>

                                        <Link to={`/edit/${student.id}`} className="mx-4">
                                        <i class="bi bi-pencil-fill edit"></i>
                                        </Link>

                                        <i class="bi bi-trash-fill delete" onClick={() => handleDelete(student.id)}></i>
                                    </td>
                                </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>

        </>
    )
}

export default Listview






