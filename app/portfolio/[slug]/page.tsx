/* oxlint-disable next/no-img-element -- Photographs are preoptimized local assets. */
import type { Metadata } from 'next';
import Link from '@/components/site/link';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/content/projects';
import { projectTranslations } from '@/content/translations';
import { T } from '@/components/site/language';
import { AudioTrack } from '@/components/site/media-player';
import { asset } from '@/lib/paths';
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  return {
    title: p?.title ?? 'Project not found',
    description: p?.summary ?? p?.paragraphs[0],
  };
}
export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const zh = projectTranslations[p.slug];
  const index = projects.findIndex((x) => x.slug === p.slug),
    previous = projects[index - 1],
    next = projects[index + 1];
  return (
    <>
      <section className="project-heading">
        <div>
          <p className="eyebrow">
            <Link href="/portfolio/">
              ← <T en="PORTFOLIO" zh="作品" />
            </Link>
          </p>
          <h1>
            <T en={p.title} zh={zh?.title ?? p.title} />
          </h1>
          {p.subtitle && (
            <p>
              <T en={p.subtitle} zh={zh?.subtitle ?? p.subtitle} />
            </p>
          )}
          {p.summary && (
            <p>
              <T en={p.summary} zh={zh?.summary ?? p.summary} />
            </p>
          )}
        </div>
        <img
          src={asset(p.cover)}
          alt={`${p.title} artwork`}
          width={600}
          height={600}
        />
      </section>
      <section className="project-intro section-shell">
        <h2>
          <T
            en={
              <>
                About
                <br />
                <em>the project.</em>
              </>
            }
            zh={
              <>
                关于
                <br />
                <em>这项作品。</em>
              </>
            }
          />
        </h2>
        <div>
          {p.paragraphs.map((text, i) => (
            <p key={text}>
              <T en={text} zh={zh?.paragraphs[i] ?? text} />
            </p>
          ))}
        </div>
      </section>
      <section className="track-section section-shell">
        {p.scores ? (
          <>
            <p className="eyebrow">
              <T en="ARRANGEMENTS" zh="编曲作品" />
            </p>
            {p.tracks.map((track, i) => (
              <section className="arrangement" key={track.title}>
                <h2>{track.title}</h2>
                <img
                  className="score-image"
                  src={asset(p.scores![i])}
                  alt={`Score for ${track.title}`}
                  loading="lazy"
                />
                <AudioTrack track={track} index={i} />
              </section>
            ))}
            {p.video && (
              <Link
                href="/performance/"
                className="text-link"
                style={{ marginTop: 40 }}
              >
                <T en="Watch the conducting performance" zh="观看指挥现场" /> ↗
              </Link>
            )}
          </>
        ) : (
          <>
            <h2>
              <T en="Tracklist" zh="曲目" />
            </h2>
            <p>
              <T
                en="The complete nine-track journey through Dreams in Fragments."
                zh="九首曲目，一段完整的《碎梦》旅程。"
              />
            </p>
            <div className="track-list">
              {p.tracks.map((track, i) => (
                <AudioTrack track={track} index={i} key={track.title} />
              ))}
            </div>
          </>
        )}
        <div className="credits">
          {p.credits.map((text, i) => (
            <p key={text}>
              <T en={text} zh={zh?.credits[i] ?? text} />
            </p>
          ))}
        </div>
      </section>
      <nav className="project-pagination" aria-label="Project navigation">
        {previous && (
          <Link href={`/portfolio/${previous.slug}/`}>
            <span>
              ← <T en="Previous project" zh="上一个作品" />
            </span>
            <strong>
              <T
                en={previous.title}
                zh={projectTranslations[previous.slug]?.title ?? previous.title}
              />
            </strong>
          </Link>
        )}
        {next && (
          <Link href={`/portfolio/${next.slug}/`}>
            <span>
              <T en="Next project" zh="下一个作品" /> →
            </span>
            <strong>
              <T
                en={next.title}
                zh={projectTranslations[next.slug]?.title ?? next.title}
              />
            </strong>
          </Link>
        )}
      </nav>
    </>
  );
}
