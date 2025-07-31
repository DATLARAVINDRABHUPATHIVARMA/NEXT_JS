"use client"
import Link from "next/link";
import React, { useState } from "react";

const navigations = [
  { title:"Login", href:"/login"},
  { title:"Register", href:"/register"},
]

export default function AuthLayout({children}:Readonly<{children: React.ReactNode}>){
  const [inputVal, setInputVal] = useState("")
  return (
    <>
      <div style={{padding: "10px", background: "rgb(129 148 183)"}}>
        {navigations.map(nav => {return(<Link key={nav.title} href={nav.href}>{nav.title}</Link>)})}

      </div>
      <div>
        <input type="text" value={inputVal}  onChange={(e) => setInputVal(e.target.value)} />
      </div>
      {children}
      
    </>
  )
}