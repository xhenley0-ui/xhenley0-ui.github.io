/** Add future concert videos here when the Performance page is ready. */
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

export const performances: Performance[] = [];
