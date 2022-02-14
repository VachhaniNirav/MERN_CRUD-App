import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {

//homepage formation with form opeartion selection
    return (
        <>
            <div className="container-fluid">
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <div className="flex-row">
                       <div className="mb-4"> <h3 className="text-center"> Welcome !! Choose Form Operation </h3> </div>
                        <div className="d-flex justify-content-center justify-content-evenly">
                            {/* createUser button with Link-path */}
                               <Link to = "/create"><button type="button" className="btn btn-primary btn-lg">Create User</button></Link>      
                            {/* viewUser button with Link-path */}   
                               <Link to = "/view"><button type="button" className="btn btn-secondary btn-lg">View User</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;