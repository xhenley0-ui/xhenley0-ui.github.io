/* oxlint-disable next/no-img-element -- Local images are resized and compressed ahead of deployment; no runtime image service is required. */
import type { Metadata } from 'next';
import Link from 'next/link';
import { Scene } from '@/components/site/scene';
import { projects } from '@/content/projects';
export const metadata: Metadata = { title: 'Portfolio' };
export default function Portfolio() {
  return (
    <>
      <Scene
        image="/images/dreams-background.jpg"
        className="hero page-hero"
        shade={0.5}
        priority
      >
        <div className="hero-copy">
          <h1>Sound, Story, and Perception</h1>
          <p>
            Featuring original music, arrangements, live production, and
            cross-genre collaborations.
          </p>
        </div>
      </Scene>
      <Scene
        image="/images/about-background.jpg"
        className="content-section"
        shade={0.4}
      >
        <div className="content-inner project-grid">
          {projects.map((p) => (
            <Link
              href={`/portfolio/${p.slug}`}
              key={p.slug}
              className="project-card"
            >
              <div className="cover-window">
                <img
                  src={p.cover}
                  alt={`${p.title} artwork`}
                  width={700}
                  height={700}
                  loading="lazy"
                />
              </div>
              <h2>{p.title}</h2>
            </Link>
          ))}
        </div>
      </Scene>
    </>
  );
}
