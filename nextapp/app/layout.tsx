"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ErrorWrapper } from "./GlobalError";

const navigations = [
  { title: "About", href: "/about" },
  { title: "Products", href: "/Product" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <div>
          {navigations.map((nav) => {
            const isActive =
              pathname === nav.href ||
              (pathname.startsWith(nav.href) && nav.href !== "page");
            return (
              <Link
                className={isActive ? "to-blue-700" : ""}
                key={nav.title} 
                href={nav.href}
              >
                {nav.title} 
              </Link>
            );
          })}
        </div>
        <ErrorWrapper>{children}</ErrorWrapper>
      </body>
    </html>
  );
}
