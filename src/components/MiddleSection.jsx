import React from 'react'
import RightArrow from './RightArrow'
import onePercentImg from '../assets/one_percent_cashback.png'
import fiveXImg from '../assets/five_x_rewards.png'
import forexGlobe from '../assets/forex_globe.png'

const MiddleSection = () => {
  return (
    <div className="py-12 md:py-24">
        <div className="max-w-6xl w-full text-2xl md:text-4xl mx-auto text-center px-8">
          <p className="text-black">
            Earn 1% assured cashback{" "}
            <span className="text-[#9EA7AE]">on your spends. Get</span> 5X
          </p>
          <p className="text-black">
            more value than cashback{" "}
            <span className="text-[#9EA7AE]"> at the Uni Store. Enjoy</span>
          </p>
          <p className="text-black">
            <span className="text-[#9EA7AE] css-1ggwlzr">round the clock </span>
            Whatsapp support.{" "}
            <span className="text-[#9EA7AE] css-1ggwlzr">And it's</span>
          </p>
          <p className="text-black">
            lifetime free
            <span className="text-[#9EA7AE]">
              ; no joining fee, no annual charges.
            </span>
          </p>
          <RightArrow className="w-10 mx-auto mt-10 md:w-40 rotate-90 bg-green-300 p-8 rounded-full" />
        </div>
        <div className="max-w-6xl md:flex gap-16 flex-row-reverse justify-between items-center w-full mx-auto mt-10 text-2xl md:text-4xl">
          <img
            className="w-80 md:w-96 mx-auto my-12"
            src={onePercentImg}
            alt="1%cashback"
          />
          <div className="px-8">
            <span className="font-bold">
              1% assured cashback on your spends.
            </span>
            <span className="text-gray-400">
              The more you spend, the more you earn.
            </span>
          </div>
        </div>
        <div className="max-w-6xl md:flex gap-16 justify-between items-center w-full mx-auto mt-10 text-2xl md:text-4xl">
          <img
            className="w-80 mx-auto my-12"
            src={fiveXImg}
            alt="5x"
          />
          <div className="px-8">
            <span className="font-bold">5x more value than your cashback,</span>
            <span className="text-gray-400">
              The more you spend, the more you earn. only at the Uni Store.
            </span>
          </div>
        </div>
        <div className="max-w-6xl md:flex gap-16 flex-row-reverse justify-between items-center w-full mx-auto mt-10 text-2xl md:text-4xl">
          <img
            className="w-80 mx-auto my-12"
            src={forexGlobe}
            alt="globe"
          />
          <div className="px-8">
            <span className="font-bold">Zero Forex Markup.</span>
            <span className="text-gray-400">
              The more you spend, the more you earn. only at the Uni Store. The
              more you spend, the more you earn. only at the Uni Store.
            </span>
          </div>
        </div>
        <p className="text-3xl px-8 mt-10 max-w-6xl w-full mx-auto md:text-center md:text-4xl">
          Lifetime <span className="text-green-400">free. </span>
          <span>No joining fee.</span>
          <span className="md:block md:text-center"> No annual charges. </span>
        </p>
      </div>
  )
}

export default MiddleSection