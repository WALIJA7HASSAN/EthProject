import React from 'react';
import twitter from '../assets/twitter.png'
import medium from '../assets/medium.png'
import reddit from '../assets/reddit.png'
import facebook from '../assets/facebook.png'
import etherium from '../assets/ethereum-original.svg'
import { GrLinkTop } from 'react-icons/gr'
const links = [
  { text: 'About Us' },
  { text: 'Brand Assets' },
  { text: 'Contact Us' },
  {
    text: 'Careers',
  },
  {
    text: <>Terms &amp; Privacy</>,
  },
  { text: 'Bug Bounty' },
];
const links2 = [
  { text: 'API Documentation' },
  { text: 'Knowledge Base' },
  { text: 'Network Status' },
  { text: 'Newsletters' },
];
const links3 = [
  { text: 'Advertise' },
  { text: 'Explorer-as-a-Service (EaaS)' },
  { text: 'API Plans' },
  { text: 'Priority Support' },
  {
    text: (
      <>
        Blockscan <i className="far fa-arrow-up-right-from-square text-muted ml-1"></i>
      </>
    ),
  },
  {
    text: (
      <>
        Blockscan Chat <i className="far fa-arrow-up-right-from-square text-muted ml-1"></i>
      </>
    ),
  },
];
export const Footer = () => {
  return (
    <div className="  2xl:container md:px-[20px] mx-auto px-[15px]">
      <div className="flex  justify-between items-baseline py-6">
        <div className="flex gap-2">
          <a
            href="#"
            className="w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%] bg-[#e9ecef] hover:bg-[#dee2e6]"
          >
            <img
              src={twitter}
              className="max-w-[13px] w-full h-auto object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            className="w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%] bg-[#e9ecef] hover:bg-[#dee2e6]"
          >
            <img
              src={medium}
              className="max-w-[13px] w-full h-auto object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            className="w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%] bg-[#e9ecef] hover:bg-[#dee2e6]"
          >
            <img
              src={facebook}
              className="max-w-[13px] w-full h-auto object-contain"
              alt=""
            />
          </a>
          <a
            href="#"
            className="w-[2rem] h-[2rem] flex items-center justify-center rounded-[50%] bg-[#e9ecef] hover:bg-[#dee2e6]"
          >
            <img
              src={reddit}
              className="max-w-[13px] w-full h-auto object-contain"
              alt=""
            />
          </a>
        </div>
        <a href="#" className="text-[#081d35] text-[14.4992px] flex place-items-center">
          <GrLinkTop />
          Back to Top
        </a>
      </div>
      <hr className="my-0" />
      <div className="py-8 lg:py-10">
        <div className="grid grid-cols-12 gap-5 lg:gap-5">
          <div className="lg:col-span-3 col-span-12  ">
            <div className="flex items-center mb-3">
              <img src={etherium} className="max-w-[20px] h-auto me-2" alt="" />
              <span className="text-[1.171875rem]">Powered by Ethereum</span>
            </div>
            <p className="text-[.78515625rem]">
              Etherscan is a Block Explorer and Analytics Platform for Ethereum,
              a decentralized smart contracts platform.
            </p>
            <div className="hidden lg:block">
              <img
                src="/assets/map.png"
                className="max-w-[280px] w-full h-auto opacity-50"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3  mb-10 md:mb-0">
            <h4 className="text-[.9062rem] font-medium mb-3">Company</h4>
            <ul className="list-none space-y-2 text-sm mb-0">
              {links.map((link, index) => (
                <li key={index} className="relative mb-[.75rem]">
                  {link.text == 'Careers' ? (
                    <a className="text-[#081d35] hover:text-[#066a9c]" href="#">
                      <span className="me-1">Careers</span>{' '}
                      <span className="bg-[#0784c3] text-white text-[.875em] font-medium text-nowrap rounded-[50rem] p-1 px-2">
                        We're Hiring!
                      </span>
                    </a>
                  ) : (
                    <a href="" className="text-[#081d35] hover:text-[#066a9c]">
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3  mb-10 md:mb-0">
            <h4 className="text-[.9062rem] font-medium mb-3">Community</h4>
            <ul className="list-none space-y-2 text-sm mb-0">
              {links2.map((link, index) => (
                <li key={index} className="relative mb-[.75rem]">
                  <a href="" className="text-[#081d35] hover:text-[#066a9c]">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3  mb-10 md:mb-0">
            <h4 className="text-[.9062rem] font-medium mb-3">Community</h4>
            <ul className="list-none space-y-2 text-sm mb-0">
              {links3.map((link, index) => (
                <li key={index} className="relative mb-[.75rem]">
                  {link.text == 'Careers' ? (
                    <a className="text-[#081d35] hover:text-[#066a9c]" href="#">
                      <span className="me-1">Careers</span>{' '}
                      <span className="bg-[#0784c3] text-white text-[.875em] font-medium text-nowrap rounded-[50rem] p-1 px-2">
                        We're Hiring!
                      </span>
                    </a>
                  ) : (
                    <a href="" className="text-[#081d35] hover:text-[#066a9c]">
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 border-t border-[#e9ecef]">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="mb-2 md:mb-0">
            <p className="mb-0 text-[12.5625px] text-[#212529]">
              Etherscan © 2024 (A1)
            </p>
          </div>
          <div className="md:text-end">
            <p className="mb-0 text-[12.5625px] text-[#212529]">
              Donations:
              <a className="me-1 text-[#0784c3]" href="#">
                <span id="spanDonateAddress" runat="server">
                  0x71c765...d8976f
                </span>
              </a>
              <img
                src="/assets/heart.png"
                className="max-w-[13px] h-auto w-full object-contain"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
