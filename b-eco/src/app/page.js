"use client";
import HomePageTemplate from './components/HomePageTemplate';
import { homepageConfigs } from './data/homepage-configs';

export default function Home() {
  return <HomePageTemplate config={homepageConfigs.current} yearSlug="current" />;
}


