import { Button } from "@/components/ui/button"
import { VerticalText } from "./vertical-text"

export function JoinServerSection() {
  return (
    <section className="relative bg-black/10 px-6 py-24">
      <VerticalText text="PRISIJUNGIMAS" />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-zinc-800">
            <img
              src="/images/fivem_server.png?height=720&width=1280"
              alt="GTA V Characters"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tighter text-white">
              KAIP
              <br />
              PRISIJUNGTI Į
              <br />
              SERVERĮ
            </h2>
            <p className="text-gray-400">
              Prisijungti į serverį gali kalbos būdais: vienas iš jų - parsisiuntus ir įsidiegus
              FiveM platformą, prisijungti prie bendruomenę mylinčių "JUNGTIS Į
              SERVERĮ". Nori keleto svarbesnių patarimų kaip tinkamai atidaryti MTA
              serverius? Instaliuok FiveM programą, išklausyk pateiktų patarimų kaip
              naudotis ir pradėk žaisti jau programą įdiegę šiame lange. Taip pat
              primename, kad būtina turėti originalų GTA V žaidimą.
            </p>
            <Button 
              variant="outline" 
              className="mt-4 bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              JUNGTIS Į SERVERĮ
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

