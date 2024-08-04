import { FaSearch, FaCircle } from "react-icons/fa";




const Membership = () => {
  return (
    <div className="w-[80vw] ml-[20vw] h-[89vh] pt-[90px]">
        <div className="w-[78vw] h-[75vh] pl-12">
        <h1 className="text-[#222222] font-[Avenir] text-[48px] font-[800]">
          Membership Applications
        </h1>
        <div className="w-[80vw]  bg-white mt-2 rounded-md">
          <div className="flex  pt-6">
            <div className="flex items-center ml-4  w-[175px] h-[37px] border border-none bg-[#EBEBEB] border-black rounded-[5px] pl-2">
              <img className='size-4' src="./image/search-interface-symbol.png" alt="search-image" />

              <input
                type="search"
                placeholder="Search by name"
                className="   bg-transparent w-[140px] ml-2 border border-none  focus:outline-none "
              />
            </div>
            <img className='cursor-pointer size-6 ml-[880px]' src="./image/sort (1).png" alt="filter" />
          </div>
          <table className="mt-6 mx-4 border-collapse text-[12px] font-[600] text-[#303030] ">
            <thead>
            <tr>
              <th className="text-[grey] py-4 border border-r-0 border-l-0 px-8 ">Date</th>
              <th className="text-[grey] py-4 border border-r-0 border-l-0 pl-12   ">
                Application ID
              </th>
              <th className="text-[grey] py-4 border border-r-0 border-l-0 pl-10  ">
                Applicant Name{" "}
              </th>
              <th className="text-[grey] py-4 border border-r-0 border-l-0  pl-[680px]">
                Status
              </th>
            </tr>
            </thead>
            <tbody>
            <tr className='hover:bg-green-50 cursor-pointer'>
              <td className="py-4 border border-r-0 border-l-0 pl-4">10Secs Ago</td>
              <td className="py-4 text-center pl-8 border border-r-0 border-l-0  ">#abc123</td>
              <td className="py-4 border border-r-0 border-l-0 text-center pl-10">
                Usher Raymond
              </td>
              <td className="py-4 border border-r-0 border-l-0  text-[#8A8CD9] font-[500] pl-[680px] ">
                <div className="bg-[#8A8CD933] pt-1 pl-1 opacity-80 rounded-[5px] w-[75px] h-[22px]  flex items-center text-[#8A8CD9]  text-[10px]">
                  <FaCircle className="size-[8px] text-[#8A8CD9] " />{" "}
                  <p className="ml-1">In progress</p>
                </div>
              </td>
            </tr>
            <tr className='hover:bg-green-50 cursor-pointer'>
              <td className="py-4 border border-r-0 border-l-0  pl-4"> 10Secs Ago</td>
              <td className="py-4 border border-r-0 border-l-0  text-center pl-8">#abc124</td>
              <td className="py-4 border border-r-0 border-l-0 text-center pl-10">
                Usher Raymond
              </td>
              <td className="py-4 border border-r-0 border-l-0  pl-[680px]">
                <div className="bg-[#4AA78533] pt-1 pl-1 opacity-80 rounded-[5px] flex items-center w-[75px] h-[22px]  text-[#4AA785] text-[10px]">
                  <FaCircle className="size-[8px] text-[#4AA785] " />{" "}
                  <p className="ml-1">Completed</p>
                </div>
              </td>
            </tr>
            <tr className='hover:bg-green-50 cursor-pointer'>
              <td className="py-4 border border-r-0 border-l-0 pl-4 ">10Secs Ago</td>
              <td className="py-4 border border-r-0 border-l-0    text-center pl-8">#abc125</td>
              <td className="py-4 border border-r-0 border-l-0  text-center pl-10">
                Usher Raymond
              </td>
              <td className="py-4 border border-r-0 border-l-0  pl-[680px]">
                <div className="bg-[#FFC55533] pt-1 pl-1 opacity-60 rounded-[5px] flex items-center w-[75px] h-[22px] text-[#B4801D] text-[10px]">
                  <FaCircle className="size-[8px] text-[#B4801D] " />{" "}
                  <p className="ml-1">Approved</p>
                </div>
              </td>
            </tr>
            <tr className='hover:bg-green-50 cursor-pointer'>
              <td className="py-4 border border-r-0 border-l-0  pl-4 ">10Secs Ago</td>
              <td className="py-4 border border-r-0 border-l-0   text-center pl-8">#abc126</td>
              <td className="py-4 border border-r-0 border-l-0 text-center pl-10">
                Usher Raymond
              </td>
              <td className="py-4 border border-r-0 border-l-0  pl-[680px]">
                <div className="bg-[#BF180933] pt-1 pl-1 opacity-60 rounded-[5px] flex items-center w-[75px] h-[22px]  text-[#BF1809] text-[10px]">
                  <FaCircle className="size-[8px] text-[#BF1809] " />{" "}
                  <p className="ml-1">Rejected</p>
                </div>
              </td>
            </tr>
            <tr className='hover:bg-green-50 cursor-pointer'>
              <td className="py-4 border border-r-0 border-l-0  pl-4 ">10Secs Ago</td>
              <td className="py-4 border border-r-0 border-l-0    text-center pl-8">#abc127</td>
              <td className="py-4 border border-r-0 border-l-0  text-center pl-10">
                Usher Raymond
              </td>
              <td className="py-4 border border-r-0 border-l-0  pl-[680px]">
                <div className="bg-[#59A8D433] pt-1 pl-1 opacity-60 rounded-[5px] flex items-center w-[75px] h-[22px]  text-[#59A8D4] text-[10px]">
                  <FaCircle className="size-[8px] text-[#59A8D4] " />{" "}
                  <p className="ml-1">Pending</p>
                </div>
              </td>
            </tr>
            <tr className='hover:bg-green-50 cursor-pointer'>
              <td className="py-4 border border-r-0 border-l-0  pl-4 ">10Secs Ago</td>
              <td className="py-4 border border-r-0 border-l-0    text-center pl-8">#abc128</td>
              <td className="py-4 border border-r-0 border-l-0  text-center pl-10">
                Usher Raymond
              </td>
              <td className="py-4 border border-r-0 border-l-0  pl-[680px]">
                <div className="bg-[#BF180933] pt-1 pl-1 opacity-60 rounded-[5px] flex items-center w-[75px] h-[22px]  text-[#BF1809] text-[10px]">
                  <FaCircle className="size-[8px] text-[#BF1809] " />{" "}
                  <p className="ml-1">Rejected</p>
                </div>
              </td>
            </tr>
            <tr className='hover:bg-green-50 cursor-pointer'>
              <td className="py-4 border border-r-0 border-l-0  pl-4 ">10Secs Ago</td>
              <td className="py-4 border border-r-0 border-l-0    text-center pl-8">#abc129</td>
              <td className="py-4 border border-r-0 border-l-0  text-center pl-10">
                Usher Raymond
              </td>
              <td className="py-4 border border-r-0 border-l-0  pl-[680px]">
                <div className="bg-[#59A8D433] pt-1 pl-1 opacity-60 rounded-[5px] flex items-center w-[75px] h-[22px]  text-[#59A8D4] text-[10px]">
                  <FaCircle className="size-[8px] text-[#59A8D4] " />{" "}
                  <p className="ml-1">Pending</p>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Membership