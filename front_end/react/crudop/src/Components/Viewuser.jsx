import React from 'react';
import { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import getUsers, { deleteUser, sortUser } from "../Service/api";
import { Link } from "react-router-dom";
import { useEffect } from "react";


// view user function
const ViewUser = () => {

    const [users, setUsers] = useState([]);     // useState hook to change state/value of variable 'users'

// load users data on pageload
    useEffect(() => {
        getAllUsers();
    }, [])

// get all users data function
    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

// sort by lastName function
    const sort = async () => {
        const response = await sortUser();
        console.log(response.data);
        setUsers(response.data);
    }

// delete user function    
    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

// table formation for users data
    return (
        <div>
            <Table style={{ width: '85%', marginTop: '70px', marginRight: 'auto', marginLeft: 'auto' }}>
                <TableHead>
                    <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                        <TableCell>id</TableCell>
                        <TableCell>firstName</TableCell>
                        <TableCell>lastName</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>dateOfBirth</TableCell>
                        <TableCell>shortBio</TableCell>
                        <TableCell>
                    {/* add more users button_link to create */}
                            <Button variant='outlined' color='success' style={{ fontWeight: 'bold' }} component={Link} to='/create'>Add More Users</Button>        
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (
                            <TableRow key={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.firstName}</TableCell>
                                <TableCell>{user.lastName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.dateOfBirth}</TableCell>
                                <TableCell>{user.shortBio}</TableCell>
                                <TableCell>
                            {/* edit button */}
                                    <Button variant='contained' style={{ marginRight: '10px' }} component={Link} to={`/edit/${user._id}`} >Edit</Button>
                            {/* delete button */}
                                    <Button variant='contained' color='error' onClick={() => deleteUserData(user._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <div style={{ marginLeft: '150px', marginTop: '30px' }}>
                {/* sort by lastName button */}
                    <Button variant='outlined' style={{ fontWeight: 'bold' }} onClick={() => sort()} >Sort By Last Name</Button>
            </div>    
        </div>
    );

}
export default ViewUser;