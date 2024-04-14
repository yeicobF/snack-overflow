import { GetOrdersId } from "@/app/api/_dto/getOrdersId"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Record({
  _id,
  date,
  consumer,
  provider,
  locationDisplayName,
  locationUrl,
  food,
}: GetOrdersId & {
  provider?: string
  consumer?: string
}) {
  return (
    <Table>
      <TableCaption>A detailed list of your order</TableCaption>
      <TableHeader>
        <TableRow>
          {provider && <TableHead className="w-[100px]">Provider</TableHead>}
          {consumer && <TableHead className="w-[100px]">Consumer</TableHead>}
          <TableHead>Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Packages</TableHead>
          <TableHead>Total</TableHead>
          <TableHead className="text-right">Recollection Date Range</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {food?.map(
          ({
            name,
            quantity,
            unit,
            packages,
            total,
            recollectionDateRange,
          }) => {
            return (
              <TableRow key={name}>
                {provider && <TableCell>{provider}</TableCell>}
                {consumer && (
                  <TableCell className="font-medium">{consumer}</TableCell>
                )}
                <TableCell>{name}</TableCell>
                <TableCell>
                  {quantity} {unit}
                </TableCell>
                <TableCell>{packages}</TableCell>
                <TableCell>{total}</TableCell>
                <TableCell className="text-right">
                  {recollectionDateRange}
                </TableCell>
              </TableRow>
            )
          },
        )}
      </TableBody>
    </Table>
  )
}
