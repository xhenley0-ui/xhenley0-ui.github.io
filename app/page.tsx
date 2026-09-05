/* oxlint-disable next/no-img-element -- Local images are resized and compressed ahead of deployment; no runtime image service is required. */
import Link from 'next/link';
import { Scene } from '@/components/site/scene';
import { site } from '@/content/site';
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
          <p>{site.roles}</p>
          <Link href="/portfolio" className="pill">
            View Portfolio
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
          src="/images/dreams-cover.jpg"
          alt="Dreams in Fragments album artwork"
          width={800}
          height={800}
          loading="lazy"
        />
        <div className="feature-copy">
          <h2>
            Dreams in
            <br />
            Fragments
          </h2>
          <p>
            A concept album exploring fragmented dreams, shifting perception,
            and inner narrative.
          </p>
          <Link className="pill primary" href="/portfolio/dreams-in-fragments">
            Listen Now
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
          src="/images/studio.jpg"
          alt="Yuheng Zhu working in a recording studio"
          width={800}
          height={690}
          loading="lazy"
        />
        <div className="feature-copy">
          <h2>About Yuheng Zhu</h2>
          {site.homeBio.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <Link className="pill primary" href="/about">
            Read More
          </Link>
        </div>
      </Scene>
    </>
  );
}
