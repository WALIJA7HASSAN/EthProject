import React from 'react'
import Container from './Container'
import { FaRegCopy } from 'react-icons/fa6'
import { IoIosLink } from 'react-icons/io'
import { HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { IoIosArrowDown } from 'react-icons/io'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Log = () => {
  return (
    <Container className='sm:text-xs md:text-sm'>
      <div className="px-6">
        <h3 className="text-xl mb-4">Transaction Receipt Event Logs</h3>
        <div className="flex gap-4 flex-wrap">
          <p className="text-customGreen bg-customGreen/15 p-4 w-14 h-14 rounded-full">
            136
          </p>
          {/*  */}
          <div className="text-[1.1rem] flex flex-col gap-4">
            {/* s */}
            <div className="lg:flex lg:flex-wrap place-items-center gap-10">
              <h4 className="font-semibold w-24 ">Address</h4>
              <div className="flex gap-1 place-items-center flex-wrap text-gray-400 ">
                <p className=" text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md  inline">
                  Tether: USDT Stablecoin
                </p>
                <FaRegCopy />
                <IoIosLink />
                <span className="flex border rounded-md p-2 text-black">
                  <HiMagnifyingGlassPlus />

                  <IoIosArrowDown />
                </span>
              </div>
            </div>
            {/* s */}
            <div className="lg:flex lg:flex-wrap place-items-center gap-10 text-gray-500">
              <h4 className="font-semibold w-24 ">Name</h4>
              <p className="tracking-wide font-mono break-all">
                Transfer (index_topic_1{' '}
                <span className="text-customGreen">address</span>{' '}
                <span className="text-red-600">from</span>, index_topic_2
                <span className="text-customGreen">address</span>{' '}
                <span className="text-red-600">to</span>,{' '}
                <span className="text-customGreen">uint256</span>{' '}
                <span className="text-red-600">value</span>)View Source
              </p>
            </div>
            {/* s */}
            <div className="lg:flex lg:flex-wrap place-items-center gap-10 ">
              <h4 className="font-semibold w-24 text-gray-500 ">Topics</h4>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-wrap gap-2">
                  <p className="px-2 rounded-md bg-gray-200 border border-gray-400 text-sm">
                    0
                  </p>
                  <p className="break-all text-sm">
                    0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <p className="px-2 rounded-md bg-gray-200 border border-gray-400 text-sm grid place-items-center">
                    1:from
                  </p>
                  <span className="flex border rounded-md p-2 text-black text-sm place-items-center">
                    Dec
                    <IoIosArrowDown />
                  </span>
                  <p className=" text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-full px-2   flex flex-wrap place-items-center gap-1 text-sm">
                    <FaLongArrowAltRight className="text-gray-400" />
                    0x9a515df66a6A078f10e45a050e0c06b79fa3CCcf
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <p className="px-2 rounded-md bg-gray-200 border border-gray-400 text-sm grid place-items-center">
                    2:to
                  </p>
                  <span className="flex border rounded-md p-2 text-black text-sm place-items-center">
                    Dec
                    <IoIosArrowDown />
                  </span>
                  <p className=" text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-full px-2   flex flex-wrap place-items-center gap-1 text-sm">
                    <FaLongArrowAltRight className="text-gray-300 " />
                    0x9a515df66a6A078f10e45a050e0c06b79fa3CCcf
                  </p>
                </div>
              </div>
            </div>
            {/* s */}
            <div className="lg:flex lg:flex-wrap place-items-center gap-10 text-gray-500">
              <h4 className="font-semibold w-24 ">Data</h4>
              <div className="bg-gray-100 p-2 rounded-md flex align-items-center justify-between px-2 py-4 flex-grow">
                <p className="text-gray-500">
                  value: <span className="text-black font-semibold">4003000000</span>
                </p>

                <div className=''>
                    <button className='bg-gray-400 px-2 rounded-l-md'>Dec</button>
                    <button className='bg-gray-200 px-2 rounded-r-md'>Hex</button>
                    
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
      </div>
    </Container>
  )
}

export default Log