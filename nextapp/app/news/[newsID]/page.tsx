"use client"

import { use } from "react"

export default function News({params, searchParams}:{params: Promise<{newsID: string}>, searchParams: Promise<{cat: string, type: string}>}){

  const {newsID} = use(params)
  const {cat, type} = use(searchParams)

  return <div>News {newsID} {cat} {type}</div>
}