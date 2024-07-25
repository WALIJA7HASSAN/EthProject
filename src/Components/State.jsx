import React from 'react'
import Container from './Container'
import { IoMdArrowDropup } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

const State = () => {
  return (
    <Container className=" ">
      <div className="">
        <div className="px-6">
          <h3 className="mb-4">
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-md border border-gray-200 font-semibold">
              Advanced
            </span>{' '}
            A set of information that represents the current{' '}
            <span className="font-bold">state </span>is updated when a
            transaction takes place on the network. The below is a summary of
            those changes:
          </h3>
        </div>
        {/* Table */}
        <div className="overflow-x-auto w-[300px] sm:min-w-[500px] md:w-[600px]  lg:w-full mx-auto ">
          <table className="overflow-x-scroll text-sm  text-left  min-w-full ">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b"></th>
                <th className="py-2 px-4 pl-6 border-b">Address</th>
                <th className="py-2 px-4 border-b">Before</th>
                <th className="py-2 px-4 border-b">After</th>
                <th className="py-2 px-4 border-b">State Difference</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="hover:bg-gray-100 border-b ">
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">
                  <p className="space-x-3">
                    <span className="text-customBlue hover:bg-orange-100 hover:border hover:border-orange-500  hover:border-dashed  hover:rounded-full px-2">
                      0x95222290...5CC4BAfe5
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-md border border-gray-200 font-semibold ">
                      Producer
                    </span>
                    <span>beaverbuild</span>
                  </p>
                </td>
                <td className="py-2 px-4">14.609755848213085934 Eth</td>
                <td className="py-2 px-4">14.609813537360742934 Eth</td>
                <td className="py-2 px-4 flex place-items-center">
                  <IoMdArrowDropup className="text-gray-600 text-lg" />
                  0.000057689147657
                </td>
              </tr>
              <tr className="hover:bg-gray-100 border-b">
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4">
                  <p className="text-customBlue hover:bg-orange-100 hover:border hover:border-orange-500  hover:border-dashed  hover:rounded-full px-2 w-fit flex flex-wrap place-items-center gap-1">
                    0x9a515df6...79fa3CCcf
                  </p>
                </td>
                <td className="py-2 px-4">
                  <p>0.01 Eth</p>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-md border border-gray-200 font-semibold w-20 inline-block">
                    Nonce: 1
                  </span>
                </td>
                <td className="py-2 px-4">
                  <p>0.009513123750808975 Eth</p>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-md border border-gray-200 font-semibold w-20 inline-block">
                    Nonce: 1
                  </span>
                </td>
                <td className="py-2 px-4 flex place-items-center">
                  <IoMdArrowDropdown className="text-gray-600 text-lg" />
                  0.000486876249191025
                </td>
              </tr>
              <tr className="hover:bg-gray-100 min-h-20">
                <td className="py-2 px-4">
                  <button className="bg-gray-300 p-1 rounded-md cursor-pointer">
                    <IoIosArrowDown />
                  </button>
                </td>
                <td className="py-2 px-4">
                  <h5>
                    <span className="text-customBlue hover:bg-orange-100 hover:border hover:border-orange-500  hover:border-dashed hover:rounded-full px-2">
                      0xdAC17F95...13D831ec7
                    </span>
                    <span className="text-customBlue inline-flex items-center ml-2">
                      <img
                        src="https://etherscan.io/token/images/tethernew_32.png"
                        alt="USDT"
                        className="w-4 inline mx-1"
                      />
                      USDT
                    </span>
                  </h5>
                </td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* End Table */}
    </Container>
  )
}

export default State
