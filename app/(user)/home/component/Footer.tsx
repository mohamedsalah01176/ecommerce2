"use client"
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";




export default function Footer() {

    let{t}=useTranslation()


  return (
    <div id='footer' className='bg-black p-7 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 text-center  '>
        <div >
            <h1 className='text-2xl font-bold mb-4'>{t('more about')}</h1>
            <p className='text-[#ccc]'>{t('about me')}</p>
        </div>
        <div >
            <h1 className='text-2xl font-bold mb-4'>{t('keep')}</h1>
            <div className="flex flex-col justify-center gap-2 items-center">
                <a href="mailto:m48162698@gmail.com"  target="_blank"  className="flex items-center gap-2"><SiGmail className="text-red-900 text-3xl rounded-xl hover:scale-110 w-[35px] h-[35px] p-1 hover:bg-white transition2"/><p className="text-[#ccc]">{t("gmail")}</p></a>
                <a href="http://wa.me/+201155953141"  target="_blank" className="flex items-center gap-2"><FaWhatsapp className="text-green-900 text-3xl rounded-full hover:scale-110 hover:bg-white transition2 w-[35px] h-[35px] p-1"/><p className="text-[#ccc]">{t("whatsUp")}</p></a>
                <a href="https://www.linkedin.com/in/mohamed-salah-aa91a8255" target="_blank"  className="flex items-center gap-2"><FaLinkedin className="text-sky-900 text-3xl rounded-full hover:scale-110 hover:bg-white transition2 w-[35px] h-[35px] p-1"/><p className="text-[#ccc]">{t('linkedIn')}</p></a>
            </div>
        </div>
        <div >
            <h1 className='text-2xl font-bold mb-4'>{t('connection')}</h1>
            <div className="flex flex-col justify-center gap-2 items-center">
                <div className="flex items-center gap-1"><IoMdHome className="text-2xl text-white"/><p className="text-[#ccc]">{t('adress')}</p></div>
                <div className="flex items-center gap-1 my-3" ><FaPhoneAlt className="text-2xl text-white"/><p className="text-[#ccc]">01069615316</p></div>
                <div className="flex items-center gap-1"><SiGmail className="text-2xl text-white"/><p className="text-[#ccc]">m48162698@gmail.com</p></div>
            </div>

        </div>
    </div>
  )
}
