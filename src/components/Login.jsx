import React from "react";

const Login = () => {
  const handleSubmit=(e)=> {
    e.prevetDefault()
  }
  
  return (
    <form className="p-2 w-[300px] h-[450px] bg-white rounded-md">
      <article className=" ">
      <div className=" p-2 flex justify-around gap-3 mt-5 text-2xl text-cyan-800 ">
        <button onSubmit={handleSubmit} className="font-bold hover:underline hover:-translate-y-1 hover:tracking-wider duration-200">Login</button>
        <button onSubmit={handleSubmit} className="font-bold hover:underline hover:-translate-y-1 hover:tracking-wider duration-200">Sing up</button>
      </div>
      <div className=" mt-2 grid gap-3 mx-3 justify-center">
      <div className=" grid ">
        <label className="text-cyan-800 font-semibold" htmlFor="name">Name</label>
        <input id="name" className="outline-none w-[250px] border-[2px] py-[1px]  border-cyan-800  rounded-md" type="text" />
      </div>
      <div className=" grid">
        <label className="text-cyan-800 font-semibold" htmlFor="password">Password</label>
        <input id="password" className="outline-none w-[250px] py-[1px] border-[2px] border-cyan-800 rounded-md" type="password" />
      </div>
      <div className="flex justify-around mt-5 gap-5">
        <div className=" flex font-semibold">
        <button onSubmit={handleSubmit} className="" type="button"></button>
        <label className="text-cyan-800" htmlFor="">Remeber me</label>
        </div>
        <button className="text-cyan-800 hover:underline font-semibold">Forgot Password</button>
      </div>
      <button onSubmit={handleSubmit} className="bg-cyan-800 text-white p-2 hover:-translate-y-1 duration-200 hover:tracking-wider">LOGIN </button>
      <p className=" font-semibold text-cyan-800">Dont have an Account? <label className="underline font-bold text-cyan-900 cursor-pointer" htmlFor="">Register here</label></p>
      <ul className="flex justify-around text-2xl p-2 text-cyan-800 ">
        <li><i className="bx bxl-instagram  rounded-full p-2  cursor-pointer bg-cyan-100 hover:-translate-y-1 duration-200"></i></li>
        <li><i className="bx bxl-facebook rounded-full p-2 cursor-pointer bg-cyan-100 hover:-translate-y-1 duration-200"></i></li>
        <li><i className="bx bxl-github rounded-full p-2 cursor-pointer bg-cyan-100 hover:-translate-y-1 duration-200"></i></li>
      </ul>

      </div>
      </article>
      
      
    </form>
  );
};

export default Login;
