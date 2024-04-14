import { Items } from "../_collections/items"
import { response } from "../_common"
import { getOrdersByConsumer } from "@/app/api"

type Params = {
  order: string
}
export async function GET(request: Request, context: { params: Params }) {
  const res = await getOrdersByConsumer()
  return response(res)
}

// Define params type according to your route parameters (see table below)
