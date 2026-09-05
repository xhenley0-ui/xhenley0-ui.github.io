import media from './media.json';
export interface Track {
  title: string;
  src: string;
  duration: number;
}
export interface Project {
  slug: string;
  title: string;
  cover: string;
  background: string;
  subtitle?: string;
  summary?: string;
  paragraphs: string[];
  tracks: Track[];
  scores?: string[];
  video?: string;
  image?: string;
  credits: string[];
}
export const projects: Project[] = [
  {
    slug: 'dreams-in-fragments',
    title: 'Dreams in Fragments',
    cover: '/images/dreams-cover.jpg',
    background: '/images/dreams-background.jpg',
    subtitle: 'Concept Album • 2026',
    summary:
      'A genre-crossing concept album exploring perception, memory, and emotional fragmentation through progressive rock, jazz fusion, electronic music, and cinematic sound design.',
    paragraphs: [
      'Dreams in Fragments is a musical journey through consciousness, illusion, and redemption.',
      'Composed of nine tracks—symbolizing cycles, completion, and the order of the universe—the album unfolds as a nonlinear timeline of the soul: departing from meditation, wandering through deserts and neon dreams, descending into storms and inner conflict, and ultimately finding rebirth in silence.',
      'Throughout this passage between dream and reality, sound transforms into fragmented light, reflecting the fractures within the mind.',
      'When the final track Breaking All the Illusions emerges, the dream dissolves into radiance—the world of fragments completes its cycle. Like the number “nine”, it reaches the most perfect ending, and at the same time, heralds a new beginning.',
    ],
    tracks: media['dreams-in-fragments'],
    credits: [
      'Composed, produced, and arranged by Yuheng Zhu.',
      'Recorded and developed during studies at Berklee College of Music.',
    ],
  },
  {
    slug: 'pink-celebration',
    title: 'What About Us — A P!NK Celebration',
    cover: '/images/pink-cover.jpg',
    background: '/images/pink-background.jpg',
    paragraphs: [
      'What About Us — A P!NK Celebration was a large-scale live production presented as part of Berklee’s Great American Songbook concert series at the Berklee Performance Center.',
      'Featuring over 100 student performers and creatives from more than 30 countries, the production celebrated P!NK’s genre-defying artistry through contemporary arrangements, live performance, choreography, and multimedia production.',
      'The concert explored themes of resilience, vulnerability, and self-expression while blending pop, rock, soul, and theatrical storytelling into a high-energy collaborative performance environment.',
    ],
    tracks: media['pink-celebration'],
    scores: ['/images/pink-score-1.jpg', '/images/pink-score-2.jpg'],
    video:
      'https://video.squarespace-cdn.com/content/v1/69deb48575956241f14705bf/e0df0092-a346-43bd-9fe1-085d90683ec5/playlist.m3u8',
    credits: ['Roles: Arranger • Conductor'],
  },
  {
    slug: 'the-songs-of-coldplay',
    title: 'A SKY FULL OF STARS — THE SONGS OF COLDPLAY',
    cover: '/images/coldplay-cover.jpg',
    background: '/images/coldplay-background.jpg',
    image: '/images/coldplay-stage.jpg',
    paragraphs: [
      'A Sky Full of Stars — The Songs of Coldplay was a large-scale live production presented as part of Berklee’s Singers Showcase concert series at the Berklee Performance Center.',
      'Featuring over 100 performers and creatives from more than 30 countries, the production reimagined Coldplay’s music through large ensemble arrangements, immersive visual design, choreography, and multimedia storytelling.',
      'Inspired by the emotional scale and cinematic atmosphere of Coldplay’s live performances, the concert blended sound, color, movement, and light into a multisensory performance experience.',
    ],
    tracks: media['the-songs-of-coldplay'],
    scores: ['/images/coldplay-score.jpg'],
    video:
      'https://video.squarespace-cdn.com/content/v1/69deb48575956241f14705bf/9136b2ee-b3b2-4f87-84a7-64131fb38d81/playlist.m3u8',
    credits: ['Roles: Arranger • Conductor'],
  },
];
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
