import { GetStatistics } from "@/app/api/_dto/getStatistics"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Metrics({ statistics }: GetStatistics) {
  return (
    <Table>
      <TableCaption>...</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Provider</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Food Donated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {statistics?.map(
          ({ provider, locationDisplayName, locationUrl, foodDonated }) => {
            return (
              <TableRow key={provider}>
                <TableCell>{provider}</TableCell>
                <TableCell>
                  <Link
                    className="text-muted-foreground hover:text-primary flex w-fit"
                    href={locationUrl}
                    target="_blank"
                  >
                    {locationDisplayName}
                  </Link>
                </TableCell>
                <TableCell className="text-right">{foodDonated}</TableCell>
              </TableRow>
            )
          },
        )}
      </TableBody>
    </Table>
  )
}
