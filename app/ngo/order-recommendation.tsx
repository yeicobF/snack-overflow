"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoaderCircleIcon, ShoppingBagIcon } from "@/icons"
import { SaveIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function OrderRecommendations() {
  const [providers, setProviders] = useState([])

  const fetchProviders = async (numberOfPeople = 1) => {
    const { providers } = await fetch(
      `/api/recommendations?people=${numberOfPeople}`,
    ).then((res) => res.json())

    setProviders(providers)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed bottom-12 right-12">
          <ShoppingBagIcon className="w-4 h-4 mr-2" />
          Generate recommendation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-screen-md overflow-y-scroll max-h-screen">
        <DialogHeader className="text-start">
          <DialogTitle className="text-3xl">Order recommendation</DialogTitle>
          <DialogDescription>
            We&apos;ll generate a recommendation based on your
            organization&apos;s needs.
          </DialogDescription>
          <DialogDescription>
            These recommendations are based on the number of people that you
            want to help.
          </DialogDescription>
        </DialogHeader>

        <section className="flex flex-col gap-2 mt-4">
          <header className="sticky -top-7 bg-background">
            <h3 className="text-xl font-medium text-primary">
              Recommended items
            </h3>

            <div className="text-secondary-foreground grid sm:grid-cols-2 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="people" className="text-balance">
                  Number of people
                </Label>
                <Input
                  id="people"
                  defaultValue="1"
                  min="1"
                  type="number"
                  className="border-slate-50 border-2"
                />
                <p className="text-muted-foreground text-xs">
                  First, specify the number of people you want to support.
                </p>
              </div>
            </div>
          </header>

          <div className="flex flex-col gap-2">
            {providers &&
              providers.map(
                ({ food, _id, locationDisplayName, locationUrl, name }) => {
                  return (
                    <Card key={_id}>
                      <CardHeader>
                        <CardTitle>{name}</CardTitle>
                        <Link
                          className="text-muted-foreground hover:text-slate-100 text-xs flex"
                          href={locationUrl}
                          target="_blank"
                        >
                          {locationDisplayName}
                        </Link>
                      </CardHeader>
                      <CardContent className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {food &&
                          food.map(
                            ({
                              name,
                              unit,
                              packages,
                              total,
                              quantity,
                              recollectionDateRange,
                            }) => (
                              <div
                                key={name}
                                className="flex flex-col gap-2 justify-between"
                              >
                                <header>
                                  <h4 className="text-lg text-balance text-primary">
                                    <span className="font-medium">{name}</span>{" "}
                                    packages
                                  </h4>
                                  <p className="text-muted-foreground text-xs">
                                    Each package contains{" "}
                                    <strong>
                                      {quantity} {unit}
                                    </strong>{" "}
                                    for a{" "}
                                    <strong>
                                      total of{" "}
                                      <span className="italic underline">
                                        {total} {unit}
                                      </span>
                                    </strong>
                                  </p>
                                </header>
                                <div className="flex flex-col col-span-3">
                                  <Input
                                    id={name}
                                    defaultValue={packages}
                                    min="1"
                                    type="number"
                                    className="border-slate-50 border-2 col-span-1 h-3/4"
                                  />

                                  <p className="text-muted-foreground text-xs">
                                    Available{" "}
                                    <strong>{recollectionDateRange}</strong>
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                      </CardContent>
                    </Card>
                  )
                },
              )}
          </div>
        </section>

        <DialogFooter className="flex flex-row gap-4 justify-between sm:justify-between sticky -bottom-7 backdrop-blur-sm py-6 bg-background">
          <Button variant="outline" className="w-full" type="submit">
            <SaveIcon className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button
            variant="default"
            className="w-full"
            type="button"
            onClick={() => fetchProviders()}
          >
            <LoaderCircleIcon className="w-4 h-4 mr-2" />
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
