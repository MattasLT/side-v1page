import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { VerticalText } from "./vertical-text"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function FeedbackSection() {
  const testimonials = [
    {
      text: "Šis serveris užkabino kažkaip, serveris yra stabilus ir be techninių problemų. Šiame serveryje yra daug aktyvumo ir šilumos. Serverio administracija yra puiki. Jie visada padeda/ės padėti ir išklausyti žaidėjų nuomonę, o kiekviena yra siekiama ir gerai pažiūrima. Serveris nuolat tobulėja/sis ir plečiamas. Tai reiškia, kad serveris niekada nenusibos/nuobodžiaus ir administracija visada sieks naujų galimybių.",
      author: "UGNIUS"
    },
    {
      text: "Puikus serveris su draugiška bendruomene. Administratoriai visada pasiruošę padėti ir išspręsti problemas. Žaidimo patirtis yra unikali ir įtraukianti.",
      author: "LAURA"
    },
    {
      text: "Geriausias GTA V serveris, kuriame esu žaidęs. Nuolat atnaujinamas turinys ir įdomūs renginiai palaiko žaidėjų susidomėjimą. Rekomenduoju visiems GTA V gerbėjams!",
      author: "TOMAS"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 10000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="relative bg-black/10 px-6 py-24">
      <VerticalText text="ŽAIDĖJŲ ATSILIEPIMAI" />
      <div className="mx-auto max-w-4xl">
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="text-center space-y-6">
                    <p className="text-gray-400 text-lg italic">
                      "{testimonial.text}"
                    </p>
                    <p className="text-amber-400 font-semibold">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-amber-400' : 'bg-gray-600'}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

