import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGoogle } from "react-icons/bs";

export default function LoginPage() {
  return (
    <div className=" flex h-screen justify-between">
      <div
        className="w-1/2 h-[100%] bg-cover flex flex-col justify-center items-center  "
        style={{ backgroundImage: "url('/assets/bg-login.jpg')" }}
      >
        <div className="relative h-[75px] w-[72px]">
          <Image src={"/assets/airku.png"} alt="" fill />
        </div>
        <h1 className="text-white text-4xl font-bold">Airku</h1>
      </div>
      <div
        className="h-[100%] w-1/2 flex items-center flex-col justify-center m-auto bg-no-repeat bg-[length:100%_150px] bg-bottom"
        style={{ backgroundImage: "url('/assets/bg-login2.jpg')" }}
      >
        <h1 className="text-5xl mb-[30px] font-bold w-[450px] ">Login Airku</h1>
        <form className="flex flex-col">
          <h1>Email</h1>
          <input
            type="email"
            name=""
            id=""
            placeholder="masbudi@gmail.com"
            className="border-2 w-[450px] h-[32px] rounded-md p-2 mb-[15px]"
          />
          <h1>Password</h1>
          <input
            type="password"
            name=""
            id=""
            placeholder="********"
            className="border-2 w-[450px] h-[32px] rounded-md p-2 mb-[15px]"
          />
          <button
            type="submit"
            className="w-[450px] bg-teal-600 rounded-md text-white py-[7px] mb-[15px]"
          >
            Login
          </button>
        </form>
        <Link
          href={"#"}
          className="text-teal-600 w-[450px] flex justify-end mb-[30px] "
        >
          Lupa password ?
        </Link>
        <div className="flex gap-2 items-center ">
          <hr className="border-[1px] border-solid border-black w-[210px]" />
          <h1 className="text-xl">or</h1>
          <hr className="border-[1px] border-solid border-black w-[210px]" />
        </div>
        <Link
          href={"#"}
          className="w-[450px] border-2 border-blue-700 px-[7px] text-blue-700 flex justify-center items-center rounded-xl mt-4 mb-5 p-2 gap-2"
        >
          {" "}
          <BsGoogle />
          Login With Google
        </Link>
        <div className="flex w-[450px] justify-center">
          <h1>Belum Punya Akun ?</h1>
          <Link href={"/register"} className="text-teal-600">
            Daftar Di Sini
          </Link>
        </div>
      </div>
    </div>
  );
}
