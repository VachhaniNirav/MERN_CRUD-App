import express from "express";
import { getusers, adduser, getUserById, edituser, deleteuser, getsort } from "../user-controller.js";


const route = express.Router();


// route to view all user data
route.get('/', getusers);

// route to sort by lastName
route.get('/sort', getsort);

// route to add new user
route.post('/add', adduser);

// route to get user data by id (for edit)
route.get('/:id', getUserById);

// route to edit user
route.put('/:id', edituser);

// route to delete user
route.delete('/:id', deleteuser);


export default route;