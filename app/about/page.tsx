/* oxlint-disable next/no-img-element -- Local images are resized and compressed ahead of deployment; no runtime image service is required. */
import type { Metadata } from 'next';
import { Scene } from '@/components/site/scene';
import { site } from '@/content/site';
export const metadata: Metadata = { title: 'About' };
export default function About() {
  return (
    <Scene
      image="/images/about-background.jpg"
      className="content-section"
      shade={0.42}
      priority
    >
      <div className="content-inner about-layout">
        <div>
          <h1>
            Sound, Color,
            <br />
            and Perception
          </h1>
          {site.biography.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <img
          className="about-portrait"
          src="/images/portrait.jpg"
          alt="Yuheng Zhu at Berklee College of Music"
          width={1100}
          height={873}
        />
      </div>
    </Scene>
  );
}
