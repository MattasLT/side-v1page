import { VerticalText } from "./vertical-text"

export function PartnersSection() {
  const partners = [
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
  ]

  return (
    <section className="relative bg-black/30 px-6 py-24">
      <VerticalText text="PROJEKTO PARTNERIAI" />
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold tracking-tighter text-white text-center mb-12">
          PROJEKTO PARTNERIAI
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

