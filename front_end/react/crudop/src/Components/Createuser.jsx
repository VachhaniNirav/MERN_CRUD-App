import React from "react";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import { useState } from 'react';
import { addUser } from "../Service/api";
import { useNavigate } from 'react-router-dom';

// set initial value for useState hook
const initValues = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    shortBio: ''
}

// create user function
const CreateUser = () => {
    const [user, setUser] = useState(initValues);                           // useState hook to change state/value of variable 'user'  
    const { firstName, lastName, email, dateOfBirth, shortBio } = user;     // object destructuring for variable 'user'
    const navigate = useNavigate();                                         // navigate function

// onChange input event function
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

// addUser: onClick submit event function & empty field validation with window pop-up
    const addUserDetails = async () => {
        
        if (firstName && lastName && email && dateOfBirth && shortBio) {
            await addUser(user);
            navigate('/view');     // after submit navigation to view users 
       
        } else {
            alert('Please fill empty field(s)');
        }
    }

// input form formation (create/add user)
    return (
        <FormGroup style={{ width: '55%', marginTop: '80px', marginRight: 'auto', marginLeft: 'auto' }}>
            <Typography variant="h5" >AddUser</Typography>
            
    {/* firstName input */}
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>FirstName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstName' value={firstName} autoComplete='off'/>
            </FormControl>
            
    {/* lastName input */}
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>LastName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastName' value={lastName} autoComplete='off'/>
            </FormControl>

    {/* email input */}
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} autoComplete='off'/>
            </FormControl>
            
    {/* dateOfBIrth input */}        
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>DateOfBirth</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dateOfBirth' value={dateOfBirth} autoComplete='off'/>
            </FormControl>
            
    {/* shortBio input */}
            <FormControl style={{ margin: '2%' }}>
                <InputLabel>ShortBio</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='shortBio' value={shortBio} autoComplete='off'/>
            </FormControl>
            
    {/* submit button */}        
            <Button variant='contained' style={{ width: '20%', margin: 'auto' }}
                onClick={() => addUserDetails()}> AddUser </Button>

        </FormGroup>
    );
}
export default CreateUser;