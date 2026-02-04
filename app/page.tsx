import {
  HeroSection,
  CoupleSection,
  EventSection,
  LocationSection,
  GallerySection,
  GiftSection,
  RsvpSection,
  WishesSection
} from '@/components/sections'
import { FooterSection } from '@/components/layout/FooterSection'
import { OpeningModal } from '@/components/layout/OpeningModal'
import { AudioPlayer } from '@/components/features'

export default function Home() {
  return (
    <main className="relative">
      <OpeningModal />
      <HeroSection />
      <CoupleSection />
      <EventSection />
      <LocationSection />
      <GallerySection />
      <GiftSection />
      <RsvpSection />
      <WishesSection />
      <FooterSection />

      {/* Audio Player */}
      <AudioPlayer />
    </main>
  )
}
