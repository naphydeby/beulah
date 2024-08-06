import { useState } from "react";
import Validation from "./Validation";

function Superadminsignin() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(form));
    if (Object.keys(Validation(form)).length === 0) {
      alert("welcome");
    }
  };
  return (
    <>
     
        <div className="w-[50vw] h-[530px]  mt-[40px] ml-[250px]  bg-white pt-[100px] lg:pt-[80px] px-[80px] rounded-[4px] ">
          <h1 className="text-[32px] font-[800] font-[Avenir]">
            Welcome, Super Admin
          </h1>
          <p className="text-[16px] font-[350] text-gray-400 mt-2">
            Please enter your details
          </p>
          <form onSubmit={handleSubmit} action="" className="mt-[20px]">
            <div className="text-[17px] font-[600px]">
              <label htmlFor="Username" className="text-gray-400">
                Username
              </label>
              <br />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                id=""
                className="border border-gray-300 bg-gray-100 focus:outline-none pl-[16px] w-[100%] h-[50px] rounded-[5px]"
              />
              <br />
              {errors.username && (
                <span className={`text-red-500`}>{errors.username}</span>
              )}
            </div>
            <div className="mt-[40px] text-[17px] font-[600px]">
              <label htmlFor="Username" className="text-gray-400">
                Password
              </label>
              <br />
              <input
                type="text"
                name="password"
                value={form.password}
                onChange={handleChange}
                id=""
                className="border border-gray-300 bg-gray-100 focus:outline-none pl-[16px]  w-[100%] h-[50px] rounded-[5px]  "
              />
              {errors.password && (
                <span className={`text-red-500`}>{errors.password}</span>
              )}
            </div>
            <p className="mt-[20px] text-[14px]">
              Don't remember Password?
              
                <b className="mt-1" >Reset here</b>
              
            </p>

           <button
              type="submit"
              className="w-[120px] h-[45px] text-[18px] pl-1 font-[800] mt-[20px] float-right bg-[#06476D] text-white rounded-[10px] "
            >
              Sign In
            </button>
          </form>
        </div>
      
    </>
  );
}
export default Superadminsignin;
