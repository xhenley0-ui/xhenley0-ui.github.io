/** Add future concert videos here. Supports MP4 and HLS (.m3u8) sources. */
export interface Performance {
  id: string;
  title: string;
  titleZh: string;
  category: string;
  categoryZh: string;
  src: string;
  poster: string;
  projectSlug?: string;
  venue: string;
  venueZh: string;
}
export const performances: Performance[] = [
  {
    id: 'pink-conducting',
    title: 'What About Us — A P!NK Celebration',
    titleZh: 'What About Us — 致敬 P!NK',
    category: 'Conducting',
    categoryZh: '指挥现场',
    src: 'https://video.squarespace-cdn.com/content/v1/69deb48575956241f14705bf/e0df0092-a346-43bd-9fe1-085d90683ec5/playlist.m3u8',
    poster: '/images/pink-background.jpg',
    projectSlug: 'pink-celebration',
    venue: 'Berklee Performance Center',
    venueZh: '伯克利表演中心',
  },
  {
    id: 'coldplay-conducting',
    title: 'A Sky Full of Stars — The Songs of Coldplay',
    titleZh: 'A Sky Full of Stars — Coldplay 作品音乐会',
    category: 'Conducting',
    categoryZh: '指挥现场',
    src: 'https://video.squarespace-cdn.com/content/v1/69deb48575956241f14705bf/9136b2ee-b3b2-4f87-84a7-64131fb38d81/playlist.m3u8',
    poster: '/images/coldplay-stage.jpg',
    projectSlug: 'the-songs-of-coldplay',
    venue: 'Berklee Performance Center',
    venueZh: '伯克利表演中心',
  },
];
