'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { BACKGROUND_MUSIC } from '@/lib/constants'

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    useEffect(() => {
        const audio = audioRef.current
        if (audio) {
            audio.volume = 0.3

            // Event listener for custom start event (from OpeningModal)
            const handleStartMusic = () => {
                const playPromise = audio.play()
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => setIsPlaying(true))
                        .catch(e => console.error("Play failed via custom event:", e))
                }
            }

            document.addEventListener('start-music', handleStartMusic)

            // Attempt auto-play
            const playPromise = audio.play()

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsPlaying(true)
                    })
                    .catch((error) => {
                        console.log("Autoplay prevented. Waiting for interaction...")
                        setIsPlaying(false)

                        // Fallback: Play on first interaction
                        const enableAudio = () => {
                            audio.play()
                                .then(() => setIsPlaying(true))
                                .catch(e => console.error("Play failed via interaction:", e))

                            // Remove listeners once played
                            document.removeEventListener('click', enableAudio)
                            document.removeEventListener('scroll', enableAudio)
                            document.removeEventListener('touchstart', enableAudio)
                            document.removeEventListener('keydown', enableAudio)
                            document.removeEventListener('start-music', handleStartMusic)
                        }

                        document.addEventListener('click', enableAudio, { once: true })
                        document.addEventListener('scroll', enableAudio, { once: true })
                        document.addEventListener('touchstart', enableAudio, { once: true })
                        document.addEventListener('keydown', enableAudio, { once: true })
                    })
            }

            return () => {
                document.removeEventListener('start-music', handleStartMusic)
            }
        }
    }, [])

    return (
        <>
            <audio ref={audioRef} loop preload="auto">
                <source src={BACKGROUND_MUSIC} type="audio/mpeg" />
            </audio>

            <div className="fixed bottom-8 right-8 z-50 flex gap-2">
                <button
                    onClick={togglePlay}
                    className="bg-white/90 backdrop-blur-sm border border-peachy/30 rounded-full p-3 shadow-soft-lg hover:scale-110 transition-transform duration-300"
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                >
                    {isPlaying ? (
                        <Pause className="w-5 h-5 text-peachy" />
                    ) : (
                        <Play className="w-5 h-5 text-peachy ml-0.5" />
                    )}
                </button>

                <button
                    onClick={toggleMute}
                    className="bg-white/90 backdrop-blur-sm border border-peachy/30 rounded-full p-3 shadow-soft-lg hover:scale-110 transition-transform duration-300"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 text-peachy" />
                    ) : (
                        <Volume2 className="w-5 h-5 text-peachy" />
                    )}
                </button>
            </div>
        </>
    )
}
