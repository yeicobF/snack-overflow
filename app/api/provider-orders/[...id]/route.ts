import { ObjectId } from "mongodb"
import clientPromise from "../../_common/mongodb"
import { response } from "../../_common"
import { getOrderId } from "@/app/api"

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const order = params.id
  const res = await getOrderId(order[0])
  return response(res)
}

// Define params type according to your route parameters (see table below)
