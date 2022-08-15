
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const View = () => {
    const { id } = useParams();
    const [student, setStudent] = useState([]);
    // const history = useHistory();
    useEffect(() => {
        async function getStudent() {
            try {
                const student = await axios.get(`  http://localhost:4000/posts/${id}`)
                // console.log(student.data);
                setStudent(student.data);
            } catch (error) {
                console.log("Something is Wrong");
            }
        }
        getStudent();
    }, [id])

    function handleClick() {
        //history.push("/")
    }
    return (
        <>
           

            {/* bootstrap */}

            <div className="container col-lg-8 mt-5">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th colspan="2">
                                <div className="row">
                                    <div className="col-4">
                                        <Link to="/">
                                        <i class="bi bi-arrow-left-circle"></i>
                                        </Link>
                                    </div>

                                    <div className="col-8">
                                        <th>Student Details</th>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Id : </th>
                            <td> {student.id} </td>
                        </tr>
                        <tr>
                            <th scope="row">Name : </th>
                            <td> {student.name} </td>
                        </tr>
                        <tr>
                            <th scope="row">Class : </th>
                            <td> {student.class} </td>
                        </tr>
                        <tr>
                            <th scope="row">Mark : </th>
                            <td> {student.mark} </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </>
    )
}

export default View
