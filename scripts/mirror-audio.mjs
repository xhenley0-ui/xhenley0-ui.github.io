// Optional: migrate the current audio URLs into this project's public directory.
// Run with `node scripts/mirror-audio.mjs`, then rebuild and redeploy.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
const source = new URL('../content/media.json', import.meta.url);
const media = JSON.parse(await readFile(source, 'utf8'));
await mkdir(new URL('../public/audio/', import.meta.url), { recursive: true });
for (const [slug, tracks] of Object.entries(media)) {
  for (const [i, track] of tracks.entries()) {
    if (!track.src.startsWith('https://')) continue;
    const response = await fetch(track.src);
    if (!response.ok)
      throw new Error(`Cannot download ${track.title}: ${response.status}`);
    const name = `${slug}-${i + 1}.mp3`;
    await writeFile(
      new URL(`../public/audio/${name}`, import.meta.url),
      Buffer.from(await response.arrayBuffer()),
    );
    track.src = `/audio/${name}`;
    console.log(`Saved ${track.title}`);
  }
}
await writeFile(source, JSON.stringify(media, null, 2) + '\n');
