/* oxlint-disable next/no-img-element -- Photographs are preoptimized local assets. */
import type { Metadata } from 'next';
import Link from '@/components/site/link';
import { T } from '@/components/site/language';
import { site } from '@/content/site';
import { biographyZh } from '@/content/translations';
import { asset } from '@/lib/paths';
export const metadata: Metadata = { title: 'About' };
export default function About() {
  return (
    <>
      <section className="about-editorial section-shell">
        <div>
          <p className="eyebrow">
            <T en="ABOUT YUHENG" zh="关于 YUHENG" />
          </p>
          <h1>
            <T
              en={
                <>
                  Sound, color,
                  <br />
                  and <em>perception.</em>
                </>
              }
              zh={
                <>
                  声音、色彩，
                  <br />与<em>感知。</em>
                </>
              }
            />
          </h1>
          <div className="biography">
            {site.biography.map((p, i) => (
              <p key={p}>
                <T en={p} zh={biographyZh[i]} />
              </p>
            ))}
          </div>
        </div>
        <figure className="about-photo">
          <img
            src={asset('/images/conductor-portrait.jpg')}
            alt="Yuheng Zhu among the musicians on stage"
            fetchPriority="high"
          />
          <figcaption>
            <T en="Between the score and the moment." zh="在乐谱与此刻之间。" />
          </figcaption>
        </figure>
      </section>
      <section className="about-secondary section-shell">
        <img
          src={asset('/images/studio.jpg')}
          alt="Yuheng Zhu in a recording studio"
          width={1200}
          height={900}
          loading="lazy"
        />
        <div>
          <p className="eyebrow">
            <T en="FROM STUDIO TO STAGE" zh="从录音室，到舞台" />
          </p>
          <h2>
            <T
              en={
                <>
                  Many sounds.
                  <br />
                  <em>One curiosity.</em>
                </>
              }
              zh={
                <>
                  不同的声音，
                  <br />
                  <em>同样的好奇。</em>
                </>
              }
            />
          </h2>
          <p>
            <T
              en="Original compositions, contemporary arrangements, and live productions. An ongoing exploration of music across forms."
              zh="原创作曲、当代编曲与现场制作。跨越不同形式，持续探索音乐的可能。"
            />
          </p>
          <Link className="text-link" href="/portfolio/">
            <T en="Explore the portfolio" zh="探索作品" /> ↗
          </Link>
        </div>
      </section>
    </>
  );
}
