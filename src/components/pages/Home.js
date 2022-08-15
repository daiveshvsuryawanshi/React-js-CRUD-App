import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();
    //  post data 
    // usesate define and add input list 
    const [student, setStudent] = useState({
        name: "",
        class: "",
        mark: ""
    });

    const [status, setStatus] = useState();

    //  getting data here 
    function onTextFieldChange(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    //  send data to url
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/posts`, student)
            setStatus(true);
        } catch (error) {
            console.log("Something is Wrong");
        }
    }
    if (status) {
        navigate("/")
    }

    return (
        <>

            {/* bootstrap here */}

            <div className="container col-lg-6">
                <h1 className="text-center">Student Record</h1>

                <form>


                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Student Name</label>
                        <input type="text" autoComplete="name" class="form-control" id="name" name="name" placeholder=" Name" onChange={e => onTextFieldChange(e)} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"> Class</label>
                        <input type="text" autoComplete="class" class="form-control" id="class" name="class" placeholder=" class" onChange={e => onTextFieldChange(e)} />
                    </div>

                  

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Mark</label>
                        <input type="text" autoComplete="mark" class="form-control" id="mark" name="mark" placeholder="00000" onChange={e => onTextFieldChange(e)} />
                    </div>


                    <div class="mb-3 text-center">
                        <button type="submit" className="btn btn-primary w-50" onClick={e => onFormSubmit(e)}>Add Record</button>
                    </div>

                </form>


            </div>
        </>
    )
}

export default Home
