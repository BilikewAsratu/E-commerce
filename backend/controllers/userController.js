import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//route for user login
const loginUser = async (req, res) => {

}

//route for user register

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //checking user already exist or not
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "user already exists" })
        }
        // validating email format and string password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter valid email" })
        }
        //password strength
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter Strong password" })
        }
        // hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = userModel({
            name, email, password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}

//route for admin login
const adminLogin = async (req, res) => {

}

export default { loginUser, registerUser, adminLogin };