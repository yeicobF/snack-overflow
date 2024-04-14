"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

function HeaderLink({ href, children }) {
  const pathname = usePathname()

  return (
    <Link
      className={`hover:underline ${
        pathname === href ? "underline font-medium ring-offset-2" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  )
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="w-full flex items-center">
      <nav
        className="fixed translate-x-1/2 top-2 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background items-center flex justify-between w-full max-w-2xl gap-4 mx-auto border-2 border-black/60 rounded-full px-4 shadow-lg z-50"
        style={{
          transform: "translate(calc(50vw - 50%))",
        }}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Snack Overflow Logo"
            height={48}
            width={48}
            className="rounded-full cursor-pointer object-center object-cover"
          />
        </Link>
        <div className="flex gap-4">
          <HeaderLink href="/metrics">Statistics</HeaderLink>
          <HeaderLink href="/providers">Providers</HeaderLink>
          <HeaderLink href="/ngo">Non government organizations</HeaderLink>
        </div>
      </nav>
    </header>
  )
}
