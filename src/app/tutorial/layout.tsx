import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tutorial - Como Usar",
  description: "Aprenda a usar os recursos da plataforma.",
}

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
