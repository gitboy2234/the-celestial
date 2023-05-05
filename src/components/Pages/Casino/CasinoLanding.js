import './CasinoLanding.css'
import React from 'react'
import dice from '../../Images/dice.png'
import question from '../../Images/questionmark.png'
import lock from '../../Images/lock.png'
import { Link } from "react-router-dom"
function CasinoLanding() {
    return (
        <div className='bg-black'>
            <div className=' text-center text-5xl'>
                <h1 className='py-10 text-white'>WELCOME TO CASINO</h1>
            </div>
            <div className='  my-20 md:h-[800px] xl:w-[1200px] lg:w-[700px] md:w-[750px] sm:w-[400px] h-[2500px] flex mx-auto overflow-x-hidden '>
                <div className='w-full h-full  gap-5 grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-6   '>
                    <div className=''>
                        <div className=' bg-white h-[350px] w-[350px] absolute shadow-xl  rounded-xs hover:z-50 hover:scale-105 rounded-3xl '>
                            <Link to="/casino">
                                <img src={dice} className=' py-24   ml-6  h-[400px]  z-0 active img-x ' /></Link>
                        </div>
                    </div>
                    <div className=' '>
                        <div className=' bg-white h-[350px] w-[350px] absolute shadow-xl  rounded-xs hover:z-50 hover:scale-105 rounded-3xl cursor-not-allowed'>
                            {/* <img src={lock} className=' h-[340px] w-[600px] absolute z-10 ' /> */}
                            <img src={question} className=' w-[200px]  mt-20 ml-14  h-[200px]   z-50 ' />
                        </div>
                    </div>
                    <div className=''>
                        <div className=' bg-white h-[350px] w-[350px]  absolute shadow-xl  rounded-xs  hover:scale-105 rounded-3xl cursor-not-allowed'>
                            {/* <img src={lock} className=' h-[340px] w-[600px] absolute z-10 ' /> */}
                            <img src={question} className=' w-[200px] mt-20 ml-14  h-[200px]   z-20 myimg ' />
                        </div>
                    </div>
                    <div className=''>
                        <div className='  bg-white h-[350px] w-[350px]  absolute shadow-xl  rounded-xs hover:z-50 hover:scale-105 rounded-3xl cursor-not-allowed'>
                            {/* <img src={lock} className=' h-[340px] w-[600px] absolute z-10 ' /> */}
                            <img src={question} className=' w-[200px]  mt-20 ml-14  h-[200px]   z-0' />
                        </div>
                    </div>
                    <div className=' '>
                        <div className=' bg-white h-[350px] w-[350px]  absolute shadow-xl  rounded-xs hover:z-50 hover:scale-105 rounded-3xl cursor-not-allowed'>
                            {/* <img src={lock} className=' h-[340px] w-[600px] absolute z-10 ' /> */}
                            <img src={question} className=' w-[200px] mt-20 ml-14  h-[200px]   z-0' />
                        </div>
                    </div>
                    <div className=' '>
                        <div className=' bg-white h-[350px] w-[350px]  absolute shadow-xl  rounded-xs hover:z-50 hover:scale-105 rounded-3xl cursor-not-allowed'>
                            {/* <img src={lock} className=' h-[340px] w-[600px] absolute z-10 ' /> */}
                            <img src={question} className=' w-[200px]    mt-20 ml-14  h-[200px]   z-0' />
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default CasinoLanding