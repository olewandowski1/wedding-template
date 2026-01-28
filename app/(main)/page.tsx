import { AccessGate } from '@/components/access-gate';
import { Details } from '@/components/details';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { InfoSection } from '@/components/info-section';
import { Navigation } from '@/components/navigation';
import { RSVP } from '@/components/rsvp';
import { Story } from '@/components/story';
import { Timeline } from '@/components/timeline';
import { Gallery } from '@/components/gallery';
import { FAQ } from '@/components/faq';
import { checkAccessUnlocked, unlockAccess } from '@/lib/access';

export default async function Page() {
  const isUnlocked = await checkAccessUnlocked();

  if (!isUnlocked) {
    return (
      <div className='flex min-h-screen flex-col'>
        <main className='grow'>
          <Hero locked cta={<AccessGate unlockAction={unlockAccess} />} />
        </main>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <Navigation />
      <main className='grow'>
        <Hero />
        <Story />
        <Details />
        <Timeline />
        <InfoSection />
        <FAQ />
        <Gallery />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}
