import { Button } from "@/components/ui/button"
import { VerticalText } from "./vertical-text"

export function PlatformSection() {
  return (
    <section className="relative bg-black/10 px-6 py-24">
      <VerticalText text="MODIFIKACIJŲ PLATFORMA" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter text-white">
              FIVEM - GTA V
              <br />
              MODIFIKACIJŲ
              <br />
              PLATFORMĄ
            </h2>
            <p className="text-gray-400">
              Nori pas mus žaisti? Norint pradėti mes siūlome įsidėti FiveM - GTA V
              modifikacijų platformą, kuri mums padeda perteikti papildomą originalią
              medžiagą žaidime. Tai tarsi žaidimo priedas, kuris leidžia žaisti su
              visiškai lygiai tuo pati norimu. Sis platforma priklauso komandai,
              FiveM'ui, kurie jau seniai prisijungė backuoti žaidimo gyvenimą.
            </p>
            <Button 
              variant="outline" 
              className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              ATIDARYTI FIVEM
            </Button>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-zinc-800">
            <img
              src="/images/fivem_client-1.png?height=720&width=1280"
              alt="FiveM Platform Interface"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

