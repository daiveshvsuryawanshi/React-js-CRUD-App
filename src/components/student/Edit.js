import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Edit = () => {

 const { id } = useParams();
 const navigate = useNavigate();

 const [student, setStudent] = useState({
  stuname: "",
  email: ""
 });
 useEffect(() => {
  async function getStudent() {
   try {
    const student = await axios.get(`http://localhost:4000/post/${id}`)
    // console.log(student.data);
    setStudent(student.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getStudent();
 }, [id]);

 function onTextFieldChange(e) {
  setStudent({
   ...student,
   [e.target.name]: e.target.value
  })
 }

 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.patch(`http://localhost:4000/posts/${id}`,student)
   navigate("/");
  } catch (error) {
   console.log("Something is Wrong");
  }
 }

 return (
  <>
   
 <div className="container col-lg-6">
                <h1 className="text-center"> Record</h1>

               <form>

               <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Student ID</label>
                    <input type="text" autoComplete="id" class="form-control" id="id" name="id" placeholder=" ID" value={id} disabled />
                </div>

               <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Student Name</label>
                    <input type="text" autoComplete="name" class="form-control" id="name" name="name" placeholder=" Name" value={student.name} onChange={e => onTextFieldChange(e)}  required/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"> Class</label>
                    <input type="text" autoComplete="class" class="form-control" id="class" name="class" placeholder=" class" value={student.class} onChange={e => onTextFieldChange(e)}/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                    <input type="text" autoComplete="phone" class="form-control" id="phone" name="phone" placeholder="+91 000000000" value={student.phone} onChange={e => onTextFieldChange(e)} />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Mark</label>
                    <input type="text" autoComplete="mark" class="form-control" id="mark" name="mark" placeholder="00000" value={student.mark} onChange={e => onTextFieldChange(e)}  />
                </div>

                <div class="mb-3 text-center">
                    <button type="submit" className="btn btn-primary w-50" onClick={e => onFormSubmit(e)}>Update Record</button>
                </div>        

               </form>


            </div> 
  </>
 )
}

export default Edit
