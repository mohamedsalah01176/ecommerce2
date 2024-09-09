"use client"
import { createElement, useEffect, useState } from "react";
import { IoChatbubblesSharp } from "react-icons/io5";


export default function Chat() {
  const [openChat,setOpenChate]=useState<boolean>(false)
  const [messege, setMessege]=useState<string>('')
  let testArrayFromBackend=["hello","how can i help you","waiting for help"]

  let con: any = null;
  let h2Element:any = null;
  
  useEffect(() => {
    // Only access the document inside useEffect to ensure it's on the client
    con = document?.getElementById("conChat");
    h2Element = document?.createElement("h2");
    con?.appendChild(h2Element)

    
  }, [handelSendUser,handelSendBackend]);

 




  //api get response from backend 
  //   fetch("linkApi",{method:'GET',headers:{
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer token'
  //   },
  // })

  function handelSendUser(e:any){
    e.preventDefault()

    if(messege !== ''){
      h2Element.textContent=messege

      h2Element.style.float='right'
      h2Element.style.clear='both'
      h2Element.style.backgroundColor='#28D146'
      h2Element.style.color='white'
      h2Element.style.width='fit-content'
      h2Element.style.padding='4px'
      h2Element.style.borderRadius='10px'
      h2Element.style.margin='7px 0'
    }
    let input:any=document.getElementById('input')
    input.value=''
    

    //api send requist for backend 
  //   fetch("linkApi",{method:'POST',headers:{
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer token'
  //   },
  //   body:{
  //     message:messege,
  //   }
  // })
  }


  function handelSendBackend(){
      //when i have response will update on if condation 
      if(testArrayFromBackend.length >0){
        // h2Element.textContent=res.message
        h2Element.style.float='left'
        h2Element.style.clear='both'
        h2Element.style.backgroundColor='black'
        h2Element.style.color='white'
        h2Element.style.width='fit-content'
        h2Element.style.padding='4px'
        h2Element.style.borderRadius='10px'
        h2Element.style.margin='7px 0'
      }
      
  }
  return (
    <div className='fixed bottom-7 right-7 z-50 '>
        <div className="p-3 bg-black text-white rounded-full cursor-pointer hover:scale-110 transition-all duration-300" onClick={()=>setOpenChate(!openChat)}>
            <IoChatbubblesSharp className="text-3xl  font-semibold"/>
        </div>
            <div className={`absolute bottom-[130%] right-[26%] p-2 bg-slate-300 h-[350px] w-[280px] rounded-lg transition-all duration-500  ${openChat?'opacity-1 scale-100 ':'opacity-0 -order-5 scale-0 translate-y-52 translate-x-32'} `}>
              <div id="conChat" className="overflow-y-scroll h-[280px] scrollbar-none">
                {testArrayFromBackend.map((item,index)=>{
                  return <h2 key={index} className="mb-2 text-sm text-white w-fit p-1 bg-black my-3 rounded-lg" >{item}</h2>
                })}
              </div>
                <form onSubmit={handelSendUser} className="flex items-center justify-between  gap-2 absolute bottom-4">
                  <input id="input" type="text" placeholder="enter your message"  className="border-none outline-none p-1 rounded-lg" onChange={(e:any)=>setMessege(e.target.value)}/>
                  <button type="submit" className=" bg-black p-1 rounded-lg text-white">send</button>
                </form>
            </div>
            <div className={`w-5 absolute bottom-[75%] right-4 border-[16px]   border-t-slate-300 border-transparent border-solid transition-all duration-500  ${openChat?'opacity-1 scale-100 ':'opacity-0 -order-5 scale-0 translate-y-3 translate-x-3'}`}></div>
    </div>
  )
}
