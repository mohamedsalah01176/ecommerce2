"use client"
import React, { useEffect, useState } from 'react'
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Page() {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const[sucses,setsucses]=useState("")
    const[typeUserCookies,setTypeUserCookies]=useState("")
    const[emailCookies,setEmailCookies]=useState("")
    const[passwordCookies,setPasswordCookies]=useState("")
    let route=useRouter()
    let {t}=useTranslation()
    let token:any=process.env.NEXT_PUBLIC_TOKEN


    useEffect(()=>{
      if(typeof window !== undefined){
        setEmailCookies(cookies.get('email') || '')
        setPasswordCookies(cookies.get('password')||'')
        setTypeUserCookies(cookies.get('typeUser')||'')
      }
    },[])


    async function handelLogin(e:any){
        e.preventDefault()

        handleClick()
        if(emailCookies === email && passwordCookies=== password ){

            setsucses('the user created')
            setError("")
            cookies.set('token',token)
            if(typeUserCookies === 'user'){
              setTimeout(()=>{ 
                  route.push("/home")
              },1500)
            }else{
              setTimeout(()=>{ 
                  route.push("/admin")
              },1500)
            }
        }else{
            setError(' not found the user')
        }

    }



    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  return (
    <div className='bg-black min-h-screen overflow-y-hidden mt-[96px] flex flex-col  justify-center items-center'>
        <form action="" onSubmit={handelLogin} className='flex flex-col w-[300px] gap-5 items-center -translate-y-7 '>
            <h1 className='text-4xl font-bold text-white mb-1 '>{t("Login")}</h1>
            <input type="text" placeholder={t('email')} className='p-3 text-black font-light border-none outline-none rounded-3xl w-full' onChange={(e:any)=>setEmail(e.target.value)} />
            <input type="password" placeholder={t('Passward')} className='p-3 text-black font-light border-none outline-none rounded-3xl w-full' onChange={(e:any)=>setPassword(e.target.value)}/>
            <button type='submit' className=' mt-5 py-2 px-4 bg-white hover:scale-110 text-lg  transition-all duration-300 w-full rounded-3xl'>{t("Login")}</button>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right' }}>
        <Alert
        
          onClose={handleClose}
          severity={error?"error":"success"}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error?error:sucses}
        </Alert>
      </Snackbar>
    </div>
)
}
