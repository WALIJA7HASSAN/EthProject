import React, { useState } from 'react';
import Dropdown from './Dropdown.jsx'

const dropdownItems = {
  buy: [
    {
      imgSrc: '/assets/moonpay_20.webp',
      title: 'MoonPay',
      description: 'Buy crypto with our non-custodial and fully decentralized platform.',
      cta: 'Buy Now!',
      details: '15M+ users trust MoonPay. Checkout with your preferred payment method.',
    },
    {
      imgSrc: '/assets/cons_20.webp',
      title: 'MetaMask',
      description: 'Manage your web3 everything with MetaMask Portfolio.',
      cta: 'Try Now!',
      details: "Ready to onboard to Ethereum? With MetaMask Portfolio, you're in control.",
    },
    {
      imgSrc: '/assets/nexo.webp',
      title: 'Nexo',
      description: 'Buy crypto and start earning up to 16% interest automatically.',
      cta: 'Buy Crypto',
      details: 'Get up to 0.5% cashback per purchase and receive daily interest.',
    },
  ],
  exchange: [
    {
      imgSrc: '/assets/cons_20.webp',
      title: 'MetaMask',
      description: 'Meet MetaMask Portfolio - your key to getting more out of web3.',
      cta: 'Try Now',
      details: 'Ready to simplify your web3 experience? Try the all-in-one web3 app trusted by millions worldwide.',
    },
    {
      imgSrc: '/assets/cexio_20.svg',
      title: 'CEX.IO',
      description: 'Claim Your Mystery Box For A Guaranteed Crypto Prize',
      cta: 'CLAIM NOW',
      details:
        'Opt-in, make your first trade on Exchange Plus & receive random crypto rewards from 10,000 SHIB, to 0.01 BTC.',
    },
  ],
  play: [
    {
      imgSrc: '/assets/coinsgame_20a.webp',
      title: 'Сoins.game',
      description: '100 free spins for registration.',
      cta: 'Spin now!',
      details: 'Everyday giveaways up to 100 ETH, Lucky Spins. Deposit BONUS 300% and Cashbacks!',
    },
    {
      imgSrc: '/assets/celsiuscasino_20.webp',
      title: 'Celsius Casino',
      description: '- $400 Freespins - Instant Withdraw - No KYC - 200% Bonus.',
      cta: 'Spin Now!',
      details:
        '9 years old Licensed Crypto Casino, Instant Withdraw 24/7, 6000+ Slots available, Paypal Deposit, Instant Live Support 24/7, 30% Rakeback.',
    },
    {
      imgSrc: '/assets/bcgames_20.webp',
      title: 'BC.GAME',
      description: '- The Best ETH Casino',
      cta: 'Claim Now!',
      details:
        '5000+ Slots & Live Casino Games, 50+cryptos. Register with Etherscan and get 760% deposit bonus. Win Big$, withdraw it fast.',
    },
  ],
  gaming: [
    {
      imgSrc: '/assets/bcgames_20.webp',
      title: 'BC.GAME',
      description: '- The Best ETH Casino',
      cta: 'Claim Now!',
      details:
        '5000+ Slots & Live Casino Games, 50+cryptos. Register with Etherscan and get 760% deposit bonus. Win Big$, withdraw it fast.',
    },
    {
      imgSrc: '/assets/cw_20.webp',
      title: 'CryptoWins',
      description: '200% Welcome Bonus – Supercharge Your Crypto Up to 4 BTC!',
      cta: 'Claim Now!',
      details: 'Play 100s of games anonymously with all major cryptos. Join CryptoWins & start winning!',
    },
    {
      imgSrc: '/assets/cryptoslots.webp',
      title: 'CryptoSlots',
      description: 'Play & Get 25 Free Spins at CryptoSlots',
      cta: 'Play Now',
      details: 'Anonymous play on awesome games - sign up now for 25 free jackpot spins - worth $100s!',
    },
  ],
};

export const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="">
      <div className="flex  border-b border-[#e9ecef] justify-between items-center gap-5 py-5 flex-wrap">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap break-words gap-2">
            <div className="flex gap-2 flex-wrap items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <img src="/assets/download.png" className="rounded-[50%] w-[24px]" alt="" />
                  <h1 className="text-[1.171875rem] font-medium mb-0">Contract</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap">
              <span className="text-[.9375rem] break-words whitespace-normal">
                0xa23cb9c5c020706737792C8925F039A5315a2E27
              </span>
              <div className="flex items-center gap-4">
                <a href="#">
                  <img src="/assets/copy.png" alt="" />
                </a>
                <a href="#">
                  <img src="/assets/qr-code.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Dropdown
            label="Buy"
            items={dropdownItems.buy}
            isOpen={openDropdown === 'buy'}
            toggleDropdown={() => toggleDropdown('buy')}
          />
          <Dropdown
            label="Exchange"
            items={dropdownItems.exchange}
            isOpen={openDropdown === 'exchange'}
            toggleDropdown={() => toggleDropdown('exchange')}
          />
          <Dropdown
            label="Play"
            items={dropdownItems.play}
            isOpen={openDropdown === 'play'}
            toggleDropdown={() => toggleDropdown('play')}
          />
          <Dropdown
            label="Gaming"
            items={dropdownItems.gaming}
            isOpen={openDropdown === 'gaming'}
            toggleDropdown={() => toggleDropdown('gaming')}
          />
        </div>
      </div>
      <div className="py-4">
        <p className="text-black text-opacity-75 text-[14.4992px] mb-0 noindex-section inline-block">
          <span className="inline">
            <b>Sponsored:</b>&nbsp;
            <img src="/assets/rollbit_20.png" className="align-middle inline " alt="Rollbit logo" /> <b>Rollbit</b>:
            Sweet Bonanza 1000 now available 🍬 Instant deposits &amp; withdrawals!&nbsp;
            <a
              href="#"
              target="_blank"
              rel="nofollow"
              className="text-[#0784c3]"
              title="Links to an External Advertiser site"
            >
              <b>Play Now!</b>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
