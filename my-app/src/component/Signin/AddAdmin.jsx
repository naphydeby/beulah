import { useState } from "react";
import Validation from "./Validation";
import {  NavLink } from "react-router-dom";

function AddAdmin(){
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
  return(
    <>    
    <div className="lg:w-[80vw] xl:w-[80vw] 2xl:w-[80vw] h-[89vh] lg:ml-[20vw] xl:ml-[19vw] 2xl:ml-[20vw] lg:pt-[6vw] 2xl:pt-[6vw] lg:pl-6 xl:pl-8 2xl:pl-2 lg:pr-2 xl:pr-2 2xl:pr-0"> 
    <div className=" flex justify-between items-center mt-4 lg:px-10 2xl:px-10 font-[Avenir]">

        <h1 className="font-[800] lg:text-[38px] xl:text-[48px] 2xl:text-[48px] text-black xl:pl-8 2xl:pl-0">Add New Administrators</h1>
        <NavLink to='/manageadmins' >
        <div className="flex items-center">

         <div className="bg-gray-300 rounded-[360px] px-1 py-1 mt-3 mr-2 w-[25px] h-[25px]" >
            <img src="./image/arrow (1).png" className="w-6 h-4 text-black" />
          </div>
          <p className="underline mt-3 xl:pr-0 2xl:pr-0 lg:pr-0" >Back to Administrators Lists</p> 
          
        </div>
        </NavLink>
      </div>

    <div className="w-[50vw] h-[530px]  mt-[40px]  ml-[40px]  bg-white pt-[80px] lg:pt-[60px] px-[80px] rounded-[4px] ">
          
          <p className="text-[16px] font-[350] text-gray-400 mt-2">
            Enter mail of new admin and set new password  <br />for the admin
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
              Create Admin
            </button>
          </form>
        </div>
        </div>
    
    </>
  )
}
export default AddAdmin