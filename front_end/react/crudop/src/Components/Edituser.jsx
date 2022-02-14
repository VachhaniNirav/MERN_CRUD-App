import React from "react";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
import getUsers, { editUser } from "../Service/api";
import { useNavigate, useParams } from 'react-router-dom';

// set initial value for useState hook
const initValues = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    shortBio: ''
}

// edit user function
const EditUser = () => {
    const [user, setUser] = useState(initValues);                           // useState hook to change state/value of variable 'user' 
    const { firstName, lastName, email, dateOfBirth, shortBio } = user;     // object destructuring for variable 'user'
    const { id } = useParams();                                             // get id
    const navigate = useNavigate();                                         // navigate function

// load users data on pageload
    useEffect(() => {
        loadUserData();
    }, []);

// load users data function
    const loadUserData = async () => {
        const response = await getUsers(id);
        setUser(response.data);
    }

// onChange input event function
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

// editUser: onClick submit event function & empty field validation with window pop-up
    const editUserDetails = async () => {

        if (firstName && lastName && email && dateOfBirth && shortBio) {
            await editUser(id, user);
            navigate('/view');        // after submit navigation to view users 

        } else {
            alert('Please fill empty field(s)');
        }
    }

// input form formation (editUser)
    return (
        <FormGroup style={{ width: '55%', marginTop: '80px', marginRight: 'auto', marginLeft: 'auto' }}>
            <Typography variant="h5" >EditUser</Typography>

    {/* firstName input */}
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>FirstName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstName' value={firstName} />
            </FormControl>

    {/* lastName input */}      
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>LastName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastName' value={lastName} />
            </FormControl>

    {/* email input */}        
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>

    {/* dateOfBIrth input */}         
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>DateOfBirth</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dateOfBirth' value={dateOfBirth} />
            </FormControl>

    {/* shortBio input */}        
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>ShortBio</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='shortBio' value={shortBio} />
            </FormControl>

    {/* submit button */}         
            <Button variant='contained' style={{ width: '20%', margin: 'auto' }}
                onClick={() => editUserDetails()}> EditUser </Button>
                
        </FormGroup>
    );
}
export default EditUser;