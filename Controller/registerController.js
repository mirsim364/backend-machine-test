import Register from "../model/registerModel.js"
import jwt from 'jsonwebtoken';



export const Register=(req,res)=>{
    try{
        const {username,password,email,name,dob}=req.body

        if(!username||!password||!email||!name||!dob){
            return res.status(400).json({message :"All fields are mandatory"})
        }
         const newRegister=new Register({username,password,email,name,dob})
         const savedRegister =newRegister.save()
         console.log(savedRegister);
        return res.status(201).json({message:"succesfully inserted"})
    }catch(error){
        return res.status(404).json({message :error.message || 'error'});
    }
}


export const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }
        const user = await Register.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id, username: user.username }, 'abcd', { expiresIn: '5h' });
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Server error' });
    }
};