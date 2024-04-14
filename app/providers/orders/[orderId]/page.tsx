import { getOrderId } from "@/app/api"
import { Container } from "@/components/container"
import { Record } from "@/components/record"

export default async function Home({
  params: { orderId },
}: {
  params: { orderId: string }
}) {
  const order = await getOrderId(orderId)

  return (
    <Container className="max-w-6xl">
      <h2 className="text-center text-3xl mb-10">
        Detailed Order #{orderId.slice(0, 8)}
      </h2>
      <Record
        _id={order._id}
        date={order.date}
        consumer={order.consumer}
        locationDisplayName={order.locationDisplayName}
        locationUrl={order.locationUrl}
        food={order.food}
      />
    </Container>
  )
}
