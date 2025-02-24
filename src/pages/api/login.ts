import dbConnect from "@/models/dbConnect";
import User from "../../models/user";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { email, password } = req.body;
  console.log(email,password,'params')

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  try {
    let user = await User.findOne({ email });
    console.log(user,'found one')

    if (!user) {
      // Hash password and create a new user
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ email, password: hashedPassword });
      await user.save();

      return res.status(201).json({ 
        success: true, 
        message: "User created successfully", 
        userId: user._id 
      });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    res.status(200).json({ success: true, message: "Login successful", isMatch });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
