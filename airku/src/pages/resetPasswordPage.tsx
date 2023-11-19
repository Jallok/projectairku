import Image from "next/image";
import React from "react";

export default function ResetPasswordPage() {
  return (
    <div
      className="h-screen  w-screen flex justify-center mt-5 bg-bottom bg-no-repeat bg-[length:100%_200px]"
      style={{ backgroundImage: "url('/assets/bg-regist.jpg')" }}
    >
      <div className="h-[540px] w-[1110px] flex justify-between">
        <div className="h-[540px] w-[580px] relative">
          <Image src={"/assets/ilustrasi-reset.png"} alt="" fill />
        </div>
        <div className="h-[540px] w-[400px] mt-16 ">
          <h1 className="text-4xl mb-4 font-bold w-[450px] ">Reset Password</h1>
          <h2 className="mb-4 text-xs">
            Your new password must be different from previous used passwords.
          </h2>
          <form className="flex flex-col">
            <h1>Email*</h1>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Your Name"
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
            <h1>Confirm New Password*</h1>
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
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
