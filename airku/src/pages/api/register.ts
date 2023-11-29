import { NextApiRequest, NextApiResponse } from "next";
import argon2 from "argon2";
import prisma from "@/custome-hook/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  // Create a new user in the database with "Unverified" status
  try {
    
    const registerData = req.body;
    const passwordHash = await argon2.hash(registerData.password);
    const newUser = await prisma.user.create({
      data: {
        email: registerData.email,
        username: registerData.nama,
        password: passwordHash,
        status: "Unverfied",
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });

    res.json({
      message: "User registered. Check your email for verification.",
    });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
