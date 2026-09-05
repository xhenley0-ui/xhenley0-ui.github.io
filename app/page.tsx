/* oxlint-disable next/no-img-element -- Local photographs are preoptimized for static hosting. */
import Link from '@/components/site/link';
import { T } from '@/components/site/language';
import { Scene } from '@/components/site/scene';
import { site } from '@/content/site';
import { homeBioZh } from '@/content/translations';
import { asset } from '@/lib/paths';

export default function Home() {
  return (
    <>
      <Scene
        image="/images/performance.jpg"
        className="hero"
        shade={0.39}
        priority
      >
        <div className="hero-copy">
          <h1>{site.name}</h1>
          <p>
            <T
              en="Composer · Arranger · Producer"
              zh="作曲 · 编曲 · 音乐制作"
            />
          </p>
          <Link href="/portfolio/" className="pill">
            <T en="View Portfolio" zh="探索作品" />
          </Link>
        </div>
      </Scene>

      <Scene
        image="/images/dreams-background.jpg"
        className="feature"
        shade={0.27}
      >
        <img
          className="feature-cover"
          src={asset('/images/dreams-cover.jpg')}
          alt="Dreams in Fragments album artwork"
          width={800}
          height={800}
          loading="lazy"
        />
        <div className="feature-copy">
          <h2>
            <T
              en={
                <>
                  Dreams in
                  <br />
                  Fragments
                </>
              }
              zh={
                <>
                  Dreams in
                  <br />
                  Fragments
                </>
              }
            />
          </h2>
          <p>
            <T
              en="A concept album exploring fragmented dreams, shifting perception, and inner narrative."
              zh="一张探索碎片化梦境、流动感知与内在叙事的概念专辑。"
            />
          </p>
          <Link className="pill primary" href="/portfolio/dreams-in-fragments/">
            <T en="Listen Now" zh="立即聆听" />
          </Link>
        </div>
      </Scene>

      <Scene
        image="/images/stars.jpg"
        className="feature bio-feature"
        shade={0.3}
        position="50% 22%"
      >
        <img
          className="feature-cover"
          src={asset('/images/studio.jpg')}
          alt="Yuheng Zhu working in a recording studio"
          width={800}
          height={690}
          loading="lazy"
        />
        <div className="feature-copy">
          <h2>
            <T en="About Yuheng Zhu" zh="关于 Yuheng Zhu" />
          </h2>
          {site.homeBio.map((paragraph, index) => (
            <p key={paragraph}>
              <T en={paragraph} zh={homeBioZh[index] ?? paragraph} />
            </p>
          ))}
          <Link className="pill primary" href="/about/">
            <T en="Read More" zh="了解更多" />
          </Link>
        </div>
      </Scene>
    </>
  );
}
