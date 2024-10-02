import React from "react";

const App = () => {
  return (
    <div className="h-screen overflow-hidden flex justify-center items-center">
      <img
        src="/Ellipse 1.svg"
        alt="Vague description 1"
        className="absolute bottom-0 left-0"
      />
      <img
        src="/Ellipse 2.svg"
        alt="Vague description 2"
        className="absolute top-0 right-0"
      />

      <div className="flex flex-col min-w-[300px] w-[450px] gap-6 text-center shadow-[0_4px_10px_rgba(0,0,0,0.4)] p-8 z-10 rounded-[20px] bg-[#000000b4] lg:bg-transparent">
        <h1 className="uppercase text-7xl font-semibold text-[#02B94BD6] self-start ">
          Login
        </h1>
        <input
          type="text"
          className="py-2 px-4 text-lg border-[1px] border-[#0000004F] placeholder-[#101A1CD6] rounded-lg"
          placeholder="Username"
        />
        <input
          type="password"
          className="py-2 px-4 text-lg border-[1px] border-[#0000004F] placeholder-[#101A1CD6] rounded-lg"
          placeholder="Password"
        />

        <button className="bg-[#02B94BD6] text-[#FFFFFFE5] text-2xl py-3 px-3 font-semibold uppercase flex-grow rounded-lg w-1/2 hover:bg-[#02B94B] duration-300">
          Login
        </button>
        <div className="flex items-center mt-4">
          <hr className="flex-grow border-[1px] border-black/25" />
          <span className="uppercase px-2 font-semibold text-2xl">or</span>
          <hr className="flex-grow border-[1px] border-black/25" />
        </div>

        <div className="flex justify-around w-1/2 mx-auto">
          <a href="#" className="">
            <img src="/image 1.png" alt="google link" />
          </a>
          <a href="#" className="">
            <img src="/image 2.png" alt="facebook link" />
          </a>
        </div>

        <div className="flex font-semibold justify-between text-xl gap-2 text-[#02B94BBF] ">
          <a href="#" className="hover:text-[#2ec0ec] duration-300">
            <p>Forgot Password</p>
          </a>
          <a href="#" className="hover:text-[#2ec0ec] duration-300">
            <p>Register</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
