import { GetOrdersId } from '@/app/api/_dto/getOrdersId';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const order: GetOrdersId = {
  _id: "123", 
  date: "01/01/2024", 
  consumer: "Nombre del consumidor", 
  provider: "Nombre del proveedor", 
  locationDisplayName: "Nombre de la ubicación", 
  locationUrl: "https://www.google.com/maps/@19.4697012,-99.1380162,13z", 
  food: [
    {
      name: "Nombre del alimento", 
      unit: "Unidad", 
      packages: "Paquetes", 
      total: "Total",
      quantity: "Cantidad", 
      recollectionDateRange: "DD/MMM to DD/MMM from HH:mm to HH:mm",
    },
    {
      name: "Nombre del alimento", 
      unit: "Unidad", 
      packages: "Paquetes", 
      total: "Total",
      quantity: "Cantidad", 
      recollectionDateRange: "DD/MMM to DD/MMM from HH:mm to HH:mm",
    },
    {
      name: "Nombre del alimento", 
      unit: "Unidad", 
      packages: "Paquetes", 
      total: "Total",
      quantity: "Cantidad", 
      recollectionDateRange: "DD/MMM to DD/MMM from HH:mm to HH:mm",
    },
  ],
};

export function Record() {
    
    return (
        <Table>
            <TableCaption>A detailed list of your order</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Provider</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Packages</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="text-right">Recollection Date Range</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {order.food.map((food) => (
                <TableRow>
                  <TableCell className="font-medium">{order.consumer}</TableCell>
                  <TableCell>{food.name}</TableCell>
                  <TableCell>{food.quantity} {food.unit}</TableCell>
                  <TableCell>{food.packages}</TableCell>
                  <TableCell>{food.total}</TableCell>
                  <TableCell className="text-right">{food.recollectionDateRange}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}