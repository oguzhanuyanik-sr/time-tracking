'use client';
import Profile from '@/components/profile';
import CardLayout from '@/components/layout/card-layout';
import MainLayout from '@/components/layout/main-layout';
import Card from '@/components/common/card';
import { periods } from '@/app/api/response.json';
import { useGlobalContext } from '@/app/context/store';

export default function Home() {
  const { time } = useGlobalContext();
  const data = periods[time];

  return (
    <MainLayout>
      <Profile />
      <CardLayout>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </CardLayout>
    </MainLayout>
  );
}
