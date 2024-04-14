import { Container } from "@/components/container"
import Image from "next/image"

const ONG = {
  name: "Food for All",
  description: "Non organization that helps people in need.",
  image:
    "https://images.unsplash.com/photo-1615897570582-285ffe259530?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
}

export default function ConsumerOrdersPage() {
  return (
    <Container>
      <header className="flex gap-4 items-center flex-col sm:flex-row">
        <Image
          width={96}
          height={96}
          src={ONG.image}
          alt={`${ONG.name} logo`}
          className="rounded-lg aspect-video w-full sm:aspect-square object-cover object-center sm:w-[96px] sm:h-[96px]"
        />
        <div className="w-full">
          <h1 className="text-4xl font-semibold text-slate-100">{ONG.name}</h1>
          <p className="text-slate-200">{ONG.description}</p>
        </div>
      </header>
    </Container>
  )
}
