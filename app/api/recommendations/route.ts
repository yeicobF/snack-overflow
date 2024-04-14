import { getMockRecommendations } from ".."
import { response } from "../_common"

type Params = {
  people: string
}

export async function GET(request: Request, context: { params: Params }) {
  const res = await getMockRecommendations()
  return response(res)
}

// Define params type according to your route parameters (see table below)
