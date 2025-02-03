import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import LocationsMap from '@/components/sections/LocationsMap';
import GamesList from '@/components/sections/GamesList';
import ControlPanel from '@/components/sections/ControlPanel';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreview';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <GamesList />
      <ControlPanel />
      <Features />
      <LocationsMap />
      <Contact />
      <FAQ />
      {/* <BlogPreview /> */}
    </main>
  );
}