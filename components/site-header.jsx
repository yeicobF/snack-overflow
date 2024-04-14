import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background items-center flex justify-center">
      <nav className="flex h-14 max-w-96 items-center mx-auto justify-between w-full">
        <Link href="/">Snack Overflow</Link>
        <div>
          <Link href="/providers">Providers</Link>
          <Link href="/ngo">Non government organizations</Link>
        </div>
      </nav>
    </header>
  )
}
