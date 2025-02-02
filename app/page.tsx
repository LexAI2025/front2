import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#292D39] flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-12 h-12 mb-4 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/output-onlinepngtools-Q3yTLHTk9lMBS07Q58QW9oKvi3Cukp.png"
              alt="Gide Logo"
              fill
              className="object-contain"
            />
          </div>
          <CardTitle className="text-2xl font-bold">Knowledge Base Manager</CardTitle>
          <CardDescription className="text-center">
            Centralisez et gérez efficacement la base de connaissances juridiques de Gide
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">Plateforme de gestion des ressources juridiques, incluant :</p>
            <ul className="text-sm text-muted-foreground list-disc text-left pl-4 space-y-1">
              <li>Exemples d&apos;audits et modèles</li>
              <li>Documentation juridique</li>
              <li>Ressources et liens utiles</li>
              <li>Base de connaissances collaborative</li>
            </ul>
          </div>
          <div className="space-y-2">
            <Button asChild className="w-full bg-[#292D39] hover:bg-[#363b4a]">
              <Link href="/login">Connexion</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

