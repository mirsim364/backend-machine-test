import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        minlength:2,
        unique:true,
        maxlength:20
    },
    email: {
        type: String,
        required: true,
        unique:true,
        minlength:2
    },
    password: {
        type: String,
        required:true,
        minlength:2,
        maxlength:10,
        unique:true
    },
    name: {
        type: String,
        required:true,
        minlength:2,
        unique:true,
        maxlength:20
    },
    dob:{
        type:Date,
        required:true,
        
    }
});

export const Register = mongoose.model("Register", registerSchema);
export  default Register