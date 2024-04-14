import { Container } from "@/components/container"
import { getStatistics } from "../api/statistics/route"
import { Metrics } from "@/components/metrics"
import { GetStatistics } from "../api/_dto/getStatistics"



export default async function Home() {

  const {statistics} = await getStatistics()

  return (
    <Container className="max-w-6xl">
      <h2 className="text-center text-3xl mb-10">
        Metrics
      </h2>
      <Metrics
        statistics={statistics as GetStatistics["statistics"]}
      />
    </Container>
  )
}