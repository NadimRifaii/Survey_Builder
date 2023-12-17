import User from "../models/user.model.mjs"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export async function login(req, res) {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user)
      return res.status(404).json({ message: "User not found" })
    // const isValidPassword = await bcrypt.compare(password, user.password)
    const isValidPassword = password == user.password
    if (!isValidPassword)
      return res.status(404).json({ message: "Invalid password" })
    const { password: hashedPassword, _id, firstname, lastname, createdAt, updatedAt, __v, ...userDetails } = user.toJSON()//userDetails is username , email
    const token = jwt.sign(userDetails, process.env.SECRET_KEY, { expiresIn: "2 days" })
    return res.status(200).send({
      token
    })
  } catch (error) {
    return res.status(500).send({ error })
  }
}
export async function register(req, res) {
  const { username, firstname, lastname, email, password, role } = req.body
  if (!username || !firstname || !lastname || !email || !password || !role)
    return res.status(500).send({ message: "Missing credentials" })
  let user = await User.findOne({ email })
  if (user)
    return res.status(200).json({ message: "User already registered" })
  user = new User({
    username,
    firstname,
    lastname,
    email,
    password,
    role
  })
  const token = jwt.sign({ username, email, role }, process.env.SECRET_KEY, { expiresIn: "2 days" })
  await user.save()
  return res.status(200).send({
    user: user,
    token
  })
}