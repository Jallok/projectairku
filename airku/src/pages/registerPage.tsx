import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGoogle } from 'react-icons/bs'

export default function RegisterPage() {
  return (
    <div
      className="h-screen w-screen mt-[100px] flex justify-center mt-5 bg-bottom bg-no-repeat bg-[length:100%_200px]"
      style={{ backgroundImage: "url('/assets/bg-regist.jpg')" }}
    >
      <div className="h-[540px] w-[1110px] flex justify-between">
        <div className="h-[540px] w-[580px] relative">
          <Image src={"/assets/ilustrasi-regist.png"} alt="" fill />
        </div>
        <div className="h-[540px] w-[400px] ">
          <h1 className="text-4xl mb-[30px] font-bold w-[450px] ">
            Sign Up Airku
          </h1>
          <form className="flex flex-col">
            <h1>Nama*</h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Name"
              className="border-2 w-full h-[32px] rounded-md p-2 mb-[15px]"
            />
            <h1>Email*</h1>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="border-2 w-full h-[32px] rounded-md p-2 mb-[15px]"
            />
            <h1>Password*</h1>
            <input
              type="password"
              name=""
              id=""
              placeholder="********"
              className="border-2 w-full h-[32px] rounded-md p-2 mb-[15px]"
            />
            <h1>Ulangi Password*</h1>
            <input
              type="password"
              name=""
              id=""
              placeholder="********"
              className="border-2 w-full h-[32px] rounded-md p-2 mb-[15px]"
            />
            <button
              type="submit"
              className="w-full bg-teal-600 rounded-md text-white py-[7px] mb-[15px]"
            >
              Sign Up
            </button>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="h-4 p-2 mb-[15px]"
              />
              <h1 className="-mt-4 ">Agree to Terms and Conditions</h1>
            </div>
          </form>

          <div className="flex gap-2 items-center ">
            <hr className="border-[1px] border-solid border-black w-[210px]" />
            <h1 className="text-xl">or</h1>
            <hr className="border-[1px] border-solid border-black w-[210px]" />
          </div>
          <Link
            href={"#"}
            className="w-full border-2 border-blue-700 px-[7px] text-blue-700 flex justify-center items-center rounded-full mt-4 mb-5 p-1 gap-2"
          >
            {" "}
            <BsGoogle />
            Login With Google
          </Link>
          <div className="flex w-full justify-center">
            <h1>Sudah Punya Akun ? </h1>
            <Link href={"/login"} className="text-teal-600">
              Login Di Sini
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
