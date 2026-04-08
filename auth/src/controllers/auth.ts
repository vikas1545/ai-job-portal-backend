import { sql } from "../utils/db.js";
import ErrorHandler from "../utils/errorHandler.js";
import { TryCatch } from "../utils/TryCatch.js";
import bcrypt from "bcrypt";

export const registerUser = TryCatch(async (req, res, next) => {
  const { name, email, password, phoneNumber, role, bio } = req.body;

  if (!name || !email || !password || !phoneNumber || !role) {
    throw new ErrorHandler(400, "Please fill all details");
  }

  const existingUsers =
    await sql`SELECT user_id FROM users WHERE email=${email}`;

  if (existingUsers.length > 0) {
    throw new ErrorHandler(409, "An User with this email already exists");
  }
  const hasPassword = await bcrypt.hash(password, 10);

  let registeredUser;
  if (role === "recruiter") {
    const [user] =
      await sql`INSERT INTO users (name, email, password, phone_number, role) VALUES 
        (${name}, ${email}, ${hasPassword}, ${role}) RETURNING name, email, password, phone_number, role, created_at`;

    registeredUser = user;
  } else if (role === "jobseeker") {
    const file=req.file;
    
    const [user] =
      await sql`INSERT INTO users (name, email, password, phone_number, role) VALUES 
        (${name}, ${email}, ${hasPassword}, ${role}) RETURNING name, email, password, phone_number, role, created_at`;

    registeredUser = user;
  }
  res.json(email);
});
