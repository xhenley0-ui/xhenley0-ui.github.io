/* oxlint-disable next/no-img-element -- The hero is a preoptimized original photograph. */
import Link from '@/components/site/link';
import { T } from '@/components/site/language';
import { asset } from '@/lib/paths';
export default function Home() {
  return (
    <section className="home-hero">
      <img
        className="home-backdrop"
        src={asset('/images/performance.jpg')}
        alt="Yuheng Zhu performing on keyboards"
        fetchPriority="high"
      />
      <div className="home-hero-copy">
        <h1>Yuheng Zhu</h1>
        <p>
          <T en="Composer · Arranger · Producer" zh="作曲 · 编曲 · 音乐制作" />
        </p>
        <Link className="hero-button" href="/portfolio/">
          <T en="View Portfolio" zh="探索作品" />
        </Link>
      </div>
    </section>
  );
}
