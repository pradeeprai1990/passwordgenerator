import React, { useState } from 'react'
import { HiClipboardCopy } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loweCaseSymbol, numSymbol, sSymbol, upperSymbol } from './Data/PasswordChar';
export default function Main() {
  let [lowercaseStstus,setLowercaseStstus]=useState(true)
  let [UppercasecaseStstus,setUppercasecaseStstus]=useState(true)
  let [numbersStstus,setNumbersStstus]=useState(true)
  let [symbolsStstus,setSymbolsStstus]=useState(true)
  let [passwordLen,setPasswordLen]=useState(10)
  let [finalPass,setFianaPass]=useState('')

  let createPassword=()=>{
      let passwordChar=''
      if(lowercaseStstus || UppercasecaseStstus || numbersStstus || symbolsStstus){
          if(lowercaseStstus){
            passwordChar+=loweCaseSymbol
          }
          if(UppercasecaseStstus){
            passwordChar+=upperSymbol
          }
          if(numbersStstus){
            passwordChar+=numSymbol
          }
          if(symbolsStstus){
            passwordChar+=sSymbol
          }
          console.log(passwordChar)
          let passwordCharLen=passwordChar.length;
         
          console.log(passwordCharLen) //0.99* 26 = 25.3
          let randomChar=''

          for(let n=1;n<=passwordLen;n++){
            randomChar+=passwordChar.charAt(  Math.floor(Math.random()*passwordCharLen)    )
          }

         
          
          
          
          setFianaPass(randomChar)


      }
      else{
        toast.error("Please Check One Check Box........")
      }
  }
 

  let copyPassword=()=>{
      navigator.clipboard.writeText(finalPass)
      toast.success("Password Copy........",{
        position: "top-center"
      })
  }
  return (
    <div className='w-full'>
        <div className='max-w-[400px] pb-8 bg-[#23235B] shadow-xl mt-[100px] mx-auto'>
           <h2 className='text-center text-[25px] text-[white] py-3 '>Password Generator</h2>
           <div className='relative'>
             <input type="text" value={finalPass}  className='relative bg-[#3B3B98] text-[white] ps-2 pe-10 py-2 w-[90%]'/>
             <button onClick={copyPassword}><HiClipboardCopy className='text-[white]  text-[30px] absolute right-[25px] top-[5px]'/></button>
           </div>
          <div className='flex justify-between mt-4'>
            <label className='ps-3 text-[white] text-[18px]'>Password length</label>
            <input type="number" min='4'  value={passwordLen} onChange={(e)=>setPasswordLen(e.target.value)}   max='20'  className='me-3' />
          </div>
          <div className='flex justify-between mt-4'>
            <label className='ps-3 text-[white] text-[18px]'>Include lowercase letters</label>
            <input type="checkbox"  checked={lowercaseStstus} onChange={()=>setLowercaseStstus(!lowercaseStstus)}  className="me-2"/>
          </div>
          <div className='flex justify-between mt-4'>
            <label className='ps-3 text-[white] text-[18px]'>Include Uppercase letters</label>
            <input type="checkbox"  checked={UppercasecaseStstus} onChange={()=>setUppercasecaseStstus(!UppercasecaseStstus)}  className="me-2"/>
          </div>
          <div className='flex justify-between mt-4'>
            <label className='ps-3 text-[white] text-[18px]'>Include numbers</label>
            <input type="checkbox" checked={numbersStstus} onChange={()=>setNumbersStstus(!numbersStstus)} className="me-2"/>
          </div>
          <div className='flex justify-between mt-4'>
            <label className='ps-3 text-[white] text-[18px]'>Include symbols</label>
            <input type="checkbox"  checked={symbolsStstus}  onChange={()=>setSymbolsStstus(!symbolsStstus)}   className="me-2"/>
          </div>
          <button onClick={createPassword} className='py-2 w-[90%] mt-3 text-[white] block mx-auto  bg-[#3B3B98]'>Generate password</button>
  </div>

  <ToastContainer />
  </div>
  )
}

