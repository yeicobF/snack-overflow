import { siteConfig } from "@/config/site"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex mt-20 text-balance items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className=""
        />
        <h1 className="text-4xl  max-w-64 flex flex-col">
          <span>Welcome to</span>{" "}
          <span>
            <strong>{siteConfig.name}</strong>!
          </span>
        </h1>
      </header>
    </main>
  )
}
