import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LoaderCircleIcon, ShoppingBagIcon } from "@/icons"
import { SaveIcon, XIcon } from "lucide-react"
import Image from "next/image"

const ONG = {
  name: "Food for All",
  description: "Non organization that helps people in need.",
  image:
    "https://images.unsplash.com/photo-1615897570582-285ffe259530?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3",
}

export default function NgoLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex flex-col gap-12">
      <header className="flex gap-4 items-center flex-col sm:flex-row">
        <Image
          width={96}
          height={96}
          src={ONG.image}
          alt={`${ONG.name} logo`}
          className="rounded-lg aspect-video w-full sm:aspect-square object-cover object-center sm:w-[96px] sm:h-[96px]"
        />
        <div className="w-full">
          <h1 className="text-4xl font-semibold text-slate-100">{ONG.name}</h1>
          <p className="text-slate-200">{ONG.description}</p>
        </div>
      </header>
      {children}

      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed bottom-12 right-12">
            <ShoppingBagIcon className="w-4 h-4 mr-2" />
            Generate recommendation
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Order recommendation</DialogTitle>
            <DialogDescription>
              We&apos;ll generate a recommendation based on your
              organization&apos;s needs.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex flex-row gap-2 justify-between sm:justify-between">
            <Button variant="outline" className="w-full" type="submit">
              <LoaderCircleIcon className="w-4 h-4 mr-2" />
              Regenerate
            </Button>
            <Button variant="default" className="w-full" type="submit">
              <SaveIcon className="w-4 h-4 mr-2" />
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Container>
  )
}
