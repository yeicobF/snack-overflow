import clientPromise from "@/app/api/_common/mongodb"

import { ObjectId } from "mongodb"
import {
  MOCK_RECOMMENDATIONS_RESTAURANT_A,
  MOCK_RECOMMENDATIONS_RESTAURANT_B,
  MOCK_RECOMMENDATIONS_RESTAURANT_C,
} from "./recommendations/mockRecommendations"

export async function getOrderId(orderId: string) {
  const client = await clientPromise
  try {
    const database = client.db(process.env["DB_NAME"])
    const ordersCollection = database.collection("Orders")
    const consumersCollection = database.collection("Consumers")
    const providersCollection = database.collection("Providers")
    const itemsCollection = database.collection("Items")

    const d = await ordersCollection.find({}).toArray()

    const order = await ordersCollection.findOne({
      _id: new ObjectId(orderId),
    })
    if (!order) throw new Error("Order not found")

    const consumer = await consumersCollection.findOne({ _id: order.consumer })
    const provider = await providersCollection.findOne({ _id: order.provider })

    const itemsDetails = await Promise.all(
      order.items.map(async (item: any) => {
        //@ts-expect-error
        const itemDetails: Items = await itemsCollection.findOne({
          _id: item._id,
        })
        const recollectionDateRange = `${itemDetails.initialRecollectionDay} to ${itemDetails.finalRecollectionDay} from ${itemDetails.initialRecollectionTime} to ${itemDetails.finalRecollectionTime}`
        return {
          name: itemDetails.name,
          unit: itemDetails.unit,
          packages: item.packages.toString(),
          total: (item.packages * itemDetails.quantity).toString(),
          quantity: itemDetails.quantity.toString(),
          recollectionDateRange,
        }
      }),
    )

    const result = {
      _id: orderId,
      date: order._id.getTimestamp().toISOString(),
      consumer: consumer?.name || "",
      provider: provider?.name || "",
      locationDisplayName: provider?.locationDisplayName || "",
      locationUrl: `https://www.google.com/maps/@${provider?.latitude},${provider?.longitude},13z`,
      food: itemsDetails,
    }

    return result
  } catch (error) {
    console.error("Failed to retrieve order details:", error)
    throw error
  }
}
export async function getOrdersByConsumer() {
  const consumerId = "661b638524854d0f62b34761"
  const client = await clientPromise

  try {
    const database = client.db(process.env["DB_NAME"])
    const ordersCollection = database.collection("Orders")

    // Aggregate orders linked to the consumer ID
    const orders = await ordersCollection
      .aggregate([
        { $match: { consumer: new ObjectId(consumerId) } },
        {
          $lookup: {
            from: "Providers",
            localField: "provider",
            foreignField: "_id",
            as: "providerDetails",
          },
        },
        { $unwind: "$providerDetails" },
        {
          $lookup: {
            from: "Items",
            localField: "items._id",
            foreignField: "_id",
            as: "itemDetails",
          },
        },
        { $unwind: "$itemDetails" },
        {
          $group: {
            _id: "$_id",
            providerName: { $first: "$providerDetails.name" },
            locationDisplayName: {
              $first: "$providerDetails.locationDisplayName",
            },
            recollectionDateRange: {
              $first: {
                $concat: [
                  { $toString: "$itemDetails.initialRecollectionDay" },
                  " to ",
                  { $toString: "$itemDetails.finalRecollectionDay" },
                  " from ",
                  { $toString: "$itemDetails.initialRecollectionTime" },
                  " to ",
                  { $toString: "$itemDetails.finalRecollectionTime" },
                ],
              },
            },
            latitude: { $first: "$providerDetails.latitude" },
            longitude: { $first: "$providerDetails.longitude" },
          },
        },
        {
          $project: {
            _id: 1,
            providerName: 1,
            locationDisplayName: 1,
            recollectionDateRange: 1,
            locationUrl: {
              $concat: [
                "https://www.google.com/maps/@",
                { $toString: "$latitude" },
                ",",
                { $toString: "$longitude" },
                ",13z",
              ],
            },
            status: { $literal: "in progress" },
          },
        },
      ])
      .toArray()

    const result = {
      _id: consumerId,
      orders,
    }

    return result
  } catch (error) {
    console.error("Failed to retrieve orders by consumer:", error)
    throw error
  }
}

export const getMockRecommendations = async () => {
  const recommendationA =
    MOCK_RECOMMENDATIONS_RESTAURANT_A[
      Math.floor(Math.random() * MOCK_RECOMMENDATIONS_RESTAURANT_A.length)
    ]
  const recommendationB =
    MOCK_RECOMMENDATIONS_RESTAURANT_B[
      Math.floor(Math.random() * MOCK_RECOMMENDATIONS_RESTAURANT_B.length)
    ]
  const recommendationC =
    MOCK_RECOMMENDATIONS_RESTAURANT_C[
      Math.floor(Math.random() * MOCK_RECOMMENDATIONS_RESTAURANT_C.length)
    ]
  return { providers: [recommendationA, recommendationB, recommendationC] }
}

export async function getStatistics() {
  const client = await clientPromise
  try {
    await client.connect()
    const database = client.db(process.env["DB_NAME"])
    const providersCollection = database.collection("Providers")

    // Aggregate providers sorted by foodDonated in descending order
    const providers = await providersCollection
      .aggregate([
        { $sort: { foodDonated: -1 } }, // Sort by foodDonated descending
        {
          $project: {
            provider: "$name",
            locationDisplayName: 1,
            locationUrl: {
              $concat: [
                "https://www.google.com/maps/@",
                { $toString: "$latitude" },
                ",",
                { $toString: "$longitude" },
                ",13z",
              ],
            },
            foodDonated: { $toString: "$foodDonated" },
          },
        },
      ])
      .toArray()

    const result = {
      statistics: providers,
    }

    return result
  } catch (error) {
    console.error("Failed to retrieve providers sorted by donation:", error)
    throw error
  }
}
