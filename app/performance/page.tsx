/* oxlint-disable next/no-img-element -- Photographs are preoptimized local assets. */
import type { Metadata } from 'next';
import Link from '@/components/site/link';
import { T } from '@/components/site/language';
import { VideoPlayer } from '@/components/site/media-player';
import { performances } from '@/content/performances';
import { asset } from '@/lib/paths';
export const metadata: Metadata = {
  title: 'Performance',
  description: 'Selected live performance and conducting videos by Yuheng Zhu.',
};
export default function PerformancePage() {
  return (
    <>
      <section className="performance-hero section-shell">
        <div>
          <p className="eyebrow">
            <T en="PERFORMANCE" zh="演出" />
          </p>
          <h1>
            <T
              en={
                <>
                  Live, in
                  <br />
                  the <em>moment.</em>
                </>
              }
              zh={
                <>
                  此刻，
                  <br />
                  <em>在现场。</em>
                </>
              }
            />
          </h1>
          <p>
            <T
              en="Selected moments from the stage. Live performances, conducting, and musical dialogue."
              zh="记录舞台上的片刻：现场演出、指挥与音乐中的对话。"
            />
          </p>
        </div>
        <img
          src={asset('/images/chamber-ensemble.jpg')}
          alt="Live chamber ensemble performance"
          width={1600}
          height={1067}
          fetchPriority="high"
        />
      </section>
      <section className="performance-list section-shell">
        {performances.map((p, i) => (
          <article className="performance-card" key={p.id}>
            <p className="eyebrow">
              0{i + 1} / <T en={p.category} zh={p.categoryZh} />
            </p>
            <h2>
              <T en={p.title} zh={p.titleZh} />
            </h2>
            <VideoPlayer src={p.src} title={p.title} poster={p.poster} />
            <p className="video-caption">
              <T en={p.venue} zh={p.venueZh} />
            </p>
            {p.projectSlug && (
              <Link className="text-link" href={`/portfolio/${p.projectSlug}/`}>
                <T en="About this project" zh="了解这项作品" /> ↗
              </Link>
            )}
          </article>
        ))}
      </section>
    </>
  );
}
