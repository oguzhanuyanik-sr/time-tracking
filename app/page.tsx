'use client';
import ProfileCard from '@/components/profile-card';
import TimeCards from '@/components/time-cards';

export default function Home() {
  return (
    <main className='container py-20 lg:flex lg:space-between lg:items-center lg:h-[calc(100vh-20rem)] lg:my-40'>
      <ProfileCard />
      <TimeCards />
    </main>
  );
}
