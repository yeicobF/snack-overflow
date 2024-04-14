import { Container } from "@/components/container"
import Image from "next/image"
import { OrderRecommendations } from "@/components/order-recommendation"

const ONG = {
  name: "Food for All",
  description: "Non organization that helps people in need.",
  image: "/img/ngo.jpg",
}

export default function NgoLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex flex-col gap-8 py-24">
      <header className="flex gap-4 items-center flex-col sm:flex-row">
        <Image
          width={96}
          height={96}
          src={ONG.image}
          alt={`${ONG.name} logo`}
          className="rounded-lg aspect-video w-full sm:aspect-square object-cover object-center sm:w-[96px] sm:h-[96px]"
        />
        <div className="w-full">
          <h1 className="text-4xl font-semibold text-primary">{ONG.name}</h1>
          <p className="text-secondary-foreground">{ONG.description}</p>
        </div>
      </header>

      {children}

      <OrderRecommendations />
    </Container>
  )
}
