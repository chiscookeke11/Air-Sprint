
import AboutBadges from '@/components/AboutBadges';
import Hero from '../components/Hero';
import Services from '@/components/Services';
import TrackOrderSection from '@/components/TrackOrderSection';
import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';





export default function Page() {
  return (
    <div className="w-full h-full bg-[#EEEEEE] py-[3%]  "  >
      <Hero/>
      <AboutBadges/>
      <Services/>
      <TrackOrderSection/>
      <VideoSection/>
      <Testimonials/>
    </div>
  )
}