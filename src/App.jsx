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
import hostel from '../src/assets/imgs/hostel.png'
import aurora from '../src/assets/imgs/aurora.png'
import {SiLeetcode} from 'react-icons/si'
import {BiLogoGmail} from 'react-icons/bi'

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

        <a  target="_blank" href="mailto:adityasmjain@gmail.com"  className="text-white hover:scale-110 duration-500">
            <BiLogoGmail size={30} />
        </a>

        <a  target="_blank" href="https://leetcode.com/leo100demigod/"  className="text-white hover:scale-110 duration-500">
           <SiLeetcode size={25} />
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
            className="text-center mt-2 font-bold lg:w-9/12 w-full mx-auto lg:text-[17px] text-sm tracking-[4px] text-gray-300 relative">
            PERSONAL LINKS</p>
    </div>

    <div className="flex flex-col mt-[20px] gap-[20px] w-full mx-auto lg:w-[40rem] md:w-[38rem] sm:w-[35rem]">
        <a target='_blank' href="https://aditya30december2003.github.io/Personal_Portfolio/"
            className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full  py-7 font-medium text-white ">
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
        </a>
        

        <a href="Aditya Jain_CV_Resume.pdf" download="Aditya Jain_CV" target='_blank'
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
        </a>
    </div>

    <div className="mt-[40px]">
        <p
            className="font-bold text-center mt-2 lg:w-9/12 w-full mx-auto lg:text-[17px] text-sm tracking-[4px] text-gray-300 relative">
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
        <p className="font-bold text-center mt-2 lg:w-9/12 w-full mx-auto lg:text-[17px] text-sm tracking-[4px] text-gray-300 relative">
            PROJECTS LINKS
        </p>
    </div>

    <div className="flex flex-col mt-[20px] gap-[20px] lg:w-[40rem] w-full mx-auto mb-20 md:w-[38rem] sm:w-[35rem]">
        <a target="_blank" href= 'https://aditya30december2003.github.io/Batflix/' 
            className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
            <span
                className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
                <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </span>
            <span 
            className="font-bold ease absolute flex h-full w-full transform items-center justify-center text-black">Netflix-clone</span>
            <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
                <img src='https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456' alt="" className="rounded-full"/>
            </div>
        </a>

        <a target="_blank" href= 'https://aditya30december2003.github.io/Hotstar/' 
            className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
            <span
                className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
                <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </span>
            <span 
            className="font-bold ease absolute flex h-full w-full transform items-center justify-center text-black">Disney+ Hotstar-clone</span>
            <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
                <img src='https://images.news18.com/ibnlive/uploads/2021/07/1627543919_disney_hotstar_plus.jpg' alt="" className="rounded-full"/>
            </div>
        </a>

        <a target='_blank' href= 'https://aditya30december2003.github.io/Food_Delivery_App/' 
            className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
            <span
                className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
                <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </span>
            <span 
            className="font-bold ease absolute flex h-full w-full transform items-center justify-center text-black">hostelEats</span>
            <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
                <img src={hostel} alt="" className="rounded-full"/>
            </div>
        </a>

        <a target='_blank' href= 'https://aditya30december2003.github.io/Travel_Website/' 
            className="group relative inline-flex w-auto items-center justify-center overflow-hidden  bg-[#FFFFFF]  rounded-full px-8 py-7 font-medium text-white ">
            <span
                className=" absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-transparent text-white">
                <svg className="h-5 w-5" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </span>
            <span 
            className="font-bold ease absolute flex h-full w-full transform items-center justify-center text-black">Aurora</span>
            <div id="icon" className="absolute left-2 w-[50px] drop-shadow-lg">
                <img src='https://cdn-icons-png.flaticon.com/512/201/201623.png' alt="" className="rounded-full"/>
            </div>
        </a>
        
    </div>


</div>
    </>
  )
}

export default App
