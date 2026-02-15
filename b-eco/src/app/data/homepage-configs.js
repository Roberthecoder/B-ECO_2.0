import currentCarousel from './years/current/carousel-images.json';
import { projectsResources as currentProjects } from './years/current/projects';
import { cardsContent as currentCards } from './years/current/cards';
import { whoAreWeContent as currentWhoAreWe } from './years/current/who-are-we';

import archiveCarousel from './years/2023-2025/carousel-images.json';
import { projectsResources as archiveProjects } from './years/2023-2025/projects';
import { cardsContent as archiveCards } from './years/2023-2025/cards';
import { whoAreWeContent as archiveWhoAreWe } from './years/2023-2025/who-are-we';

export const homepageConfigs = {
  "current": {
    year: "current",
    displayName: "Actual",
    headerCarouselImages: currentCarousel.images,
    whoAreWeContent: currentWhoAreWe,
    projectsData: currentProjects,
    followUsCards: currentCards,
    showSnakeGame: true,
  },
  "2023-2025": {
    year: "2023-2025",
    displayName: "2023-2025",
    headerCarouselImages: archiveCarousel.images,
    whoAreWeContent: archiveWhoAreWe,
    projectsData: archiveProjects,
    followUsCards: archiveCards,
    showSnakeGame: true,
  }
};
