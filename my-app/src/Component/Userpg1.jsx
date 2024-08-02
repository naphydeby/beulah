import { FaArrowAltCircleLeft } from "react-icons/fa";
function Userpg1() {
  return (
    <>
      <div className="ml-[100px] flex mt-4 font-[Avenir]">
        <h1 className="font-[800] text-[48px] text-black">Usher Raymond</h1>
        <div className="flex ml-[760px]">
          <div className="bg-gray-300 rounded-[20px] px-1 py-1 mt-3 mr-2 w-[25px] h-[25px]" ><img src="./image/arrow (1).png" className="w-[16px] h-[16px] text-black" /></div>
          <p className="underline mt-3 ">Back to Membership Applications </p>
        </div>
      </div>
      <div className="w-[90vw]   ml-[100px] gap-8 flex font-[Avenir]">
        <div className="w-[60vw]  bg-white rounded-[10px]">
          <div className="flex mt-6 ml-6 pl-[25px]">
            <img
              src="./image/usherRay.jpeg"
              className="w-[49px] h-[49px] rounded-[50%] mt-1  "
            />
            <div className="w-[4px] h-[18px] bg-black ml-4 mt-5"></div>
            <p className="mt-4 text-[18px] font-[500] underline ml-2">
              View Picture
            </p>
          </div>

          <div className="w-[55vw]  pl-[25px] ml-[20px] mt-4 flex justify-between text-[16px] text-black font-[500]">
            {/* personal detail */}
            <div className="w-[15vw]  ">
              <p className="text-[16px]">Personal Details</p>
              <hr className="w-[15vw] font-[500] h-[2px]  mt-1" />
              <p className="text-[#AAAAAA] text-[12px] mt-3">Firstname</p>
              <p className="text-[14px]  mt-1">Usher</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Surname</p>
              <p className="text-[14px]  mt-1">Raymond</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Other Name</p>
              <p className="text-[14px]  mt-1">Singer</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Email Address</p>
              <p className="text-[14px]  mt-1">UsherRaymond@mail.com</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Gender</p>
              <p className="text-[14px]  mt-1">Male</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Date of Birth</p>
              <p className="text-[14px]  mt-1">19-02-1998</p>
              {/* Health Details */}
              <div className="pt-[180px]">
                <p className="text-[16px] ">Health Details</p>
                <hr className="w-[15vw] font-[500] h-[2px]  mt-1" />
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Body Max Index (BMI)
                </p>
                <p className="text-[14px]  mt-1">39.5</p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Average Daily Blood Pressure
                </p>
                <p className="text-[14px]  mt-1">111</p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Fasting Blood Sugar
                </p>
                <p className="text-[14px]  mt-1">398</p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  2HPP Blood Sugar
                </p>
                <p className="text-[14px]  mt-1">232</p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Health Issues, if any
                </p>
                <p className="text-[14px]  mt-1">Diebetes</p>
              </div>
            </div>
            {/* contact detaill */}

            <div className="w-[15vw]  ">
              <p className="text-[16px]">Address and Contact Details</p>
              <hr className="w-[15vw] font-[500] h-[2px]  mt-1" />
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Residential Address
              </p>
              <p className="text-[14px]  mt-1">
                1, Abule Egba Street,
                <br />
                Egbeda, Lagos State
              </p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Ownership Of Residence
              </p>
              <p className="text-[14px]  mt-1">Tenant</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Postal Address</p>
              <p className="text-[14px]  mt-1">100292</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Telephone 1</p>
              <p className="text-[14px]  mt-1">2348172638267</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Gender</p>
              <p className="text-[14px]  mt-1">Male</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Telephone 2</p>
              <p className="text-[14px]  mt-1">2348172638267</p>
              <br />
              {/* Business Detail */}
              <div className="pt-[130px]">
                <p className="text-[16px] ">Business Details</p>
                <hr className="w-[15vw] font-[500] h-[2px]  mt-1" />
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Address of Place of Business
                </p>
                <p className="text-[14px]  mt-1">
                  1, Abule Egba Street,
                  <br />
                  Egbeda, Lagos State
                </p>
                <p className="text-[#AAAAAA] text-[12px] mt-3">
                  Type of Business
                </p>
                <p className="text-[14px]  mt-1">Sole Proprietor</p>
              </div>
            </div>

            {/* family details */}
            <div className="w-[15vw]  ">
              <p className="text-[16px]">Education and Family Details</p>
              <hr className="w-[15vw] font-[500] h-[2px]  mt-1" />
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Highest Education
              </p>
              <p className="text-[14px]  mt-1">University Degree</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Next of Kin</p>
              <p className="text-[14px]  mt-1">Raymond Kim</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Number of Children
              </p>
              <p className="text-[14px]  mt-1">3</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Number of Male Children
              </p>
              <p className="text-[14px]  mt-1">1</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Number of Female Children
              </p>
              <p className="text-[14px]  mt-1">2</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Age of Youngest</p>
              <p className="text-[14px]  mt-1">10</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">Age of oldest</p>
              <p className="text-[14px]  mt-1">20</p>
              <p className="text-[#AAAAAA] text-[12px] mt-3">
                Number of other Dependant
              </p>
              <p className="text-[14px]  mt-1">None</p>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="w-[30vw] ">
          <div className="w-[30vw] h-[420px] bg-white rounded-[10px] pl-6 font-[Avenir] ">
            <form action="">
              <p className="text-[#AAAAAA] text-[12px] font-[600] pl-1 pt-4">
                Penalty In Naira
              </p>
              <div className="border border-[#AAAAAA] bg-[#EBEBEB] flex  focus:outline-none pl-[16px] mt-2 w-[400px] h-[50px] rounded-[5px]">
                <img
                  src="./image/nigeria-naira-currency-symbol.png"
                  className="w-[10px] h-[30px] pt-4 "
                />
                <input
                  type="Numner"
                  className="focus:outline-none  w-[350px] h-[50px] ml-2  bg-transparent text-[20px]"
                />
              </div>
              <br />

              <p className="text-[#AAAAAA] text-[12px] font-[600] pl-1 pt-4">
                Credit Score
              </p>
              <div className="border border-[#AAAAAA] bg-[#EBEBEB]   focus:outline-none pl-[16px] mt-2 w-[400px] h-[50px] rounded-[5px]">
                <input
                  type="Numner"
                  className="focus:outline-none  w-[350px] h-[50px] ml-2  bg-transparent text-[20px]"
                />
              </div>
              <br />

              <p className="text-[#AAAAAA] text-[12px] font-[600] pl-1 pt-4">
                Minimum Monthly Deposit
              </p>
              <div className="border border-[#AAAAAA] bg-[#EBEBEB] flex  focus:outline-none pl-[16px] mt-2 w-[400px] h-[50px] rounded-[5px]">
                <img
                  src="./image/nigeria-naira-currency-symbol.png"
                  className="w-[10px] h-[30px] pt-4 "
                />
                <input
                  type="Numner"
                  className="focus:outline-none  w-[350px] h-[50px] ml-2  bg-transparent text-[20px]"
                />
              </div>
              {/* button */}
              <div className="text-[14px] font-[500] font-[Avenir] mt-10 ">
                <button className="w-[120px] h-[40px] bg-white pt-1 pl-1 border-2 border-black ml-[150px] rounded-[5px] text-black">
                  Decline Request
                </button>
                <button className="w-[120px] h-[40px] bg-[#06476D] pt-1 pl-1 ml-2 rounded-[5px] text-white">
                  Approve Request
                </button>
              </div>
            </form>
          </div>
          {/* 2nd form */}
          <div className="w-[30vw] h-[680px] bg-white mt-6 rounded-[8px] ">
            <div className="flex font-[500] font-[Avenir] text-[20px] pt-4 pl-6">
              <p>Note</p>
              <div className="rounded-[5px] bg-[#EBEBEB] w-[20px] ml-2 h-[18px]rounded-[4px] text-[16px] pl-1 pt-1  gap-2 ">
                2
              </div>
            </div>
            <form action="">
              <div className="ml-[25px] mt-8 w-[400px] h-[225px] border-2 border-[#EBEBEB] rounded-[8px] ">
                <textarea cols="40" rows="40" className=" pl-[20px] ml-1 pt-2 focus:outline-none text-[#EBEBEB]  border border-transparent ">
                  Type Your Note
                </textarea>
                <hr />
                <button className="w-[80px] h-[30px] bg-[#06476D]  ml-[290px] mt-2 rounded-[5px] text-white" >Add Note</button>
              </div>
            </form>
            <div className="w-[400px] h-[150px] border-2 border-[#EBEBEB] rounded-[8px] mt-8 ml-6 text-[16px] font-[Avenir] ">
                <div className="flex h-[60px] pt-4 pl-4">
                    <img src="./image/calendar.png" className="w-[16px] h-[16px] mt-1  "  />
                    <p className="ml-2" >Today, 10:00AM</p>
                    <img src="./image/delete (1).png" className="w-[16px] h-[16px] mt-1 ml-[220px] " />
                </div>
                <hr />
                <p className="text-[#EBEBEB] font-[500] pl-4 pt-4 ">Applicant Address is not Verifiable and needs to be <br /> properly reviewed</p>
            </div>
            {/*  */}
            <div className="w-[400px] h-[150px] border-2 border-[#EBEBEB] rounded-[8px] mt-8 ml-6 text-[16px] font-[Avenir] ">
                <div className="flex h-[60px] pt-4 pl-4">
                    <img src="./image/calendar.png" className="w-[16px] h-[16px] mt-1  "  />
                    <p className="ml-2" >Today, 10:00AM</p>
                    <img src="./image/delete (1).png" className="w-[16px] h-[16px] mt-1 ml-[220px] " />
                </div>
                <hr />
                <p className="text-[#EBEBEB] font-[500] pl-4 pt-4 ">Applicant Address is not Verifiable and needs to be <br /> properly reviewed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Userpg1;
