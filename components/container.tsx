import { cn } from "@/lib/utils"

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto container max-w-2xl py-16", className)}>
      {children}
    </div>
  )
}
