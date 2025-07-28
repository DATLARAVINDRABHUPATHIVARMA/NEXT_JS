import React from "react";

export default function AuthLayout({children}:{children: React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <div>login Header</div>
        {children}
      </body>
    </html>
  )
}