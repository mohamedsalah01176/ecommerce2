"use client"
import "./globals.css";
import transitionEN from "./translate/en.json"
import transitionAR from "./translate/ar.json"

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import store from "./redux/store";


import 'aos/dist/aos.css';



let resources= {
  en: {
    translation: transitionEN
  },
  ar:{
    translation: transitionAR
  }
}
i18n
  .use(initReactI18next) 
  .init({

    resources,
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  
  return (
    <Provider store={store}>
      <html lang="en" dir={i18n.language === "en"?"ltr":"rtl"} >
          <head>
            <title>Ecommerce</title>
            <meta name="ecommerce" content="this is ecommerce content products,Discover our wide selection of men's running shoes. Shop now for free shipping and easy returns"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta property="og:Store for buying products" content="Buy Men's Running Shoes | Brand Name"></meta>
            <meta property="twitter:Store for buying products" content="Buy Men's Running Shoes | Brand Name"></meta>
          </head>
          <body className='' >

              {children}
            </body>
        </html>
    </Provider>
  );
}
