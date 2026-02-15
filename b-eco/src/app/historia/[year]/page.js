import HomePageTemplate from '../../components/HomePageTemplate';
import { homepageConfigs } from '../../data/homepage-configs';
import { notFound } from 'next/navigation';

export default async function HistoriaPage({ params }) {
  const { year } = await params;
  const config = homepageConfigs[year];

  if (!config) {
    notFound();
  }

  return <HomePageTemplate config={config} yearSlug={year} />;
}

export async function generateStaticParams() {
  return [
    { year: '2023-2025' },
  ];
}
