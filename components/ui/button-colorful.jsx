import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function ButtonColorful({ className, label = "Explore Components", children, ...props }) {
  const gradient = (
    <div
      className={cn(
        "absolute inset-0",
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "opacity-40 group-hover:opacity-80",
        "blur transition-opacity duration-500"
      )}
    />
  )

  const content = (
    <div className="relative flex items-center justify-center gap-2">
      <span className="text-white dark:text-zinc-900">{label}</span>
      <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
    </div>
  )

  // If asChild is used, ensure Button receives a single child element.
  if (props.asChild && children) {
    const child = React.Children.only(children)
    const cloned = React.cloneElement(
      child,
      {
        className: cn(child.props.className, "relative h-10 px-4 overflow-hidden group", className),
      },
      <>
        {gradient}
        {content}
      </>
    )

    return <Button {...props}>{cloned}</Button>
  }

  return (
    <Button
      className={cn(
        "relative h-10 px-4 overflow-hidden",
        "bg-zinc-900 dark:bg-zinc-100",
        "transition-all duration-200",
        "group",
        className
      )}
      {...props}
    >
      {gradient}
      {content}
    </Button>
  )
}

export default ButtonColorful
