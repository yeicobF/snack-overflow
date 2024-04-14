import { getOrderId } from "@/app/api"
import { Record } from "@/components/record"

export default async function ConsumerOrderDetails({
  params: { orderId },
}: {
  params: {
    orderId: string
  }
}) {
  const order = await getOrderId(orderId)

  return (
    <div>
      <h2 className="text-2xl mb-4">
        Detailed Order #<strong>{orderId.slice(0, 8)}</strong>
      </h2>
      <Record
        _id={order._id}
        date={order.date}
        provider={order.provider}
        locationDisplayName={order.locationDisplayName}
        locationUrl={order.locationUrl}
        food={order.food}
      />
    </div>
  )
}
