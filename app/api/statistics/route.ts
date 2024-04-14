import { getStatistics } from "@/app/api"
import { response } from "../_common"

export async function GET(request: Request, context: { params: string }) {
  const res = await getStatistics()
  return response(res)
}

// Define params type according to your route parameters (see table below)
