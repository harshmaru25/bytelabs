"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.clientX
    const y = e.clientY

    document.documentElement.style.setProperty("--x", `${x}px`)
    document.documentElement.style.setProperty("--y", `${y}px`)

    if (!document.startViewTransition) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
      return
    }

    document.startViewTransition(() => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300 rotate-0" />
      )}
    </Button>
  )
}