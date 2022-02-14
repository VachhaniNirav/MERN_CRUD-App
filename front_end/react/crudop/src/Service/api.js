import axios from "axios";


const url = "http://localhost:8000/users";


// view all users get api
const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
} 

// add user post api
const addUser = async (user) => {
    return await axios.post(`${url}/add`, user);
}

// edit user put api
const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user);
}

//remove user delete api
const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}

//sort by lastName get api
const sortUser = async () => {
    return await axios.get(`${url}/sort`);
}


export default getUsers;
export {addUser, editUser, deleteUser, sortUser}; 