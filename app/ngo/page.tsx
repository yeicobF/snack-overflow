import { Container } from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { DotIcon, MapPinIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ONG = {
  name: "Food for All",
  description: "Non organization that helps people in need.",
  image:
    "https://images.unsplash.com/photo-1615897570582-285ffe259530?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
}

export default async function ConsumerOrdersPage() {
  const orders = [
    {
      _id: 1,
      providerName: "Rice Provider",
      location:
        "Eduardo Molina 6730, Granjas Modernas, Gustavo A. Madero, 07460 Ciudad de México, CDMX",
      locationUrl: "https://maps.app.goo.gl/Kk2shgErPxukWz5t8",
      distanceKm: 2,
      estimatedTime: "10 minutes",
      status: "in progress",
      recollectionDateRange: "13/Apr to 15/Apr from 15:00 to 16:15",
    },
    {
      _id: 2,
      providerName: "Meat Provider",
      location:
        "Nte 82-A 6549, San Pedro el Chico, Gustavo A. Madero, 07480 Ciudad de México, CDMX",
      locationUrl: "https://maps.app.goo.gl/29sYRHxtAsGrDfwQ9",
      distanceKm: 4,
      estimatedTime: "20 minutes",
      status: "done",
      recollectionDateRange: "13/Apr to 15/Apr from 14:00 to 18:30",
    },
  ]

  return (
    <Container className="flex flex-col gap-12">
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

      <section>
        <h2 className="text-3xl font-medium text-slate-200 mb-4">Orders</h2>

        <div className="gap-2 grid sm:grid-cols-2">
          {orders.map(
            ({
              _id,
              providerName,
              location,
              locationUrl,
              distanceKm,
              estimatedTime,
              status,
              recollectionDateRange,
            }) => (
              <Card key={_id}>
                <CardHeader>
                  <div className="flex gap-4 justify-between">
                    <CardTitle>{providerName}</CardTitle>
                    <Badge
                      className="w-fit text-nowrap h-fit"
                      variant={
                        status === "in progress" ? "destructive" : "default"
                      }
                    >
                      {status === "in progress" ? "In progress" : "Done"}
                    </Badge>
                  </div>

                  <CardDescription className="">
                    <span>{recollectionDateRange}</span>
                    <small className="flex items-center gap-1 text-muted-foreground">
                      {estimatedTime} from you
                      <DotIcon className="w-4 h-4" />
                      {distanceKm} km away
                    </small>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <Link
                    className="text-muted-foreground hover:text-slate-100 text-xs flex"
                    href={locationUrl}
                  >
                    {location}
                  </Link>

                  <Link
                    className="hover:text-slate-100 text-slate-300 font-medium text-sm hover:underline underline-offset-2 decoration-2 w-fit"
                    href={`/ngo/${_id}`}
                  >
                    View order
                  </Link>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </section>
    </Container>
  )
}
