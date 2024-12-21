import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { VerticalText } from "./vertical-text"

export function StatisticsSection() {
  const stats = [
    { year: 2024, value: 480, label: "480" },
    { year: 2023, value: 320, label: "320" },
    { year: 2022, value: 180, label: "180" },
  ]

  return (
    <section className="relative bg-black/10 px-6 py-24">
      <VerticalText text="SKAIČIAI KALBA" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            {stats.map((stat) => (
              <div key={stat.year} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-400">{stat.year}</span>
                  <span className="text-amber-400">{stat.label}</span>
                </div>
                <Progress 
                  value={stat.value / 5} 
                  className="h-3 bg-amber-950 [&>div]:bg-amber-400" 
                />
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter text-white">
              SKAIČIAI KALBA
              <br />
              PATYS UŽ SAVE
            </h2>
            <p className="text-gray-400">
              Mūsų žaidėjų skaičius jau perkopė per visus rekordus, tačiau savo
              tobulėjimo ribos įžvelgti neketiname nei šiemet. Jeigu Tau irgi įdomu
              stebėti statistikas ir matyti GTA V miesto gyvenimą, ar net nori
              tapti jo dalimi, lauksime tavęs serverio kūrėjų rate!
            </p>
            <Button 
              variant="outline" 
              className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              MUSU DISCORD
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

