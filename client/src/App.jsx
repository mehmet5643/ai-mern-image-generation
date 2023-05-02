import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ethers } from 'ethers';
import { logo, menu, close } from "./assets";
import { Home, CreatePost } from "./pages";



export default function App() {
  const [toggle,setToggle]= useState(false)
  const [account,setAccount] = useState("")
  const connect =async ()=>{
    if(typeof window.ethereum !== 'undefined'){
      const [account] = await window.ethereum.request({method:'eth_requestAccounts'})
      console.log(account)
      setAccount(account)
    } 
  }
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-40 object-contain" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] hidden sm:block text-white rounded-md px-4 py-2"
        >
          Create Post
        </Link>
        <button className="rounded-md px-4 py-2 flex items-center text-[#6469ff] border border-[#6469ff]  hidden sm:block" onClick={connect}>
          {

            account ? account.slice(0,6)+"..."+account.slice(-4) : "Connect Wallet"
          }
        </button>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className='font-inter font-medium bg-[#202112] block sm:hidden text-white rounded-md px-4 py-2'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#6469ff] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
             <li>
             <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff]  text-white rounded-md px-4 py-2"
        >
          Create Post
        </Link>
             </li>
             <li>
              <button className="rounded-md px-2 py-2 flex items-center text-white" onClick={connect}>
              {account ? account.slice(0,6)+"..."+account.slice(-4) : "Connect Wallet"}
              </button>
             </li>
            </ul>
          </div>
          </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
