import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Components/Homepage";
import CreateUser from "./Components/Createuser";
import ViewUser from "./Components/Viewuser";
import EditUser from "./Components/Edituser";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />           {/* route to homepage (form operation selectors) */}
          <Route exact path='/create' element={<CreateUser />} />   {/* route to create or add user */}
          <Route exact path='/view' element={<ViewUser />} />       {/* route to view users */}
          <Route exact path='/edit/:id' element={<EditUser />} />   {/* route to edit user */}
        </Routes>
      </Router>
    </>
  );
}

export default App;