"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
interface props{
    title:string
}

export default function NoFound({title}:props) {
    const {t}=useTranslation()
  return (
    <div className='text-5xl flex justify-center items-center text-red-600 font-semibold'>{t("noFound")} {t(title)}</div>
  )
}
