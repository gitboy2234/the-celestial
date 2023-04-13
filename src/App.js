import "./App.css";
import { RiBriefcase4Fill, RiCoinsFill, RiSettings5Fill } from "react-icons/ri";
import { Navbar } from "./components/Navbar/Nav";
import homevideo from "./components/Videos/homevid.mp4";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Fade from 'react-reveal/Fade';
import { FcApproval, FcHighPriority } from "react-icons/fc";
import Typography from "@mui/material/Typography";
import picbg1 from './components/Images/picbg1.jpg';
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
            <Fade right>
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
            </Fade>
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
            <Fade left>
              <div className="border-2 flex flex-col  p-7 rounded-lg hover:shadow-2xl transition-shadow duration-300 sm:max-w-[350px] sm:place-self-center sm:h-[420px] md:h-[420px] lg:h-[420px]">
                <div className="flex justify-center animate-pulse">
                  <RiCoinsFill size={40} />
                </div>

                <div className="mt-5 text-3xl my-5">
                  <h1 className="font-color-the text-center hover:text-lime-500">
                    5% TAX BUY/SELL
                  </h1>
                </div>

                <div>
                  <span className="font-fam-the text-xs">
                    In the CELESTIAL GROUNDS there will be a   tax of 5% for buy and
                    sell of tokens. This TAXES that will taken to you will going
                    to the rewards pool of our CASINO FEATURE and for MARKETING
                    budget. Taxes will be seperated to 2% directly to LIQUIDTY
                    POOL, 2% directly to REWARDS Wallet and 1% for MARKETING/TEAM
                    Wallet.
                  </span>
                </div>
              </div>
            </Fade>
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
                <span className="font-fam-the text-xs">
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
              <div className="font-fam-the text-base">
                <span className=" text-base text-red-500">
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
          <div className="mt-10 bg-black color2  ">
            <div className="pt-10">
              <span className="text-5xl">ROADMAP</span>
            </div>
            <div>
              <Timeline position="alternate">
                <TimelineItem className="">
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant=""
                    color="white"
                  >
                    MARCH - JULY 2023
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot
                      color="secondary"
                      variant="outlined"
                      className="animate-pulse"
                    >
                      <FcApproval size={30} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <div className="border-2 flex flex-col   p-7 bg-white  rounded-lg hover:scale-[104%] ease-in max-w-[500px] hover:shadow-2xl  transition-transform duration-300  sm:place-self-center sm:h-[400px] md:h-[400px] lg:h-[300px] ">
                      <Typography
                        variant=""
                        component="span"
                        className="font-fam-the text-3xl py-5"
                      >
                        First Phase
                      </Typography>
                      <Typography
                        className="  font-color font-mono tracking-widest"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>
                        Building our Website
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>
                        Smart Contract Creation
                      </Typography>

                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>
                        Community Building TG/Discord
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>
                        Pink Sale Listing for Presale
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>
                        Casual Marketing
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3  animate-pulse bg-sky-500"></span>{" "}
                        Token Launching via PRESALE
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3  animate-pulse bg-sky-500"></span>{" "}
                        CMC/CG Listing
                      </Typography>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant=""
                    color="white"
                  >

                    AUG - DEC 2023
                  </TimelineOppositeContent>
                  <TimelineSeparator className="">
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot
                      color="secondary"
                      variant="outlined"
                      className="animate-pulse"
                    >
                      <FcHighPriority size={30} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <div className="border-2 flex flex-col p-7 rounded-lg bg-white hover:scale-[104%] transition-transform ease-in text-left lg:ml-[20px] xl:ml-[170px]  duration-300  max-w-[500px] sm:place-self-center sm:h-[400px] md:h-[400px] lg:h-[300px]  ">
                      <Typography
                        variant=""
                        component="span"
                        className="font-fam-the text-3xl py-5"
                      >
                        Second Phase
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-4 animate-pulse bg-sky-500"></span>
                        Launching of our JOB for HIRE FEATURE
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-4 animate-pulse bg-sky-500"></span>
                        Launching of other CASINO games
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>{" "}
                        Team Expansion
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>{" "}
                        Starting of Creation of Market Place
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>{" "}
                        Removal of TAX for TX
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>{" "}
                        CEX / DEX Listing
                      </Typography>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant=""
                    color="white"
                  >
                    JAN - MAY 2024
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <div></div>
                    <TimelineDot
                      color="secondary"
                      variant="outlined"
                      className="animate-pulse"
                    >
                      {" "}
                      <FcHighPriority size={30} />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <div className="border-2 flex flex-col p-7 rounded-lg bg-white hover:scale-[104%] transition-transform ease-in max-w-[500px] hover:shadow-2xl  duration-300  sm:place-self-center sm:h-[400px] md:h-[400px] lg:h-[300px] ">
                      <Typography
                        variant=""
                        component="span"
                        className="font-fam-the text-3xl py-5"
                      >
                        Third Phase
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-4 animate-pulse bg-sky-500"></span>
                        Start of the Creation of P2E Features
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-4 animate-pulse bg-sky-500"></span>
                        Implementing of DEFI Features
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>{" "}
                        Launch of our Staking Features
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>{" "}
                        AIRDROPS for our HOLDERS/VIP/Stakers
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>{" "}
                        P2E Launching
                      </Typography>
                      <Typography
                        className=" font-mono font-color tracking-wide"
                        variant=""
                      >
                        <span class="relative inline-flex rounded-full h-3 w-3 mr-2 animate-pulse bg-sky-500"></span>{" "}
                        We will cook our HUGE Marketing
                      </Typography>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </section>
        <section id="About">
          <div className="max-h-[500px] bg-white text-black max-w-[800px] relative mx-auto">
            <div className="py-5">
              <span className=" text-5xl">Why</span><span className="  border-b-4 border-cyan-500  text-5xl"> Celestial?</span>
            </div>
            <div className="py-5 text-justify text-slate-500 font-mono mx-7">
              <span>We will be the first ALL-in-one Market on the WEB3,
                we will have JOB for HIRE for WEB3, CASINO Games,
                Exclusive Market Place for our MEMBERS/VIP,
                DEFI so you can trade to our platform Exclusively via private nodes,
                Staking where you can earn TOKEN that can use on our CASINO for Swap it directly to BNB, also we have
                P2E Game Features that our own team will develop and LASTLY our BIGGEST Token AIRDROP for MEMBERS/VIP that will be listed on CEX/DEX.
              </span>
            </div>

            <div className="max-h-[200px] border-2 rounded-3xl bg-orange-400 text-left ">

              <div className="mt-5"> <span className=" text-3xl mx-5 text-white " >
                Design for WEB3 people
              </span></div>

              <div className="text-left my-4 ml-5" >
                <span className=" text-xl font-mono ">
                  This project is design for WEB3, our tech is continous evolving everyday, our goal is to be the first All-in-ONE Market in WEB3.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 space-x-4">
              <div className="h-[200px] max-w-[400px] border-2 rounded-3xl  text-left my-5 ">
                <div className="mt-5"> <span className=" text-3xl mx-5 text-center " >
                  MEMBERS/VIPs base
                </span></div>
                <div className="text-left my-4 ml-5">
                  <span className=" text-xl font-mono ">This project is design for WEB3, our tech is continous evolving everyday, our goal is to be the first All-in-ONE Market in WEB3.</span>
                </div>

              </div>
              <div className="h-[200px] max-w-[400px] border-2 rounded-3xl  text-left my-5 ">
                <div className="mt-5"> <span className=" text-3xl mx-5 text-center " >
                  MEMBERS/VIPs base
                </span></div>
                <div className="text-left my-4 ml-5">
                  <span className=" text-xl font-mono ">This project is design for WEB3, our tech is continous evolving everyday, our goal is to be the first All-in-ONE Market in WEB3.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
