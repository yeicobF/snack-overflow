type Params = {
  team: string
}
 
export async function GET(request: Request, context: { params: Params }) {
  const team = context.params.team // '1'
}
 
// Define params type according to your route parameters (see table below)