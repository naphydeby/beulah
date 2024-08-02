import { useState } from "react"

function Signin(){
    const[form, setForm]= useState({
        username: "",
        password:""
    });
    const handleClick =(e)=>{
      const{name,value} =e.target;
      setForm({ ...form, [name]: value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(Validation(form));
        if (Object.keys(Validation(form)).length === 0) {
          alert("form successfully submited")
          console.log(form);
        }
    }
    return(
        <>
        <div className="w-[90vw] h-auto  flex ml-10 mt-6 font-[Avenir]  " >
            <div className="w-[70vw] h-[700px]  flex pl-16 gap-[16px] items-center text-white " style={{
                background: 'linear-gradient(180deg, #318ABE 0%, #0D4363 84.79%, #06344E 100%)',


            }} >
              <img src="./image/Beual-logo.png" className="w-[50px] h-[50px]" />
              <p className="font-[800] text-[32px]" >Beaulah Destiny Club</p>

            </div>
            <div className="w-[50vw] h-[700px] bg-white pt-[140px] pl-[80px]" >
                <h1 className="text-[32px] font-[800]">Welcome, Admin</h1>
                <p className="text-[16px] font-[350]">Please enter your details</p>
                <form onSubmit={handleSubmit} action=""className="mt-[20px]" >
                    <div className="text-[17px] font-[600px]" >
                    <label htmlFor="Username"  >Username</label><br />
                    <input type="text" name="username"
                    value={form.username}
                    onChange={handleClick} id="" className="border border-[#AAAAAA] bg-[#EBEBEB] focus:outline-none pl-[16px] w-[400px] h-[50px] rounded-[5px]"  /><br />
                     
                   </div>
                    <div className="mt-[40px] text-[17px] font-[600px]">
                    <label htmlFor="Username"  >Password</label><br />
                    <input type="text" name="password"
                    value={form.password}
                    onChange={handleClick} id="" className="border border-[#AAAAAA] bg-[#EBEBEB] focus:outline-none pl-[16px]  w-[400px] h-[50px] rounded-[5px]  "  />
                    <p className="mt-[20px] text-[14px]" >Don't remember Password?<a href=""className="ml-1" ><b>Reset here</b></a></p>
                    </div>
                    <button type="submit" className="w-[100px] h-[50px] text-[20px] pl-1 font-[800] mt-[20px] ml-[300px] bg-[#06476D] text-white rounded-[10px] " >Sign In</button>
                </form>
            </div>

        </div>
        </>
    )
}
export default Signin