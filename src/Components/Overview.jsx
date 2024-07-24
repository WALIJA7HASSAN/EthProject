import React, { useState } from 'react'
import Container from './Container.jsx'
import { GoQuestion } from 'react-icons/go'
import { FaRegCopy } from 'react-icons/fa6'
import { FaCircleCheck } from 'react-icons/fa6'
import { IoMdTime } from 'react-icons/io'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { FaCaretRight } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { FaEthereum } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa6'
const Title = ({ label }) => {
  return (
    <div className="flex gap-2 items-center md:min-w-[20rem]">
      <GoQuestion className="text-sm  md:text-gray-500" />
      <h2 className="font-semibold text-sm md:text-gray-500">{label}</h2>
    </div>
  )
}

const Overview = () => {
    const [tab,setTab]=useState('all');
  return (
    <>
      <Container>
        <div className="flex flex-wrap align-items-center gap-2 my-4 ">
          <Title label="Transaction Hash:" />
          <div className="flex place-items-center gap-1 flex-wrap">
            <p className="text-sm break-all">
              0xd21ed825e94dc38a45fa7cd50c8d614e1e6da3c3d20f0f03c640b5ad869679f4
            </p>
            <FaRegCopy className="text-sm text-gray-400" />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap align-items-center gap-2 my-4 ">
          <Title label="Status:" className="" />
          <button className="flex place-items-center text-xs bg-customGreen/15 px-2 py-1 rounded-md border border-customGreen">
            <FaCircleCheck className="text-customGreen text-xs mr-1" />
            Success
          </button>
        </div>
        {/*  */}
        <div className="flex flex-wrap align-items-center gap-2 my-4">
          <Title label="Block:" />
          <div className="flex place-items-center gap-2">
            <div className="flex place-items-center">
              <FaCircleCheck className="text-customGreen text-xs mr-1" />
              <p className="text-customBlue text-sm">20370505</p>
            </div>
            <button
              className="flex place-items-center text-xs bg-gray-100 px-2 py-1 rounded-md border border-gray-400"
              title="Number of Blocks Produced Since"
            >
              5461 Block Confirmations
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap align-items-center gap-2 my-4">
          <Title label="Timestamp:" />
          <div className="text-sm flex gap-1 place-items-center">
            <IoMdTime />
            <p className="text-sm">18 hrs ago (Jul-23-2024 04:43:59 PM UTC)</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap align-items-center gap-2 my-4">
          <div className="flex gap-2 items-center md:min-w-[20rem]">
            <HiOutlineLightningBolt className="text-sm  text-customBlue" />
            <h2 className="font-semibold text-sm md:text-gray-400">
              Transaction Action:
            </h2>
          </div>
          <div className="text-sm flex gap-1 place-items-center">
            <FaCaretRight className="text-gray-400" />
            <div>
              <p className="text-gray-400">
                Transfer
                <span className="text-black inline">
                  {' '}
                  4,003
                </span> ($4,003.00){' '}
                <span className="text-customBlue inline hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2 ">
                  <img
                    src="https://etherscan.io/token/images/tethernew_32.png"
                    alt=""
                    className="w-4 inline mx-1"
                  />
                  USDT
                </span>{' '}
                To
              </p>
              <p className="text-sm text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2">
                0xED0d99929879a68268Ae3af077440ca554A10D4D
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <hr />
        <div className="flex flex-wrap align-items-center gap-2 my-4">
          <Title label="Sponsored:" />
        </div>
        <hr />
        <div className="flex flex-wrap align-items-center gap-2 my-4 ">
          <Title label="From:" />
          <div className="flex place-items-center gap-1 flex-wrap">
            <p
              className="text-sm 
             text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2"
            >
              0x9a515df66a6A078f10e45a050e0c06b79fa3CCcf
            </p>
            <FaRegCopy className="text-sm text-gray-400" />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap align-items-center gap-2 my-4 ">
          <Title label="Interacted With (To):" />
          <div className="flex place-items-center gap-1 flex-wrap">
            <div className="flex place-items-center gap-1 flex-wrap">
              <IoDocumentTextOutline className="text-sm text-gray-400" />
              <p
                className="text-sm 
             text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2"
              >
                0x9a515df66a6A078f10e45a050e0c06b79fa3CCcf
              </p>
            </div>
            <div className="flex place-items-center gap-1 flex-wrap">
              <h4>(Tether: USDT Stablecoin)</h4>
              <FaRegCopy className="text-sm text-gray-400" />
              <FaCircleCheck className="text-customGreen text-xs mr-1" />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap  gap-2 my-4 ">
          <Title label="ERC-20 Tokens Transferred:" className="" />
          <div className="flex  flex-col gap-1 flex-wrap">
            <div className="flex gap-2 ml-4 md:ml-0">
              <button
                className={`bg-gray-200 px-2 py-1  rounded-md text-sm ${
                  tab === 'all' && ' text-white'
                } ${tab === 'all' && ' bg-blue-500'}  `}
                onClick={() => setTab('all')}
              >
                All Transfers
              </button>
              <button
                className={`bg-gray-200 px-2 py-1  rounded-md text-sm ${
                  tab === 'net' && ' text-white'
                } ${tab === 'net' && ' bg-blue-500'}`}
                onClick={() => setTab('net')}
              >
                Net Transfers
              </button>
            </div>
            {/*  */}
            <div>
              {tab === 'all' ? (
                <div className="text-sm flex gap-1 place-items-center">
                  <FaCaretRight className="text-gray-400" />
                  <div>
                    <p className="text-gray-400">
                      <span className="text-black inline"> From</span>{' '}
                      <p className="text-sm text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2 inline">
                        0x9a515df6...79fa3CCcf
                      </p>
                      <span className="text-black inline"> To </span>{' '}
                      <p className="text-sm text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2 inline">
                        0xED0d9992...554A10D4D
                      </p>
                      <span className="text-black inline"> For 4,003</span>{' '}
                      ($4,003.00)
                      <span className="text-customBlue inline hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2 ">
                        <img
                          src="https://etherscan.io/token/images/tethernew_32.png"
                          alt=""
                          className="w-4 inline mx-1"
                        />
                        Tether USD <span className="text-gray-400">(USDT)</span>
                      </span>{' '}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-sm flex gap-2 flex-col">
                  <div>
                    <p className="text-sm text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2 inline">
                      0x9a515df6...79fa3CCcf
                    </p>
                    <span className="text-black inline"> sent 4,003 </span>{' '}
                    <span className="text-customBlue inline hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2 ">
                      <img
                        src="https://etherscan.io/token/images/tethernew_32.png"
                        alt=""
                        className="w-4 inline mx-1"
                      />
                      Tether USD <span className="text-gray-400">(USDT)</span>
                    </span>{' '}
                  </div>
                  <div>
                    <p className="text-sm text-customBlue break-all hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2 inline">
                      0x9a515df6...79fa3CCcf
                    </p>
                    <span className="text-black inline"> received 4,003 </span>{' '}
                    <span className="text-customBlue inline hover:bg-orange-100 hover:border hover:border-orange-500 hover:rounded-md px-2 ">
                      <img
                        src="https://etherscan.io/token/images/tethernew_32.png"
                        alt=""
                        className="w-4 inline mx-1"
                      />
                      Tether USD <span className="text-gray-400">(USDT)</span>
                    </span>{' '}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap align-items-center gap-2 my-4 ">
          <Title label="Value:" />
          <div className="flex place-items-center gap-1 flex-wrap">
            <FaEthereum className="text-sm text-gray-600" />
            <p
              className="text-sm 
            "
            >
              0 ETH <span className="text-gray-400">($0.00)</span>
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap align-items-center gap-2 my-4 ">
          <Title label="Transaction Fee:" />
          <div className="flex place-items-center gap-1 flex-wrap">
            <p
              className="text-sm 
            "
            >
              0.000486876249191025 ETH
            </p>
            <div className="rounded-md bg-gray-300 font-semibold text-xs p-1">
              $1.69
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-wrap align-items-center gap-2 my-4 ">
          <Title label="Gas Price:" />

          <p
            className="text-sm 
            "
          >
            7.702641225 Gwei{' '}
            <span className="text-gray-400">(0.000000007702641225 ETH)</span>
          </p>
        </div>
      </Container>
      {/*  */}
      <Container>
        <div className="flex flex-wrap align-items-center justify-between gap-2 my-4 ">
          <Title label="More Details:" />
          
            <button className="flex place-items-center text-customBlue" >
              <FaPlus className='cursor-pointer' /> Click to show more
            </button>
          </div>
        
      </Container>
      {/*  */}
      <Container>
        <div className="flex flex-wrap align-items-center gap-2 my-4 ">
          <Title label="Private Note:" />
          <div className="flex place-items-center gap-1 flex-wrap">
            <p className="text-sm break-all">
              To access the <span className="font-semibold">Private Note </span>{' '}
              feature, you must be{' '}
              <span className="text-customBlue">Logged In</span>
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Overview