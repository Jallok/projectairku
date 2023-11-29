import { NextApiRequest, NextApiResponse } from "next";
import argon2 from "argon2";
import prisma from "@/custome-hook/prisma";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const loginData = req.body;

  // Find user data
  const userData = await prisma.user.findUnique({
    where: {
      email: loginData.email,
    },
  });

  if (!userData) {
    return res.status(400).json({ message: "User not found" });
  }

  try {
    // Check password using argon2.verify
    const passwordValidate = await argon2.verify(
      userData.password,  // Make sure userData.password is the hashed password
      loginData.password
    );

    if (!passwordValidate) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Sign a JWT token
    const jwtToken = jwt.sign(
      {
        email: userData.email,
        username: userData.username,
      },
      process.env.JWT_SECRET  // Use an environment variable for the secret
    );

    // Set the token as an HttpOnly cookie
    res.setHeader(
      "Set-Cookie",
      `token=${jwtToken}; HttpOnly; path="/"; SameSite=Lax; Secure`
    );

    // Respond with user information and token
    res.status(200).json({
      email: userData.email,
      username: userData.username,
      token: jwtToken,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
