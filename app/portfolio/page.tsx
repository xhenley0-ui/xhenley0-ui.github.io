/* oxlint-disable next/no-img-element -- Artwork is preoptimized and stored locally. */
import type { Metadata } from 'next';
import Link from '@/components/site/link';
import { projects } from '@/content/projects';
import { projectTranslations } from '@/content/translations';
import { T } from '@/components/site/language';
import { asset } from '@/lib/paths';
export const metadata: Metadata = { title: 'Portfolio' };
export default function Portfolio() {
  return (
    <div className="portfolio-sky">
      <div
        className="sky-layer sky-top"
        style={{
          backgroundImage: `url("${asset('/images/dreams-background.jpg')}")`,
        }}
        aria-hidden="true"
      />
      <div
        className="sky-layer sky-bottom"
        style={{
          backgroundImage: `url("${asset('/images/about-background.jpg')}")`,
        }}
        aria-hidden="true"
      />
      <section className="portfolio-intro">
        <h1>
          <T en="Sound, Story, and Perception" zh="声音、故事与感知" />
        </h1>
        <p>
          <T
            en="Featuring original music, arrangements, live production, and cross-genre collaborations."
            zh="原创音乐、编曲、现场制作与跨曲风合作。"
          />
        </p>
      </section>
      <section className="portfolio-grid" aria-label="Portfolio / 作品">
        {projects.map((p, i) => (
          <Link
            href={`/portfolio/${p.slug}/`}
            key={p.slug}
            className="project-card"
          >
            <img
              src={asset(p.cover)}
              alt={`${p.title} artwork`}
              width={800}
              height={800}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <span className="project-overlay" aria-hidden="true" />
            <div className="project-caption">
              <h2>
                <T
                  en={p.title}
                  zh={projectTranslations[p.slug]?.title ?? p.title}
                />
              </h2>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
