import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt"

export const createtoken=(user)=>{
 const token=jwt.sign({
    idUser:user.idUser,
    username:user.username
 },process.env.JWT_SECRET)

 return token
}
export const hashmotdepasse=(password)=>{
return bcrypt.hash(password,10)
}
export const comparepassword=(password,hash)=>{
    return bcrypt.compare(password,hash)
}