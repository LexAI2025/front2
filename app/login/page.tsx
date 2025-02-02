"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { useRouter } from "next/navigation"
import type React from "react" // Added import for React

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add authentication logic here
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-[#292D39] flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-12 h-12 mb-4 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/output-onlinepngtools-Q3yTLHTk9lMBS07Q58QW9oKvi3Cukp.png"
              alt="Gide Logo"
              fill
              className="object-contain"
            />
          </div>
          <CardTitle className="text-2xl">Connexion</CardTitle>
          <CardDescription>Accédez à votre espace de gestion</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="nom@gide.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-[#292D39] hover:bg-[#363b4a]">
              Se connecter
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

