'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { StatisticsSection } from './components/statistics-section'
import { PlatformSection } from './components/platform-section'
import { JoinServerSection } from './components/join-server-section'
import { FeedbackSection } from './components/feedback-section'

const scrollAnimation = `
  @keyframes fadeInOut {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  @keyframes splitText {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(-2px); opacity: 0.5; }
  }

  @keyframes splitTextBottom {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(2px); opacity: 0.5; }
  }
`;

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const [opacity, setOpacity] = useState(0)
  const videoId = 'IL8O78XZafI'
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY
        const heroHeight = heroRef.current.offsetHeight
        const newOpacity = Math.min(scrollPosition / heroHeight, 0.4)
        setOpacity(newOpacity)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div ref={heroRef} className="relative min-h-screen w-full overflow-hidden">
        {/* TRAILERIS */}
        <div className="fixed inset-0 w-screen h-screen -z-10">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&playlist=${videoId}`}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ aspectRatio: '16/9', transform: 'scale(1.5)' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* TAMSINANTIS EFEKTAS */}
        <div 
          className="fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-0"
          style={{ opacity: opacity }}
        />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tighter text-white hover:text-gray-100"
          >
            SIDESTORY.LT
          </Link>
          
          <div className="hidden space-x-6 md:flex">
            {['PAGRINDINIS', 'NUORODOS', 'APIE MUS', 'DUK'].map((item) => (
              <Button
                key={item}
                variant="link"
                className="text-white hover:text-white group relative overflow-hidden"
              >
                <span className="relative block">
                  <span className="block group-hover:animate-[splitText_0.4s_ease-in-out_infinite]">
                    {item}
                  </span>
                  <span className="absolute top-0 left-0 block group-hover:animate-[splitTextBottom_0.4s_ease-in-out_infinite]">
                    {item}
                  </span>
                </span>
              </Button>
            ))}
          </div>
        </nav>

        {/* pagrindinis */}
        <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 text-center">
          <div className="max-w-4xl flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl mb-12">
              KVIEČIAME IŠ NAUJO ATRASTI
              <br />
              VISIEMS JAU GERAI PAŽĮSTAMĄ
              <br />
              GYVENIMO LOS SANTOS MIESTE RITMĄ!
            </h1>
            
            {/* scroll vertical */}
            <div className="flex flex-col items-center gap-2 mt-8">
              <span 
                className="text-white text-sm tracking-widest mb-4"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                SLINKITE ŽEMYN
              </span>
              <div 
                className="h-16 w-px bg-white"
                style={{ 
                  animation: 'fadeInOut 2s ease-in-out infinite',
                }}
              />
            </div>
          </div>

          {/* button audio */}
          <Button
            variant="ghost"
            size="icon"
            className="fixed bottom-6 left-6 z-20 text-white hover:bg-white/20"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </Button>
          <style jsx>{`${scrollAnimation}`}</style>
        </div>
      </div>
      <div className="bg-black/40">
        <StatisticsSection />
        <PlatformSection />
        <JoinServerSection />
        <FeedbackSection />
      </div>
    </>
  )
}

