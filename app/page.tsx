
"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie'
import { TbPasswordUser } from 'react-icons/tb';
export default function Page() {
  const [userName,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const[c_password,setC_password]=useState("")
  const [TypeUser,setTypeUser]=useState('')
  const [image,setImageURL]=useState('')
  const [validEmail,setValidEmail]=useState(false)
  const [validPassword,setValidPassWord]=useState(false)
  const [error,setError]=useState('')
  const [sucess,setSucces]=useState('')


  
  let regExpretionEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  function testEmail(emailex:any){
    setValidEmail(regExpretionEmail.test(emailex))
  }
  
  let regExpretionPassword=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  function testPassword(passwordex:string){
    setValidPassWord(regExpretionPassword.test(passwordex))
  }

  useEffect(()=>{
    testEmail(email)
    testPassword(password)

  },[email,password])


    let {t}=useTranslation()

let nav=useRouter()



    const handleImageUpload = (file:any) => {

        const reader = new FileReader();
  
        reader.onload = () => {
          const url:any = reader.result;
          // Save image URL to localStorage
          // localStorage.setItem("image",url)
          setImageURL(url)
  
        }
        reader.readAsDataURL(file);
    }
  
    function handleRegister(e:any){
      e.preventDefault()
      // setDone(true)

      
      if(userName.length >=3 && validEmail && validPassword && password=== c_password && image !== "" && TypeUser !== ""){
        cookies.set('userName',userName)
        cookies.set('email',email)
        cookies.set('password',password)
        cookies.set('typeUser',TypeUser)
        localStorage.setItem('image',image)
        setError('')
        setSucces('email creayed')
        setTimeout(()=>{nav.push('/login')},1500)
      }else if(userName.length <=3 ){
        setError('userName length less than 3')
      }else if(validEmail === false){
        setError('email not Vaild')
      }else if(validPassword === false){
        setError('password not Vaild')
      }else if(password !== c_password){
        setError('password not same c_password')
      }else if(image === ""){
        setError('image not found')
      }
      handleClick()
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
    <div className='bg-black min-h-screen flex flex-col  justify-center items-center'>
        <form action="" onSubmit={handleRegister} className='flex flex-col w-[300px] gap-5 items-center -translate-y-7 '>
            <h1 className='text-4xl font-bold text-white mb-1 '>{t("register")}</h1>
            
            <input type="text" placeholder={t('userName')} className='p-3 text-black font-light border-none outline-none rounded-3xl w-full' onChange={(e:any)=>setUserName(e.target.value)} />
            <input type="text" placeholder={t('email')} className='p-3 text-black font-light border-none outline-none rounded-3xl w-full' onChange={(e:any)=>setEmail(e.target.value)} />
            <input placeholder='Password' type='password'  onChange={(e)=>setPassword(e.target.value)} className='p-3 text-black font-light border-none outline-none rounded-3xl w-full'/>
            <input placeholder='C_Password' type='password'  onChange={(e)=>setC_password(e.target.value)} className='p-3 text-black font-light border-none outline-none rounded-3xl w-full'/>
            <select name="userType" title="User Type" id="userType" className='p-3 text-black font-light border-none outline-none rounded-3xl w-full' onChange={(e:any)=>setTypeUser(e.target.value)} >
              <option value="">Select User Type</option>
              <option value="admin">Admin</option>

              <option value="user">User</option>
            </select>
            <input type="file" placeholder={t('image')} className='p-3 text-black font-light border-none outline-none rounded-3xl w-full bg-white'  onChange={(e:any)=>handleImageUpload(e.target.files[0])}/>
            <button type='submit' className=' mt-5 py-2 px-4 bg-white hover:scale-110 text-lg  transition-all duration-300 w-full rounded-3xl'>{t("register")}</button>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right' }}>
        <Alert
        
          onClose={handleClose}
          severity={error?"error":"success"}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error?error:sucess}
        </Alert>
      </Snackbar>
    </div>
  )
}

