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
import { getOrdersByConsumer } from "@/app/api/consumer-orders/route"

export default async function ConsumerOrdersPage() {
  const { orders } = await getOrdersByConsumer()

  return (
    <section>
      <h2 className="text-3xl font-medium text-primary mb-4">My Orders</h2>

      <div className="gap-2 grid sm:grid-cols-2">
        {/* {orders?.map(
          ({
            _id,
            providerName,
            locationDisplayName,
            locationUrl,
            distanceKm,
            estimatedTime,
            status,
            recollectionDateRange,
          }) => ( */}
            <Card>
              <CardHeader>
                <div className="flex gap-4 justify-between">
                  <CardTitle>Alimentos para todos</CardTitle>
                  <Badge
                    className="w-fit text-nowrap h-fit"
                    variant="destructive"
                  >
                    In progress
                  </Badge>
                </div>

                <CardDescription className="">
                  <span>12/04 to 17/04 from 11:00 to 15:00</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Link
                  className="text-muted-foreground hover:underline text-xs flex"
                  href="https://www.google.com/maps/@19.42058,-99.16756,13z"
                  target="_blank"
                >
                  Av. Insurgentes Sur 253, Roma Norte, 06700 Ciudad de México, CDMX
                </Link>

                <Link
                  className="hover:text-secondary-foreground/80 text-secondary-foreground font-medium text-sm hover:underline underline-offset-2 decoration-2 w-fit"
                  href="/providers/orders/602f191e810c19729de86101"
                >
                  View order
                </Link>
              </CardContent>
            </Card>
          {/* ), */}
        {/* )} */}
      </div>
    </section>
  )
}