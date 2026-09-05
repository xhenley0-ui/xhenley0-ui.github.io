/* oxlint-disable jsx-a11y/media-has-caption -- Original music and conducting recordings have no supplied caption tracks. Do not invent transcripts. */
'use client';
import { useEffect, useRef, useState } from 'react';
import { T } from './language';
import { asset } from '@/lib/paths';
import { trackTitlesZh } from '@/content/translations';
import type { Track } from '@/content/projects';
function pauseOthers(current: HTMLMediaElement) {
  document
    .querySelectorAll<HTMLMediaElement>('audio,video')
    .forEach((media) => {
      if (media !== current) media.pause();
    });
}
export function AudioTrack({ track, index }: { track: Track; index: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="track">
      <span className="track-number">{String(index + 1).padStart(2, '0')}</span>
      <h3 id={`track-${index}`}>
        <T
          en={track.title}
          zh={
            trackTitlesZh[track.title]
              ? `${trackTitlesZh[track.title]} · ${track.title}`
              : track.title
          }
        />
      </h3>
      <audio
        controls
        preload="none"
        src={asset(track.src)}
        aria-labelledby={`track-${index}`}
        onPlay={(e) => pauseOthers(e.currentTarget)}
        onError={() => setFailed(true)}
      />
      {failed && (
        <p className="media-error">
          <T en="This recording could not load. " zh="无法加载录音。" />
          <a href={asset(track.src)}>
            <T en="Open the audio file" zh="打开音频文件" />
          </a>
          .
        </p>
      )}
    </div>
  );
}
export function VideoPlayer({
  src,
  title,
  poster,
}: {
  src: string;
  title: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    setFailed(false);
    if (
      !src.includes('.m3u8') ||
      video.canPlayType('application/vnd.apple.mpegurl')
    ) {
      video.src = asset(src);
      return () => {
        video.pause();
        video.removeAttribute('src');
        video.load();
      };
    }
    import('hls.js')
      .then(({ default: Hls }) => {
        if (cancelled) return;
        if (!Hls.isSupported()) {
          setFailed(true);
          return;
        }
        const hls = new Hls({ autoStartLoad: true });
        hls.loadSource(asset(src));
        hls.attachMedia(video);
        const start = () => hls.startLoad();
        video.addEventListener('play', start, { once: true });
        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) setFailed(true);
        });
        cleanup = () => {
          video.removeEventListener('play', start);
          hls.destroy();
        };
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [src]);
  return (
    <>
      <video
        ref={videoRef}
        className="video-player"
        poster={poster ? asset(poster) : undefined}
        controls
        playsInline
        preload="none"
        aria-label={title}
        onPlay={(e) => pauseOthers(e.currentTarget)}
        onError={() => setFailed(true)}
      />
      {failed && (
        <p className="media-error">
          <T en="This video could not load. " zh="无法加载视频。" />{' '}
          <a href={asset(src)}>
            <T en="Open the original stream" zh="打开原始视频" />
          </a>
          .
        </p>
      )}
    </>
  );
}
