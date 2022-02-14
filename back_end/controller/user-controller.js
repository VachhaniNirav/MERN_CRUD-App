import User from "../model/user-schema.js";


// get all users data from DB
const getusers = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// add new user to DB
const adduser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);   
    try {
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// get user data by Id from DB (for edit)
const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// edit user DB
const edituser = async (req, res) => {
    const user = req.body;
    const editUser = new User(user);
    try {
        await User.updateOne({ _id: req.params.id }, editUser);
        res.json(editUser);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// delete user DB
const deleteuser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.json("User Deleted Successfully");
    } catch (error) {
        res.json({ message: error.message });
    }
}

// sort by lastName
const getsort = async (req, res) => {
    try {
        const user = await User.find().sort('lastName');
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
}


export { getusers, adduser, getUserById, edituser, deleteuser, getsort };