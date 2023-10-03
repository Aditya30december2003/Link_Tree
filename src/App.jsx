import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from '../src/assets/imgs/Aditya.jpeg'
import Rover from '../src/assets/imgs/spaceship.png'
import X from '../src/assets/imgs/x.png'
import Github from '../src/assets/imgs/github.png'
import linkedin from '../src/assets/imgs/linkedin.png'
import Xlogo from '../src/assets/imgs/x-logo.webp'
import Project from '../src/assets/imgs/project-icon.avif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="main relative mx-auto flex flex-col overflow-x-hidden overflow-y-hidden">
    <img src={Rover} className="drone fixed top-8 right-8  min-[1024px]:right-[400px] min-[1024px]:w-[300px] w-[200px]"/>
    <div className="overflow-x-hidden overflow-y-hidden relative w-full"></div>
    <div className="overflow-x-hidden overflow-y-hidden w-full h-full z-99 relative  my-32">
        <img src={Profile} alt="profile" className="min-[1024px]:w-[120px] w-[110px] mx-auto rounded-[2rem]" />
    </div>
    <div className="my-[-7.2rem] relative">
        <h1 className=" lg:text-3xl text-2xl font-bold text-center mt-4 text-white">Aditya Jain</h1>
        <p className="text-center text-white mt-2 lg:w-[35rem] sm:w-[30rem] md:w-[30rem] mx-auto lg:text-[17px] text-sm">
            Determined frontend developer weaving the web's tapestry, one captivating website at a time, with a grand vision in mind.</p>
    </div>


    <div className="flex flex-row gap-[50px] mx-auto mt-[10rem] items-center w-5/10 relative h-full overflow-x-hidden overflow-y-hidden">

        <a  target="_blank" href=""  className="hover:scale-110 duration-500">
            <svg classNameName="social-icon-fill" width="22" height="22" viewBox="0 0 30 30" fill="white"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.250021 15C0.250021 6.8538 6.85382 0.25 15 0.25C23.1462 0.25 29.75 6.8538 29.75 15C29.75 23.1462 23.1462 29.75 15 29.75C11.8477 29.75 8.92465 28.7603 6.52704 27.075L1.33543 29.6708C1.04669 29.8152 0.697961 29.7586 0.469691 29.5303C0.24142 29.3021 0.18483 28.9533 0.3292 28.6646L2.92501 23.473C1.23969 21.0754 0.250021 18.1523 0.250021 15ZM15 1.75C7.68225 1.75 1.75002 7.68223 1.75002 15C1.75002 17.9841 2.73558 20.7358 4.39925 22.9503L4.67791 23.3213L2.67707 27.3229L6.67875 25.3221L7.04968 25.6008C9.26424 27.2644 12.016 28.25 15 28.25C22.3178 28.25 28.25 22.3178 28.25 15C28.25 7.68223 22.3178 1.75 15 1.75ZM11.7687 10.1744C11.6196 9.27965 10.5971 8.83667 9.84237 9.33982L9.75002 9.40139V11C9.75002 12.03 9.91836 13.0206 10.229 13.9459L11.508 13.0933C11.9173 12.8204 12.1285 12.3329 12.0476 11.8477L11.7687 10.1744ZM10.8326 15.3463L12.3401 14.3414C13.2405 13.7411 13.7051 12.6686 13.5272 11.6011L13.2483 9.92778C12.9203 7.95938 10.6707 6.98481 9.01032 8.09174L8.584 8.37596C8.37535 8.51506 8.25002 8.74924 8.25002 9V11C8.25002 16.9371 13.063 21.75 19 21.75H21C21.2508 21.75 21.485 21.6247 21.6241 21.416L21.9083 20.9897C23.0152 19.3293 22.0406 17.0798 20.0722 16.7517L18.3989 16.4728C17.3315 16.2949 16.2589 16.7596 15.6587 17.66L14.6537 19.1674C13.0317 18.3024 11.6976 16.9683 10.8326 15.3463ZM16.0541 19.771C16.9794 20.0817 17.9701 20.25 19 20.25H20.5986L20.6602 20.1576C21.1634 19.4029 20.7204 18.3804 19.8256 18.2313L18.1523 17.9524C17.6671 17.8715 17.1796 18.0827 16.9067 18.492L16.0541 19.771Z"
                    fill="white"></path>
            </svg>
        </a>

        <a className="" target="_blank" href="https://twitter.com/AdityaJ47361990" >
            <img src={X} width="20" height="20" className=""/>
        </a>

        <a  target="_blank" href="https://github.com/Aditya30december2003" className="hover:scale-110 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                </path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/aditya-jain-065484226/" className="hover:scale-110 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        </a>

    </div>

    <div className="mt-[40px]">
        <p
            className="text-center mt-2 lg:w-9/12 w-full mx-auto lg:text-[17px] text-sm tracking-[4px] text-gray-300 relative">
            PERSONAL LINKS</p>
    </div>

    <div className="flex flex-col mt-[20px] gap-[20px] w-full mx-auto lg:w-[40rem] md:w-[38rem] sm:w-[35rem]">
        <button onClick="window.location.href= '' "
            className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
            <span
                className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
                <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </span>
            <span 
            className="font-bold  ease absolute flex h-full w-full transform items-center justify-center text-black">Personal
                Website</span>
            <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
                <img src='https://cdn-icons-png.flaticon.com/512/4117/4117111.png' className='w-12 ml-1' alt=""/>
            </div>
        </button>
        <button onClick="window.location.href= '' "
            className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
            <span
                className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
                <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </span>
            <span 
            className="font-bold ease absolute flex h-full w-full transform items-center justify-center text-black">Resume</span>
            <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
                <img src='https://cdn-icons-png.flaticon.com/512/6614/6614677.png' alt=""/>
            </div>
        </button>
    </div>

    <div className="mt-[40px]">
        <p
            className="text-center mt-2 lg:w-9/12 w-full mx-auto lg:text-[17px] text-sm tracking-[4px] text-gray-300 relative">
            SOCIAL LINKS</p>
    </div>

    <div className="flex flex-col mt-[20px] gap-[20px] lg:w-[40rem] w-full mx-auto md:w-[38rem] sm:w-[35rem]">

        <a href='https://github.com/Aditya30december2003'
         className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
           <span
                className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
                <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </span>
            <span 
            className="font-bold ease absolute flex h-full w-full transform items-center justify-center text-black">Github</span>
            <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
                <img src={Github} alt="" className="rounded-full"/>
            </div>
        </a>

        <a href='https://www.linkedin.com/in/aditya-jain-065484226/' 
        className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
        <span
            className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
            <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </span>
        <span 
        className="font-bold ease absolute flex h-full w-full transform items-center justify-center text-black">LinkidIn</span>
        <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
          <img src={linkedin} alt="" className="rounded-full"/>
        </div>
    </a>

    <a href= 'https://twitter.com/AdityaJ47361990' 
    className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
    <span
        className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
        <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
    </span>
    <span 
    className="font-bold ease absolute flex h-full w-full transform items-center justify-center text-black">X</span>
    <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
        <img src={Xlogo} alt="" className="rounded-full"/>
    </div>
</a>
    </div>

    <div className="mt-[40px]">
        <p className="text-center mt-2 lg:w-9/12 w-full mx-auto lg:text-[17px] text-sm tracking-[4px] text-gray-300 relative">
            PROJECTS LINKS
        </p>
    </div>

    <div className="flex flex-col mt-[20px] gap-[20px] lg:w-[40rem] w-full mx-auto mb-20 md:w-[38rem] sm:w-[35rem]">
        <a href= 'https://drive.google.com/drive/u/0/folders/1qy39EoIB9vmW1LgS4pAysWEiSw2CjqY2' 
            className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
            <span
                className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
                <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </span>
            <span 
            className="font-bold ease absolute flex h-full w-full transform items-center justify-center text-black">Projects</span>
            <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
                <img src={Project} alt="" className="rounded-full"/>
            </div>
        </a>
        
    </div>


</div>
    </>
  )
}

export default App