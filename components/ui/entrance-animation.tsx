"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function EntranceAnimation() {
  const [phase, setPhase] = useState<'intro' | 'morphing' | 'complete'>('intro')
  const [isMounted, setIsMounted] = useState(false)
  const [targetPosition, setTargetPosition] = useState({ top: 0, left: 0, width: 0 })

  useEffect(() => {
    setIsMounted(true)
    
    // Calculate target position from the actual card element
    const calculateTargetPosition = () => {
      const cardElement = document.querySelector('.hero-text-container')
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect()
        setTargetPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          width: rect.width
        })
      }
    }

    // Calculate multiple times to ensure accuracy
    setTimeout(calculateTargetPosition, 50)
    setTimeout(calculateTargetPosition, 100)
    setTimeout(calculateTargetPosition, 200)
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateTargetPosition)
    return () => window.removeEventListener('resize', calculateTargetPosition)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const hasSeenAnimation = sessionStorage.getItem('hasSeenEntranceAnimation')
    
    if (hasSeenAnimation) {
      setPhase('complete')
      return
    }

    const introTimer = setTimeout(() => {
      setPhase('morphing')
    }, 2500)

    const completeTimer = setTimeout(() => {
      setPhase('complete')
      sessionStorage.setItem('hasSeenEntranceAnimation', 'true')
    }, 4500)

    return () => {
      clearTimeout(introTimer)
      clearTimeout(completeTimer)
    }
  }, [isMounted])

  if (!isMounted || phase === 'complete') return null

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'morphing' ? 0 : 1 }}
        transition={{ 
          duration: 2,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="fixed inset-0 z-[9998] bg-stone-brown-950"
      />

      <motion.div
        className="fixed z-[9999]"
        initial={{
          top: '50%',
          left: '50%',
        }}
        animate={phase === 'morphing' ? {
          top: `${targetPosition.top}px`,
          left: `${targetPosition.left}px`,
        } : {}}
        transition={{
          duration: 1.8,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        <motion.div
          initial={{
            x: '-50%',
            y: '-50%',
          }}
          animate={phase === 'morphing' ? {
            x: '0%',
            y: '0%',
          } : {}}
          transition={{
            duration: 1.8,
            ease: [0.33, 1, 0.68, 1],
          }}
          style={{
            textAlign: phase === 'intro' ? 'center' : 'left',
            width: phase === 'morphing' ? `${targetPosition.width}px` : 'auto',
          }}
        >
          <motion.div
            animate={{ opacity: phase === 'morphing' ? [1, 1, 0] : 1 }}
            transition={{
              duration: 0.5,
              delay: 1.3,
              ease: "easeOut"
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-stone-brown-50 to-stone-brown-400 mb-4"
            >
              Robotics & AV Club
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-2xl md:text-3xl text-periwinkle-300 font-semibold mb-6"
            >
              Where technology meets creativity!
            </motion.p>

            {phase === 'morphing' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="max-w-lg"
              >
                <p className="text-stone-brown-300 text-base md:text-lg">
                  Established in 2022 by Aadil Khatri and Giriraj Shah
                </p>
                <p className="text-stone-brown-400 mt-2 text-sm md:text-base">
                  Teacher Coordinator: Dr. Akash Pandey
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}
