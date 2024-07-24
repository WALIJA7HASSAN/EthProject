import React, { useState } from 'react'
import { FaListCheck } from 'react-icons/fa6'
import { FaAngleDown } from 'react-icons/fa6'
import { TbBulb } from 'react-icons/tb'
import Overview from './Overview.jsx'
import Log from './Log.jsx'
import State from './State.jsx'

const TransactionsContainer = () => {

    const [tab,setTab]=useState("overview");
    const renderComponent = () => {
      switch (tab) {
        case 'overview':
          return <Overview />
        case 'state':
          return <State />
        case 'logs':
          return <Log />
        default:
          return <Overview />
      }
    }
  return (
    <div className="my-10  p-2">
      <div
        className="flex flex-wrap
      justify-between align-items-center"
      >
        <div className="flex gap-2">
          <button
            className={`bg-gray-200 px-2 py-1  rounded-md text-sm ${
              tab === 'overview' ? 'bg-customBlue text-white' : ''
            }
             `}
            onClick={() => setTab('overview')}
          >
            Overview
          </button>
          <button
            className={`bg-gray-200 px-2 py-1  rounded-md text-sm ${
              tab === 'logs' ? 'bg-customBlue text-white' : ''
            }  `}
            onClick={() => setTab('logs')}
          >
            Logs(1)
          </button>
          <button
            className={`bg-gray-200 px-2 py-1  rounded-md text-sm ${
              tab === 'state' ? 'bg-customBlue text-white' : ''
            }   `}
            onClick={() => setTab('state')}
          >
            State
          </button>
        </div>
        <div>
          <button className="flex bg-white border p-2 rounded-md text-sm hover:bg-gray-200">
            <FaListCheck />
            <FaAngleDown />
          </button>
        </div>
      </div>
      {/* transaction */}
      <div>{renderComponent()}</div>
      {/*  */}
      <div className="flex gap-1 text-gray-500 text-xs m-2 place-items-center">
        <TbBulb className="text-[1.5rem]" />
        <p className="text-[12px]">
          A transaction is a cryptographically signed instruction that changes
          the blockchain state. Block explorers track the details of all
          transactions in the network. Learn more about transactions in our
          <span className="text-customBlue cursor-pointer">
            {' '}
            Knowledge Base.
          </span>
        </p>
      </div>
    </div>
  )
}

export default TransactionsContainer