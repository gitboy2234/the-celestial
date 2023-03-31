import "./App.css";
import { RiBriefcase4Fill, RiCoinsFill, RiSettings5Fill } from "react-icons/ri";
import { Navbar } from "./components/Navbar/Nav";
import homevideo from "./components/Videos/homevid.mp4";
function App() {
  return (
    <div className="App">
      <div className=" ">
        <div className="z-40 fixed">
          <Navbar />
        </div>
        <div className="z-0">
          <section id="About">
            <div className="fade z-0 ">
              <video autoPlay loop muted id="video" className="">
                <source src={homevideo} type="video/mp4" />
              </video>
            </div>
            <div className="absolute text-center z-30 sm:right-40 sm:top-36 md: right-60 md: top-44  lg:right-80 lg:top-48">
              <p className=" lg:text-5xl md:text-2xl sm:text-lg text-red-600 font-fam-the">
                THE{" "}
              </p>
              <span className="lg:text-7xl md:text-5xl sm:text-4xl  font-color border-b-2 border-cyan-600">
                CELES
              </span>
              <span className="lg:text-7xl md:text-5xl sm:text-4xl font-fam-the font-color-the text-black">
                TIAL
              </span>
              <p className=" text-right md: text-lg lg:text-2xl sm:text-xs font-color">
                GROUNDS
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="relative z-30 bg-white  text-black text-center">
        <section id="Tokenomics">
          <div className="py-10 ">
            <span className=" text-5xl border-b-4 border-cyan-500 ">TOKEN</span>
            <span className="text-5xl">OMICS</span>
          </div>
          <div className="grid pt-[20px] pb-[20px]  w-full text-justify uppercase   sm:grid-cols-1  sm:gap-y-10 lg:grid-cols-3 ">
            <div className="border-2 flex flex-col  p-7 rounded-lg hover:shadow-2xl transition-shadow duration-300 sm:max-w-[350px] sm:place-self-center sm:h-[420px] md:h-[420px] lg:h-[420px]">
              <div className="flex justify-center animate-pulse">
                <RiCoinsFill size={40} />
              </div>
              <div className="mt-5 text-3xl my-5">
                <h1 className="font-color-the text-center hover:text-lime-500">
                  5% TAX BUY/SELL{" "}
                </h1>
              </div>
              <div>
                <span className="">
                  In the CELESTIAL GROUNDS there will be a tax of 5% for buy and
                  sell of tokens. This TAXES that will taken to you will going
                  to the rewards pool of our CASINO FEATURE and for MARKETING
                  budget. Taxes will be seperated to 2% directly to LIQUIDTY
                  POOL, 2% directly to REWARDS Wallet and 1% for MARKETING/TEAM
                  Wallet.
                </span>
              </div>
            </div>
            <div className="border-2 flex flex-col  p-7 rounded-lg hover:shadow-2xl transition-shadow duration-300 sm:max-w-[350px] sm:place-self-center sm:h-[420px] md:h-[420px] lg:h-[420px]">
              <div className="flex justify-center animate-pulse">
                <RiSettings5Fill size={40} />
              </div>
              <div className="mt-5 text-3xl my-5">
                <h1 className="font-color-the text-center hover:text-lime-500">
                  TOKEN UTILITY
                </h1>
              </div>
              <div>
                <span>
                  The CELESTIAL Token will be used only on our GROUNDS, meaning
                  every transaction you made on our Website the CELESTIAL Token
                  will be used. This TOKEN can be used on CASINO,Payment for the
                  JOB for HIRE FEATURE or MAYBE (not confirmed FEATURE) on
                  MARKET PLACE for only CELESTIAL MEMBERS.
                </span>
              </div>
            </div>

            <div className="border-2  flex flex-col  p-7 rounded-lg hover:shadow-2xl transition-shadow duration-300 sm:max-w-[350px] sm:place-self-center sm:h-[420px] md:h-[420px] lg:h-[420px]">
              <div className="flex justify-center animate-pulse">
                <RiBriefcase4Fill size={40} />
              </div>
              <div className="mt-5 text-3xl text-center= my-5 relative z-40">
                <h1 className="font-color-the z-50  hover:text-lime-500 ">
                  TOKEN ALLOCATION
                </h1>
              </div>
              <div>
                <span className=" text-lg text-red-500">
                  Total Supply: 21,000,000.
                </span>
                <p>60% of the TOKEN will be for PRESALE</p>
                <p>5% will be for the AIRDROPS and REWARDS</p>
                <p>10% will be for our CASINO Rewards </p>
                <p>25% will be on our LIQUIDTY</p>
              </div>
            </div>
          </div>
        </section>
        <section id="ROADMAP">
          <div className="my-5 bg-black text-white">
            <div>
              <span className=" text-5xl">ROADMAP</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
