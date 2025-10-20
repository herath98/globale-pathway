"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface CarouselItem {
  type: "image" | "video"
  media: string
  title: string
  subtitle: string
}

interface AdvancedCarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  interval?: number
  transitionDuration?: number
  easing?: string
}

export default function AdvancedCarousel({
  items,
  autoPlay = true,
  interval = 5000,
  transitionDuration = 1000,
  easing = "cubic-bezier(0.4, 0, 0.2, 1)",
}: AdvancedCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isPaused, setIsPaused] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Play/pause videos on carousel change
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === current) {
          video.currentTime = 0
          video.play().catch((err) => console.log("Autoplay prevented:", err))
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
  }, [current])

  // Auto-play carousel and sync with video duration
  useEffect(() => {
    if (!isPlaying || isPaused) return

    const currentItem = items[current]
    let timer: NodeJS.Timeout

    if (currentItem.type === "video") {
      const video = videoRefs.current[current]
      if (video) {
        const handleVideoEnd = () => {
          setCurrent((prev) => (prev + 1) % items.length)
        }
        video.addEventListener("ended", handleVideoEnd)
        return () => video.removeEventListener("ended", handleVideoEnd)
      }
    } else {
      // For images, use the interval
      timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % items.length)
      }, interval)
      return () => clearInterval(timer)
    }
  }, [isPlaying, isPaused, interval, items.length, current, items])

  const next = () => setCurrent((prev) => (prev + 1) % items.length)
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length)

  const togglePlayPause = () => setIsPaused(!isPaused)

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* Slides */}
      {items.map((item, index) => {
        const isActive = index === current
        return (
          <div
            key={index}
            aria-hidden={!isActive}
            className="absolute inset-0"
            style={{
              transition: `opacity ${transitionDuration}ms ${easing}`,
              opacity: isActive ? 1 : 0,
              pointerEvents: isActive ? "auto" : "none",
              zIndex: isActive ? 10 : 0,
            }}
          >
            {item.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el
                }}
                src={item.media}
                className="w-full h-full object-cover"
                autoPlay={isActive && isPlaying && !isPaused}
                muted
                loop={false}
                playsInline
                controls={false}
              />
            ) : (
              <img
                src={item.media || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover animate-ken-burns"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <div className="space-y-4 max-w-3xl mx-auto">
                <h2
                  className="text-5xl md:text-7xl font-bold slide-in-down"
                  style={{
                    animation: isActive
                      ? `slideInDown ${transitionDuration * 0.8}ms ${easing} forwards`
                      : "none",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-lg md:text-2xl text-gray-100 font-light"
                  style={{
                    animation: isActive
                      ? `slideInUp ${transitionDuration * 0.8}ms ${easing} 0.2s forwards`
                      : "none",
                    opacity: 0,
                  }}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        )
      })}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute left-4 md:left-8 bottom-24 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
        aria-label={isPaused ? "Play" : "Pause"}
      >
        {isPaused ? <Play size={24} /> : <Pause size={24} />}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 backdrop-blur-sm rounded-full p-2 bg-white/10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? "bg-white w-8 h-3 scale-100"
                : "bg-white/50 hover:bg-white/70 w-3 h-3 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              animation: index === current ? "pulse 2s ease-in-out infinite" : "none",
            }}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-4 md:right-8 z-30 text-white/70 text-sm font-mono">
        <span className="font-bold text-white">{String(current + 1).padStart(2, "0")}</span>
        <span> / {String(items.length).padStart(2, "0")}</span>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div
          className="h-full bg-gradient-to-r from-white via-white to-white/50 transition-all duration-500"
          style={{
            width: `${((current + 1) / items.length) * 100}%`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes kenBurns {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-ken-burns {
          animation: kenBurns 12s ease-out forwards;
        }

        .slide-in-down {
          animation: slideInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .slide-in-up {
          animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        }
      `}</style>
    </div>
  )
}