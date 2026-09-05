/* oxlint-disable jsx-a11y/media-has-caption -- Original music and conducting recordings have no supplied caption tracks. Do not invent transcripts. */
'use client';
import { useEffect, useRef, useState } from 'react';
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
      <h3 id={`track-${index}`}>{track.title}</h3>
      <audio
        controls
        preload="none"
        src={track.src}
        aria-labelledby={`track-${index}`}
        onPlay={(e) => pauseOthers(e.currentTarget)}
        onError={() => setFailed(true)}
      />
      {failed && (
        <p className="media-error">
          This recording could not load.{' '}
          <a href={track.src}>Open the audio file</a>.
        </p>
      )}
    </div>
  );
}
export function VideoPlayer({ src, title }: { src: string; title: string }) {
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
      video.src = src;
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
        const hls = new Hls({ autoStartLoad: false });
        hls.loadSource(src);
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
        controls
        playsInline
        preload="none"
        aria-label={title}
        onPlay={(e) => pauseOthers(e.currentTarget)}
        onError={() => setFailed(true)}
      />
      {failed && (
        <p className="media-error">
          This video could not load. <a href={src}>Open the original stream</a>.
        </p>
      )}
    </>
  );
}
