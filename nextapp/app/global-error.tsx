"use client"

export default function GlobalError(){
  return(
    <div>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  )
}