import { NextApiRequest, NextApiResponse } from "next";
import argon2 from "argon2";
import prisma from "@/custome-hook/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const registerData = req.body;

  const passwordHash = await argon2.hash(registerData.password);

  try {
    const result = await prisma.user.create({
      data: {
        email: registerData.email,
        username: registerData.nama,
        password: passwordHash,
      },
      select: {
        email: true,
        username: true,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Terjadi kesalahan saat melakukan registrasi akun" });
  }
}
