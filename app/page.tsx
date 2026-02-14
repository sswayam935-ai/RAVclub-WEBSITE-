"use client"

import { useEffect, useState } from "react"
import { SplineScene } from "@/components/ui/spline-scene"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { EntranceAnimation } from "@/components/ui/entrance-animation"
import homeData from "@/data/home.json"

export default function HomePage() {
  const [showMainText, setShowMainText] = useState(false)

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenEntranceAnimation')
    
    if (hasSeenAnimation) {
      // Already seen - show immediately
      setShowMainText(true)
    } else {
      // First time - fade in main text during morph
      const timer = setTimeout(() => {
        setShowMainText(true)
      }, 3800) // Starts fading in slightly before animation text fades out
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <EntranceAnimation />
      
      <div className="container mx-auto px-4 space-y-20">
        {/* Hero Section with Spline */}
        <section className="min-h-screen flex items-center justify-center -mt-20">
          <Card className="w-full max-w-7xl h-[600px] bg-stone-brown-950/80 relative overflow-hidden border-stone-brown-700">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="#5963a6"
            />
            
            <div className="flex flex-col md:flex-row h-full">
              {/* Left content - Main page text (static, scrolls with page) */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                {/* Add className for position calculation */}
                <div 
                  className="hero-text-container"
                  style={{
                    opacity: showMainText ? 1 : 0,
                    transition: 'opacity 0.6s ease-in',
                  }}
                >
                  <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-stone-brown-50 to-stone-brown-400 mb-4">
                    {homeData.hero.clubName}
                  </h1>
                  <p className="text-2xl md:text-3xl text-periwinkle-300 font-semibold mb-6">
                    {homeData.hero.tagline}
                  </p>
                  <p className="text-stone-brown-300 text-lg max-w-lg">
                    Established in {homeData.hero.established} by {homeData.founders[0].name} and {homeData.founders[1].name}
                  </p>
                  <p className="text-stone-brown-400 mt-2">
                    Teacher Coordinator: {homeData.coordinator.name}
                  </p>
                </div>
              </div>

              {/* Right content - 3D Scene */}
              <div className="flex-1 relative min-h-[300px] md:min-h-0">
                <SplineScene 
                  scene={homeData.hero.splineScene}
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-brown-50 mb-6">{homeData.about.title}</h2>
          <p className="text-lg text-stone-brown-200 leading-relaxed mb-8">
            {homeData.about.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {homeData.about.activities.map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-stone-brown-800 rounded-lg border border-stone-brown-700">
                <div className="w-2 h-2 bg-periwinkle-500 rounded-full" />
                <span className="text-stone-brown-100">{activity}</span>
              </div>
            ))}
          </div>

          <p className="text-xl text-periwinkle-300 font-semibold text-center p-6 bg-stone-brown-800 rounded-lg border border-periwinkle-700/30">
            {homeData.about.mission}
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-stone-brown-800 to-ash-brown-800 p-8 md:p-12 rounded-2xl border border-stone-brown-700 shadow-xl">
            <h2 className="text-4xl font-bold text-stone-brown-50 mb-4">{homeData.vision.title}</h2>
            <p className="text-lg text-stone-brown-200 leading-relaxed mb-8">
              {homeData.vision.content}
            </p>

            <h3 className="text-2xl font-bold text-periwinkle-300 mb-4">Mission</h3>
            <ul className="space-y-4">
              {homeData.missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-periwinkle-500 font-bold text-xl">{idx + 1}.</span>
                  <span className="text-stone-brown-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
