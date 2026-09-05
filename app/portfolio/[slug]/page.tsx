/* oxlint-disable next/no-img-element -- Local images are resized and compressed ahead of deployment; no runtime image service is required. */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/content/projects';
import { Scene } from '@/components/site/scene';
import { AudioTrack, VideoPlayer } from '@/components/site/media-player';
type Props = { params: Promise<{ slug: string }> };
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
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = projects.findIndex((p) => p.slug === project.slug),
    previous = projects[index - 1],
    next = projects[index + 1];
  return (
    <>
      <Scene
        image={project.background}
        className="hero page-hero"
        shade={0.45}
        priority
      >
        <div className="hero-copy">
          <h1>{project.title}</h1>
          {project.subtitle && <p>{project.subtitle}</p>}
          {project.summary && <p>{project.summary}</p>}
        </div>
      </Scene>
      <Scene
        image={project.background}
        className="content-section"
        shade={0.76}
      >
        <div className="content-inner">
          <div className="project-intro">
            <img
              src={project.image ?? project.cover}
              alt={
                project.image
                  ? 'The Coldplay production at Berklee Performance Center'
                  : `${project.title} cover`
              }
              width={800}
              height={800}
              loading="lazy"
            />
            <div>
              <h2>About the Project</h2>
              {project.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          {project.scores ? (
            <div className="track-section">
              {project.tracks.map((track, i) => (
                <section className="arrangement" key={track.title}>
                  <h2>
                    {project.tracks.length > 1 ? `Arrangement ${i + 1} — ` : ''}
                    {track.title}
                  </h2>
                  <img
                    className="score-image"
                    src={project.scores![i]}
                    alt={`Score for ${track.title}`}
                    loading="lazy"
                  />
                  <AudioTrack track={track} index={i} />
                </section>
              ))}
              {project.video && (
                <section className="arrangement">
                  <h2>Conducting</h2>
                  <VideoPlayer
                    src={project.video}
                    title={`Yuheng Zhu conducting ${project.title}`}
                  />
                </section>
              )}
            </div>
          ) : (
            <section className="track-section">
              <h2>Tracklist</h2>
              <p>
                The complete nine-track journey through Dreams in Fragments.
              </p>
              <div className="track-list">
                {project.tracks.map((track, i) => (
                  <AudioTrack key={track.title} track={track} index={i} />
                ))}
              </div>
            </section>
          )}
          <div className="credits">
            {project.credits.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Scene>
      <nav className="project-pagination" aria-label="Project navigation">
        {previous && (
          <Link href={`/portfolio/${previous.slug}`}>
            <span>← Previous</span>
            <strong>{previous.title}</strong>
          </Link>
        )}
        {next && (
          <Link href={`/portfolio/${next.slug}`}>
            <span>Next →</span>
            <strong>{next.title}</strong>
          </Link>
        )}
      </nav>
    </>
  );
}
