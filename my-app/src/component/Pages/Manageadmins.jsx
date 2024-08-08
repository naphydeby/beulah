import { FaPlus, FaCircle } from "react-icons/fa";

const Manageadmins = () => {
  return (
    <div className="lg:w-[80vw] xl:w-[80vw] 2xl:w-[80vw] h-[89vh] lg:ml-[20vw] xl:ml-[19vw] 2xl:ml-[20vw] lg:pt-[6vw] 2xl:pt-[6vw] lg:pl-6 xl:pl-8 2xl:pl-2 lg:pr-2 xl:pr-2 2xl:pr-0">
      <div className="w-[78vw] h-[75vh] pl-12">
        <div className="flex justify-between">
          <h1 className="text-[#222222] font-[Avenir] lg:text-[28px] xl:text-[38px] 2xl:text-[38px] font-[800]">
            Lists Of Administrators
          </h1>
          <div className="flex items-center mr-[20px] lg:mt-2  xl:mt-4 2xl:mt-4 w-[175px] h-[37px] border border-none bg-[#06476D] border-black rounded-[5px] pl-4">
            <FaPlus className="size-4 text-[#EBEBEB]" />

            <button className="bg-transparent w-[140px]  border border-none text-[#EBEBEB] font-[Avenir] focus:outline-none ">
              Add New Admin
            </button>
          </div>
        </div>
        <div className="lg:w-[97%] xl:w-[98%] 2xl:w-[99%] xl:h-[100vh] 2xl:h-[100%] bg-white mt-2 rounded-md">
          <div className="flex justify-between pt-6">
            <div className="flex items-center ml-4  w-[175px] h-[37px] border border-none bg-[#EBEBEB] border-black rounded-[5px] pl-2">
              <img
                className="size-4"
                src="./image/search-interface-symbol.png"
                alt="search-image"
              />

              <input
                type="search"
                placeholder="Search by name"
                className="bg-transparent w-[140px] ml-2 border border-none  focus:outline-none "
              />
            </div>
            <div className="flex mr-[20px] text-[Avenir] ">
              <h1 className="font-[800] text-[32px]">25</h1>
              <p className="ml-1 text-[20px] mt-3">Admins</p>
            </div>
          </div>
          <table className="mt-6 mx-4 border-collapse text-[12px] font-[600] text-[#303030]  text-[Avenir]">
            <thead>
              <tr>
                <th className="text-[grey] py-4 border border-r-0 border-l-0    ">
                  Admin Mail
                </th>
                <th className="text-[grey] py-4 border border-r-0 border-l-0 lg:pl-[21vw] xl:pl-[30vw] 2xl:pl-[35vw] ">
                  {" "}
                  Status
                </th>
                <th className="text-[grey] py-4 border border-r-0 border-l-0     ">
                  Created{" "}
                </th>
                <th className="text-[grey] py-4 border border-r-0 border-l-0 "></th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-green-50 cursor-pointer">
                <td className="py-4 border border-r-0 border-l-0 pl-4">
                  Angelica-schimmel@gmail. com
                </td>
                <td className="py-4 border border-r-0 border-l-0   font-[500] xl:pl-[32vw] lg:pl-[23vw]   2xl:pl-[37vw] ">
                  <div className="bg-[#4AA78533] pt-1 pl-2 opacity-80 rounded-[5px] w-[60px] h-[22px]  flex items-center text-[#4AA785]  text-[10px]">
                    <FaCircle className="size-[8px] text-[#4AA785] " />{" "}
                    <p className="ml-1">Active</p>
                  </div>
                </td>
                <td className="py-4 text-center lg:pl-2  xl:pl-6 2xl:pl-6 border border-r-0 border-l-0  ">
                  2 hours Ago
                </td>
                <td className="py-4 lg:pl-2 xl:pl-8 2xl:pl-8 border border-r-0 border-l-0 text-center ">
                  <div className="flex font-[Avenir]">
                    <img
                      className="size-[10px] cursor-pointer mt-1"
                      src="./image/cogwheel.png"
                      alt="Settings-image"
                    />
                    <p className="ml-1">Manage User</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-green-50 cursor-pointer">
                <td className="py-4 pl-4 border border-r-0 border-l-0  ">
                  {" "}
                  Jevonte-Berstrom@hotmail.com
                </td>
                <td className="py-4 border border-r-0 border-l-0   font-[500] xl:pl-[32vw] lg:pl-[23vw]   2xl:pl-[37vw] ">
                  <div className="bg-[#BF180933] pt-1 pl-1 opacity-60 rounded-[5px] flex items-center w-[75px] h-[22px]  text-[#BF1809] text-[10px]">
                    <FaCircle className="size-[8px] text-[#BF1809] " />{" "}
                    <p className="ml-1">Deactivate</p>
                  </div>
                </td>
                <td className="py-4 text-center lg:pl-2 xl:pl-6 2xl:pl-6 border border-r-0 border-l-0  ">
                  2 hours Ago
                </td>
                <td className="py-4 lg:pl-2 xl:pl-8 2xl:pl-8 border border-r-0 border-l-0 text-center ">
                  <div className="flex font-[Avenir]">
                    <img
                      className="size-[10px] cursor-pointer mt-1"
                      src="./image/cogwheel.png"
                      alt="Settings-image"
                    />
                    <p className="ml-1">Manage User</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-green-50 cursor-pointer">
                <td className="py-4 pl-4 border border-r-0 border-l-0 pl-">
                  Vella97@gmail.com
                </td>
                <td className="py-4 border border-r-0 border-l-0   font-[500] xl:pl-[32vw] lg:pl-[23vw]   2xl:pl-[37vw] ">
                  <div className="bg-[#4AA78533] pt-1 pl-2 opacity-80 rounded-[5px] w-[60px] h-[22px]  flex items-center text-[#4AA785]  text-[10px]">
                    <FaCircle className="size-[8px] text-[#4AA785] " />{" "}
                    <p className="ml-1">Active</p>
                  </div>
                </td>
                <td className="py-4 text-center lg:pl-2  xl:pl-6 2xl:pl-6 border border-r-0 border-l-0  ">
                  9 hours Ago
                </td>
                <td className="py-4 lg:pl-2 xl:pl-8 2xl:pl-8 border border-r-0 border-l-0 text-center ">
                  <div className="flex font-[Avenir]">
                    <img
                      className="size-[10px] cursor-pointer mt-1"
                      src="./image/cogwheel.png"
                      alt="Settings-image"
                    />
                    <p className="ml-1">Manage User</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-green-50 cursor-pointer">
                <td className="py-4 pl-4 border border-r-0 border-l-0  pl- ">
                  Javon_Barton50@yahoo.com
                </td>
                <td className="py-4 border border-r-0 border-l-0   font-[500] xl:pl-[32vw] lg:pl-[23vw]  2xl:pl-[37vw] ">
                  <div className="bg-[#4AA78533] pt-1 pl-2 opacity-80 rounded-[5px] w-[60px] h-[22px]  flex items-center text-[#4AA785]  text-[10px]">
                    <FaCircle className="size-[8px] text-[#4AA785] " />{" "}
                    <p className="ml-1">Active</p>
                  </div>
                </td>
                <td className="py-4 text-center lg:pl-2  xl:pl-6 2xl:6 border border-r-0 border-l-0  ">
                  1 day Ago
                </td>
                <td className="py-4 lg:pl-2 xl:pl-8 2xl:pl-8 border border-r-0 border-l-0 text-center ">
                  <div className="flex font-[Avenir]">
                    <img
                      className="size-[10px] cursor-pointer mt-1"
                      src="./image/cogwheel.png"
                      alt="Settings-image"
                    />
                    <p className="ml-1">Manage User</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-green-50 cursor-pointer">
                <td className="py-4 pl-4 border border-r-0 border-l-0  pl- ">
                  Name90@yahoo.com
                </td>
                <td className="py-4 border border-r-0 border-l-0   font-[500] xl:pl-[32vw] lg:pl-[23vw]  2xl:pl-[37vw] ">
                  <div className="bg-[#4AA78533] pt-1 pl-2 opacity-80 rounded-[5px] w-[60px] h-[22px]  flex items-center text-[#4AA785]  text-[10px]">
                    <FaCircle className="size-[8px] text-[#4AA785] " />{" "}
                    <p className="ml-1">Active</p>
                  </div>
                </td>
                <td className="py-4 text-center lg:pl-2 xl:pl-6 2xl:pl-6 border border-r-0 border-l-0  ">
                  6 days Ago
                </td>
                <td className="py-4 lg:pl-2 xl:pl-8 2xl:pl-8 border border-r-0 border-l-0 text-center ">
                  <div className="flex font-[Avenir]">
                    <img
                      className="size-[10px] cursor-pointer mt-1"
                      src="./image/cogwheel.png"
                      alt="Settings-image"
                    />
                    <p className="ml-1">Manage User</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-green-50 cursor-pointer">
                <td className="py-4 pl-4 border border-r-0 border-l-0  pl- ">
                  Jackline62@yahoo.com
                </td>
                <td className="py-4 border border-r-0 border-l-0   font-[500] xl:pl-[32vw] lg:pl-[23vw]   2xl:pl-[37vw] ">
                  <div className="bg-[#BF180933] pt-1 pl-1 opacity-60 rounded-[5px] flex items-center w-[75px] h-[22px]  text-[#BF1809] text-[10px]">
                    <FaCircle className="size-[8px] text-[#BF1809] " />{" "}
                    <p className="ml-1">Deactivate</p>
                  </div>
                </td>
                <td className="py-4 text-center lg:pl-2 xl:pl-6 2xl:pl-6 border border-r-0 border-l-0  ">
                  1 week Ago
                </td>
                <td className="py-4 lg:pl-2 xl:pl-8 2xl:pl-8 border border-r-0 border-l-0 text-center ">
                  <div className="flex font-[Avenir]">
                    <img
                      className="size-[10px] cursor-pointer mt-1"
                      src="./image/cogwheel.png"
                      alt="Settings-image"
                    />
                    <p className="ml-1">Manage User</p>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-green-50 cursor-pointer">
                <td className="py-4 pl-4 border border-r-0 border-l-0  pl- ">
                  Jamir56@yahoo.com
                </td>
                <td className="py-4 border border-r-0 border-l-0   font-[500] xl:pl-[32vw] lg:pl-[23vw]   2xl:pl-[37vw] ">
                  <div className="bg-[#4AA78533] pt-1 pl-2 opacity-80 rounded-[5px] w-[60px] h-[22px]  flex items-center text-[#4AA785]  text-[10px]">
                    <FaCircle className="size-[8px] text-[#4AA785] " />{" "}
                    <p className="ml-1">Active</p>
                  </div>
                </td>
                <td className="py-4 text-center lg:pl-2  xl:pl-6 2xl:pl-6 border border-r-0 border-l-0  ">
                  3 Months Ago
                </td>
                <td className="py-4 lg:pl-2 xl:pl-8 2xl:pl-8 border border-r-0 border-l-0 text-center ">
                  <div className="flex font-[Avenir]">
                    <img
                      className="size-[10px] cursor-pointer mt-1"
                      src="./image/cogwheel.png"
                      alt="Settings-image"
                    />
                    <p className="ml-1">Manage User</p>
                  </div>
                </td>
              </tr>
            </tbody>
            
          </table>
          <div className="flex mt-6 text-[15px] lg:ml-[50vw] xl:ml-[55vw]">
            <img
              className="size-[20px] cursor-pointer mt-1"
              src="./image/left-arrow.png"
              alt=""
            />
            <div className="w-[27px] h-[24px] rounded-4  px-2 bg-[#EBEBEB] ml-3">
              <p>1</p>
            </div>
            <p className="ml-3">2</p>
            <p className="ml-3">3</p>
            <p className="ml-3">4</p>
            <p className="ml-3">5</p>
            <img
              className="size-[20px] cursor-pointer mt-1 ml-3"
              src="./image/right-arrow (1).png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manageadmins;
