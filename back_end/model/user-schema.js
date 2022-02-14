import mongoose from 'mongoose';
import autoincrement from "mongoose-auto-increment";

// schema_document structure, validators
const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: String, required: true },
    shortBio: { type: String, required: true },
});

// ID auto-increment plugin
autoincrement.initialize(mongoose.connection);
userSchema.plugin(autoincrement.plugin, 'user');

// model_create collection
const user = mongoose.model('user', userSchema);

export default user;