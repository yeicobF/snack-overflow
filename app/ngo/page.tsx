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
import { getOrdersByConsumer } from "@/app/api"

export default async function ConsumerOrdersPage() {
  const { orders } = await getOrdersByConsumer()

  return (
    <section>
      <h2 className="text-3xl font-medium text-primary mb-4">Orders</h2>

      <div className="gap-2 grid sm:grid-cols-2">
        {orders?.map(
          ({
            _id,
            providerName,
            locationDisplayName,
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
                  className="text-muted-foreground hover:underline text-xs flex"
                  href={locationUrl}
                  target="_blank"
                >
                  {locationDisplayName}
                </Link>

                <Link
                  className="hover:text-secondary-foreground/80 text-secondary-foreground font-medium text-sm hover:underline underline-offset-2 decoration-2 w-fit"
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
