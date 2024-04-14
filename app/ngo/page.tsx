import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DotIcon } from "lucide-react"
import Link from "next/link"

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
  )
}
