import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () =>{

    return(
        <>
        <div class="container-fluid bg-nav">
         <nav class="navbar navbar-expand-lg navbar-light col-lg-12 col-xl-10 mx-auto">
        <div class="container-fluid">
          <NavLink to="/" class="navbar-brand" >
            {/* <img src="./assets/img/logo.png" alt=""/> */}
            Student Record
          </NavLink>
  
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
  
            <NavLink to="/addstudent">
              <button class="btn btn-style w-100 btn-lg" type="button" >Add Student</button>
              </NavLink>
  
            </ul> 
           
          </div>
        </div>
      </nav>
      </div>
        </>
    )

}

export default Navbar;