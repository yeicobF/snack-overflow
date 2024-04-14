import React, { useState } from 'react';
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

const invoices: GetOrdersId['items'] = [
  {
    
  }
];

export function Record() {
    
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[100px]">Provider</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Packages</TableHead>
                <TableHead className="text-right">Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.provider}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.quantity}</TableCell>
                    <TableCell>{invoice.package}</TableCell>
                    <TableCell className="text-right">{invoice.total}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}